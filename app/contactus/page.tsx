"use client";
import React, { useEffect, useState, FormEvent, ChangeEvent } from "react";

// --- Type Definitions ---
type Preferred = "email" | "phone";

// Interface for the form state
interface ContactForm {
  name: string;
  email: string;
  organization: string;
  subject: string;
  message: string;
  pitchLink: string;
  preferred: Preferred;
  year: string;
  course: string;
  rollNumber: string;
  phone: string;
  resume: File | null;
}

// Union type for elements that can trigger a standard ChangeEvent
type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

// Helper array for iterating over string-based keys during FormData construction
const STRING_FORM_KEYS: Array<Exclude<keyof ContactForm, "resume">> = [
  "name",
  "email",
  "organization",
  "subject",
  "message",
  "pitchLink",
  "preferred",
  "year",
  "course",
  "rollNumber",
  "phone",
];

// Main component, renamed to App to conform to single-file React guidelines
export default function App() {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    organization: "",
    subject: "",
    message: "",
    pitchLink: "",
    preferred: "email",
    year: "",
    course: "",
    rollNumber: "",
    phone: "",
    resume: null,
  });

  const [status, setStatus] = useState<null | "sending" | "success" | "error">(
    null
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Effect to clear status messages after a timeout
  useEffect(() => {
    if (status === "success" || status === "error") {
      const t = setTimeout(() => setStatus(null), 4200);
      return () => clearTimeout(t);
    }
  }, [status]);

  /**
   * Handles changes for all input types, including file input with validation.
   * Uses type assertions to correctly handle the 'files' property only on file inputs.
   */
  function handleChange(e: ChangeEvent<FormElement>) {
    const target = e.target;
    const { name, value } = target;
    const key = name as keyof ContactForm;

    // Handle file input specifically (which is an HTMLInputElement)
    if (key === "resume") {
      const fileInput = target as HTMLInputElement;
      const file = fileInput.files?.[0] || null;

      // Simple client-side validation: file type & size (5MB)
      if (file) {
        const allowed = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        if (!allowed.includes(file.type)) {
          setErrorMessage(
            "Unsupported file type. Please upload PDF or DOC/DOCX."
          );
          // Set resume to null without clearing the file input display immediately
          setForm((p) => ({ ...p, resume: null }));
          return;
        }
        if (file.size > 5 * 1024 * 1024) {
          setErrorMessage("File too large. Max 5 MB.");
          setForm((p) => ({ ...p, resume: null }));
          return;
        }
      }

      setErrorMessage(null);
      setForm((p) => ({ ...p, resume: file }));
      return;
    }

    // Handle standard string and select inputs.
    // TypeScript now knows 'key' is NOT 'resume' due to the early return above.
    if (key in form) {
      const stringKey = key as Exclude<keyof ContactForm, "resume">;

      // Ensure 'preferred' is cast correctly to the union type
      if (key === "preferred") {
        setForm((p) => ({ ...p, [stringKey]: value as Preferred }));
      } else {
        setForm((p) => ({ ...p, [stringKey]: value }));
      }
    }
  }

  /**
   * Handles form submission and validation.
   */
  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setErrorMessage(null);

    // --- Validation ---
    if (!form.email.trim()) {
      setErrorMessage("College email is required.");
      setStatus("error");
      return;
    }

    if (!form.name.trim() || !form.message.trim()) {
      setErrorMessage("Please fill in all required fields marked with *.");
      setStatus("error");
      return;
    }

    if (form.preferred === "phone" && !form.phone.trim()) {
      setErrorMessage(
        "You selected Phone/WhatsApp as preferred contact — please enter a number. Note: email is still required."
      );
      setStatus("error");
      return;
    }
    // --- End Validation ---

    setStatus("sending");

    try {
      if (form.resume) {
        // Multipart form data submission (when a file is attached)
        const fd = new FormData();

        // Append all string fields safely using the typed array
        STRING_FORM_KEYS.forEach((k) => {
          // Since all keys in STRING_FORM_KEYS map to string values in ContactForm,
          // we can access form[k] safely. The '|| ""' handles potential empty strings robustly.
          fd.append(k, form[k] || "");
        });

        // Append the file
        fd.append("resume", form.resume);

        // Assume this endpoint handles multipart/form-data
        // Replace with your actual API endpoint
        await fetch("/api/contact", { method: "POST", body: fd });
      } else {
        // JSON submission (no file attached)
        // Replace with your actual API endpoint
        await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      }

      setStatus("success");
      // Reset form state to initial values
      setForm({
        name: "",
        email: "",
        organization: "",
        subject: "",
        message: "",
        pitchLink: "",
        preferred: "email",
        year: "",
        course: "",
        rollNumber: "",
        phone: "",
        resume: null,
      });
    } catch (err) {
      console.error(err);
      setErrorMessage("Submission failed. Please try again later.");
      setStatus("error");
    }
  }

  // Helper function to handle radio button clicks safely
  const handlePreferredChange = (newPreferred: Preferred) => {
    setForm((p) => ({ ...p, preferred: newPreferred }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFF8F2] to-white px-6 py-16 font-sans">
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative rounded-2xl bg-white shadow-lg border border-[#F5E6DA] overflow-hidden">
          <div className="h-1 bg-[#071233]" aria-hidden />

          <div className="p-6 md:p-8 space-y-6">
            {/* Header */}
            <header className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-[#FFF3E0] border border-[#FFE0B2] flex items-center justify-center">
                  {/* Plus icon SVG */}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 3v18M3 12h18"
                      stroke="#071233"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-2xl md:text-3xl font-semibold text-[#071233]">
                  Campus Incubator — Apply & Contact
                </h1>
                <p className="text-sm text-[#27475a] mt-1">
                  One organised form for student applications, mentorship
                  requests, and project updates. Keep it concise — reviewers are
                  faculty and senior students.
                </p>
              </div>

              <div className="hidden md:block">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#FFF3E0] border border-[#FFE0B2] text-[#071233]">
                  Student Intake
                </span>
              </div>
            </header>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal & Academic */}
              <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs text-[#27475a] mb-1"
                  >
                    Full name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="First Last"
                    className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs text-[#27475a] mb-1"
                  >
                    College email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@college.edu"
                    className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="year"
                    className="block text-xs text-[#27475a] mb-1"
                  >
                    Year
                  </label>
                  <select
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={handleChange}
                    className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="course"
                    className="block text-xs text-[#27475a] mb-1"
                  >
                    Course / Dept
                  </label>
                  <input
                    id="course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    placeholder="e.g. Computer Science"
                    className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="rollNumber"
                    className="block text-xs text-[#27475a] mb-1"
                  >
                    Roll / Student ID
                  </label>
                  <input
                    id="rollNumber"
                    name="rollNumber"
                    value={form.rollNumber}
                    onChange={handleChange}
                    placeholder="College roll number (optional)"
                    className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                  />
                </div>
              </section>

              {/* Contact preference & team */}
              <section className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end">
                <div className="md:col-span-2">
                  <label
                    htmlFor="organization"
                    className="block text-xs text-[#27475a] mb-1"
                  >
                    Team / Club
                  </label>
                  <input
                    id="organization"
                    name="organization"
                    value={form.organization}
                    onChange={handleChange}
                    placeholder="Team name or college club (optional)"
                    className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <div className="inline-flex rounded-md bg-[#fff] border border-[#E8E6E1] p-1 shadow-sm">
                    <button
                      type="button"
                      onClick={() => handlePreferredChange("email")}
                      className={
                        "px-3 py-1 rounded-md text-sm font-medium transition " +
                        (form.preferred === "email"
                          ? "bg-[#FFB300] text-[#071233]"
                          : "text-[#27475a]")
                      }
                      aria-pressed={form.preferred === "email"}
                    >
                      Email
                    </button>
                    <button
                      type="button"
                      onClick={() => handlePreferredChange("phone")}
                      className={
                        "px-3 py-1 rounded-md text-sm font-medium transition " +
                        (form.preferred === "phone"
                          ? "bg-[#FFB300] text-[#071233]"
                          : "text-[#27475a]")
                      }
                      aria-pressed={form.preferred === "phone"}
                    >
                      Phone / WhatsApp
                    </button>
                  </div>
                </div>

                {form.preferred === "phone" && (
                  <div className="md:col-span-3">
                    <label
                      htmlFor="phone"
                      className="block text-xs text-[#27475a] mb-1"
                    >
                      Phone / WhatsApp *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="Include country code, e.g. +91xxxxxxxxxx"
                      className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                      required={form.preferred === "phone"}
                    />
                    <p className="text-xs text-[#9aa6b0] mt-1">
                      Note: College email is still required.
                    </p>
                  </div>
                )}
              </section>

              {/* Project details */}
              <section className="space-y-3">
                <label
                  htmlFor="subject"
                  className="block text-xs text-[#27475a]"
                >
                  Project title / Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Short project title or subject (optional)"
                  className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                />

                <label
                  htmlFor="message"
                  className="block text-xs text-[#27475a]"
                >
                  Brief description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Describe your idea, the problem, and what you need (3–5 sentences)."
                  className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition resize-none"
                  required
                />

                <input
                  id="pitchLink"
                  name="pitchLink"
                  value={form.pitchLink}
                  onChange={handleChange}
                  placeholder="Optional: GitHub repo / Drive link"
                  className="w-full bg-[#fff] border border-[#E8E6E1] rounded-md px-3 py-2 text-[#071233] placeholder-[#9aa6b0] focus:outline-none focus:ring-1 focus:ring-[#FFB300] focus:border-[#FFB300] transition"
                />
              </section>

              {/* Attachments - custom file input */}
              <section className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-[#27475a]">Attachments</div>
                  <div className="text-xs text-[#9aa6b0]">
                    Optional — PDF or DOC, max 5 MB
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                  <label
                    htmlFor="resume"
                    className="relative inline-flex items-center gap-3 px-3 py-2 rounded-md border border-[#E8E6E1] bg-white cursor-pointer hover:shadow-sm w-full sm:w-auto"
                  >
                    {/* Upload icon SVG */}
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M12 3v12"
                        stroke="#071233"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 7l4-4 4 4"
                        stroke="#071233"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-[#071233]">Choose file</span>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleChange}
                      className="sr-only"
                    />
                  </label>

                  <div className="flex-1 text-sm text-[#27475a] w-full">
                    {form.resume ? (
                      <div className="flex items-center justify-between gap-3">
                        <div className="truncate">{form.resume.name}</div>
                        <button
                          type="button"
                          onClick={() =>
                            setForm((p) => ({ ...p, resume: null }))
                          }
                          className="text-xs underline"
                        >
                          Remove
                        </button>
                      </div>
                    ) : (
                      <div className="text-xs text-[#9aa6b0]">
                        No file chosen
                      </div>
                    )}
                  </div>
                </div>

                {errorMessage && (
                  <div className="text-xs text-red-700">{errorMessage}</div>
                )}
              </section>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <div className="text-xs text-[#27475a] w-full sm:w-1/2 text-left">
                  Tip: keep descriptions concise (3–5 sentences). Faculty review
                  on weekdays.
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full sm:inline-flex sm:w-auto items-center gap-2 px-4 py-2 rounded-md bg-[#FFB300] text-[#071233] font-semibold shadow-sm hover:opacity-95 transition disabled:opacity-60 justify-center"
                  >
                    {status === "sending" ? "Sending..." : "Submit Application"}
                  </button>

                  <div className="text-sm">
                    {status === "success" && (
                      <span className="inline-block px-2 py-1 rounded text-sm bg-green-50 text-green-800">
                        ✓ Sent
                      </span>
                    )}
                    {status === "error" && (
                      <span className="inline-block px-2 py-1 rounded text-sm bg-red-50 text-red-800">
                        ⚠️ Error
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </form>

            {/* Footer */}
            <div className="mt-2 border-t border-[#F5E6DA] pt-4 text-xs text-[#27475a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                By submitting you consent to be contacted by the incubator team
                about your application.
              </div>
              <div>
                <a
                  href="tel:+911234567890"
                  className="text-sm underline decoration-[#ffb300] text-[#071233]"
                >
                  +91 99847 53791
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* toast */}
        <div
          aria-live="polite"
          className="fixed inset-x-4 sm:right-6 sm:left-auto top-6 z-50"
          role="status"
        >
          {status === "success" && (
            <div className="rounded-md bg-green-50 px-4 py-2 text-sm text-green-800 shadow">
              Application received — mentors will review within 3–5 working
              days.
            </div>
          )}
          {status === "error" && (
            <div className="rounded-md bg-red-50 px-4 py-2 text-sm text-red-800 shadow">
              Error — {errorMessage || "please check required fields"}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

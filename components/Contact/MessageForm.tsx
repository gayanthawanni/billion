"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send, X } from "lucide-react";
import { toast } from "sonner";

const fields = [
  { label: "Full Name", name: "fullName", type: "text", placeholder: "Enter your full name", required: true },
  { label: "Email Address", name: "email", type: "email", placeholder: "Enter your email address", required: true },
  { label: "Phone Number", name: "phone", type: "tel", placeholder: "Enter your phone number", required: true },
  { label: "Subject", name: "subject", type: "text", placeholder: "Enter subject" },
];

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const initialFormValues: FormValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export default function MessageForm() {
  const [formValues, setFormValues] = useState<FormValues>(initialFormValues);
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const canSubmit = useMemo(
    () => Boolean(formValues.fullName.trim() && formValues.email.trim() && formValues.phone.trim()),
    [formValues.email, formValues.fullName, formValues.phone]
  );

  function updateField(name: keyof FormValues, value: string) {
    setFormValues((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!canSubmit) {
      return;
    }

    setShowConfirm(true);
  }

  async function sendMessage() {
    if (!canSubmit || isSending) {
      return;
    }

    setIsSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Unable to send message right now.");
      }

      toast.success("Message sent successfully.");
      setFormValues(initialFormValues);
      setShowConfirm(false);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to send message right now.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="h-full rounded-[18px] border border-slate-200 bg-white p-6 shadow-[0_8px_28px_rgba(15,23,42,0.03)] sm:p-8">
      <h2 className="text-2xl font-extrabold text-slate-950 sm:text-[28px]">Send Us a Message</h2>
      <p className="mt-3 text-[15px] font-medium text-slate-500">
        Fill out the form below and we&apos;ll get back to you as soon as possible.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
        {fields.map((field) => (
          <label key={field.name} className="flex flex-col gap-2 text-[14px] font-bold text-slate-700">
            <span>
              {field.label}
              {field.required && <span className="ml-1 text-red-500">*</span>}
            </span>
            <input
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
              required={field.required}
              value={formValues[field.name as keyof FormValues]}
              onChange={(event) => updateField(field.name as keyof FormValues, event.target.value)}
              className="h-[48px] rounded-lg border border-slate-200 bg-white px-4 text-[14px] font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
            />
          </label>
        ))}

        <label className="flex flex-col gap-2 text-[14px] font-bold text-slate-700">
          Message
          <textarea
            name="message"
            placeholder="How can we help you?"
            rows={5}
            value={formValues.message}
            onChange={(event) => updateField("message", event.target.value)}
            className="min-h-[118px] resize-y rounded-lg border border-slate-200 bg-white px-4 py-3 text-[14px] font-medium text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
          />
        </label>

        <button
          type="submit"
          disabled={!canSubmit || isSending}
          className="flex h-[50px] items-center justify-center gap-2 rounded-lg bg-[#2563eb] text-[15px] font-bold text-white shadow-[0_8px_18px_rgba(37,99,235,0.18)] transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:bg-[#2563eb]"
        >
          <Send size={18} />
          Send Message
        </button>
      </form>

      {showConfirm && (
        <div className="fixed inset-0 z-[220] flex items-center justify-center bg-slate-950/55 px-4 backdrop-blur-sm">
          <div className="w-full max-w-[430px] rounded-2xl bg-white p-6 shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-extrabold text-slate-950">Confirm Message Details</h3>
                <p className="mt-1 text-sm font-medium text-slate-500">
                  Please check your details before sending.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                disabled={isSending}
                aria-label="Close confirmation"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-5 divide-y divide-slate-100 rounded-xl border border-slate-200">
              {[
                ["Full Name", formValues.fullName],
                ["Email Address", formValues.email],
                ["Phone Number", formValues.phone],
                ["Subject", formValues.subject || "-"],
                ["Message", formValues.message || "-"],
              ].map(([label, value]) => (
                <div key={label} className="grid grid-cols-[36%_1fr] gap-3 px-4 py-3 text-sm">
                  <span className="font-bold text-slate-500">{label}</span>
                  <span className="break-words font-semibold text-slate-800">{value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowConfirm(false)}
                disabled={isSending}
                className="h-11 flex-1 rounded-lg border border-slate-200 bg-white text-sm font-bold text-slate-600 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
              >
                Edit Details
              </button>
              <button
                type="button"
                onClick={sendMessage}
                disabled={isSending}
                className="flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-[#2563eb] text-sm font-bold text-white transition hover:bg-[#1d4ed8] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Message sending ..." : "Confirm & Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

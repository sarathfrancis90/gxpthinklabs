"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import {
  contactSchema,
  type ContactFormData,
  HONEYPOT_FIELD,
} from "@/lib/validations/contact";

const serviceOptions = [
  { value: "infrastructure-qualification", label: "IT Infrastructure Qualification" },
  { value: "computer-system-validation", label: "Computer System Validation (CSV/CSA)" },
  { value: "compliance-audits", label: "System Development & IT Compliance Audits" },
];

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      serviceInterest: "",
      message: "",
    },
  });

  const serviceValue = watch("serviceInterest");

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, [HONEYPOT_FIELD]: honeypot }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message });
        reset();
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="rounded-xl p-8 md:p-12 gradient-border border border-primary/15 dark:border-outline-variant/20 backdrop-blur-xl shadow-lg shadow-primary/[0.08] dark:shadow-none">
      {submitStatus && (
        <div
          className={`flex items-start gap-3 p-4 rounded-lg mb-6 ${
            submitStatus.type === "success"
              ? "bg-tertiary/10 border border-tertiary/20 text-tertiary"
              : "bg-error/10 border border-error/20 text-error"
          }`}
        >
          {submitStatus.type === "success" ? (
            <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0" />
          ) : (
            <XCircle className="h-5 w-5 mt-0.5 shrink-0" />
          )}
          <p className="text-sm">{submitStatus.message}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Honeypot — visually hidden from users, irresistible to bots. */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-10000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label htmlFor={HONEYPOT_FIELD}>
            Leave this field empty
            <input
              id={HONEYPOT_FIELD}
              name={HONEYPOT_FIELD}
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="John Doe"
            error={errors.name?.message}
            {...register("name")}
          />
          <Input
            label="Professional Email"
            type="email"
            placeholder="j.doe@company.com"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Company"
            placeholder="Your Company Inc."
            error={errors.company?.message}
            {...register("company")}
          />
          <Select
            label="Service Interest"
            placeholder="Select a service"
            options={serviceOptions}
            value={serviceValue}
            onValueChange={(value) => setValue("serviceInterest", value)}
            error={errors.serviceInterest?.message}
          />
        </div>

        <Textarea
          label="Message"
          placeholder="Tell us about your project requirements..."
          rows={5}
          error={errors.message?.message}
          {...register("message")}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-3 bg-primary text-on-primary font-bold py-4 rounded-xl shadow-xl shadow-primary/20 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Inquiry
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}

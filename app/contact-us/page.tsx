"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { State } from "country-state-city";
import { countries } from "countries-list";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Loader2,
  // Image as ImageIcon,
  ChevronDown,
  ArrowRight,
} from "lucide-react";

interface IState {
  isoCode: string;
  name: string;
}

type ContactItem = {
  icon: React.ElementType;
  label: string;
  value:
    | string
    | {
        label: string;
        number: string;
        href?: string;
      }[];
  href?: string;
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    state: "",
    // service: "",
    otherInfo: "",
  });

  const [states, setStates] = useState<IState[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const countryOptions = Object.entries(countries)
    .map(([code, country]) => ({
      code,
      name: country.name,
    }))
    .sort((a, b) => a.name.localeCompare(b.name));

  // const services = [
  //   "Cyber Services",
  //   "Integrated Security",
  //   "Digital Transformation",
  //   "Law Enforcement Support",
  //   "First Responder Support",
  //   "Information Technology",
  //   "Telecommunication",
  //   "Fintech",
  //   "Defense Systems",
  //   "Other",
  // ];

  const contactItems: ContactItem[] = [
    {
      icon: Mail,
      label: "Email",
      value: "info@labdefencesolutions.com",
      href: "mailto:info@labdefencesolutions.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: [
        {
          label: "Turkey",
          number: "+90 5333 258 840",
          href: "tel:+905333258840",
        },
        {
          label: "United Kingdom",
          number: "+44 7511 581 476",
          href: "tel:+447511581476",
        },
        {
          label: "Nigeria",
          number: "+234 903 0420 993",
          href: "tel:+2349030420993",
        },
      ],
    },
    {
      icon: MapPin,
      label: "Address",
      value: "Abuja: Plot 414, Katampe Close, Katampe, Abuja, Nigeria.",
    },
  ];

  useEffect(() => {
    if (formData.country) {
      const countryStates = State.getStatesOfCountry(formData.country);

      setStates(
        countryStates.map((state) => ({
          isoCode: state.isoCode,
          name: state.name,
        })),
      );

      setFormData((prev) => ({
        ...prev,
        state: "",
      }));
    } else {
      setStates([]);
    }
  }, [formData.country]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.country ||
      !formData.state ||
      // !formData.service ||
      !formData.otherInfo
    ) {
      alert("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    formDataToSend.append("_replyto", formData.email);
    formDataToSend.append("_subject", "New Contact Form Submission");
    formDataToSend.append("_template", "table");

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/uwah23@gmail.com",
        {
          method: "POST",
          body: formDataToSend,
          headers: {
            Accept: "application/json",
          },
        },
      );

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);

        setFormData({
          name: "",
          phone: "",
          email: "",
          country: "",
          state: "",
          // service: "",
          otherInfo: "",
        });
      } else {
        throw new Error(data.message || "Submission failed");
      }
    } catch (error) {
      console.error("Error:", error);

      alert(
        `An error occurred: ${
          error instanceof Error ? error.message : "Please try again"
        }`,
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = (fieldName: string) =>
    `w-full px-4 py-3.5 bg-white dark:bg-slate-900 border-2 rounded-xl transition-all duration-300 outline-none ${
      focusedField === fieldName
        ? "border-amber-500 ring-4 ring-amber-500/10"
        : "border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600"
    } text-slate-900 dark:text-white placeholder-slate-400`;

  return (
    <section className="relative py-24 md:py-32 lg:py-40 bg-graphite-gray overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-linear(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16 space-y-4"
        >
          <h2 className="heading font-black text-defence-gold uppercase mb-6 leading-tight">
            Contact Us
          </h2>

          <h1 className="text-3xl md:text-5xl text-white">
            Let’s discuss your operational needs
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            Reach out to LAB Defence Solutions for tailored defence, security,
            and technology partnership opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="space-y-4">
              {contactItems.map((item, index) => {
                const Wrapper =
                  item.href && typeof item.value === "string"
                    ? motion.a
                    : motion.div;

                return (
                  <Wrapper
                    key={item.label}
                    {...(item.href && typeof item.value === "string"
                      ? { href: item.href }
                      : {})}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group flex items-start gap-4 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500/50 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-defence-gold flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>

                    <div>
                      <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                        {item.label}
                      </p>

                      {Array.isArray(item.value) ? (
                        <div className="space-y-1">
                          {item.value.map((entry) => (
                            <a
                              key={entry.number}
                              href={entry.href}
                              className="block text-base font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors"
                            >
                              {entry.label}: {entry.number}
                            </a>
                          ))}
                        </div>
                      ) : (
                        <p className="text-base font-semibold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>

            {/* Office Hours */}
            <div className="p-6 rounded-2xl bg-linear-to-br from-amber-500/10 to-orange-500/10 border border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-5 h-5 text-white" />
                <h4 className="font-semibold text-white">Office Hours</h4>
              </div>

              <p className="text-sm text-gray-300">
                Monday to Friday <span>09:00 – 18:00</span>
              </p>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800 overflow-hidden">
              <AnimatePresence mode="wait">
                {submitSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="p-8 md:p-12 text-center"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-green-400 to-emerald-500 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                      Thank You!
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
                      Your message has been submitted successfully.
                    </p>

                    <button
                      onClick={() => setSubmitSuccess(false)}
                      className="inline-flex items-center gap-2 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-100 text-white dark:text-slate-900 font-semibold py-3 px-8 rounded-xl transition-all duration-300"
                    >
                      Send Another Message
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 md:p-12"
                  >
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                      Send us a message
                    </h3>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Full Name *
                          </label>

                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="John Doe"
                            className={inputClasses("name")}
                          />
                        </div>

                        {/* Email */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Email Address *
                          </label>

                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="john@example.com"
                            className={inputClasses("email")}
                          />
                        </div>

                        {/* Phone */}
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Phone Number *
                          </label>

                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("phone")}
                            onBlur={() => setFocusedField(null)}
                            required
                            placeholder="+1 (555) 000-0000"
                            className={inputClasses("phone")}
                          />
                        </div>

                        {/* Country */}
                        <div className="relative">
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Country *
                          </label>

                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("country")}
                            onBlur={() => setFocusedField(null)}
                            required
                            className={`${inputClasses(
                              "country",
                            )} appearance-none`}
                          >
                            <option value="">Select Country</option>

                            {countryOptions.map((country) => (
                              <option key={country.code} value={country.code}>
                                {country.name}
                              </option>
                            ))}
                          </select>

                          <ChevronDown className="absolute right-4 top-10.5 w-5 h-5 text-slate-400 pointer-events-none" />
                        </div>

                        {/* State */}
                        <div className="relative">
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            State/Province{" "}
                            <span className="text-red-500">*</span>
                          </label>
                          {states.length > 0 ? (
                            <>
                              <select
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("state")}
                                onBlur={() => setFocusedField(null)}
                                required
                                className={`${inputClasses("state")} appearance-none`}
                              >
                                <option value="">Select State</option>
                                {states.map((state) => (
                                  <option
                                    key={state.isoCode}
                                    value={state.isoCode}
                                  >
                                    {state.name}
                                  </option>
                                ))}
                              </select>
                              <ChevronDown className="absolute right-4 top-[42px] w-5 h-5 text-slate-400 pointer-events-none" />
                            </>
                          ) : (
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              onFocus={() => setFocusedField("state")}
                              onBlur={() => setFocusedField(null)}
                              required
                              disabled={!formData.country}
                              placeholder={
                                formData.country
                                  ? "Enter state"
                                  : "Select country first"
                              }
                              className={`${inputClasses("state")} ${
                                !formData.country &&
                                "bg-slate-100 dark:bg-slate-800 cursor-not-allowed"
                              }`}
                            />
                          )}
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                            Additional Information
                          </label>
                          <textarea
                            name="otherInfo"
                            value={formData.otherInfo}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("otherInfo")}
                            onBlur={() => setFocusedField(null)}
                            rows={4}
                            placeholder="Tell us more about your requirements..."
                            className={`${inputClasses("otherInfo")} resize-none`}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-defence-gold group w-full sm:w-auto inline-flex items-center justify-center gap-3 text-white font-semibold py-4 px-8 rounded-full shadow-lg transition-all duration-300 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

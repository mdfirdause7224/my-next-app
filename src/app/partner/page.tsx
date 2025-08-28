'use client';

import React, { useState } from 'react';

const PartnerForm: React.FC = () => {
  const [form, setForm] = useState({
    serviceSelection: '',
    service: '',
    name: '',
    phone: '',
    email: '',
    purpose: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    const { serviceSelection, service, ...rest } = form;
    const payload = {
      ...rest,
      service: serviceSelection === 'Other' ? service : serviceSelection,
    };

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('✅ Form submitted successfully! Please check your email.');
        setForm({
          serviceSelection: '',
          service: '',
          name: '',
          phone: '',
          email: '',
          purpose: '',
          message: '',
        });
      } else {
        const data = await res.json();
        setStatus(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setStatus('❌ Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // 🔹 Reusable input/textarea class for consistency
  const inputClass =
    'w-full border rounded-md px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter';

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6 font-inter">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Left Section - Form */}
        <div className="w-full md:w-7/12 p-10">
          <h2 className="text-4xl font-bold mb-2 leading-tight font-geist-sans-serif">
            Let&apos;s Build something <br />
            <span className="text-cyan-500">Awesome!</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            {/* Service */}
            <form onSubmit={handleSubmit} noValidate>
              <div>
                <label className="block font-semibold mb-2 font-geist-sans-serif">
                  Service Required <span className="text-orange-500">*</span>
                </label>

                <div className="relative">
                  {form.serviceSelection === 'Other' ? (
                    <input
                      type="text"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      placeholder="Please specify your service"
                      className={`${inputClass} pr-10 appearance-none`}
                      maxLength={50}
                      autoFocus
                    />
                  ) : (
                    <select
                      name="serviceSelection"
                      value={form.serviceSelection}
                      onChange={handleChange}
                      className={`${inputClass} appearance-none pr-10 cursor-pointer font-geist-sans-serif`}
                    >
                      <option value="">Select a service</option>
                      <option value="Software development">Software development</option>
                      <option value="Web development">Web development</option>
                      <option value="Mobile application development">
                        Mobile application development
                      </option>
                      <option value="Custom site development">Custom site development</option>
                      <option value="Other">Other</option>
                    </select>
                  )}
                  <svg
                    onClick={() => {
                      if (form.serviceSelection === 'Other') {
                        setForm({ ...form, serviceSelection: '', service: '' });
                      }
                    }}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 cursor-pointer 
          ${form.serviceSelection === 'Other' ? 'hover:text-gray-700' : 'pointer-events-none'}`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </form>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 font-geist-sans-serif">
                  Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className={inputClass}
                  required
                  maxLength={50}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 font-geist-sans-serif">
                  Phone Number <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className={inputClass}
                  maxLength={20}
                />
              </div>
            </div>

            {/* Email & Purpose */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block font-semibold mb-2 font-geist-sans-serif">
                  Email Id <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email Id"
                  className={inputClass}
                  required
                  maxLength={50}
                />
              </div>
              <div>
                <label className="block font-semibold mb-2 font-geist-sans-serif">
                  Purpose of contact <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  placeholder="Enter Purpose of contact"
                  className={inputClass}
                  maxLength={50}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2 font-geist-sans-serif">
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type here"
                className={`${inputClass} h-32 resize-none`}
                required
                maxLength={500}
              />
              <div className="text-right text-xs text-gray-400 mt-1 font-roboto-mono">
                Max 500 characters
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-md bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold text-lg mt-2 hover:from-sky-500 hover:to-blue-600 transition font-geist-sans-serif"
            >
              {loading ? 'Sending...' : 'Contact us'}
            </button>
          </form>

          {status && <p className="mt-4 text-sm font-roboto-mono">{status}</p>}
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:flex md:w-5/12 items-center justify-center p-10">
          <img
            src="/trangla-logo.png"
            alt="Partner with us"
            className="max-w-full max-h-[440px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default PartnerForm;

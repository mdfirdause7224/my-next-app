'use client';

import React, { useState } from 'react';

const PartnerForm: React.FC = () => {
  const [form, setForm] = useState({
    service: '',
    customService: '',
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

    const payload = {
      ...form,
      service: form.service === 'Other' ? form.customService : form.service,
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
          service: '',
          customService: '',
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

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 font-inter">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-7xl">
        {/* Left Section - Form */}
        <div className="w-full md:w-3/5 p-10 md:pr-16">
          <h2 className="text-5xl font-bold mb-4 leading-tight font-geist-sans-serif">
            Let&apos;s Build something <br />
            <span className="text-cyan-500">Awesome!</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6 mt-8">
            {/* Service Selection */}
            <div>
              <label className="block font-semibold mb-2 font-geist-mono whitespace-nowrap">
                Service Required <span className="text-orange-500">*</span>
              </label>

              <div className="relative">
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full h-12 border rounded-md px-3 pr-10 py-2 appearance-none 
                 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter 
                 bg-white text-gray-800"
                  required
                >
                  <option value="" className="text-gray-400 bg-white">
                    -- Select Service --
                  </option>
                  <option value="Software developer hiring" className="bg-white text-black">
                    Software developer hiring
                  </option>
                  <option value="Web development" className="bg-white text-black">
                    Web development
                  </option>
                  <option value="Mobile application development" className="bg-white text-black">
                    Mobile application development
                  </option>
                  <option value="Custom site development" className="bg-white text-black">
                    Custom site development
                  </option>
                  <option value="Other" className="bg-white text-black">
                    Other
                  </option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {form.service === 'Other' && (
                <input
                  type="text"
                  name="customService"
                  value={form.customService}
                  onChange={handleChange}
                  placeholder="Please specify your service"
                  className="w-full h-12 mt-3 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  required
                />
              )}
            </div>

            {/* Name & Phone */}
            <div className="md:flex md:space-x-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block font-semibold mb-2 font-geist-sans-serif whitespace-nowrap">
                  Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="w-full h-12 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  required
                  maxLength={50}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-2 font-geist-sans-serif whitespace-nowrap">
                  Phone Number <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full h-12 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  maxLength={20}
                />
              </div>
            </div>

            {/* Email & Purpose */}
            <div className="md:flex md:space-x-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block font-semibold mb-2 font-geist-sans-serif whitespace-nowrap">
                  Email Id <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email Id"
                  className="w-full h-12 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  required
                  maxLength={50}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-2 font-geist-sans-serif whitespace-nowrap">
                  Purpose of contact <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  placeholder="Enter Purpose of contact"
                  className="w-full h-12 border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  maxLength={50}
                />
              </div>
            </div>

            {/* Message */}
            <div>
              <label className="block font-semibold mb-2 font-geist-sans-serif whitespace-nowrap">
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type here"
                className="w-full border rounded-md px-3 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                required
                maxLength={500}
              />
              <div className="text-right text-xs text-gray-400 mt-1 font-roboto-mono">
                Max 500 characters
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 py-3 rounded-md bg-gradient-to-r from-sky-400 to-blue-500 text-white font-semibold text-lg mt-4 hover:from-sky-500 hover:to-blue-600 transition font-geist-sans-serif"
            >
              {loading ? 'Sending...' : 'Contact us'}
            </button>
          </form>

          {status && <p className="mt-4 text-sm font-roboto-mono">{status}</p>}
        </div>

        {/* Right Section - Image */}
        <div className="hidden md:flex md:w-2/5 items-center justify-center p-10">
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

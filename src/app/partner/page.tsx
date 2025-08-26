'use client';

import React, { useState } from 'react';

const PartnerForm: React.FC = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    purpose: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      const res = await fetch('/api/send-mail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('✅ Form submitted successfully! Please check your email.');
        setForm({ name: '', phone: '', email: '', purpose: '', message: '' });
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
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Left Section - Form */}
        <div className="w-full md:w-1/2 p-10 md:ml-10">
          <h2 className="text-4xl font-bold mb-2 leading-tight font-geist-sans-serif">
            Let&apos;s Build something <br />
            <span className="text-cyan-500">Awesome!</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 mt-6">
            <div className="md:flex md:space-x-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block font-semibold mb-1 font-geist-mono">
                  Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  required
                  maxLength={50}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1 font-geist-mono">
                  Phone Number <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-roboto-mono"
                  maxLength={20}
                />
              </div>
            </div>

            <div className="md:flex md:space-x-6">
              <div className="flex-1 mb-4 md:mb-0">
                <label className="block font-semibold mb-1 font-geist-mono">
                  Email Id <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter Email Id"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  required
                  maxLength={50}
                />
              </div>
              <div className="flex-1">
                <label className="block font-semibold mb-1 font-geist-mono">
                  Purpose of contact <span className="text-gray-400 text-sm">(optional)</span>
                </label>
                <input
                  type="text"
                  name="purpose"
                  value={form.purpose}
                  onChange={handleChange}
                  placeholder="Enter Purpose of contact"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                  maxLength={50}
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold mb-1 font-geist-mono">
                Message <span className="text-orange-500">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Type here"
                className="w-full border rounded-md px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-orange-400 font-inter"
                required
                maxLength={500}
              />
              <div className="text-right text-xs text-gray-400 mt-1 font-roboto-mono">
                Max 500 characters
              </div>
            </div>

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
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-10">
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

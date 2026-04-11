export const dynamic = "force-dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — Iron All Day",
  description: "How Lumevara LLC (DBA Iron All Day) collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-48 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-2">Privacy Policy</h1>
        <p className="text-gray-500 text-sm mb-10">Effective Date: April 1, 2026 | Last Updated: April 11, 2026</p>

        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tight prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white">
          <p>Lumevara LLC (DBA Iron All Day) operates ironallday.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.</p>

          <h2>1. Information We Collect</h2>
          <p><strong>You Provide:</strong> Name, email, shipping/billing address, phone number, and communications you send us. Payment details are processed by third-party processors — we do not store credit card or wallet information.</p>
          <p><strong>Automatic:</strong> IP address, browser type, operating system, pages visited, time on site, and cookies for site functionality and analytics.</p>

          <h2>2. How We Use Information</h2>
          <ul>
            <li>Process and fulfill orders</li>
            <li>Communicate about orders, shipping, and account matters</li>
            <li>Comply with legal obligations and enforce Terms of Service</li>
            <li>Detect and prevent fraud</li>
            <li>Improve our Site and services</li>
            <li>Promotional communications (with consent; opt out anytime)</li>
          </ul>

          <h2>3. Information Sharing</h2>
          <p>We do not sell your personal information. We share data only with payment processors, shipping carriers, analytics providers (aggregated data), and as required by law.</p>

          <h2>4. Data Security & Retention</h2>
          <p>We implement reasonable security measures. No method is 100% secure. Order records retained minimum 3 years for compliance.</p>

          <h2>5. Your Rights</h2>
          <p>You may request access, correction, deletion, or portability of your data. California residents have additional rights under CCPA. We do not sell personal information. Contact: <strong>info@ironallday.com</strong></p>

          <h2>6. Children</h2>
          <p>Site not intended for individuals under 18. We do not knowingly collect data from minors.</p>

          <h2>7. Changes</h2>
          <p>We may update this policy. Changes posted here with updated date.</p>

          <h2>8. Contact</h2>
          <p><strong>info@ironallday.com</strong><br />Lumevara LLC (DBA Iron All Day) — Delaware</p>
        </div>
      </div>
    </main>
  );
}

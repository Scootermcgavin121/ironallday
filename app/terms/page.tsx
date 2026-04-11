export const dynamic = "force-dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — Iron All Day",
  description: "Terms and conditions governing the use of ironallday.com and purchase of research peptide compounds.",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-48 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-2">Terms of Service</h1>
        <p className="text-gray-500 text-sm mb-10">Effective Date: April 1, 2026 | Last Updated: April 11, 2026</p>

        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tight prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white">
          <p>Welcome to ironallday.com (&quot;Site&quot;), operated by Lumevara LLC (DBA Iron All Day), a Delaware limited liability company (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By accessing or using this Site, you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Site or purchase any products.</p>

          <h2>1. Research Use Only</h2>
          <p>All products sold through this Site are intended <strong>strictly for laboratory and educational research purposes only</strong>. Products are NOT intended for human consumption, injection, ingestion, inhalation, or any form of administration to humans or animals. Products are NOT drugs, foods, cosmetics, or dietary supplements.</p>
          <p>By placing an order, you represent and warrant that you are purchasing products solely for legitimate research purposes and that you will not use, administer, or facilitate the use of any product for human or animal consumption or any therapeutic, diagnostic, or medical purpose.</p>
          <p><strong>Failure to comply with the research-use-only requirement will result in immediate account termination, order cancellation, and a permanent ban from future purchases.</strong> We reserve the right to refuse any order at our sole discretion.</p>

          <h2>2. Age Requirement</h2>
          <p>You must be at least 18 years of age to use this Site or purchase any products. By using this Site, you represent and warrant that you are at least 18 years old.</p>

          <h2>3. No Medical Claims or Advice</h2>
          <p>Nothing on this Site constitutes medical advice, a diagnosis, or a recommendation for treatment. We do not make any therapeutic, health, or medical claims about any product. References to published scientific literature are for educational and research reference purposes only.</p>
          <p>We do not provide dosing information, administration guidance, or protocols for any product.</p>

          <h2>4. Certificates of Analysis</h2>
          <p>COA data, purity percentages, and analytical results are provided for research reference only and do not imply safety, efficacy, or suitability for any purpose.</p>

          <h2>5. Indemnification</h2>
          <p>You agree to indemnify, defend, and hold harmless Lumevara LLC (DBA Iron All Day), its officers, directors, employees, agents, and affiliates from any claims, liabilities, damages, losses, costs, and expenses arising from your use or misuse of any product, your violation of these Terms, or your violation of any applicable law.</p>

          <h2>6. Limitation of Liability</h2>
          <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES ARISING FROM YOUR USE OF THE SITE OR ANY PRODUCT. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID FOR THE SPECIFIC PRODUCT GIVING RISE TO THE CLAIM.</p>

          <h2>7. Order Acceptance & Refusal</h2>
          <p>We reserve the right to refuse, cancel, or limit any order at our sole discretion. All sales are final. Returns accepted only for damaged or incorrect shipments reported within 48 hours of delivery.</p>

          <h2>8. Governing Law</h2>
          <p>These Terms shall be governed by the laws of the State of Delaware. Any disputes shall be resolved through binding arbitration in Delaware per the American Arbitration Association rules. You waive any right to a jury trial or class action participation.</p>

          <h2>9. Modifications</h2>
          <p>We may modify these Terms at any time. Continued use of the Site constitutes acceptance of revised Terms.</p>

          <h2>10. Contact</h2>
          <p>Questions: <strong>info@ironallday.com</strong></p>
        </div>
      </div>
    </main>
  );
}

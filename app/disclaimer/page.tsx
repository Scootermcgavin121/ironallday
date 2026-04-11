export const dynamic = "force-dynamic";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Disclaimer — Iron All Day",
  description: "Important disclaimer regarding the research-only nature of all Iron All Day peptide compounds.",
};

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] pt-28 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-white uppercase tracking-tight mb-2">Research Disclaimer</h1>
        <p className="text-gray-500 text-sm mb-10">Effective Date: April 1, 2026 | Last Updated: April 11, 2026</p>

        <div className="prose prose-invert max-w-none prose-headings:font-bold prose-headings:text-white prose-headings:uppercase prose-headings:tracking-tight prose-p:text-gray-300 prose-p:leading-relaxed prose-li:text-gray-300 prose-strong:text-white">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-8">
            <p className="text-white font-bold text-lg mb-2">⚠️ IMPORTANT NOTICE</p>
            <p className="text-gray-300">All products sold by Lumevara LLC (DBA Iron All Day) through ironallday.com are intended <strong>strictly for laboratory and educational research purposes only</strong>. By accessing this Site or purchasing any product, you acknowledge and agree to the terms below.</p>
          </div>

          <h2>1. Research Use Only</h2>
          <p>Products sold on this Site are research compounds intended exclusively for in vitro laboratory research and educational purposes. They are:</p>
          <ul>
            <li><strong>NOT</strong> intended for human or animal consumption</li>
            <li><strong>NOT</strong> intended for injection, ingestion, inhalation, topical application, or any form of administration to living organisms</li>
            <li><strong>NOT</strong> drugs, medications, or pharmaceutical preparations</li>
            <li><strong>NOT</strong> foods, dietary supplements, or nutritional products</li>
            <li><strong>NOT</strong> cosmetics or personal care products</li>
            <li><strong>NOT</strong> intended for therapeutic, diagnostic, or medical use of any kind</li>
          </ul>

          <h2>2. No Medical Claims</h2>
          <p>Iron All Day makes no claims regarding the therapeutic, medicinal, or health-related properties of any product. No information on this Site should be interpreted as medical advice.</p>

          <h2>3. No Dosing or Administration Guidance</h2>
          <p>We do not provide dosing protocols, administration methods, or any guidance that could be construed as facilitating human or animal use. Handling and storage information relates solely to compound integrity for research purposes.</p>

          <h2>4. FDA Disclaimer</h2>
          <p>Products on this Site have not been evaluated by the U.S. Food and Drug Administration. These products are not intended to diagnose, treat, cure, or prevent any disease.</p>

          <h2>5. Published Research References</h2>
          <p>References to scientific studies and clinical trial data are for educational purposes only. Such references describe findings from controlled research environments and do not imply any specific outcome or application for products sold on this Site.</p>

          <h2>6. COA Data</h2>
          <p>Purity percentages, HPLC data, and mass spectrometry results describe chemical composition for research reference and quality verification only. COA data does not imply safety, efficacy, or fitness for any purpose.</p>

          <h2>7. Buyer Responsibility</h2>
          <p>By purchasing, you accept full responsibility for ensuring products are used exclusively for lawful research purposes, compliance with all applicable laws in your jurisdiction, proper handling and disposal per laboratory safety standards, and any consequences arising from misuse.</p>

          <h2>8. Jurisdictional Compliance</h2>
          <p>Certain compounds may be restricted in specific jurisdictions. It is the buyer&apos;s sole responsibility to verify legality before ordering. We do not warrant that any product is legal in all jurisdictions.</p>

          <h2>9. Contact</h2>
          <p>Questions: <strong>info@ironallday.com</strong></p>
        </div>
      </div>
    </main>
  );
}

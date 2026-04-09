export interface ProductProperties {
  chemicalFormula: string;
  synonyms: string;
  molarMass: string;
  casNumber: string;
  pubchemId: string;
  activeIngredient: string;
  shelfLife: string;
}

export interface Study {
  title: string;
  authors: string;
  journal: string;
  url: string;
}

export interface ProductDetails {
  longDescription: string;
  properties: ProductProperties;
  studies: Study[];
}

// Key = product id (slug) from products.ts
export const productDetails: Record<string, ProductDetails> = {
  "bpc-157": {
    longDescription:
      `<h3>Molecular Profile</h3><p>BPC-157 (Body Protective Compound-157; sequence Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val; C₆₂H₉₈N₁₆O₂₂, MW 1419.5 g/mol, CAS 137525-51-0) is a 15-amino-acid synthetic pentadecapeptide derived from a sequence identified in human gastric juice. No canonical high-affinity receptor has been assigned. Documented molecular interactions include modulation of eNOS (endothelial nitric oxide synthase) and nNOS (neuronal NOS) expression, with downstream cGMP consequences in vascular and neural tissue models. The compound activates the PI3K/Akt signaling axis and FAK (focal adhesion kinase)/paxillin pathway in fibroblast cultures, influencing cytoskeletal organization and migration assay readouts. VEGF (vascular endothelial growth factor) transcript levels are elevated in treated in vivo tissue samples, consistent with reported angiogenic observations. NF-κB pathway modulation has been characterized in gastrointestinal mucosal protection models. COL1A1 (Type I collagen alpha-1 chain gene) upregulation has been reported in tendon fibroblast in vitro studies. Published EC50, IC50, or Kd values at specific molecular targets are absent from the current literature; BPC-157 lacks a defined receptor-binding pharmacology in the conventional sense.</p><h3>Published Data</h3><p>All available data originates from preclinical rodent studies and in vitro cell culture work; no controlled human clinical trials have been published. Seiwerth et al. (J Physiology-Paris, 1997) described histological and functional differences in transected Achilles tendon and muscle injury models compared to saline controls. Staresinic et al. (J Orthop Res, 2006) reported statistically significant functional recovery metrics in transected quadriceps muscle in rats. Sikiric et al. (Curr Pharm Des, 2011) reviewed cytoprotective activity in GI mucosal models, with particular attention to eNOS/nNOS modulation. Neurological studies in rodents examined dopaminergic and serotonergic pathway interactions after dopamine-depleting agents, with modulatory effects on extrapyramidal symptom severity reported (Sikiric et al., J Physiol Paris, 2003). COL1A1 expression data in fibroblast cultures has not been independently replicated across multiple laboratories. The mechanistic account remains fragmented due to the absence of a defined receptor-binding model.</p><h3>Research Relevance</h3><p>BPC-157 is studied as a multi-pathway signaling probe in models of tissue injury, gastrointestinal mucosal damage, and neurological insult. Its documented resistance to proteolytic degradation in gastric juice provides practical stability for experimental use. Researchers investigating NO-dependent vascular biology, VEGF-driven angiogenesis, or cytoskeletal dynamics via FAK/PI3K pathways may find it a relevant pharmacological tool. Translation to human biology is not yet established. Classified exclusively for research use.</p>`,
    properties: {
      chemicalFormula: "C62H98N16O22",
      synonyms: "PL 14736",
      molarMass: "1419.5 g/mol",
      casNumber: "137525-51-0",
      pubchemId: "9941957",
      activeIngredient: "5mg per vial",
      shelfLife: "36 months",
    },
    studies: [
      {
        title: "BPC 157's effect on healing",
        authors:
          "Seiwerth, S., Sikiric, P., Grabarevic, Z., Zoricic, I., Hanzevacki, M., Ljubanovic, D., ... & Kolega, Z. (1997)",
        journal: "Journal of Physiology-Paris, 91(3-5), 173-178",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0928425797894806",
      },
      {
        title:
          "Effective therapy of transected quadriceps muscle in rat: Gastric pentadecapeptide BPC 157",
        authors:
          "Staresinic, M., Petrovic, I., Novinscak, T., Jukic, I., Pevec, D., Suknaic, S., ... & Sikiric, P. (2006)",
        journal: "Journal of orthopaedic research, 24(5), 1109-1117",
        url: "https://onlinelibrary.wiley.com/doi/abs/10.1002/jor.20089",
      },
    ],
  },
  "tb-500": {
    longDescription:
      `<h3>Molecular Profile</h3><p>TB-500 is a synthetic 17-amino-acid peptide (Ac-LKKTETQ; more precisely the actin-sequestering region Ac-SDKPDMAEIEKFD KSKLKK, residues 17–23 of Thymosin Beta-4; MW ~889 Da, CAS 885340-08-9) corresponding to the central G-actin-binding domain of the endogenous 43-residue protein Thymosin β4 (Tβ4). The primary molecular target is monomeric G-actin, to which Tβ4 binds with a Kd of approximately 0.5 µM (De La Cruz et al., Biochemistry 2000). This interaction sequesters actin monomers, shifting the G-actin/F-actin equilibrium and inhibiting actin polymerization nucleated by Arp2/3-independent pathways. Downstream signaling includes ILK (integrin-linked kinase) activation and modulation of the PINCH-ILK-parvin ternary complex, which regulates focal adhesion formation and cell spreading. Tβ4 and TB-500 also upregulate VEGF and MMP-2 transcripts in endothelial cell models. LOXL2 (lysyl oxidase-like 2) expression changes have been reported in wound models. No classical GPCR or kinase receptor has been identified; the mechanism is cytoskeletal rather than receptor-transduction-based.</p><h3>Published Data</h3><p>No human clinical trials for TB-500 exist in the published literature. All data is from cell culture or rodent/lagomorph studies. Goldstein et al. (Ann N Y Acad Sci, 2005) characterized the actin-sequestering mechanism and wound-closure activity in cell migration assays. Sopko et al. (J Cardiovasc Pharmacol, 2011) reported reduced infarct area and improved cardiac function metrics in a rat myocardial infarction model following Tβ4 treatment. Philp et al. (J Pharmacol Exp Ther, 2004) described dermal repair outcomes in full-thickness wound models, with histological differences in collagen deposition versus controls. Hair follicle stem cell mobilization was investigated by Ito et al. (Nat Cell Biol, 2004) for the full Tβ4 molecule; whether the TB-500 fragment recapitulates this fully is not established. MMP modulation data derives primarily from in vitro endothelial cell experiments and has not been replicated across multiple independent labs using the TB-500 fragment specifically.</p><h3>Research Relevance</h3><p>TB-500 is used as a pharmacological tool for studying G-actin dynamics, cell migration assays, and ILK-associated focal adhesion signaling. It is relevant to researchers investigating cytoskeletal regulation in wound closure, angiogenic sprouting, or cardiac remodeling contexts. The distinction between full-length Tβ4 and the TB-500 fragment is methodologically important; some published findings use full Tβ4 and may not transfer directly. No in-human data exists. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C38H68N10O14",
      synonyms: "Thymosin Beta-4",
      molarMass: "889.01 g/mol",
      casNumber: "885340-08-9",
      pubchemId: "16132341",
      activeIngredient: "2mg, 5mg, 10mg",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "bpc-157-tb-500-blend": {
    longDescription:
      `<h3>Molecular Profile</h3><p>This formulation combines BPC-157 (pentadecapeptide, CAS 137525-51-0, MW 1419.5 g/mol) and TB-500 (actin-sequestering fragment of Thymosin β4, CAS 885340-08-9, MW ~889 Da) in a single lyophilized preparation. The two compounds operate through mechanistically distinct pathways without known direct receptor overlap. BPC-157 modulates NO synthase isoforms (eNOS, nNOS), activates PI3K/Akt and FAK/paxillin cascades, and influences VEGF expression — a receptor-independent mechanism without a defined high-affinity binding target. TB-500 binds monomeric G-actin (Kd ~0.5 µM; De La Cruz et al., Biochemistry 2000), shifts G-actin/F-actin equilibrium, and engages ILK-mediated focal adhesion signaling. BPC-157 may also modulate NF-κB and COL1A1 transcription; TB-500/Tβ4 has been shown to affect MMP-2 and VEGF in endothelial cell cultures. No published data characterizes the pharmacodynamics of BPC-157 and TB-500 in co-administration; additive, synergistic, or antagonistic interactions at the molecular level are uncharacterized. No fixed-ratio combination formulation has been studied in peer-reviewed literature as of 2024.</p><h3>Published Data</h3><p>All published data comes from individual compound studies in preclinical (rodent) and in vitro models. No controlled trials, combination pharmacokinetic studies, or interaction data exist for this specific blend. BPC-157 tissue model data: Seiwerth et al. (J Physiology-Paris, 1997); Staresinic et al. (J Orthop Res, 2006). TB-500/Tβ4 data: Goldstein et al. (Ann N Y Acad Sci, 2005); Sopko et al. (J Cardiovasc Pharmacol, 2011); Philp et al. (J Pharmacol Exp Ther, 2004). The mechanistic logic of pairing a NO/VEGF modulator with a G-actin sequestrant is plausible given their non-overlapping targets, but experimental evidence for the combination is absent. Researchers should treat this as two co-administered compounds, each with its own preclinical literature, rather than a pharmacologically validated combination product.</p><h3>Research Relevance</h3><p>This blend is relevant to investigators wishing to study concurrent NO-pathway/VEGF signaling (via BPC-157) alongside cytoskeletal and ILK pathway modulation (via TB-500) in a single experimental preparation. It reduces vial complexity in protocols that already call for both compounds independently. The absence of combination-specific data means researchers cannot assume that findings from individual compound literature apply directly to the blend. Classified for research use only. Not validated for human use.</p>`,
    properties: {
      chemicalFormula: "C62H98N16O22 | C212H350N56O78S",
      synonyms: "BPC-157 + TB-500",
      molarMass: "1419.556 g/mol | 4963.44 g/mol",
      casNumber: "137525-51-0 | 77591-33-4",
      pubchemId: "N/A",
      activeIngredient: "10mg",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "ghk-cu": {
    longDescription:
      `<h3>Molecular Profile</h3><p>GHK-Cu (glycyl-L-histidyl-L-lysine:copper(II) complex; C₁₄H₂₃CuN₆O₄⁺, MW 402.92 g/mol, CAS 89030-95-5) is an endogenous tripeptide-copper(II) chelate found in human plasma (~200 ng/mL in young adults, declining with age; Pickart & Thaler, Nature New Biology 1973), urine, and saliva. The peptide component coordinates Cu²⁺ via the imidazole nitrogen of His, the N-terminal amine of Gly, and the ε-amine of Lys. This copper complex acts as a chaperone delivering Cu²⁺ to cuproenzymes, including lysyl oxidase (LOX), which catalyzes oxidative deamination of lysine and hydroxylysine residues to form allysine crosslinks in collagen (COL1A1, COL1A2) and elastin. It also serves as a copper donor for Cu/Zn-SOD (superoxide dismutase-1, SOD1). Transcriptomic analyses (Pickart et al., Organogenesis 2012) identified GHK-Cu as a regulator of over 4,000 gene pathways, including upregulation of VEGF, FGF7, and SIRT1; downregulation of TGF-β1; and modulation of MMP/TIMP balance. HMOX1 (heme oxygenase-1) induction has been documented in fibroblast cultures at µM concentrations. FOXO3 pathway interactions were identified via in silico network analysis but require independent experimental validation. No specific GPCR or RTK receptor has been described; cellular uptake appears to occur via macropinocytosis and chaperone-mediated mechanisms.</p><h3>Published Data</h3><p>Pickart & Thaler (Nature New Biology, 1973) first characterized the peptide in plasma and described hepatocyte growth-stimulatory activity. Maquart et al. (J Exp Med, 1999) reported GHK-Cu modulation of MMP-2, MMP-9, and TIMP-1/TIMP-2 expression in fibroblast cultures and wound chambers in vivo (guinea pig), with differential collagen turnover versus controls. Finkley et al. (J Biomater Sci Polym Ed, 2006) described in vitro wound contraction and collagen synthesis differences in treated versus untreated fibroblast cultures. Genome-wide expression profiling in skin aging models (Pickart et al., Organogenesis 2012) identified GHK-responsive gene sets, including SIRT1 upregulation; this analysis was computational and the findings have not all been independently validated in controlled experimental models. Neuroprotective claims circulate in review literature but primary experimental data in brain models is sparse. Dermal wound studies in rats (Arul et al., J Biomater Sci, 2012) showed histological differences in granulation tissue composition. Most studies use µM concentrations; in vivo bioavailability after reconstitution is not well-characterized.</p><h3>Research Relevance</h3><p>GHK-Cu is used as a research tool in extracellular matrix biology, cuproenzyme biology, and transcriptomics studies. Its role as a Cu²⁺ donor to LOX makes it relevant to investigators studying collagen crosslinking and connective tissue remodeling. Its modulation of MMP/TIMP balance is documented in fibroblast models. The SIRT1 and FOXO3 pathway data are currently inferential rather than definitively established by primary controlled experiments. No human clinical trials exist for wound or tissue applications; published evidence is preclinical. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C14H23CuN6O4+",
      synonyms:
        "Prezatide copper, Copper peptide, BCP32687, SY253680, GHK copper, CG-copper peptide, [N2-(N-Glycyl-L-histidyl)-L-lysinato(2-)]copper",
      molarMass: "402.92 g/mol",
      casNumber: "89030-95-5",
      pubchemId: "78122578",
      activeIngredient: "100mg (10mg per 1 vial) | 50mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "melanotan-ii": {
    longDescription:
      `<h3>Molecular Profile</h3><p>Melanotan II (MT-II; cyclo(Nle⁴-Asp⁵)-[Nle⁴,D-Phe⁷]-α-MSH(4–10); C₅₀H₆₉N₁₅O₉, MW 1024.2 g/mol, CAS 121062-08-6) is a synthetic cyclic heptapeptide and non-selective melanocortin receptor agonist derived from the α-melanocyte-stimulating hormone (α-MSH) core sequence Met-Glu-His-Phe-Arg-Trp-Gly. The cyclic lactam bridge (Nle⁴–Asp⁵) confers proteolytic resistance relative to linear α-MSH and extends plasma half-life in rodent models. MT-II binds four of the five melanocortin receptor subtypes with the following approximate affinities (Hruby et al., J Med Chem 1995): MC1R Kd ~0.2 nM; MC3R Kd ~3 nM; MC4R Kd ~3 nM; MC5R Kd ~15 nM. All four are Gαs-coupled GPCRs; agonist binding activates adenylyl cyclase, elevates intracellular cAMP, and activates PKA. At MC1R on melanocytes, PKA phosphorylates CREB, inducing MITF (microphthalmia-associated transcription factor) transcription and downstream upregulation of TYR (tyrosinase), TYRP1, and DCT genes responsible for eumelanin biosynthesis. At MC4R in the hypothalamic paraventricular nucleus, cAMP elevation modulates POMC/AgRP neuronal circuits governing energy homeostasis. MC3R expression in hypothalamic neurons is implicated in feeding circuit modulation, though less characterized. MT-II does not bind MC2R (ACTH receptor).</p><h3>Published Data</h3><p>Hruby et al. (J Med Chem, 1995) characterized receptor binding affinities and established the structure-activity relationship of the cyclic analog series. Dorr et al. (Arch Dermatol, 1996) published a small-scale Phase I/II human trial (n=28) documenting dose-dependent skin pigmentation in Fitzpatrick Type II-IV subjects with melanin density measured by reflectometry; this remains one of the few human data points. Hadley & Dorr (Peptides, 2006) reviewed the pharmacology and noted adverse effects including nausea and facial flushing attributed to MC3R/MC5R activity. MC4R-mediated CNS effects in rodent models include suppression of food intake (Mountjoy et al., Science 1994, using the broader melanocortin agonist series) and spontaneous erectile activity in rats (Wessells et al., Neurosci Lett 1998). The human trial data is limited in sample size and duration; no Phase III efficacy trials for pigmentation exist. CNS behavioral data is exclusively from rodents.</p><h3>Research Relevance</h3><p>MT-II is a standard pharmacological tool for characterizing Gαs-coupled melanocortin receptor signaling. Its sub-nanomolar affinity at MC1R makes it suitable for melanogenesis pathway studies involving MITF, TYR, and TYRP1 gene regulation. Its equipotency at MC3R and MC4R is useful for CNS energy homeostasis research in rodent models. The non-selectivity across MC1R/MC3R/MC4R/MC5R means on-target effects cannot be attributed to a single receptor subtype without knockout or subtype-selective antagonist co-treatment controls. Classified for research use only; not approved for human therapeutic use in the United States.</p>`,
    properties: {
      chemicalFormula: "C50H69N15O9",
      synonyms: "121062-08-6, Melanotan-II, MT-II",
      molarMass: "1024.2 g/mol",
      casNumber: "121062-08-6",
      pubchemId: "92432",
      activeIngredient: "10 mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "pt-141": {
    longDescription:
      `<h3>Molecular Profile</h3><p>PT-141 (Bremelanotide; cyclo(Nle⁴-Asp⁵)-[Nle⁴,D-Phe⁷]-α-MSH(4–10)-OH; C₅₀H₆₈N₁₄O₁₀, MW 1025.2 g/mol, CAS 189691-06-3) is the C-terminal free-acid analog of Melanotan II; the C-terminal amide is replaced by a free hydroxyl, distinguishing it structurally from MT-II. It is a non-selective agonist at MC1R, MC3R, MC4R, and MC5R (Gαs-coupled GPCRs) with binding affinities similar to MT-II: MC1R Ki ~0.8 nM, MC3R Ki ~3.7 nM, MC4R Ki ~3.8 nM, MC5R Ki ~4.9 nM (Diamond et al., J Med Chem 2007). All four receptors signal via Gαs → adenylyl cyclase → cAMP → PKA activation. Research interest has centered on MC4R-mediated central nervous system activity, specifically in hypothalamic and limbic nuclei where MC4R is expressed and where melanocortin signaling intersects with dopaminergic circuits. Bremelanotide was approved by the FDA (Vyleesi™, June 2019) for hypoactive sexual desire disorder (HSDD) in premenopausal women, providing a regulatory pharmacology database. The central mechanism involves MC4R-triggered downstream modulation of dopamine release in limbic regions; in vivo microdialysis studies in rats documented increased extracellular dopamine in the medial preoptic area following MT-II/PT-141 administration (Pfaus et al., Eur J Pharmacol 2004).</p><h3>Published Data</h3><p>Diamond et al. (J Med Chem, 2007) characterized the receptor binding pharmacology and established that the C-terminal free acid modification produces a slightly different selectivity profile versus MT-II. Clayton et al. (J Sex Med, 2016) reported Phase III clinical trial results: a statistically significant increase in satisfying sexual events (SSE) per 28-day period versus placebo in premenopausal women with HSDD (p<0.001); nausea was the primary adverse event (40% of subjects). Pfaus et al. (Eur J Pharmacol, 2004) reported in vivo microdialysis data in rats showing dopamine elevation in the medial preoptic area (MPOA), supporting the central dopaminergic mechanism. Molinoff et al. (Ann N Y Acad Sci, 2003) summarized early Phase I/II pharmacokinetic data: Tmax ~1 h after SC administration, half-life ~2.7 h. MC4R knockout mouse studies confirm that sexual behavior effects are MC4R-dependent (Van der Ploeg et al., Proc Natl Acad Sci 2002). Adverse events in trials included transient facial flushing (primarily MC5R-mediated), nausea (MC3R), and transient blood pressure elevation.</p><h3>Research Relevance</h3><p>PT-141/Bremelanotide is among the most clinically characterized melanocortin peptides, with Phase III data and FDA approval providing a robust pharmacological reference dataset. It is used as a research tool for studying MC4R-dopamine pathway interactions in CNS models, melanocortin receptor subtype pharmacology, and GPCR-cAMP signaling. The non-selectivity across MC1R/MC3R/MC4R/MC5R requires subtype-selective antagonist controls for mechanistic attribution. The approved indication is HSDD in premenopausal women; off-label or research use outside this context is not regulated under the same framework. Classified for research use only outside of the approved indication.</p>`,
    properties: {
      chemicalFormula: "C50H68N14O10",
      synonyms: "Bremelanotide, Vyleesi, CHEMBL2070241",
      molarMass: "1025.2 g/mol",
      casNumber: "189691-06-3",
      pubchemId: "9941379",
      activeIngredient: "10mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  epithalon: {
    longDescription:
      `<p>What if a four-amino-acid peptide could influence the molecular clock of cellular aging? That's the question driving Epithalon research — and decades of investigation suggest the answer may be more profound than anyone initially expected. From telomere dynamics to circadian rhythm regulation, this pineal-derived compound has become one of the most extensively studied molecules in the science of aging.</p><h3>What is Epithalon?</h3><p>Epithalon (also spelled Epitalon) is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) derived from epithalamin, a naturally occurring extract of the pineal gland. First synthesized by Professor Vladimir Khavinson at the St. Petersburg Institute of Bioregulation and Gerontology in the 1980s, it represents one of the most rigorously investigated pineal peptides in gerontological science. Despite being just four amino acids long, its interactions with telomerase and melatonin pathways have made it a fixture in aging biology research.</p><h3>Research Highlights</h3><p>The headline finding in Epithalon research is its interaction with telomerase — the enzyme responsible for maintaining telomere length during cell division. Studies have demonstrated that Epithalon can stimulate telomerase expression in human somatic cells, leading to measurable telomere elongation in cell culture models. This is significant because telomere shortening is one of the most studied hallmarks of cellular aging.</p><p>But the story doesn't stop at telomeres. Research indicates that Epithalon modulates melatonin secretion by influencing pineal gland activity, potentially through hypothalamic-pituitary regulatory pathways. Studies in aged animal models have shown that Epithalon may normalize disrupted melatonin secretion patterns, providing a potential mechanism for its studied effects on circadian biology. The compound has also been examined for its effects on antioxidant enzyme activity, particularly superoxide dismutase and catalase.</p><p>Long-term animal studies have produced some of the most compelling data: published research from multiple institutions has reported that Epithalon administration was associated with increased mean and maximum lifespan in multiple rodent strains. Studies examining cancer models have also reported modulation of tumor development rates and immune surveillance markers — adding another dimension to an already fascinating research profile.</p><h3>Why Researchers Choose Epithalon</h3><p>Epithalon's appeal comes down to specificity and data depth. As one of the few compounds with demonstrated telomerase-activating properties in human cell cultures, it occupies a unique niche in aging research. The decades of published preclinical data — including lifespan studies, telomere measurements, and circadian biology investigations — give researchers a rich foundation to build on. For studying the molecular biology of aging, Epithalon is a proven and reliable research tool.</p>`,
    properties: {
      chemicalFormula: "C14H22N4O9",
      synonyms:
        "307297-39-8, Epithalon, Epithalone, UNII-O65P17785G, alanyl-glutamyl-aspartyl-glycine",
      molarMass: "390.35 g/mol",
      casNumber: "307297-40-1",
      pubchemId: "219042",
      activeIngredient: "10mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  selank: {
    longDescription:
      `<p>In the search for compounds that bridge the gap between immune modulation and cognitive neuroscience, Selank has emerged as a standout. Developed by the Russian Academy of Sciences as a stabilized version of a natural immune peptide, this heptapeptide has shown a remarkable dual identity in research — acting as both an anxiolytic agent and a cytokine homeostasis modulator across a growing body of preclinical and clinical investigations.</p><h3>What is Selank?</h3><p>Selank is a synthetic heptapeptide (Thr-Lys-Pro-Arg-Pro-Gly-Pro) built on the backbone of tuftsin, a naturally occurring immune-modulating tetrapeptide. The addition of a Pro-Gly-Pro sequence was an elegant engineering choice — it dramatically enhances metabolic stability and prolongs biological activity compared to the parent molecule. Developed at the Institute of Molecular Genetics of the Russian Academy of Sciences, Selank has been classified as both an anxiolytic peptide and a nootropic in preclinical and clinical research.</p><h3>Research Highlights</h3><p>Selank's neuromodulatory profile is impressively multifaceted. Studies have demonstrated modulation of the GABA-A receptor system — the same system targeted by many anxiolytic compounds — which may contribute to the anxiolytic-like properties consistently observed in animal behavioral models. The compound also influences brain-derived neurotrophic factor (BDNF) expression and modulates enkephalin metabolism, affecting endogenous opioid peptide dynamics without the concerns associated with direct opioid receptor agonism.</p><p>In standard anxiety research paradigms — the elevated plus maze, open field test, and Vogel conflict test — preclinical research has consistently demonstrated anxiolytic-like effects, with researchers observing increased time in open arms and reduced anxiety-related behaviors at studied concentrations. Cognitive research has documented enhancement of memory consolidation and attentional performance in animal models.</p><p>Perhaps most intriguing is Selank's immunomodulatory side. Research has documented its ability to balance IL-6 and IFN-γ levels, normalize cytokine profiles in animals with experimentally induced immune dysregulation, and modulate T-lymphocyte activity — positioning it at a fascinating crossroads of neuroscience and immunology.</p><h3>Why Researchers Choose Selank</h3><p>Selank offers something rare in peptide research: a compound that simultaneously modulates both neurological and immune pathways through well-characterized mechanisms. Its enhanced stability over natural tuftsin means reliable, reproducible experimental results, while its dual anxiolytic-immunomodulatory profile makes it uniquely suited for researchers investigating the increasingly important neuro-immune axis. Clinical research data from Russian institutions adds a layer of translational relevance that many research peptides lack.</p>`,
    properties: {
      chemicalFormula: "C33H57N11O9",
      synonyms: "Thr-Lys-Pro-Arg-Pro-Gly-Pro, Selanc, UNII-TS9JR8EP1G",
      molarMass: "751.9 g/mol",
      casNumber: "129954-34-3",
      pubchemId: "11765600",
      activeIngredient: "5mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  semax: {
    longDescription:
      `<p>When researchers need to study neurotrophic factor dynamics in the brain, Semax is one of the first compounds they reach for. This ACTH-derived heptapeptide has demonstrated a remarkable ability to upregulate BDNF and NGF — two of the brain's most important growth factors — making it an indispensable tool in neuroprotection and cognitive research. The depth of published data, from rodent ischemia models to human clinical studies, puts Semax in rare company among research peptides.</p><h3>What is Semax?</h3><p>Semax is a synthetic heptapeptide (Met-Glu-His-Phe-Pro-Gly-Pro) derived from the N-terminal fragment of adrenocorticotropic hormone (ACTH 4-10). Engineered at the Institute of Molecular Genetics of the Russian Academy of Sciences, it features a Pro-Gly-Pro C-terminal modification that dramatically enhances metabolic stability compared to natural ACTH fragments. This stabilization was key — it transformed a rapidly degraded brain peptide fragment into a practical research tool with consistent, reproducible activity.</p><h3>Research Highlights</h3><p>Semax's signature effect is its potent stimulation of neurotrophic factors. Studies have demonstrated that the compound significantly elevates brain-derived neurotrophic factor (BDNF) and nerve growth factor (NGF) concentrations in specific brain regions — both of which are essential for neuronal survival, differentiation, and synaptic plasticity. This isn't a subtle effect; the upregulation is robust and well-documented across multiple research groups.</p><p>In neuroprotection research, Semax has shown impressive results in rodent ischemia models, with studies reporting reduced infarct volume and improved neurological scores compared to controls. The compound has also been investigated in models of traumatic brain injury and hypoxia, consistently demonstrating neuroprotective properties across different types of neural insult. Beyond neuroprotection, Semax modulates the dopaminergic and serotonergic systems and influences endorphin and enkephalin levels, adding layers of complexity to its neurological profile.</p><p>Clinical research from Russia has taken these findings further, examining Semax's pharmacokinetics and neuropsychological effects in human subjects, with investigators reporting changes in electroencephalographic parameters and cognitive assessment scores — providing valuable translational data that strengthens the preclinical narrative.</p><h3>Why Researchers Choose Semax</h3><p>Semax is the gold standard for studying neurotrophic factor modulation in experimental systems. Its well-established ability to elevate BDNF and NGF, combined with demonstrated neuroprotective activity across multiple injury models and supporting clinical data, makes it uniquely positioned in neuroscience research. The Pro-Gly-Pro modification ensures stability that researchers can count on, experiment after experiment.</p>`,
    properties: {
      chemicalFormula: "C37H51N9O10S",
      synonyms:
        "L-Methionyl-L-α-glutamylhistidyl-L-phenylalanyl-L-prolylglycyl-L-proline, (Pro8,Gly9,Pro10)ACTH-(4-10)",
      molarMass: "813.9 g/mol",
      casNumber: "80714-61-0",
      pubchemId: "9811102",
      activeIngredient: "30mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  dsip: {
    longDescription:
      `<p>Sleep science has long fascinated researchers, and few compounds have contributed more to our understanding of sleep architecture than DSIP. First isolated from rabbit brain venous blood in 1977, this naturally occurring nonapeptide has since been found throughout the human body — in plasma, cerebrospinal fluid, and even breast milk. Its pleiotropic effects on sleep, stress physiology, and neuroendocrine regulation continue to attract serious scientific attention decades after its discovery.</p><h3>What is DSIP?</h3><p>Delta Sleep-Inducing Peptide (DSIP) is a nine-amino-acid peptide (Trp-Ala-Gly-Gly-Asp-Ala-Ser-Gly-Glu) discovered by Swiss researchers Monnier and Schönenberger. It's found endogenously in the hypothalamus, pituitary gland, and peripheral organs — its widespread distribution hinting at the breadth of biological systems it touches. Named for its founding observation — the induction of delta (slow-wave) sleep in rabbits — DSIP has proven to be far more than a sleep molecule.</p><h3>Research Highlights</h3><p>DSIP's mechanisms remain an active area of investigation, and that's part of what makes it so interesting. Rather than acting through a single dedicated receptor, research suggests the peptide interacts with multiple neurotransmitter systems — noradrenergic, serotonergic, and opioidergic pathways all appear to be involved. Studies in animal models have demonstrated that DSIP modulates limbic system structures critical to sleep-wake cycle regulation.</p><p>The foundational research demonstrated that DSIP administration in rabbits produced measurable increases in slow-wave sleep, and subsequent studies have expanded the picture dramatically. Research has documented modulation of circadian corticosterone secretion patterns and growth hormone pulsatility following DSIP administration. In stress models, the compound has shown the ability to attenuate stress-induced physiological markers in treated animals compared to controls — suggesting a role that extends well beyond sleep into stress resilience.</p><p>Studies on DSIP-like peptides have also demonstrated neuroprotective effects in models of cerebral and cardiac ischemia, as reported in peer-reviewed literature, further expanding the research applications of this versatile compound. The peptide's influence on the hypothalamic-pituitary-adrenal (HPA) axis — affecting both corticotropin and somatotropin release patterns — adds yet another dimension to its studied biology.</p><h3>Why Researchers Choose DSIP</h3><p>DSIP is uniquely positioned at the intersection of sleep biology, stress physiology, and neuroendocrinology — three areas that are increasingly understood to be deeply interconnected. Its endogenous origin and widespread tissue distribution suggest fundamental biological relevance, while its multi-system activity makes it an ideal compound for researchers investigating how these critical physiological domains communicate and interact.</p>`,
    properties: {
      chemicalFormula: "C35H48N10O15",
      synonyms:
        "Emideltide, DELTA SLEEP-INDUCING PEPTIDE, TRP-ALA-GLY-GLY-ASP-ALA-SER-GLY-GLU",
      molarMass: "848.8 g/mol",
      casNumber: "62568-57-4",
      pubchemId: "68816",
      activeIngredient: "2mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [
      {
        title:
          "DSIP-Like KND Peptide Reduces Brain Infarction in C57Bl/6 and Reduces Myocardial Infarction in SD Rats When Administered during Reperfusion",
        authors:
          "Tukhovskaya, E. A., Shaykhutdinova, E. R., Ismailova, A. M., et al. (2021)",
        journal: "Biomedicines, 9(4), 407",
        url: "https://pubmed.ncbi.nlm.nih.gov/33918965/",
      },
      {
        title:
          "Phosphorylated delta sleep inducing peptide restores spatial memory and p-CREB expression by improving sleep architecture at high altitude",
        authors: "Roy, K., Chauhan, G., Kumari, P., et al. (2018)",
        journal: "Life sciences, 209, 282-290",
        url: "https://pubmed.ncbi.nlm.nih.gov/30107169/",
      },
    ],
  },
  "cjc-1295-dac": {
    longDescription:
      `<h3>Molecular Profile</h3><p>CJC-1295 with DAC (CAS 446262-90-4; MW ~3367.9 g/mol; empirical formula C₁₅₂H₂₅₂N₄₄O₄₂) is a synthetic 29-residue analog of human GHRH(1-44)-NH₂ carrying a Drug Affinity Complex (DAC) modification. The DAC consists of a maleimido-propanoyl (MPA) group attached via a lysine side chain at position 32 (GRF sequence numbering); the maleimide reacts via Michael addition with the free thiol of Cys34 on circulating albumin, forming a covalent albumin-peptide conjugate (half-life of the ester linkage ~t₁/₂ ~24–48 h hydrolysis under physiological conditions). Albumin conjugation extends the apparent serum half-life to approximately 6–8 days in humans (Teichman et al., J Clin Endocrinol Metab 2006), converting a peptide with a minutes-scale half-life into a long-acting depot. The peptide backbone retains full agonist activity at the growth hormone-releasing hormone receptor (GHRHR; also GHRH-R), a class B1 Gαs-coupled GPCR expressed on pituitary somatotrophs. GHRHR activation stimulates adenylyl cyclase → cAMP elevation → PKA activation → GH gene transcription and pulsatile GH secretion. Downstream, GH binds GHR (growth hormone receptor) on hepatocytes, activating JAK2/STAT5 and PI3K/Akt pathways to drive IGF-1 (Insulin-like Growth Factor-1) synthesis. The four point mutations in the GHRH(1-29) core (Ala²→D-Ala², Gln⁸→Ala⁸ or Abu⁸, Asp¹⁵→Glu¹⁵, Asn²⁷→Arg²⁷) resist DPP-IV cleavage. No EC50 for GHRHR activation by CJC-1295-DAC has been published in isolation, though parent GRF analogs show EC50 values in the low nM range in pituitary cell assays.</p><h3>Published Data</h3><p>Teichman et al. (J Clin Endocrinol Metab, 2006) reported the primary clinical pharmacology data: a single SC dose in healthy adults (n=65, ages 21–61) produced dose-dependent plasma GH and IGF-1 elevation, with GH AUC increases of 2–10-fold and IGF-1 increases persisting for up to 14 days at higher doses; GH mean concentration increases of 3.3-fold at 1 µg/kg. The pulsatile nature of GH release was preserved. Adverse events were mild: transient facial flushing, injection site reactions, and headache. Body composition studies in animal models (rodents and non-human primates) have shown dose-dependent lean mass changes versus controls, attributed to sustained IGF-1 elevation activating PI3K/Akt/mTOR; these data are not reproduced in human trials. Antibody formation to the peptide was not observed in the Teichman cohort, consistent with the small size and natural GHRH sequence homology. No Phase III trials or long-term safety studies in humans have been published.</p><h3>Research Relevance</h3><p>CJC-1295 with DAC is used in research requiring prolonged, sustained GHRH receptor stimulation without repeated dosing, enabling studies of chronic GH/IGF-1 axis activation, somatotroph desensitization or reserve, and downstream JAK2/STAT5 and PI3K/Akt pathway dynamics. Its pharmacokinetic profile is well-characterized in humans for a single-dose model. Researchers should note that sustained GH elevation differs mechanistically from pulsatile physiology; somatostatin feedback suppression may be altered under continuous GHRHR stimulation. Classified for research use only; not approved for therapeutic use in the United States.</p>`,
    properties: {
      chemicalFormula: "C152H252N44O42",
      synonyms: "CJC1295 Without DAC, CJC1295 With DAC, 446262-90-4",
      molarMass: "3367.9 g/mol",
      casNumber: "446262-90-4",
      pubchemId: "91976842",
      activeIngredient: "2mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "cjc-1295-no-dac": {
    longDescription:
      `<h3>Molecular Profile</h3><p>CJC-1295 without DAC (Modified GRF(1-29); Mod-GRF 1-29; shares CAS 446262-90-4 with the DAC variant in some databases; MW ~3367.9 g/mol) is the 29-residue GHRH analog comprising the same four-substitution backbone as the DAC variant — D-Ala at position 2, Ala (or Abu) at position 8, Glu at position 15, and Arg at position 27 relative to native GHRH(1-44) — but without the maleimidopropanoyl (MPA)/DAC linker. The absence of the DAC modification means the peptide does not bind albumin and retains a short plasma half-life (~30 min in rodents), consistent with DPP-IV-resistant but otherwise peptidase-susceptible kinetics. The molecular target is GHRHR, the same Gαs-coupled class B1 GPCR as for the DAC variant. GHRHR activation drives cAMP production via adenylyl cyclase → PKA → CREB phosphorylation → GH gene transcription and GH secretory granule exocytosis from somatotrophs. The short half-life produces transient, pulsatile GH release that more closely approximates the endogenous GHRH secretory pattern (~90-minute pulse intervals in humans) compared to the CJC-1295-DAC preparation. Downstream JAK2/STAT5 activation at GHR drives hepatic IGF-1 synthesis; co-administration with GHS-R1a agonists (ghrelin receptor agonists) acts synergistically through independent receptor pathways at somatotrophs (Bowers, J Clin Endocrinol Metab 1998).</p><h3>Published Data</h3><p>Direct clinical data for Mod-GRF(1-29) specifically is sparse; most human pharmacology data for GHRH analogs comes from Sermorelin (GHRH 1-29-NH₂) and the DAC-containing CJC-1295. Teichman et al. (J Clin Endocrinol Metab, 2006) characterized the DAC variant in humans, providing the reference pharmacology. Rodent studies of Mod-GRF(1-29) have reported dose-dependent GH and IGF-1 elevation with peak GH at 15–30 min and return to baseline within 2–3 h post-administration. Frohman et al. (J Clin Invest, 1984) characterized GHRH(1-29)-NH₂ pharmacokinetics in humans, establishing the rapid plasma clearance of unmodified GHRH and providing the baseline for understanding stabilization effects. Synergistic GH release with ghrelin/GHS-R1a agonists has been documented in rodents and humans for GHRH+GHRP combinations (Bowers et al., J Clin Endocrinol Metab 1998), though these studies used native GHRH rather than Mod-GRF(1-29) specifically. No published Phase I/II trials exist for Mod-GRF(1-29) alone in humans.</p><h3>Research Relevance</h3><p>Mod-GRF(1-29)/CJC-1295-no-DAC is used in research where pulsatile GH secretion profiles are required, as opposed to the sustained elevation produced by the DAC variant. It provides GHRHR agonism with short-duration pharmacodynamics suitable for studies of GH pulse architecture, pituitary reserve testing, and combination experiments with GHS-R1a agonists (e.g., GHRP-6, Ipamorelin). The compound is appropriate for investigators comparing physiological versus pharmacological GH axis stimulation paradigms. The limited direct human PK/PD data is a gap in the literature. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C152H252N44O42",
      synonyms: "CJC1295 Without DAC, CJC1295 With DAC",
      molarMass: "3367.9 g/mol",
      casNumber: "446262-90-4",
      pubchemId: "91976842",
      activeIngredient: "2mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  ipamorelin: {
    longDescription:
      `<p>Ipamorelin earned a distinction that no growth hormone secretagogue before it could claim: it was the first to stimulate robust GH release while leaving cortisol and prolactin virtually untouched. That selectivity wasn't just a scientific curiosity — it was a breakthrough that redefined what researchers could study about the ghrelin receptor system without the confounding effects of off-target hormone stimulation. Today, Ipamorelin remains the gold standard for selective GH secretagogue research.</p><h3>What is Ipamorelin?</h3><p>Ipamorelin is a synthetic pentapeptide and highly selective growth hormone secretagogue (GHS) that acts as an agonist at the ghrelin receptor (GHSR-1a). Developed in the late 1990s, it represented a major leap forward from earlier GH secretagogues like GHRP-6, which stimulated not only growth hormone but also cortisol and prolactin at effective concentrations. Ipamorelin's clean pharmacological profile — potent GH release with minimal hormonal side effects — made it an immediate favorite in neuroendocrine research.</p><h3>Research Highlights</h3><p>The landmark studies that established Ipamorelin's selectivity remain some of the most cited papers in GH secretagogue research. Investigators demonstrated that at doses producing robust GH release, Ipamorelin did not significantly stimulate ACTH, cortisol, or prolactin — a profile that was unprecedented among synthetic GH secretagogues. This selectivity has been attributed to its specific binding kinetics at the GHSR-1a receptor, activating PLC and PKC signaling cascades that drive GH secretion without engaging the pathways responsible for off-target hormone release.</p><p>Beyond neuroendocrinology, Ipamorelin has made an unexpected mark in gastrointestinal research. Preclinical studies in rodent models of postoperative ileus demonstrated that the compound produced significant improvements in gastric emptying rates, revealing the ghrelin receptor's role in GI motility regulation — a finding that opened an entirely new research direction.</p><p>Combination research with CJC-1295 has documented synergistic GH-releasing effects in animal models, supporting complementary GHRHR/GHSR-1a co-stimulation as a powerful research paradigm. Dose-response studies in rats have confirmed that Ipamorelin induces GH pulses at low concentrations, with effects approaching those of GHRH itself — remarkable for a synthetic compound.</p><h3>Why Researchers Choose Ipamorelin</h3><p>Selectivity is everything in receptor pharmacology research, and Ipamorelin delivers it in spades. Its clean GH-releasing profile — without the cortisol and prolactin confounders that complicate data from GHRP-6 and GHRP-2 — means researchers can study GH axis stimulation in isolation. Combined with its well-documented synergy with GHRH analogs and its surprising utility in GI research, Ipamorelin is one of the most versatile and reliable GH secretagogues available.</p>`,
    properties: {
      chemicalFormula: "C38H49N9O5",
      synonyms:
        "2-Methylalanyl-L-histidyl-3-(2-naphthyl)-D-alanyl-D-phenylalanyl-L-lysinamide, CHEMBL58547, DB12370",
      molarMass: "711.9 g/mol",
      casNumber: "170851-70-4",
      pubchemId: "20754357",
      activeIngredient: "2mg per vial",
      shelfLife: "36 months",
    },
    studies: [
      {
        title:
          "Ipamorelin, the first selective growth hormone secretagogue",
        authors: "Kirsten Raun et al.",
        journal: "European Journal of Endocrinology (1998) 139 552-561",
        url: "https://www.researchgate.net/publication/13437588_Ipamorelin_the_first_selective_growth_hormone_secretagogue",
      },
      {
        title:
          "Efficacy of ipamorelin, a ghrelin mimetic, on gastric dysmotility in a rodent model of postoperative ileus",
        authors: "Beverley Greenwood-Van Meerveld et al.",
        journal: "J Exp Pharmacol. 2012; 4: 149-155",
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4863553/",
      },
      {
        title:
          "Do growth hormone-releasing peptides act as ghrelin secretagogues?",
        authors: "Ahnfelt-Rønne, I., Nowak, J. & Olsen, U.B.",
        journal: "Endocr 14, 133-135 (2001)",
        url: "https://link.springer.com/article/10.1385/ENDO:14:1:133",
      },
    ],
  },
  sermorelin: {
    longDescription:
      `<p>Sermorelin holds a special place in growth hormone research — it's one of the most extensively studied GHRH analogs in scientific history, with data spanning both preclinical animal studies and controlled human clinical investigations. As the biologically active fragment of natural GHRH, it offers something that exogenous growth hormone cannot: GH stimulation that remains under the body's own physiological controls. That distinction has made it indispensable for researchers studying how the GH axis actually works.</p><h3>What is Sermorelin?</h3><p>Sermorelin is a synthetic peptide consisting of the first 29 amino acids of endogenous growth hormone-releasing hormone (GHRH 1-29-NH2) — the biologically active fragment of the full 44-amino-acid molecule. Developed in the 1970s, it acts as a direct agonist at the GHRH receptor (GHRHR) on pituitary somatotrophs. Its pharmacological profile closely resembles natural GHRH, but with improved stability for experimental use — giving researchers a practical tool that faithfully represents physiological GH axis stimulation.</p><h3>Research Highlights</h3><p>What makes Sermorelin fundamentally different from exogenous growth hormone is feedback preservation. The GH release stimulated by Sermorelin remains subject to normal negative feedback mechanisms, including somatostatin inhibition — meaning the pituitary retains physiological regulation of the GH axis. This is a critical distinction for research, because it means Sermorelin-stimulated GH dynamics actually reflect how the axis functions naturally.</p><p>Clinical studies have demonstrated measurable increases in plasma GH and IGF-1 concentrations in adult research subjects, with effects remaining under physiological regulatory controls. Long-term studies in aged animals have reported improvements in lean body mass, bone mineral density, and lipid profiles compared to untreated controls — providing a rich dataset for metabolic and aging researchers.</p><p>The compound has also served as a diagnostic research tool, helping investigators distinguish between hypothalamic and pituitary causes of GH deficiency by assessing pituitary GH secretory capacity directly. And studies examining sleep architecture in animal models have reported increases in slow-wave sleep duration — consistent with the well-established relationship between GH secretion and sleep physiology.</p><h3>Why Researchers Choose Sermorelin</h3><p>Sermorelin's decades-long track record of published research, combined with its unique ability to stimulate physiologically regulated GH release, makes it the benchmark GHRH analog. For investigators studying age-related GH decline, metabolic function, or pituitary physiology, Sermorelin provides the most physiologically relevant stimulation available — with the publication history to back every experimental design.</p>`,
    properties: {
      chemicalFormula: "C149H246N44O42S",
      synonyms:
        "UNII-89243S03TE, Sermoreline, Sermorelinum, Growth Hormone Releasing Factor (GRF) (1-29) amide",
      molarMass: "3357.9 g/mol",
      casNumber: "86168-78-7",
      pubchemId: "16132413",
      activeIngredient: "2mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  tesamorelin: {
    longDescription:
      `<p>Tesamorelin represents the cutting edge of GHRH analog engineering — a full-length 44-amino-acid GHRH sequence fortified with a trans-3-hexenoic acid modification that makes it one of the most stable and potent GHRH receptor agonists available to researchers. Its well-characterized effects on body composition and the somatotropic axis, supported by robust clinical research data, have made it a go-to compound for investigators studying the metabolic consequences of GH axis stimulation.</p><h3>What is Tesamorelin?</h3><p>Tesamorelin is a synthetic GHRH analog with a clever structural enhancement: a trans-3-hexenoic acid moiety attached to the N-terminus protects the peptide from dipeptidyl peptidase IV (DPP-IV) degradation — the enzymatic process that rapidly inactivates native GHRH in circulation. This single modification dramatically extends the compound's half-life while preserving its full GHRH receptor agonist activity, making it one of the most stable GHRH analogs available for research.</p><h3>Research Highlights</h3><p>Tesamorelin's research profile is anchored by strong clinical data. Studies have documented dose-dependent increases in plasma GH and IGF-1 concentrations, and the GH release pattern retains physiological pulsatility subject to somatostatin feedback regulation — meaning it stimulates the axis without overriding its natural controls.</p><p>Where Tesamorelin has generated particular research excitement is in body composition studies. Clinical research has demonstrated statistically significant reductions in visceral adipose tissue measurements compared to placebo in controlled study populations — establishing it as a powerful pharmacological tool for investigating how GH axis stimulation affects lipid metabolism. These aren't subtle findings; the body composition data has been among the most robust in the GHRH analog research space.</p><p>More recently, cognitive function research has added another dimension to Tesamorelin's profile. Investigators have reported associations between Tesamorelin-induced GH elevation and improvements in executive function and memory performance metrics in study subjects — an intriguing finding that highlights the far-reaching effects of somatotropic axis modulation and opens new research frontiers.</p><h3>Why Researchers Choose Tesamorelin</h3><p>Tesamorelin combines three qualities that researchers value: exceptional stability (thanks to the DPP-IV-resistant modification), clinical-grade pharmacological data, and demonstrated effects on quantifiable endpoints like visceral adipose tissue and IGF-1 levels. For studies requiring a potent, long-acting GHRH agonist with a proven track record in human research settings, Tesamorelin is the premium choice.</p>`,
    properties: {
      chemicalFormula: "C221H366N72O67S",
      synonyms:
        "Egrifta Tesamorelin, UNII-MQG94M5EEO, MQG94M5EEO, 804475-66-9",
      molarMass: "5136.86 g/mol",
      casNumber: "218949-48-5",
      pubchemId: "16137828",
      activeIngredient: "2 mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "ghrp-6": {
    longDescription:
      `<h3>Molecular Profile</h3><p>GHRP-6 (His-D-Trp-Ala-Trp-D-Phe-Lys-NH₂; CAS 87616-84-0; MW 873.0 g/mol; C₄₆H₅₆N₁₂O₆) is a synthetic hexapeptide growth hormone secretagogue (GHS) and ghrelin mimetic. It was among the first synthetic GH secretagogues identified (Bowers et al., Endocrinology 1980) and has historically served as a primary pharmacological tool in establishing the existence and distribution of the ghrelin receptor (GHS-R1a; GHSR gene product; also designated CD366). GHS-R1a is a Gq/11-coupled GPCR expressed in pituitary somatotrophs, hypothalamic arcuate nucleus, and peripheral tissues including heart and liver. GHRP-6 binds GHS-R1a with a Ki of approximately 10–40 nM (Howard et al., Science 1996), activating phospholipase C (PLC) β → IP₃/DAG → intracellular Ca²⁺ release (ER stores) → PKC activation → GH secretory granule exocytosis. GHRP-6 also acts centrally on hypothalamic GHRH neurons to potentiate GHRH release, contributing to a dual-site pituitary mechanism. Unlike the selective GHS-R1a agonist Ipamorelin, GHRP-6 produces concomitant elevation of ACTH, cortisol, and prolactin at GH-releasing concentrations in humans (Arvat et al., J Clin Endocrinol Metab 1997), reflecting CRH pathway engagement in addition to GHS-R1a-mediated effects. No IC50 for GHS-R1a has been published for GHRP-6; the Ki range listed above comes from receptor-binding competition assays in transfected cell lines.</p><h3>Published Data</h3><p>Bowers et al. (Endocrinology, 1980) first described synthetic hexapeptides stimulating GH release from pituitary cells, establishing the GHS pharmacological class. Howard et al. (Science, 1996) cloned and characterized GHS-R1a as the endogenous receptor for the GHS class, using GHRP-6 as a key ligand in the deorphanization process. Arvat et al. (J Clin Endocrinol Metab, 1997) reported human GH, ACTH, cortisol, and prolactin responses to GHRP-6 (1 µg/kg IV and SC): GH peaked at ~50 ng/mL at 15–30 min; ACTH increased ~2-fold; cortisol increased ~1.5-fold. Pong et al. (Mol Endocrinol, 1996) characterized GHS-R1a distribution and confirmed pituitary expression. Cardiac protection studies: Isgaard et al. (Cardiovasc Res, 1994) reported reduced infarct volume in rat ischemia-reperfusion models with GHS treatment; mechanistic attribution to GHS-R1a vs. indirect GH effects was not fully resolved. The cortisol/ACTH co-stimulation with GHRP-6 is a documented confounder in metabolic experiments; Ipamorelin was developed specifically to address this limitation (Raun et al., Eur J Endocrinol 1998).</p><h3>Research Relevance</h3><p>GHRP-6 remains the reference GHS compound for GHS-R1a pharmacology given its historical role in receptor identification and extensive published dataset. It is appropriate for studies requiring full-spectrum GHS-R1a agonism or for comparative experiments against more selective secretagogues (Ipamorelin, GHRP-2). The co-stimulation of ACTH/cortisol/prolactin pathways must be controlled for in studies where these hormones are endpoints or confounders. GHRP-6 also activates the orexigenic pathway via hypothalamic NPY/AgRP neurons (GHSR-1a-mediated), making it a pharmacological tool for feeding behavior and energy homeostasis research in rodent models. Classified for research use only; no approved human therapeutic indication.</p>`,
    properties: {
      chemicalFormula: "C46H56N12O6",
      synonyms: "Growth hormone releasing hexapeptide, UNII-4H7N4I6X6A",
      molarMass: "873.0 g/mol",
      casNumber: "87616-84-0",
      pubchemId: "9919153",
      activeIngredient: "5mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "ghrp-2": {
    longDescription:
      `<h3>Molecular Profile</h3><p>GHRP-2 (Pralmorelin; D-Ala-D-β-Nal-Ala-Trp-D-Phe-Lys-NH₂; CAS 158861-67-7; MW 817.99 g/mol; C₄₅H₅₅N₉O₆) is a synthetic hexapeptide growth hormone secretagogue and agonist at the ghrelin receptor GHS-R1a (GHSR gene product), a Gαq/11-coupled GPCR expressed on pituitary somatotrophs, hypothalamic arcuate nucleus neurons, and peripheral tissues. GHRP-2 binds GHS-R1a with higher affinity than GHRP-6; published competition binding assays report an IC₅₀ of approximately 0.3–1 nM in transfected CHO or COS-7 cell lines (Deghenghi et al., Biol Signals 1996). Receptor activation drives phospholipase Cβ → IP₃/DAG → intracellular Ca²⁺ release from ER stores → PKC activation → GH secretory granule exocytosis from somatotrophs. Unlike the selective GHS-R1a agonist Ipamorelin, GHRP-2 concomitantly elevates ACTH, cortisol, and prolactin at GH-releasing concentrations, an effect attributed to CRH-independent pathways involving hypothalamic GHS-R1a stimulation. A specific high-affinity collagen-related receptor has been proposed in fibroblast models (separate from GHS-R1a) based on collagen synthesis assay readouts at GHRP-2 concentrations insufficient to fully saturate GHS-R1a, but this receptor has not been cloned or definitively characterized.</p><h3>Published Data</h3><p>Bowers et al. (Endocrinology, 1980) characterized the founding GHS compound class; GHRP-2 was subsequently developed as a second-generation analog with enhanced GHS-R1a affinity. Arvat et al. (J Clin Endocrinol Metab, 1997) reported human pharmacodynamics: IV GHRP-2 (1 µg/kg) produced peak GH of ~70–80 ng/mL at 15–30 min, exceeding GHRP-6 at equivalent dose; ACTH rose approximately 2-fold and cortisol 1.5-fold. The Japanese Ministry of Health approved Pralmorelin (GHRP-2) as a diagnostic agent for GH secretory reserve testing (KP-102, Kaken Pharmaceutical), providing a controlled human PK/PD dataset. Svensson et al. (Eur J Endocrinol, 2000) compared GHRP-2 with GHRH in GHD patients, documenting robust GH response in pituitary-sufficient subjects. Collagen synthesis data from in vitro fibroblast studies (Sato et al., J Dermatol Sci, 2009) documented increased COL1A1 mRNA in treated cultures; this was not replicated with GHS-R1a-deficient cells, and a GHS-R1a-independent receptor mechanism was proposed but not validated in knock-out models. Bone density studies in rats (Svensson et al., 2000) reported increased bone mineral density markers versus controls, attributed to GH-driven IGF-1/PI3K/Akt/mTOR signaling at the osteoblast level.</p><h3>Research Relevance</h3><p>GHRP-2 is used as a reference GHS-R1a agonist with higher receptor affinity than GHRP-6, suitable for comparative pharmacology studies of GH secretagogue potency and somatotroph reserve testing paradigms. Its established human diagnostic use in Japan provides well-characterized pharmacodynamic data. The co-stimulation of ACTH/cortisol/prolactin axes must be controlled for in studies where these hormones are endpoints. The proposed collagen-synthesis receptor (separate from GHS-R1a) requires validation in genetic models before mechanistic attribution. Classified for research use only; not approved for therapeutic use in the United States.</p>`,
    properties: {
      chemicalFormula: "C45H55N9O6",
      synonyms:
        "Pralmorelin, KP-102, D-Alanyl-3-(2-naphthyl)-D-alanyl-L-alanyl-L-tryptophyl-D-phenylalanyl-L-lysinamide, UNII-E6S6E1F19M",
      molarMass: "817.9865 g/mol",
      casNumber: "158861-67-7",
      pubchemId: "6918245",
      activeIngredient: "5mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  hexarelin: {
    longDescription:
      `<p>Hexarelin holds a dual distinction in GH secretagogue research: it's the most potent compound in the GHRP family for stimulating growth hormone release, AND it's the only one with well-documented activity at the CD36 scavenger receptor — a completely separate receptor involved in cardiovascular function and lipid metabolism. This unique dual-receptor profile has made Hexarelin an irreplaceable tool for researchers working at the intersection of neuroendocrinology and cardiovascular biology.</p><h3>What is Hexarelin?</h3><p>Hexarelin (Examorelin) is a synthetic hexapeptide derived from GHRP-6 with a single but impactful modification: a 2-methyltryptophan substitution that significantly enhances its potency at the GHSR-1a (ghrelin) receptor. This makes it the most potent GH-releasing compound in the synthetic secretagogue family, surpassing both GHRP-6 and GHRP-2 in comparative studies. But what truly sets Hexarelin apart is its interaction with the CD36 scavenger receptor — a pattern recognition receptor involved in lipid uptake and cardiac signaling.</p><h3>Research Highlights</h3><p>At the GHSR-1a receptor, Hexarelin activates the familiar Gq/11-coupled PLC signaling cascade, but with enhanced binding affinity that translates to the highest GH release per dose among the GHRP series in both rodent and human research models. Comparative pharmacology studies have consistently confirmed this potency advantage across multiple experimental paradigms.</p><p>The CD36 story is where things get truly interesting. Cardiovascular research has demonstrated that Hexarelin reduces infarct size in experimental cardiac ischemia models — and the mechanism is independent of GH secretion. This was confirmed in GH-deficient animal models, proving that the cardioprotective effects operate through CD36-mediated pathways. Studies have reported upregulation of PI3K/Akt signaling — a key cell survival pathway — in cardiomyocyte cultures and animal heart preparations following Hexarelin treatment.</p><p>Research in metabolic models has further documented Hexarelin's effects on adipogenesis and lipid metabolism pathways through CD36 receptor interactions, expanding its research utility into metabolic biology and adding yet another dimension to an already remarkable pharmacological profile.</p><h3>Why Researchers Choose Hexarelin</h3><p>No other compound in the GH secretagogue family offers what Hexarelin does: maximum GH-releasing potency combined with GH-independent cardiovascular receptor activity. For researchers who need to dissect GH-dependent versus GH-independent effects of ghrelin receptor agonism, or who are investigating CD36-mediated cardiac and metabolic signaling, Hexarelin is uniquely and irreplaceably positioned. It's not just the most potent GHRP — it's the most scientifically versatile.</p>`,
    properties: {
      chemicalFormula: "C47H58N12O6",
      synonyms: "Examorelin, EP-23905, UNII-09QF37C617",
      molarMass: "887 g/mol",
      casNumber: "140703-51-1",
      pubchemId: "6918297",
      activeIngredient: "2mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "igf-1-lr3": {
    longDescription:
      `<h3>Molecular Profile</h3><p>IGF-1 LR3 (Long R3 IGF-1; CAS 143045-27-6; MW 9117.6 g/mol; C₄₀₀H₆₂₅N₁₁₁O₁₁₅S₉) is a synthetic 83-amino-acid analog of human IGF-1, incorporating two structural modifications relative to the native 70-residue mature form: (1) a 13-amino-acid N-terminal extension (Met-Lys-Leu-Pro-Ala-Cys-Pro-Ala-Pro-Pro-Ala-Glu-Arg) and (2) an Arg substitution at position 3 of the IGF-1 sequence replacing the native Glu³. Both modifications reduce binding affinity to the six circulating IGF-binding proteins (IGFBP-1 through IGFBP-6) by approximately 100-fold relative to native IGF-1, as characterized by competitive binding assays (Francis et al., J Biol Chem 1992). The Arg³ substitution specifically impairs the IGFBP-3/ALS (acid-labile subunit) ternary complex formation that sequesters >70% of circulating native IGF-1 in vivo. IGF-1 LR3 retains full binding affinity for the IGF-1 receptor (IGF1R), a homodimeric receptor tyrosine kinase (RTK) with an EC₅₀ for IGF-1R activation of approximately 0.5–2 nM in receptor kinase assays; published data indicate LR3 affinity is within 2–3-fold of native IGF-1 at the receptor level. Receptor engagement activates the IRS-1 → PI3K → PDK1 → Akt → mTORC1 and the Shc/Grb2/SOS → Ras → Raf → MEK → ERK1/2 (MAPK) cascades. mTORC1 activation drives phosphorylation of S6K1 (Thr389) and 4E-BP1, promoting 5′-cap-dependent translation. IGF1R also cross-phosphorylates the insulin receptor (IR) at nanomolar concentrations; this should be controlled for in metabolic experiments.</p><h3>Published Data</h3><p>Francis et al. (J Biol Chem, 1992) originally characterized LR3 IGFBP binding kinetics and established the 100-fold reduction in IGFBP affinity. Cascieri et al. (J Biol Chem, 1988) established IGF1R binding affinity for the IGF-1 series; LR3 receptor affinity data is largely consistent across subsequent studies. In cell culture systems, IGF-1 LR3 at 10–100 nM produces sustained Akt (Ser473) and ERK1/2 phosphorylation over 24–48 h, compared to more transient activation by equimolar native IGF-1 in IGFBP-containing serum — attributed to reduced sequestration rather than intrinsically different receptor kinetics. Rodent studies using SC administration in hypophysectomized animals documented dose-dependent lean mass accrual and tibial epiphysis width (Tanner, Growth Regul 1990). Myostatin (GDF-8) pathway interaction: IGF-1R→PI3K/Akt signaling phosphorylates and inactivates FoxO1/FoxO3, which are transcriptional activators of Atrogin-1/MAFbx and MuRF-1 ubiquitin ligases; this reduces proteolytic flux but does not directly suppress GDF-8 gene transcription. Claims of direct myostatin suppression are not well-supported by primary published data. No human clinical trials with IGF-1 LR3 have been published; published data is exclusively in vitro or rodent.</p><h3>Research Relevance</h3><p>IGF-1 LR3 is the standard tool for studying IGF1R-mediated signaling in cell culture systems where endogenous IGFBPs in serum would otherwise confound results by sequestering native IGF-1. Its reduced IGFBP binding allows researchers to study PI3K/Akt/mTOR and MAPK/ERK downstream cascades in a more defined pharmacological environment. Cross-reactivity with IR at higher concentrations must be controlled for in insulin signaling experiments. The extended bioavailability in vivo (plasma half-life ~20–30 h versus ~10 min for native IGF-1) is useful for chronic dosing paradigms in animal models. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C400H625N111O115S9",
      synonyms:
        "Long R3-IGF-1, M9L22Y19H9, 143045-27-6, Long-(arg3)insulin-like growth factor-i",
      molarMass: "9117.60 g/mol",
      casNumber: "143045-27-6",
      pubchemId: "381123731",
      activeIngredient: "1mg per vial",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "igf-1-des": {
    longDescription:
      `<h3>Molecular Profile</h3><p>IGF-1 DES (Des(1-3)-IGF-1; CAS 112603-35-7; MW ~7,649 g/mol; C₃₁₉H₅₀₁N₉₁O₉₆S₇) is an endogenous truncated variant of human IGF-1 lacking the N-terminal tripeptide Gly-Pro-Glu (residues 1–3 of the mature sequence), resulting in a 67-residue protein. The truncated form is produced naturally by proteolytic processing in brain tissue, colostrum, and other tissues; it was first isolated from human brain by Ballard et al. (Biochem J, 1987). The loss of residues 1–3 disrupts a primary determinant of IGFBP-1, IGFBP-2, and IGFBP-3 binding: competition binding assays report IGF-1 DES IGFBP affinity reduced approximately 10-fold relative to native IGF-1 (Ballard et al., 1987; Gilmour et al., J Mol Endocrinol 1999). At the IGF-1 receptor (IGF1R), a receptor tyrosine kinase with intrinsic kinase domain, IGF-1 DES binds with affinity within 2–5-fold of native IGF-1 in most published assays; some cell-based receptor activation studies report slightly higher potency for DES under IGFBP-containing serum conditions, attributable to reduced sequestration rather than higher intrinsic receptor affinity. Published EC₅₀ estimates for IGF1R activation by IGF-1 DES range from 0.5 to 5 nM depending on assay format (cell line, serum concentration, endpoint). Receptor engagement activates IRS-1 → PI3K → Akt (Ser473) → mTORC1 and Ras/Raf → MEK → ERK1/2 cascades, identical mechanistically to native IGF-1. IGF-1 DES does not bind the insulin receptor (IR) with meaningful affinity at physiological concentrations.</p><h3>Published Data</h3><p>Ballard et al. (Biochem J, 1987) first characterized IGF-1 DES in human brain tissue, described its reduced IGFBP binding, and documented preserved IGF1R bioactivity in cartilage bioassays. Gilmour et al. (J Mol Endocrinol, 1999) reported comparative IGFBP binding kinetics for native IGF-1, IGF-1 DES, and LR3 in a systematic competition binding study. Muscle-specific studies: Adams & McCue (J Appl Physiol, 1998) documented localized IGF-1 isoform mRNA (including DES-equivalent splice variants) expression in hypertrophying rodent muscle tissue, proposing paracrine signaling roles; however, this study used in situ hybridization for the Ea and Eb mRNA splice variants, not recombinant Des(1-3)-IGF-1 protein directly. Neuronal data: Russo et al. (J Neurosci Res, 2004) examined IGF-1 DES in neuroblastoma cell models, reporting IGF1R-dependent ERK and Akt activation. No controlled human clinical trials with IGF-1 DES have been published. The mechanistic distinction between IGFBP-reduced bioavailability in paracrine versus endocrine signaling is a working hypothesis supported by in vitro data, not established by direct in vivo experimentation with recombinant protein in most published studies.</p><h3>Research Relevance</h3><p>IGF-1 DES is a useful tool for studying IGF1R signaling in cell systems where IGFBP interference is to be minimized without the N-terminal extension of LR3. Its endogenous origin and natural occurrence in brain and colostrum make it relevant to developmental and neuroscience contexts where the physiological truncated form is the object of study. The compound is most informative when directly compared against native IGF-1 under equivalent IGFBP-containing conditions, to isolate the effect of reduced IGFBP binding on receptor pathway activation. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C319H501N91O96S7",
      synonyms:
        "IGF1 Human Des1-3, Insulin-Like Growth Factor 1 Des (1-3) Human Recombinant, Somatomedin C",
      molarMass: "7,649 g/mol",
      casNumber: "112603-35-7",
      pubchemId: "135331146",
      activeIngredient: "1mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "follistatin-344": {
    longDescription:
      `<h3>Molecular Profile</h3><p>Follistatin-344 (FST-344; FST gene product; CAS 100043-71-8) is a 344-amino-acid isoform of human follistatin, a monomeric cysteine-rich glycoprotein belonging to the BMP antagonist family. It arises from alternative splicing of the FST gene, which generates two primary secreted isoforms: FST-288 (lacking exon 6-encoded sequence, with high heparan sulfate proteoglycan binding) and FST-344 (retaining the C-terminal acidic domain, preferentially entering systemic circulation). The protein is structured around a follistatin N-terminal domain (FSD) and three follistatin domains (FSD1–3), each containing 10-cysteine motifs that form a curved binding surface encircling target ligands. FST-344 functions as a high-affinity neutralizing ligand trap for TGF-β superfamily members: its primary targets are myostatin (GDF-8), activin A, activin B, and multiple BMPs. Binding affinities as characterized by surface plasmon resonance (SPR): Kd for activin A ~100 pM (Thompson et al., Mol Cell 2005); Kd for myostatin ~6–10 nM in published assays depending on format (Shi et al., J Biol Chem 2011). Follistatin binding sterically blocks the type I (ALK4/5) and type II (ACVR2A/ACVR2B) receptor contact surfaces on the ligand, preventing signaling complex formation. Inhibition of myostatin via ACVR2B results in reduced downstream phosphorylation of SMAD2/SMAD3 and derepression of PI3K/Akt/mTOR-driven protein synthesis in myotubes. Inhibition of activins at the pituitary level suppresses FSH secretion through disruption of activin-ACVR2A signaling to gonadotroph SMAD2/3 → target gene activation. The FST-344 C-terminal domain reduces heparan sulfate binding relative to FST-288, conferring longer circulating half-life and broader tissue distribution.</p><h3>Published Data</h3><p>McPherron et al. (Nature, 1997) established myostatin (GDF-8) as a negative regulator of skeletal muscle mass; follistatin transgenic overexpression was used in subsequent studies to neutralize GDF-8 in vivo. Lee & McPherron (Proc Natl Acad Sci, 2001) demonstrated that transgenic FST overexpression in mice produced quadrupled skeletal muscle mass by neutralizing both myostatin and activin-related signals, exceeding the muscle phenotype of myostatin-null mice alone. Thompson et al. (Mol Cell, 2005) reported crystal structures of follistatin:activin A complexes and characterized the binding surfaces at atomic resolution, establishing the structural basis for high-affinity ligand trapping. Haidet et al. (Proc Natl Acad Sci, 2008) reported that AAV-mediated FST-344 overexpression in mdx mice (Duchenne muscular dystrophy model) produced measurable increases in muscle mass and grip strength versus controls. Reproductive biology: Bilezikjian et al. (Endocr Rev, 2012) reviewed the extensive FST literature documenting FSH suppression via activin neutralization in pituitary models. FST-344 isoform-specific pharmacology in circulating versus tissue-bound forms was characterized by Kogure et al. (Endocrinology, 1996). No human clinical trials with recombinant FST-344 protein have been published as of 2024.</p><h3>Research Relevance</h3><p>Follistatin-344 is the standard ligand-trap tool for neutralizing myostatin and activin signaling in skeletal muscle biology, reproductive endocrinology, and developmental studies. Its binding of multiple TGF-β superfamily members simultaneously means that experiments must be designed with awareness that effects attributed to myostatin inhibition may also reflect activin A/B or BMP neutralization; co-administration of recombinant myostatin to rescue the phenotype is a common experimental control. The distinction between FST-344 (circulating) and FST-288 (tissue-bound) is relevant for in vivo study design. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C203H317N55O64S1",
      synonyms: "FST, FS, follistatin, activin-binding protein, FS 344, FST344",
      molarMass: "N/A",
      casNumber: "100043-71-8",
      pubchemId: "N/A",
      activeIngredient: "1mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "mots-c": {
    longDescription:
      `<h3>Molecular Profile</h3><p>MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA-c; Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg; CAS 1627580-64-6; MW 2174.6 g/mol; C₁₀₁H₁₅₂N₂₈O₂₂S₂) is a 16-amino-acid mitochondrial-derived peptide (MDP) encoded within the MT-RNR1 gene (12S rRNA gene) of the mitochondrial genome — one of a small class of mitochondria-encoded peptides termed mitochondrial ORF within the ribosomal RNA, or MDPs. It was first characterized by Lee et al. (Cell Metab, 2015). No canonical cell-surface receptor has been identified for MOTS-c. The primary signaling mechanism involves intracellular accumulation and activation of AMPK (AMP-activated protein kinase; PRKAA1/PRKAA2 α-subunit); mechanistic studies indicate MOTS-c interferes with the folate cycle in the one-carbon metabolic network, leading to accumulation of AICAR (5-aminoimidazole-4-carboxamide ribonucleotide), an endogenous AMPK activator (Lee et al., 2015). Published cell-free or receptor binding assays yielding EC₅₀/Kd values for MOTS-c are not available; all potency data is from cell-based AMPK phosphorylation assays. Under metabolic stress conditions, MOTS-c has been observed to translocate from cytoplasm to nucleus, where it co-occupies promoter regions with NRF2 (NFE2L2) and modulates antioxidant response element (ARE)-driven transcription (Kim et al., Nat Commun 2018). AMPK activation downstream suppresses mTORC1 (via TSC2 phosphorylation and RAPTOR phosphorylation), promotes PGC-1α-mediated mitochondrial biogenesis, and increases GLUT4 (SLC2A4) translocation in skeletal muscle cells.</p><h3>Published Data</h3><p>Lee et al. (Cell Metab, 2015) established the founding characterization: MOTS-c improved insulin sensitivity and glucose tolerance in diet-induced obese mice (DIO model); skeletal muscle AICAR accumulation and AMPK Thr172 phosphorylation were documented as mechanistic intermediates. Kim et al. (Nat Commun, 2018) characterized MOTS-c nuclear translocation under oxidative stress and its co-localization with NRF2 at ARE-containing promoters (HMOX1, NQO1) in cell models. Reynolds et al. (Nat Aging, 2021) reported that exogenous MOTS-c administration in aged male and female mice improved physical performance metrics (rotarod, grip strength) compared to vehicle controls; plasma MOTS-c concentrations in humans were also characterized and found to correlate with exercise intensity. Human exercise pharmacology: Guo et al. (Sci Rep, 2020) measured plasma MOTS-c before and after acute exercise in human subjects and reported a statistically significant post-exercise elevation. The mechanistic link between nuclear MOTS-c and specific transcription factor binding has been demonstrated primarily by ChIP assay in cultured cells; independent replication in additional cell types or in vivo models is limited. No Phase I/II clinical trials have been published as of 2024.</p><h3>Research Relevance</h3><p>MOTS-c is used as a research tool for studying mitochondrial retrograde signaling, AMPK pathway activation via the one-carbon/folate metabolic network, and nuclear-mitochondrial crosstalk. Its relevance to exercise physiology and aging research is supported by published rodent and human observational data. The field is nascent: the absence of a cloned surface receptor limits pharmacological classification, and mechanistic studies rely predominantly on indirect metabolite measurements (AICAR accumulation) and cell-based AMPK phosphorylation assays. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C101H152N28O22S2",
      synonyms:
        "Mitochondria-derived peptide, mots-c, EX-A626, Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg",
      molarMass: "2174.6 g/mol",
      casNumber: "1627580-64-6",
      pubchemId: "146675088",
      activeIngredient: "10 mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  oxytocin: {
    longDescription:
      `<p>Oxytocin is one of the most studied neuropeptides in all of neuroscience — and arguably the most famous. From Nobel Prize-winning chemistry to cutting-edge social neuroscience, this nine-amino-acid molecule has been at the center of discoveries that fundamentally changed how we understand social bonding, emotional processing, and neuroendocrine regulation. Its research legacy spans over 70 years and shows no signs of slowing down.</p><h3>What is Oxytocin?</h3><p>Oxytocin is a nonapeptide hormone and neuropeptide synthesized in the hypothalamus and released by the posterior pituitary gland. First isolated and synthesized in the 1950s by Vincent du Vigneaud — who received the Nobel Prize in Chemistry for the achievement in 1955 — it's found across virtually all mammalian species. Far from being a single-function molecule, oxytocin acts throughout the brain and body, engaging a specific G-protein-coupled receptor (OXTR) expressed in reproductive tissues, the limbic system, brainstem, and peripheral organs.</p><h3>Research Highlights</h3><p>The breadth of oxytocin research is staggering. In social neuroscience, functional neuroimaging studies in human subjects have demonstrated that oxytocin administration modulates amygdala reactivity to social and emotional stimuli — providing direct mechanistic evidence for its studied role in social cognition. Animal model research has consistently established its critical role in pair bonding, particularly in prairie voles, where OXTR distribution patterns predict bonding behavior with remarkable accuracy.</p><p>Oxytocin's effects on the stress axis are equally noteworthy. Research examining stress physiology has documented its attenuating effects on HPA axis reactivity, with studies showing reduced corticosterone responses to social stressors in treated animals. This stress-buffering capacity, combined with its social cognition effects, has made oxytocin a central focus of research into how social connection and physiological stress responses interact at the molecular level.</p><p>Beyond behavior, oxytocin research spans reproductive biology (uterine contraction, lactation), pain physiology (antinociceptive properties through spinal cord OXTR signaling), and preclinical models investigating social behavior modulation. Its structural homology with vasopressin (AVP) provides additional research dimensions through cross-reactivity at vasopressin receptors (V1a, V1b, V2).</p><h3>Why Researchers Choose Oxytocin</h3><p>Oxytocin's position as the most extensively studied social neuropeptide, backed by decades of published research across species from rodents to humans, makes it irreplaceable in neuroscience and neuroendocrine research. Its well-characterized receptor system, established intranasal administration paradigms for human studies, and cross-species relevance provide a research infrastructure that few other peptides can match. When the question involves social cognition, bonding, or stress regulation, oxytocin research is the foundation everything else is built on.</p>`,
    properties: {
      chemicalFormula: "C43H66N12O12S2",
      synonyms: "Pitocin, Endopituitrina, Ocytocin",
      molarMass: "1007.2 g/mol",
      casNumber: "50-56-6",
      pubchemId: "439302",
      activeIngredient: "2mg (1 vial), 5mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "thymosin-alpha-1": {
    longDescription:
      `<h3>Molecular Profile</h3><p>Thymosin Alpha-1 (Tα1; Thymalfasin; CAS 62304-98-7; MW 3108.28 g/mol; C₁₂₉H₂₁₅N₃₃O₅₅) is a synthetic 28-amino-acid peptide corresponding to the N-terminal region (residues 1–28) of prothymosin alpha (PTMA), a 110-amino-acid nuclear protein involved in chromatin remodeling. Tα1 was first isolated from bovine thymus by Goldstein et al. (Science, 1977). The peptide is N-terminally acetylated (Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn) and exists as an unstructured peptide in solution. No dedicated Tα1 receptor has been cloned. The primary molecular mechanism involves agonist activity at Toll-like receptor 9 (TLR9) — a pattern recognition receptor on dendritic cells (DCs) and B cells that recognizes unmethylated CpG DNA motifs — and TLR2, as characterized by Garaci et al. (Eur J Clin Invest, 2012) and Romani et al. (J Exp Med, 2004). TLR9/TLR2 engagement activates the MyD88 → IRAK4 → TRAF6 → NF-κB and IRF7 signaling cascade, promoting IL-12p70, IFN-α, and IL-6 secretion by plasmacytoid dendritic cells (pDCs). Tα1 also interacts with toll-like receptor signaling on human NK cells and promotes Th1 polarization by biasing IL-12/IFN-γ production over IL-10/IL-4. Downstream effects on T-cell biology include increased CD4⁺ T-cell differentiation toward Th1 lineage (STAT4-mediated) and modulation of regulatory T-cell (Treg; FoxP3⁺) frequency in some experimental models. No published EC₅₀ or Kd values for Tα1 binding to TLR9 or TLR2 are available from direct biophysical binding assays; mechanistic attribution is based on signaling and cytokine output assays with TLR-deficient cell models.</p><h3>Published Data</h3><p>Goldstein et al. (Science, 1977) first described thymosin alpha-1 isolation and characterized its effects on terminal deoxynucleotidyl transferase (TdT) expression in thymocyte cultures. Romani et al. (J Exp Med, 2004) demonstrated TLR9-dependent IFN-α induction in plasmacytoid DCs by Tα1, establishing the innate immune signaling mechanism. Garaci et al. (Eur J Clin Invest, 2012) provided an extensive mechanistic review covering TLR2/9 engagement, Th1 polarization data, and summarized Italian clinical trials. Clinical data: a multicenter randomized trial in hepatitis B (You et al., J Viral Hepat, 2014, n=200) reported statistically significant increases in HBeAg seroconversion rate in Tα1-treated versus control subjects. A randomized study in advanced non-small-cell lung cancer (NSCLC) subjects (Li et al., Int Immunopharmacol, 2013, n=63) documented changes in CD4⁺/CD8⁺ T-cell ratios and NK cell activity following Tα1 + chemotherapy versus chemotherapy alone. Thymalfasin is approved in multiple Asian and Latin American countries for hepatitis B treatment; it is not approved by the FDA or EMA for any indication. COVID-19 observational data from Chinese hospitals (Liu et al., Clin Infect Dis, 2020) reported associations between Tα1 treatment and mortality in severely ill patients, though these were non-randomized analyses with multiple confounders.</p><h3>Research Relevance</h3><p>Thymosin Alpha-1 is used as an immunomodulatory research tool for studying TLR9/TLR2-driven innate immune signaling, Th1 polarization dynamics, and dendritic cell cytokine programming. Its clinical dataset from hepatitis B trials provides one of the larger human pharmacology databases among research peptides. The absence of a cloned receptor and quantitative binding data (EC₅₀/Kd) is a limitation for mechanistic receptor pharmacology research. Researchers should note that TLR9 agonism has pleiotropic inflammatory consequences; experimental designs should include appropriate cytokine panel controls. Classified for research use only in the United States.</p>`,
    properties: {
      chemicalFormula: "C129H215N33O55",
      synonyms: "Thymalfasin",
      molarMass: "3108.28 g/mol",
      casNumber: "62304-98-7",
      pubchemId: "16130571",
      activeIngredient: "50mg per KIT (5mg per vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "ll-37": {
    longDescription:
      `<h3>Molecular Profile</h3><p>LL-37 (CAS 154947-66-7; MW 4493.3 g/mol; C₂₀₅H₃₄₀N₆₀O₅₃) is a 37-amino-acid cationic amphipathic peptide corresponding to the C-terminal domain of the human cathelicidin precursor protein hCAP-18 (CAMP gene product; UniProt P49913). It is the only cathelicidin produced in humans, cleaved from hCAP-18 by serine protease 3 (PRSS3/kallikrein-related peptidase). The sequence (LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES) adopts a random coil in aqueous solution and an amphipathic α-helix (residues 2–31 approximately) in membrane-mimetic or hydrophobic environments (Wang et al., J Biol Chem 2008). The cationic surface (+6 net charge at physiological pH) mediates electrostatic interaction with anionic bacterial membrane components (LPS, lipoteichoic acid, phosphatidylglycerol) in preference to zwitterionic mammalian membranes. Antimicrobial MIC values: published MIC₈₀ for E. coli ATCC 25922 ~2–8 µM; S. aureus ATCC 29213 ~8–16 µM; P. aeruginosa ~16–64 µM (depending on medium salt concentration, which substantially affects cationic AMP activity). Membrane disruption occurs through toroidal pore formation or detergent-like carpet mechanism; peptide-to-lipid ratio governs mechanism. Beyond antimicrobial function, LL-37 acts as an agonist at formyl peptide receptor 2 (FPR2/FPRL1; EC₅₀ ~0.1–1 µM for Ca²⁺ mobilization in FPR2-transfected cells; Xiao et al., Immunology 2009), transactivates EGFR (ErbB1) through MMP-dependent HB-EGF shedding, activating downstream PI3K/Akt and MAPK/ERK in keratinocytes (Tokumaru et al., J Immunol 2005), and binds purified TLR4 protein to suppress LPS-induced TLR4/MD-2 signaling complex formation (MIC 50% TLR4 inhibition at ~1–3 µM in cell-free assays). LL-37 also activates the P2X7 purinergic receptor at high concentrations, triggering NLRP3 inflammasome assembly.</p><h3>Published Data</h3><p>Zanetti et al. (J Leukoc Biol, 2004) provided a comprehensive review of cathelicidin biology and LL-37 structure-function relationships. Tokumaru et al. (J Immunol, 2005) characterized EGFR transactivation by LL-37 in human keratinocyte cultures and demonstrated FPR2-independent EGFR signaling via metalloprotease-mediated EGF ligand shedding. Xiao et al. (Immunology, 2009) documented FPR2 agonism with EC₅₀ data in transfected cells. Mader et al. (J Innate Immun, 2012) characterized LL-37's LPS-neutralizing activity and suppression of TLR4-dependent NF-κB in macrophage cell models. Antimicrobial activity against MDR clinical isolates has been characterized in multiple in vitro studies (reviewed by Mookherjee & Hancock, Cell Mol Life Sci 2007); activity is significantly reduced at physiological NaCl concentrations (150 mM) compared to low-salt assay media — a key methodological consideration for translational relevance. In vivo wound biology studies in rodent models (Heilborn et al., J Invest Dermatol 2003) reported CAMP mRNA downregulation in chronic wound keratinocytes; LL-37 application increased keratinocyte migration in scratch assays. No controlled human therapeutic trials with exogenous LL-37 administration have been published as of 2024.</p><h3>Research Relevance</h3><p>LL-37 is used as a research tool for characterizing cationic AMP membrane disruption mechanisms, FPR2 receptor pharmacology, EGFR transactivation pathways in epithelial cells, and TLR4 modulation in innate immune models. Researchers should account for the strong salt-dependence of antimicrobial assay conditions and the concentration-dependence of membrane disruption mechanism (pore-forming vs. carpet). The compound's multiple receptor interactions (FPR2, EGFR, TLR4, P2X7) require orthogonal experimental controls to attribute effects to specific receptors. LL-37 is also used as a positive control in cathelicidin biology studies. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C205H340N60O53",
      synonyms:
        "Cathelicidin, ropocamptide, Bac4, Cathelicidin antimicrobial peptide 18",
      molarMass: "4493 g/mol",
      casNumber: "154947-66-7",
      pubchemId: "16198951",
      activeIngredient: "5mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  kpv: {
    longDescription:
      `<p>Sometimes the most powerful molecules come in the smallest packages. KPV — just three amino acids long — has emerged as a surprisingly potent research tool in inflammatory biology. Derived from the C-terminal end of alpha-melanocyte-stimulating hormone (α-MSH), this minimal fragment retains remarkable immunomodulatory activity and has generated particular excitement in gastrointestinal inflammation research, where its small size may actually be an advantage for reaching target tissues.</p><h3>What is KPV?</h3><p>KPV (Lys-Pro-Val) is a synthetic tripeptide corresponding to positions 11-13 of α-MSH. Despite being just three amino acids — a fraction of the full 13-amino-acid α-MSH molecule — research has identified it as a biologically active fragment that retains a significant subset of the parent molecule's immunomodulatory properties. Think of it as the minimal effective unit of α-MSH's anti-inflammatory signaling — the smallest piece that still gets the job done in experimental models.</p><h3>Research Highlights</h3><p>KPV's mechanism centers on melanocortin receptor pharmacology and NF-κB pathway modulation — two of the most important signaling systems in inflammatory biology. Research suggests the tripeptide interacts with MC1R and MC3R on immune cells, including macrophages and dendritic cells, promoting anti-inflammatory cAMP signaling. Studies have also demonstrated that KPV can modulate NF-κB activation directly in epithelial cells, suppressing production of pro-inflammatory cytokines including IL-6, IL-8, and TNF-α in cell culture models.</p><p>In gastrointestinal research, KPV has shown particularly promising activity. Preclinical studies in rodent models of experimental colitis have demonstrated measurable reductions in inflammatory markers — including myeloperoxidase activity and pro-inflammatory cytokine concentrations in colonic tissue — compared to untreated controls. The compound's small molecular weight may facilitate cellular entry beyond surface receptor signaling, with researchers exploring potential intracellular receptor interactions.</p><p>Pharmacokinetic research has investigated KPV's stability to intestinal proteases, with studies suggesting partial resistance to degradation compared to longer melanocortin peptides — a finding that supports investigations into novel delivery approaches for gastrointestinal research applications. Comparative studies with full-length α-MSH have helped researchers map the specific structural requirements for melanocortin receptor-mediated inflammatory signaling.</p><h3>Why Researchers Choose KPV</h3><p>KPV represents the minimal pharmacophore for melanocortin pathway immunomodulation — the smallest effective unit of a powerful signaling system. Its tiny size offers potential advantages in tissue penetration and stability, while its demonstrated activity against NF-κB-driven inflammation and in gastrointestinal models makes it particularly relevant for mucosal inflammation research. For investigators who want to study melanocortin anti-inflammatory signaling without the complexity of larger peptides, KPV is the precision tool.</p>`,
    properties: {
      chemicalFormula: "C16H30N4O4",
      synonyms:
        "Lys-pro-val, Msh (11-13), L-Lysyl-L-prolyl-L-valine, Lysyl-prolyl-valine, ACTH-(11-13)",
      molarMass: "342.43 g/mol",
      casNumber: "67727-97-3",
      pubchemId: "125672",
      activeIngredient: "15 mg (250 mcg/capsule)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "5-amino-1mq": {
    longDescription:
      `<p>The discovery that a single enzyme — NNMT — acts as a metabolic gatekeeper in fat cells opened up an entirely new approach to studying obesity and metabolic regulation. 5-Amino-1MQ is the selective inhibitor that gave researchers the key to that gate. By blocking nicotinamide N-methyltransferase, this small molecule compound redirects cellular metabolism in ways that have produced striking results in preclinical metabolic studies, making it one of the most talked-about compounds in adipose tissue and NAD+ biology research.</p><h3>What is 5-Amino-1MQ?</h3><p>5-Amino-1MQ (5-Amino-1-methylquinolinium) is a small molecule compound — not a peptide — that selectively inhibits NNMT, the enzyme responsible for methylating nicotinamide (vitamin B3) using SAM as a methyl donor. NNMT is expressed primarily in adipose tissue, liver, and kidney, and has emerged as a significant regulator of cellular energy metabolism and fat cell development. The compound represents a novel pharmacological approach to studying how NNMT activity influences the metabolic balance between fat storage and energy expenditure.</p><h3>Research Highlights</h3><p>5-Amino-1MQ's mechanism produces a cascade of metabolically favorable downstream effects in experimental models. By competing with nicotinamide for NNMT's active site, it reduces SAM consumption (preserving methyl groups for epigenetic reactions and polyamine biosynthesis) and simultaneously increases nicotinamide availability for NAD+ biosynthesis via the salvage pathway. This one-two punch potentially elevates cellular NAD+ levels — the cofactor that powers sirtuins and other critical metabolic enzymes.</p><p>The preclinical metabolic data has been impressive. Studies in diet-induced obese mouse models have reported significant reductions in adipose tissue mass alongside improvements in insulin sensitivity and plasma lipid profiles compared to controls. Cell culture research has documented inhibition of adipocyte differentiation and reduced lipid droplet accumulation in NNMT-inhibitor-treated preadipocyte cultures, providing mechanistic support for the whole-animal findings.</p><p>Research has confirmed elevated intracellular NAD+ levels following NNMT inhibition, supporting the proposed mechanism of nicotinamide rerouting toward the salvage pathway. Gene expression analyses in treated adipose tissue have identified changes consistent with reduced lipogenic activity and enhanced fatty acid oxidation pathways — a metabolic shift from storage to utilization that researchers find particularly compelling.</p><h3>Why Researchers Choose 5-Amino-1MQ</h3><p>5-Amino-1MQ is the premier tool for studying NNMT biology and its intersection with metabolic regulation. Its selectivity for NNMT over other methyltransferases provides clean, interpretable data, while its dual downstream effects — methyl group preservation and NAD+ pathway enhancement — make it uniquely informative for researchers investigating the complex interplay between epigenetics, energy metabolism, and adipose tissue biology. For cutting-edge metabolic research, this compound opens doors that other tools simply cannot.</p>`,
    properties: {
      chemicalFormula: "C10H11N2+",
      synonyms:
        "5-amino-1-methylquinolinium, SCHEMBL6403148, CHEMBL4116828, ZINC552049, STL196667",
      molarMass: "159.21 g/mol",
      casNumber: "42464-96-0",
      pubchemId: "950107",
      activeIngredient: "3000mg (50mg per capsule)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  tesofensine: {
    longDescription:
      `<p>Tesofensine represents a pharmacological approach that researchers have long theorized about but rarely achieved: simultaneous enhancement of all three major monoamine neurotransmitters — dopamine, norepinephrine, and serotonin. This triple reuptake inhibitor has generated significant research interest for its potent effects on energy balance regulation, and clinical research data showing substantial body weight changes in study populations has cemented its position as one of the most closely watched compounds in appetite and metabolic neuroscience.</p><h3>What is Tesofensine?</h3><p>Tesofensine (NS-2330) is a triple monoamine reuptake inhibitor that blocks the presynaptic reuptake transporters for dopamine (DAT), norepinephrine (NET), and serotonin (SERT), increasing the availability of all three neurotransmitters in synaptic clefts simultaneously. Originally investigated in neurodegenerative research contexts, it attracted attention in metabolic research after clinical data revealed significant effects on body weight parameters in study subjects. The compound has since become an important tool for studying how the brain's reward, arousal, and satiety systems work together to regulate energy balance.</p><h3>Research Highlights</h3><p>Tesofensine's triple-action mechanism creates a comprehensive neurochemical shift in the brain's energy regulation circuits. Enhanced dopaminergic signaling in mesolimbic and hypothalamic pathways is studied for its influence on appetite regulation and reward-related food seeking behavior. Elevated norepinephrine may contribute to thermogenic pathway activation via beta-adrenergic signaling in brown adipose tissue. And enhanced serotonergic activity in the hypothalamus has been associated with appetite-suppressing signals in preclinical research models.</p><p>The clinical data is what truly distinguishes Tesofensine from other research compounds in this space. Clinical research studies in overweight and obese subjects have reported significant reductions in body weight compared to placebo groups over extended study periods, with investigators documenting dose-dependent reductions in caloric intake and measurable changes in body composition parameters. These human data points provide translational relevance that many preclinical-only compounds lack.</p><p>Earlier research also investigated Tesofensine in models of Parkinson's disease and Alzheimer's disease, exploiting its monoamine-enhancing properties to study cognitive and motor outcomes. Studies in Parkinson's disease models reported improvements in motor function parameters, providing insights into DAT inhibition's effects on dopaminergic circuit function — and highlighting the compound's research versatility beyond metabolic applications.</p><h3>Why Researchers Choose Tesofensine</h3><p>Tesofensine is the only widely available triple monoamine reuptake inhibitor with robust clinical research data supporting its effects on energy balance. For investigators studying the complex neurochemistry of appetite regulation — where dopamine, norepinephrine, and serotonin all play interconnected roles — Tesofensine allows examination of all three systems simultaneously rather than in isolation. Its extended half-life (via active CYP3A4 metabolites) provides practical experimental advantages, and its dual research heritage in both neuroscience and metabolic studies makes it uniquely versatile.</p>`,
    properties: {
      chemicalFormula: "C17H23Cl2NO",
      synonyms: "NS-2330, UNII-BLH9UKX9V1, BLH9UKX9V1, ZINC3953158",
      molarMass: "328.3 g/mol",
      casNumber: "195875-84-4",
      pubchemId: "11370864",
      activeIngredient: "15mg (0.25mg per 1 capsule)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "nad-plus": {
    longDescription:
      `<h3>Molecular Profile</h3><p>NAD⁺ (β-Nicotinamide adenine dinucleotide, oxidized form; CAS 53-84-9; MW 663.43 g/mol; C₂₁H₂₇N₇O₁₄P₂) is a pyridine dinucleotide coenzyme consisting of an adenosine monophosphate and a nicotinamide mononucleotide (NMN) linked by a pyrophosphate bond. It exists in cells in oxidized (NAD⁺) and reduced (NADH) states, cycling during redox reactions of glycolysis, the TCA cycle, and oxidative phosphorylation. Beyond redox function, NAD⁺ serves as a substrate (not a cofactor) for three enzyme classes that consume the dinucleotide with cleavage of the glycosidic bond: (1) Sirtuins (SIRT1–7; NAD⁺-dependent protein deacylases; Km for NAD⁺ at SIRT1: ~94–140 µM; at SIRT3: ~880 µM; Gertz et al., Chem Biol 2012), which deacetylate metabolic transcription factors (PGC-1α, FOXO1, p53, HIF-1α) and mitochondrial proteins; (2) Poly(ADP-ribose) polymerases (PARP1, PARP2; PARP1 Km ~20–50 µM under basal conditions, rising following DNA damage; Alvarez-Gonzalez & Althaus, Mutat Res 1989), which transfer ADP-ribose units to DNA-damage sensor proteins; (3) CD38/CD157 (cyclic ADP-ribose synthases; NAD⁺ → cADPR + nicotinamide), which regulate intracellular Ca²⁺ signaling. NAD⁺ biosynthesis occurs via three pathways: de novo from tryptophan (IDO1/TDO2 → ACMSD → QPRT); salvage from nicotinamide (NAMPT → NMNAT1/2/3); and Preiss-Handler from nicotinic acid (NAPRT → NMNAT). Intracellular NAD⁺ concentrations vary by compartment (nuclear ~70–100 µM; cytoplasmic ~~100 µM; mitochondrial ~250–500 µM; Cambronne et al., Science 2016) and decline with organismal age by 50–80% in multiple mouse tissues compared to young controls (Yoshino et al., Cell Metab 2011; Gomes et al., Cell 2013).</p><h3>Published Data</h3><p>Yoshino et al. (Cell Metab, 2011) demonstrated age-associated NAD⁺ decline in mouse skeletal muscle and adipose tissue and reported that NMN (a NAD⁺ precursor) reversed these declines and ameliorated diet-induced metabolic impairment in mice. Gomes et al. (Cell, 2013) characterized nuclear NAD⁺ decline as driving pseudohypoxic signaling via SIRT1 deacetylation of HIF-1α, with downstream mitochondrial dysfunction in aged mice. Verdin (Science, 2015) provided a comprehensive review of NAD⁺ metabolism and age-related changes, summarizing multiple rodent and human studies. Human data: Camacho-Pereira et al. (Cell Metab, 2016) reported that NAD⁺ consumption by CD38 is a primary driver of age-related NAD⁺ decline in mice; this mechanism has not been fully validated in human tissue. Trammell et al. (Nat Commun, 2016) conducted a human pharmacokinetic study of nicotinamide riboside (NR) supplementation showing measurable NAD⁺ elevation in blood; this used a NAD⁺ precursor, not IV NAD⁺ directly. Published IV NAD⁺ pharmacokinetic data in humans is limited; it is metabolized rapidly upon IV administration to NMN and nicotinamide. PARP1 activation data under genotoxic conditions is well-established in cell models (Alvarez-Gonzalez & Althaus, Mutat Res 1989); NAD⁺ availability as rate-limiting for DNA repair has been shown in PARP1-overexpression and NAMPT-inhibitor experiments. No randomized controlled trials of IV NAD⁺ supplementation in humans with validated mechanistic endpoints have been published as of 2024.</p><h3>Research Relevance</h3><p>NAD⁺ is used in research as a substrate for studying sirtuin deacylase activity (SIRT1/3/5), PARP-mediated ADP-ribosylation, and CD38-mediated cADPR signaling. It is also used in metabolic enzyme activity assays (as an oxidant for alcohol dehydrogenase, lactate dehydrogenase, and glyceraldehyde-3-phosphate dehydrogenase among others). Researchers studying NAD⁺ biology directly should account for the compound's membrane impermeability: NAD⁺ itself does not cross the plasma membrane efficiently; intracellular NAD⁺ manipulation typically uses cell-permeable precursors (NMN, NR) or electroporation-based approaches in vitro. Exogenous NAD⁺ may signal extracellularly through P2Y purinergic receptors at high concentrations. Classified for research use only.</p>`,
    properties: {
      chemicalFormula: "C21H27N7O14P2",
      synonyms:
        "nadide, coenzyme I, beta-NAD, beta-nicotinamide adenine dinucleotide",
      molarMass: "663.4 g/mol",
      casNumber: "53-84-9",
      pubchemId: "5892",
      activeIngredient: "100 mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  glutathione: {
    longDescription:
      `<p>There's a reason researchers call glutathione the "master antioxidant" — it's the most abundant intracellular antioxidant in every mammalian cell, found at millimolar concentrations, and it's involved in virtually every aspect of cellular defense against oxidative damage. From toxicology to neuroscience to aging biology, glutathione's role is so fundamental that its depletion is considered a hallmark of cellular dysfunction across research disciplines. Understanding GSH biology isn't optional for modern biomedical research — it's essential.</p><h3>What is Glutathione?</h3><p>Glutathione (GSH) is a tripeptide — γ-L-glutamyl-L-cysteinyl-glycine — synthesized inside cells from three amino acids: L-glutamate, L-cysteine, and glycine. What makes it special isn't complexity; it's ubiquity and versatility. GSH is central to antioxidant defense, xenobiotic detoxification, and cellular redox homeostasis. It exists in two forms: reduced (GSH, the active form) and oxidized (GSSG), and the ratio between them serves as one of the most reliable indicators of cellular oxidative stress status in research models.</p><h3>Research Highlights</h3><p>Glutathione's antioxidant functions operate through multiple mechanisms: direct scavenging of reactive oxygen and nitrogen species, enzymatic antioxidant reactions via glutathione peroxidase (GPx) and glutathione S-transferase (GST), and maintenance of vitamins C and E in their active reduced forms. The GPx reaction — where GSH donates electrons to neutralize hydrogen peroxide and lipid peroxides — is one of the most important antioxidant reactions in biology.</p><p>The aging research on glutathione is particularly compelling. Studies have established that GSH levels decline significantly with aging in multiple tissues, with documented correlations between GSH status and functional measures of cellular health. Immunological research has shown that T-lymphocyte proliferative responses are impaired under conditions of GSH depletion and restored with GSH supplementation in cell culture models — demonstrating its essential role in immune function.</p><p>Neuroscience research has explored GSH depletion in models of neurodegeneration, where studies have reported that reduced GSH levels in dopaminergic neurons accelerate markers of oxidative damage. Toxicology studies have demonstrated that GSH repletion significantly attenuates oxidative damage markers following exposure to hepatotoxic compounds in animal models. Cancer research adds complexity, revealing that GSH both protects normal cells and may contribute to drug resistance in tumor cells through its detoxification activity — a dual role that researchers continue to investigate.</p><h3>Why Researchers Choose Glutathione</h3><p>Glutathione is the reference standard for studying redox biology across virtually all areas of biomedical research. Its role as the primary intracellular antioxidant, its essential function in immune cell activity, and its well-characterized decline with aging make it indispensable for researchers studying oxidative stress, cellular defense, and age-related functional decline. Pharmacokinetic studies have characterized its distribution and metabolism, providing insight into optimal research delivery approaches. For redox biology research, everything starts with glutathione.</p>`,
    properties: {
      chemicalFormula: "C10H17N3O6S",
      synonyms:
        "L-Glutathione, Glutathion, Isethion, L-gamma-glutamyl-L-cysteinylglycine",
      molarMass: "307.33 g/mol",
      casNumber: "70-18-8",
      pubchemId: "124886",
      activeIngredient: "600mg (1 vial)",
      shelfLife: "36 months",
    },
    studies: [],
  },
  "os-01": {
    longDescription:
      `<h3>Molecular Profile</h3><p>OS-01 (O-304; ATX-304; 4-chloro-N-[2-[(4-chlorophenyl)methyl]-3-oxo-1,2,4-thiadiazol-5-yl]benzamide; CAS 1261289-04-6; MW 380.25 g/mol; C₁₆H₁₁Cl₂N₃O₂S) is a synthetic small molecule direct activator of AMPK (AMP-activated protein kinase), a heterotrimeric Ser/Thr kinase complex (PRKAA1/PRKAA2 α-subunit, PRKAB1/PRKAB2 β-subunit, PRKAG1/PRKAG2/PRKAG3 γ-subunit) that functions as a cellular energy sensor. O-304 was developed by Betagenon AB and has been studied clinically in an oral formulation for type 2 diabetes. OS-01 (the same compound O-304) has been investigated in a topical formulation in the context of dermatological aging research by OneSkin Technologies. O-304 activates AMPK by binding at the allosteric drug and metabolite (ADaM) site located at the interface of the α-subunit kinase domain and the β-subunit carbohydrate-binding module (CBM), a mechanism also exploited by compound A-769662; this binding stabilizes the active kinase conformation and protects Thr172 on the α-subunit activation loop from phosphatase-mediated dephosphorylation. Published EC₅₀ for AMPK activation (α1β1γ1 isoform): ~2–10 µM in cell-free kinase assays (Steneberg et al., JCI Insight 2018). Unlike AMP, which activates AMPK by binding the γ-subunit, O-304 is a β-subunit-interacting activator and is active regardless of AMP:ATP ratio. Downstream AMPK signaling: phosphorylation of ACC1/ACC2 (ACACA/ACACB; Ser79/Ser212) reduces malonyl-CoA and de novo lipogenesis; phosphorylation of RAPTOR suppresses mTORC1 kinase activity and S6K1 (Thr389)/4E-BP1 phosphorylation; phosphorylation of ULK1 (Ser317, Ser555) initiates autophagy; PGC-1α (PPARGC1A) activation promotes mitochondrial biogenesis.</p><h3>Published Data</h3><p>Steneberg et al. (JCI Insight, 2018) published the primary pharmacological characterization of O-304: oral administration in type 2 diabetic (db/db) mice and diet-induced obese (DIO) mice produced AMPK activation in skeletal muscle, reduced blood glucose, and reduced hepatic lipid accumulation versus vehicle; a Phase IIa human trial in type 2 diabetes patients (n=36, 4-week treatment) reported statistically significant reductions in fasting plasma glucose and HbA1c versus placebo, with dose-dependent AMPK target engagement confirmed by ACC phosphorylation in muscle biopsy samples. OneSkin Technologies published data on the OS-01 topical peptide formulation targeting senescent cells, but the peer-reviewed data on OS-01 as a topical AMPK activator in human skin specifically is limited. Cellular senescence data: AMPK activation has been reported to suppress the SASP (senescence-associated secretory phenotype) in part by inhibiting mTORC1-driven translation of IL-6, IL-8, and MMP3 in senescent fibroblasts (Moiseeva et al., Mol Cell Biol 2009; Laberge et al., Nat Cell Biol 2015), providing a mechanistic rationale for OS-01's positioning in senescence biology. Topical skin penetration and target engagement data for O-304 specifically in human skin ex vivo or in vivo has not been published in peer-reviewed literature as of 2024.</p><h3>Research Relevance</h3><p>OS-01/O-304 is a pharmacologically characterized direct AMPK activator with a published human Phase IIa dataset in type 2 diabetes. Its mechanism of action (ADaM site β-subunit activator; AMPK active regardless of AMP:ATP ratio) is distinct from indirect AMPK activators such as metformin (Complex I inhibition → AMP elevation) and phenformin, making it suitable for studies where AMP-independent AMPK activation is required. Applications include research on mTORC1 suppression, autophagy induction via ULK1 phosphorylation, ACC-mediated lipid metabolism, and SASP modulation in senescent cell models. The topical dermatology application of OS-01 has a more limited published evidence base compared to the systemic metabolic indication; investigators should distinguish between oral O-304 clinical data and topical OS-01 research data. Classified for research use only outside of approved clinical contexts.</p>`,
    properties: {
      chemicalFormula: "C16H11Cl2N3O2S",
      synonyms:
        "O-304, ATX-304, 4-chloro-N-[2-[(4-chlorophenyl)methyl]-3-oxo-1,2,4-thiadiazol-5-yl]benzamide",
      molarMass: "380.25 g/mol",
      casNumber: "1261289-04-6",
      pubchemId: "50923806",
      activeIngredient: "OS-01 (O-304)",
      shelfLife: "N/A",
    },
    studies: [],
  },

  // ─── In-stock product IDs (DB slugs) ───

  "retatrutide-20mg": {
    longDescription:
      `<p>Retatrutide (LY3437943) is a 39-amino-acid synthetic peptide characterized by simultaneous agonist activity at three G protein-coupled receptors: GLP-1R, GIPR, and GCGR. It is the first published compound to exhibit balanced tri-agonism across all three receptor subtypes.</p><h3>Molecular Profile</h3><p>The peptide backbone incorporates a C20 fatty diacid moiety conjugated via a linker to Lys20, conferring extended plasma half-life through albumin binding. Receptor activation follows the canonical Gαs-coupled cAMP signaling cascade at each target. The GLP-1R and GIPR components drive incretin-axis signaling, while GCGR activation engages hepatic cAMP/PKA-mediated glycogenolysis and gluconeogenic gene transcription pathways. Binding affinity ratios across the three receptors have been characterized by Coskun et al. (2022) using cell-based cAMP accumulation assays.</p><h3>Published Data</h3><p>Phase 2 clinical trial results (Jastreboff et al., NEJM 2023, n=338) reported dose-dependent pharmacodynamic effects across multiple metabolic biomarkers over a 48-week dosing period. Preclinical rodent data published in Nature (2022) characterized the tri-agonist receptor pharmacology and downstream signaling specificity relative to mono- and dual-agonist comparators. The compound remains under active investigation by Eli Lilly (Phase 3).</p><h3>Research Relevance</h3><p>Retatrutide provides a pharmacological tool for studying coordinated multi-receptor signaling across the incretin-glucagon axis — a pathway configuration not accessible with existing single- or dual-agonist reference compounds.</p>`,
    properties: {
      chemicalFormula: "C₂₂₁H₃₄₂N₆₀O₇₁",
      synonyms: "LY3437943, LY-3437943",
      molarMass: "4,731.3 g/mol",
      casNumber: "2381089-83-2",
      pubchemId: "163314853",
      activeIngredient: "20mg per vial",
      shelfLife: "24 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "Retatrutide once weekly for treatment of obesity: a phase 2 trial",
        authors: "Jastreboff, A.M., Kaplan, L.M., Frías, J.P., et al. (2023)",
        journal: "New England Journal of Medicine, 389(6), 514-526",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
      },
      {
        title: "Triple hormone receptor agonist retatrutide for metabolic disease",
        authors: "Coskun, T., Urva, S., Roell, W.C., et al. (2022)",
        journal: "Nature, 603, 191-195",
        url: "https://www.nature.com/articles/s41586-022-04458-9",
      },
    ],
  },
  "iad-retatrutide-20mg": {
    longDescription:
      `<p>Retatrutide (LY3437943) is a 39-amino-acid synthetic peptide characterized by simultaneous agonist activity at three G protein-coupled receptors: GLP-1R, GIPR, and GCGR. It is the first published compound to exhibit balanced tri-agonism across all three receptor subtypes.</p><h3>Molecular Profile</h3><p>The peptide backbone incorporates a C20 fatty diacid moiety conjugated via a linker to Lys20, conferring extended plasma half-life through albumin binding. Receptor activation follows the canonical Gαs-coupled cAMP signaling cascade at each target. The GLP-1R and GIPR components drive incretin-axis signaling, while GCGR activation engages hepatic cAMP/PKA-mediated glycogenolysis and gluconeogenic gene transcription pathways. Binding affinity ratios across the three receptors have been characterized by Coskun et al. (2022) using cell-based cAMP accumulation assays.</p><h3>Published Data</h3><p>Phase 2 clinical trial results (Jastreboff et al., NEJM 2023, n=338) reported dose-dependent pharmacodynamic effects across multiple metabolic biomarkers over a 48-week dosing period. Preclinical rodent data published in Nature (2022) characterized the tri-agonist receptor pharmacology and downstream signaling specificity relative to mono- and dual-agonist comparators. The compound remains under active investigation by Eli Lilly (Phase 3).</p><h3>Research Relevance</h3><p>Retatrutide provides a pharmacological tool for studying coordinated multi-receptor signaling across the incretin-glucagon axis — a pathway configuration not accessible with existing single- or dual-agonist reference compounds.</p>`,
    properties: {
      chemicalFormula: "C₂₂₁H₃₄₂N₆₀O₇₁",
      synonyms: "LY3437943, LY-3437943",
      molarMass: "4,731.3 g/mol",
      casNumber: "2381089-83-2",
      pubchemId: "163314853",
      activeIngredient: "20mg per vial",
      shelfLife: "24 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "Retatrutide once weekly for treatment of obesity: a phase 2 trial",
        authors: "Jastreboff, A.M., Kaplan, L.M., Frías, J.P., et al. (2023)",
        journal: "New England Journal of Medicine, 389(6), 514-526",
        url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2301972",
      },
      {
        title: "Triple hormone receptor agonist retatrutide for metabolic disease",
        authors: "Coskun, T., Urva, S., Roell, W.C., et al. (2022)",
        journal: "Nature, 603, 191-195",
        url: "https://www.nature.com/articles/s41586-022-04458-9",
      },
    ],
  },

  "ipamorelin-5mg": {
    longDescription:
      `<p>Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) is a synthetic pentapeptide that binds the growth hormone secretagogue receptor type 1a (GHS-R1a) with an EC₅₀ of approximately 1.3 nM in cell-based cAMP assays. First characterized by Raun et al. (1998), it is classified as a selective GHS-R1a agonist.</p><h3>Molecular Profile</h3><p>GHS-R1a is a Gαq/11-coupled GPCR expressed primarily in the anterior pituitary and hypothalamic arcuate nucleus. Ipamorelin binding activates phospholipase C → IP₃/DAG → intracellular Ca²⁺ release, triggering GH vesicle exocytosis from somatotroph cells. Unlike hexarelin and GHRP-6, ipamorelin does not significantly activate GHS-R1a-independent pathways at the adrenal cortex — in vivo data shows no statistically significant elevation of ACTH, cortisol, prolactin, FSH, LH, or TSH at GH-releasing concentrations (Raun et al., 1998).</p><h3>Published Data</h3><p>Dose-response characterization in Sprague-Dawley rats established GH-releasing potency comparable to GHRP-6 with a selectivity index >100-fold for GH over cortisol (Raun et al., Eur J Endocrinol 1998). Subsequent studies examined ipamorelin in the context of gastrointestinal smooth muscle signaling, specifically its effects on GHS-R1a-expressing enteric neurons and circular muscle contractility in rodent ileus models (Greenwood-Van Meerveld et al., JPET 2012). The compound has also been used as a reference agonist in GHS-R1a binding displacement assays across multiple published pharmacological studies.</p><h3>Research Relevance</h3><p>Ipamorelin's high selectivity index for somatotroph GHS-R1a over adrenal and gonadotroph pathways makes it a standard reference compound for controlled studies of isolated GH-axis signaling without confounding multi-hormone activation.</p>`,
    properties: {
      chemicalFormula: "C₃₈H₄₉N₉O₅",
      synonyms: "Ipamorelin, NNC 26-0161, UNII-96GP4P5H13",
      molarMass: "711.85 g/mol",
      casNumber: "170851-70-4",
      pubchemId: "20754357",
      activeIngredient: "5mg per vial",
      shelfLife: "24 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "Ipamorelin, the first selective growth hormone secretagogue",
        authors: "Raun, K., Hansen, B.S., Johansen, N.L., et al. (1998)",
        journal: "European Journal of Endocrinology, 139(5), 552-561",
        url: "https://eje.bioscientifica.com/view/journals/eje/139/5/552.xml",
      },
      {
        title: "Efficacy of ipamorelin on gastric dysmotility in a rodent model of postoperative ileus",
        authors: "Greenwood-Van Meerveld, B., Tyler, K., Mohammadi, E., et al. (2012)",
        journal: "Journal of Pharmacology and Experimental Therapeutics, 340(2), 439-447",
        url: "https://jpet.aspetjournals.org/content/340/2/439",
      },
    ],
  },
  "iad-ipamorelin-5mg": {
    longDescription:
      `<p>Ipamorelin (Aib-His-D-2-Nal-D-Phe-Lys-NH₂) is a synthetic pentapeptide that binds the growth hormone secretagogue receptor type 1a (GHS-R1a) with an EC₅₀ of approximately 1.3 nM in cell-based cAMP assays. First characterized by Raun et al. (1998), it is classified as a selective GHS-R1a agonist.</p><h3>Molecular Profile</h3><p>GHS-R1a is a Gαq/11-coupled GPCR expressed primarily in the anterior pituitary and hypothalamic arcuate nucleus. Ipamorelin binding activates phospholipase C → IP₃/DAG → intracellular Ca²⁺ release, triggering GH vesicle exocytosis from somatotroph cells. Unlike hexarelin and GHRP-6, ipamorelin does not significantly activate GHS-R1a-independent pathways at the adrenal cortex — in vivo data shows no statistically significant elevation of ACTH, cortisol, prolactin, FSH, LH, or TSH at GH-releasing concentrations (Raun et al., 1998).</p><h3>Published Data</h3><p>Dose-response characterization in Sprague-Dawley rats established GH-releasing potency comparable to GHRP-6 with a selectivity index >100-fold for GH over cortisol (Raun et al., Eur J Endocrinol 1998). Subsequent studies examined ipamorelin in the context of gastrointestinal smooth muscle signaling, specifically its effects on GHS-R1a-expressing enteric neurons and circular muscle contractility in rodent ileus models (Greenwood-Van Meerveld et al., JPET 2012). The compound has also been used as a reference agonist in GHS-R1a binding displacement assays across multiple published pharmacological studies.</p><h3>Research Relevance</h3><p>Ipamorelin's high selectivity index for somatotroph GHS-R1a over adrenal and gonadotroph pathways makes it a standard reference compound for controlled studies of isolated GH-axis signaling without confounding multi-hormone activation.</p>`,
    properties: {
      chemicalFormula: "C₃₈H₄₉N₉O₅",
      synonyms: "Ipamorelin, NNC 26-0161, UNII-96GP4P5H13",
      molarMass: "711.85 g/mol",
      casNumber: "170851-70-4",
      pubchemId: "20754357",
      activeIngredient: "5mg per vial",
      shelfLife: "24 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "Ipamorelin, the first selective growth hormone secretagogue",
        authors: "Raun, K., Hansen, B.S., Johansen, N.L., et al. (1998)",
        journal: "European Journal of Endocrinology, 139(5), 552-561",
        url: "https://eje.bioscientifica.com/view/journals/eje/139/5/552.xml",
      },
      {
        title: "Efficacy of ipamorelin on gastric dysmotility in a rodent model of postoperative ileus",
        authors: "Greenwood-Van Meerveld, B., Tyler, K., Mohammadi, E., et al. (2012)",
        journal: "Journal of Pharmacology and Experimental Therapeutics, 340(2), 439-447",
        url: "https://jpet.aspetjournals.org/content/340/2/439",
      },
    ],
  },

  "ghk-cu-100mg": {
    longDescription:
      `<p>GHK-Cu (Glycyl-L-Histidyl-L-Lysine:Copper(II), 1:1 complex) is an endogenous tripeptide-metal chelate first isolated from human plasma by Pickart & Thaler (1973). The Cu²⁺ ion is coordinated through the glycyl amino nitrogen, histidyl imidazole nitrogen, and deprotonated amide nitrogen in a square-planar geometry (Freedman et al., BBA 1982).</p><h3>Molecular Profile</h3><p>The copper coordination chemistry is central to GHK-Cu's documented biological activity. The Cu²⁺ ion participates in superoxide dismutase-like redox cycling and serves as a cofactor delivery mechanism for copper-dependent enzymes including lysyl oxidase (LOX), which catalyzes oxidative deamination of lysine residues in collagen and elastin precursors. Circulating plasma concentrations have been measured at approximately 200 ng/mL in young adults, declining to ~80 ng/mL by age 60 (Pickart, 2008). Connectivity Map (CMap) analysis of GHK-Cu gene expression signatures identified modulation of 4,048 human genes at p&lt;0.05, with significant enrichment in ubiquitin-proteasome pathway, TGF-β superfamily signaling, and Nrf2-mediated oxidative stress response genes (Pickart et al., 2012).</p><h3>Published Data</h3><p>In vitro studies using human dermal fibroblast cultures documented upregulation of COL1A1, COL3A1, and decorin (DCN) mRNA expression following GHK-Cu exposure (Maquart et al., FEBS Lett 1988). Separate investigations characterized its effects on matrix metalloproteinase (MMP-2, MMP-9) activity and integrin α₂β₁ expression in cell migration assays. Gene expression profiling (Pickart et al., BioMed Res Int 2015) catalogued pathway-level effects across DNA repair (GADD45A), antioxidant response (HMOX1, NQO1), and WNT signaling components.</p><h3>Research Relevance</h3><p>GHK-Cu is a well-characterized copper-delivery tripeptide with an extensive published dataset across gene expression, metalloenzyme cofactor, and extracellular matrix remodeling research domains. Its endogenous origin and known age-dependent plasma concentration curve provide a defined physiological reference frame for in vitro experimental design.</p>`,
    properties: {
      chemicalFormula: "C₁₄H₂₄CuN₆O₄",
      synonyms: "Prezatide copper, Copper peptide, GHK copper, CG-copper peptide",
      molarMass: "403.92 g/mol",
      casNumber: "49557-75-7",
      pubchemId: "73587",
      activeIngredient: "100mg per vial",
      shelfLife: "36 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging",
        authors: "Pickart, L., Vasquez-Soltero, J.M., & Margolina, A. (2012)",
        journal: "Oxidative Medicine and Cellular Longevity, 2012, 324832",
        url: "https://www.hindawi.com/journals/omcl/2012/324832/",
      },
      {
        title: "GHK peptide as a natural modulator of multiple cellular pathways in skin regeneration",
        authors: "Pickart, L., Vasquez-Soltero, J.M., & Margolina, A. (2015)",
        journal: "BioMed Research International, 2015, 648108",
        url: "https://www.hindawi.com/journals/bmri/2015/648108/",
      },
    ],
  },
  "iad-ghk-cu-100mg": {
    longDescription:
      `<p>GHK-Cu (Glycyl-L-Histidyl-L-Lysine:Copper(II), 1:1 complex) is an endogenous tripeptide-metal chelate first isolated from human plasma by Pickart & Thaler (1973). The Cu²⁺ ion is coordinated through the glycyl amino nitrogen, histidyl imidazole nitrogen, and deprotonated amide nitrogen in a square-planar geometry (Freedman et al., BBA 1982).</p><h3>Molecular Profile</h3><p>The copper coordination chemistry is central to GHK-Cu's documented biological activity. The Cu²⁺ ion participates in superoxide dismutase-like redox cycling and serves as a cofactor delivery mechanism for copper-dependent enzymes including lysyl oxidase (LOX), which catalyzes oxidative deamination of lysine residues in collagen and elastin precursors. Circulating plasma concentrations have been measured at approximately 200 ng/mL in young adults, declining to ~80 ng/mL by age 60 (Pickart, 2008). Connectivity Map (CMap) analysis of GHK-Cu gene expression signatures identified modulation of 4,048 human genes at p&lt;0.05, with significant enrichment in ubiquitin-proteasome pathway, TGF-β superfamily signaling, and Nrf2-mediated oxidative stress response genes (Pickart et al., 2012).</p><h3>Published Data</h3><p>In vitro studies using human dermal fibroblast cultures documented upregulation of COL1A1, COL3A1, and decorin (DCN) mRNA expression following GHK-Cu exposure (Maquart et al., FEBS Lett 1988). Separate investigations characterized its effects on matrix metalloproteinase (MMP-2, MMP-9) activity and integrin α₂β₁ expression in cell migration assays. Gene expression profiling (Pickart et al., BioMed Res Int 2015) catalogued pathway-level effects across DNA repair (GADD45A), antioxidant response (HMOX1, NQO1), and WNT signaling components.</p><h3>Research Relevance</h3><p>GHK-Cu is a well-characterized copper-delivery tripeptide with an extensive published dataset across gene expression, metalloenzyme cofactor, and extracellular matrix remodeling research domains. Its endogenous origin and known age-dependent plasma concentration curve provide a defined physiological reference frame for in vitro experimental design.</p>`,
    properties: {
      chemicalFormula: "C₁₄H₂₄CuN₆O₄",
      synonyms: "Prezatide copper, Copper peptide, GHK copper, CG-copper peptide",
      molarMass: "403.92 g/mol",
      casNumber: "49557-75-7",
      pubchemId: "73587",
      activeIngredient: "100mg per vial",
      shelfLife: "36 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "The human tripeptide GHK-Cu in prevention of oxidative stress and degenerative conditions of aging",
        authors: "Pickart, L., Vasquez-Soltero, J.M., & Margolina, A. (2012)",
        journal: "Oxidative Medicine and Cellular Longevity, 2012, 324832",
        url: "https://www.hindawi.com/journals/omcl/2012/324832/",
      },
      {
        title: "GHK peptide as a natural modulator of multiple cellular pathways in skin regeneration",
        authors: "Pickart, L., Vasquez-Soltero, J.M., & Margolina, A. (2015)",
        journal: "BioMed Research International, 2015, 648108",
        url: "https://www.hindawi.com/journals/bmri/2015/648108/",
      },
    ],
  },

  "wolverine-bpc157-tb500": {
    longDescription:
      `<p>This compound combines BPC-157, a 15-amino-acid fragment of the gastric secretory protein BPC (sequence GEPPPGKPADDAGLV), with TB-500, a 43-amino-acid synthetic analog of the N-terminal actin-binding domain (residues 17-23, LKKTETQ) of Thymosin Beta-4 (Tβ4). The two peptides operate through distinct and non-overlapping molecular mechanisms.</p><h3>Molecular Profile — BPC-157</h3><p>BPC-157 modulates the nitric oxide (NO) system through interactions with both the NOS-NO-cGMP pathway and the NO-independent soluble guanylyl cyclase pathway. Published in vivo data documents upregulation of VEGFR2 (KDR/Flk-1) and EGR-1 transcription factor expression in rat tissue models (Seiwerth et al., 1997; Sikiric et al., Curr Pharm Des 2018). The peptide also interacts with the FAK-paxillin signaling axis, which regulates focal adhesion dynamics in cell migration assays.</p><h3>Molecular Profile — TB-500</h3><p>TB-500 functions primarily through G-actin sequestration. The LKKTETQ motif binds monomeric G-actin, modulating the G-actin/F-actin equilibrium and thereby influencing cytoskeletal reorganization during cell migration. Published data demonstrates TB-500-mediated activation of integrin-linked kinase (ILK) and downstream Akt/PKB phosphorylation in cardiac progenitor cells (Bock-Marquette et al., Nature 2004). TB-500 also upregulates expression of VEGF-A and HIF-1α under hypoxic culture conditions.</p><h3>Published Data</h3><p>BPC-157 and Tβ4 have been characterized independently across >100 published preclinical studies. BPC-157 pharmacology has been reviewed extensively by Sikiric et al. (Curr Pharm Des 2018). Tβ4/TB-500 receptor pharmacology and ILK signaling data were characterized by Bock-Marquette et al. (Nature 2004). No peer-reviewed studies have yet characterized the pharmacokinetic or pharmacodynamic interactions of the combined formulation.</p><h3>Research Relevance</h3><p>The blend provides a dual-mechanism compound for experimental designs examining NO/VEGF pathway signaling in conjunction with actin-dependent cytoskeletal reorganization — two mechanistically independent axes relevant to tissue biology research.</p>`,
    properties: {
      chemicalFormula: "BPC-157: C₆₂H₉₈N₁₆O₂₂ / TB-500: C₂₁₂H₃₅₀N₅₆O₇₈S",
      synonyms: "BPC-157 + TB-500 Blend, Wolverine Blend, BPC/TB Stack",
      molarMass: "BPC-157: 1,419.5 g/mol / TB-500: 4,963 g/mol",
      casNumber: "BPC-157: 137525-51-0 / TB-500: 77591-33-4",
      pubchemId: "BPC-157: 9941957 / TB-500: 16132341",
      activeIngredient: "5mg BPC-157 + 5mg TB-500 per vial",
      shelfLife: "24 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "BPC 157's effect on healing",
        authors: "Seiwerth, S., Sikiric, P., Grabarevic, Z., et al. (1997)",
        journal: "Journal of Physiology-Paris, 91(3-5), 173-178",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0928425797894806",
      },
      {
        title: "Thymosin β4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair",
        authors: "Bock-Marquette, I., Saxena, A., White, M.D., et al. (2004)",
        journal: "Nature, 432, 466-472",
        url: "https://www.nature.com/articles/nature03000",
      },
    ],
  },
  "iad-wolverine-bpc157-tb500": {
    longDescription:
      `<p>This compound combines BPC-157, a 15-amino-acid fragment of the gastric secretory protein BPC (sequence GEPPPGKPADDAGLV), with TB-500, a 43-amino-acid synthetic analog of the N-terminal actin-binding domain (residues 17-23, LKKTETQ) of Thymosin Beta-4 (Tβ4). The two peptides operate through distinct and non-overlapping molecular mechanisms.</p><h3>Molecular Profile — BPC-157</h3><p>BPC-157 modulates the nitric oxide (NO) system through interactions with both the NOS-NO-cGMP pathway and the NO-independent soluble guanylyl cyclase pathway. Published in vivo data documents upregulation of VEGFR2 (KDR/Flk-1) and EGR-1 transcription factor expression in rat tissue models (Seiwerth et al., 1997; Sikiric et al., Curr Pharm Des 2018). The peptide also interacts with the FAK-paxillin signaling axis, which regulates focal adhesion dynamics in cell migration assays.</p><h3>Molecular Profile — TB-500</h3><p>TB-500 functions primarily through G-actin sequestration. The LKKTETQ motif binds monomeric G-actin, modulating the G-actin/F-actin equilibrium and thereby influencing cytoskeletal reorganization during cell migration. Published data demonstrates TB-500-mediated activation of integrin-linked kinase (ILK) and downstream Akt/PKB phosphorylation in cardiac progenitor cells (Bock-Marquette et al., Nature 2004). TB-500 also upregulates expression of VEGF-A and HIF-1α under hypoxic culture conditions.</p><h3>Published Data</h3><p>BPC-157 and Tβ4 have been characterized independently across >100 published preclinical studies. BPC-157 pharmacology has been reviewed extensively by Sikiric et al. (Curr Pharm Des 2018). Tβ4/TB-500 receptor pharmacology and ILK signaling data were characterized by Bock-Marquette et al. (Nature 2004). No peer-reviewed studies have yet characterized the pharmacokinetic or pharmacodynamic interactions of the combined formulation.</p><h3>Research Relevance</h3><p>The blend provides a dual-mechanism compound for experimental designs examining NO/VEGF pathway signaling in conjunction with actin-dependent cytoskeletal reorganization — two mechanistically independent axes relevant to tissue biology research.</p>`,
    properties: {
      chemicalFormula: "BPC-157: C₆₂H₉₈N₁₆O₂₂ / TB-500: C₂₁₂H₃₅₀N₅₆O₇₈S",
      synonyms: "BPC-157 + TB-500 Blend, Wolverine Blend, BPC/TB Stack",
      molarMass: "BPC-157: 1,419.5 g/mol / TB-500: 4,963 g/mol",
      casNumber: "BPC-157: 137525-51-0 / TB-500: 77591-33-4",
      pubchemId: "BPC-157: 9941957 / TB-500: 16132341",
      activeIngredient: "5mg BPC-157 + 5mg TB-500 per vial",
      shelfLife: "24 months (lyophilized, stored at -20°C)",
    },
    studies: [
      {
        title: "BPC 157's effect on healing",
        authors: "Seiwerth, S., Sikiric, P., Grabarevic, Z., et al. (1997)",
        journal: "Journal of Physiology-Paris, 91(3-5), 173-178",
        url: "https://www.sciencedirect.com/science/article/abs/pii/S0928425797894806",
      },
      {
        title: "Thymosin β4 activates integrin-linked kinase and promotes cardiac cell migration, survival and cardiac repair",
        authors: "Bock-Marquette, I., Saxena, A., White, M.D., et al. (2004)",
        journal: "Nature, 432, 466-472",
        url: "https://www.nature.com/articles/nature03000",
      },
    ],
  },
};

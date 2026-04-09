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
      `<p>Few peptides have generated as much excitement in the research community as BPC-157. Originally isolated from human gastric juice, this 15-amino-acid compound has become one of the most talked-about molecules in tissue repair science — and for good reason. Researchers across the globe are investigating its remarkably diverse interactions with the body's natural repair machinery, and the preclinical data continues to impress.</p><h3>What is BPC-157?</h3><p>BPC-157 (Body Protective Compound-157) is a synthetic pentadecapeptide derived from a naturally occurring protective protein found in the human digestive system. What makes it stand out immediately is its unusual stability — unlike many peptides that degrade rapidly in biological environments, BPC-157 remains remarkably intact. It's classified strictly as a research compound and is studied exclusively in preclinical and laboratory settings.</p><h3>Research Highlights</h3><p>The breadth of BPC-157 research is genuinely striking. Studies have demonstrated that this compound modulates the nitric oxide (NO) system, promotes the upregulation of growth hormone receptors in tendon fibroblasts, and influences vascular endothelial growth factor (VEGF) expression — all key players in the body's tissue repair toolkit. In rodent models, researchers have observed accelerated healing of transected tendons and muscles, with statistically significant improvements in functional recovery compared to controls.</p><p>Investigations have also revealed BPC-157's cytoprotective properties in gastrointestinal models, where it has shown the ability to modulate oxidative stress and support mucosal integrity. Perhaps most intriguingly, the peptide has demonstrated neuroprotective properties in experimental models of traumatic brain injury and dopaminergic system disruption, interacting with both serotonergic and dopaminergic pathways.</p><p>Research further suggests that BPC-157 stimulates angiogenesis — the formation of new blood vessels — which is a critical component of tissue repair across virtually every organ system studied.</p><h3>Why Researchers Choose BPC-157</h3><p>BPC-157 has earned its reputation as one of the most versatile research peptides available. Its exceptional stability in biological environments, broad spectrum of activity across tissue types, and well-documented safety profile in preclinical models make it a go-to compound for investigators studying tissue repair mechanisms. When purity and consistency matter — and they always do — BPC-157 delivers reliable, reproducible results across experimental paradigms.</p>`,
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
      `<p>If you're researching tissue remodeling and cellular migration, TB-500 is almost certainly on your radar. This synthetic peptide — representing the active region of Thymosin Beta-4 — has become one of the most sought-after compounds in preclinical repair science. From musculoskeletal recovery to cardiac tissue research, investigators keep coming back to TB-500 because the data is compelling and the mechanisms are fascinating.</p><h3>What is TB-500?</h3><p>TB-500 is a synthetic analog of Thymosin Beta-4 (Tβ4), a naturally occurring 43-amino-acid protein found in virtually all nucleated cells throughout the body. First isolated from calf thymus tissue, Tβ4 is a key regulator of actin dynamics — the structural scaffolding that drives cell movement and shape. TB-500 specifically represents the actin-binding domain of the full molecule, giving researchers a focused tool for studying how cells migrate, proliferate, and rebuild damaged tissue.</p><h3>Research Highlights</h3><p>TB-500's primary mechanism centers on its high-affinity binding to G-actin, the monomeric building block of the cellular cytoskeleton. By influencing the dynamic balance between G-actin and F-actin (the filamentous form), TB-500 modulates how cells organize, move, and differentiate. Research has demonstrated that this isn't just a structural effect — the compound also upregulates genes involved in anti-inflammatory pathways and modulates matrix metalloproteinase (MMP) activity in experimental models.</p><p>In preclinical studies, the results have been noteworthy. Animal model research has reported reduced inflammatory infiltrates and improved structural integrity in injured tissues. Studies investigating cardiac models have shown potential cardioprotective effects, including reduced infarct size in experimental myocardial injury. And in vitro work has demonstrated that Thymosin Beta-4 and its analogs promote endothelial cell migration and tubule formation — key markers of new blood vessel development.</p><p>Research has also explored TB-500's potential interactions with hair follicle stem cells, opening up intriguing avenues in dermatological research that continue to attract investigator interest.</p><h3>Why Researchers Choose TB-500</h3><p>TB-500 stands out for its dual action on both structural repair and inflammatory modulation — a combination that few single compounds can match. Its well-characterized mechanism of action through actin dynamics gives researchers a clear molecular framework to build on, and its demonstrated activity across multiple tissue types — from cardiac to musculoskeletal to dermatological — makes it an exceptionally versatile research tool.</p>`,
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
      `<p>What happens when you combine two of the most extensively studied tissue repair peptides in preclinical science? Researchers are finding out — and the early data suggests the answer is: something potentially greater than the sum of its parts. The BPC-157 + TB-500 blend brings together two compounds that operate through distinct but complementary molecular pathways, and investigators studying tissue repair and cellular signaling are paying close attention.</p><h3>What is the BPC-157 + TB-500 Blend?</h3><p>This dual-peptide research formulation combines BPC-157, a 15-amino-acid gastric-derived compound known for its vascular and cytoprotective activity, with TB-500, a synthetic analog of Thymosin Beta-4 that excels at modulating cytoskeletal dynamics and cellular migration. Think of it as pairing a vascular repair specialist with a cellular architecture expert — each compound brings its own strengths to the investigation, and together they cover a broader spectrum of tissue repair pathways than either alone.</p><h3>Research Highlights</h3><p>The science behind this combination is elegantly logical. BPC-157 primarily works through modulation of nitric oxide synthesis, growth factor receptor upregulation, and VEGF-driven angiogenic pathways. TB-500, meanwhile, operates via high-affinity G-actin binding, influencing cytoskeletal organization and inflammatory mediator modulation. In experimental models, researchers have observed that combining these mechanisms may produce additive effects on angiogenesis and cellular proliferation markers in vitro.</p><p>Preclinical investigations have explored the blend in models of musculoskeletal repair, connective tissue remodeling, and acute tissue injury recovery. The combination uniquely bridges gastrointestinal integrity pathways (via BPC-157's cytoprotective mechanisms) with systemic tissue-remodeling properties (via TB-500's actin-mediated cellular processes).</p><p>Studies on the individual compounds have consistently demonstrated statistically significant improvements in tissue repair metrics compared to controls, and researchers have noted that combining growth factor modulators with cytoskeletal-regulating peptides may offer synergistic potential in experimental tissue engineering contexts.</p><h3>Why Researchers Choose This Blend</h3><p>The BPC-157 + TB-500 combination appeals to researchers who want to investigate multi-pathway approaches to tissue repair in a single formulation. Rather than studying each compound separately, this blend allows investigators to explore complementary mechanisms simultaneously — BPC-157 driving vascular and growth factor responses while TB-500 handles cytoskeletal reorganization and cell migration. It's efficiency and scientific rigor in one vial.</p>`,
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
      `<p>There's a reason GHK-Cu is one of the most cited peptides in regenerative biology — and it starts with a simple, remarkable fact: this copper-peptide complex is naturally present in young humans at high concentrations, but declines dramatically with age. That discovery, first made by researcher Loren Pickart in the 1970s, launched decades of investigation that continue to reveal new dimensions of this compound's extraordinary biological activity.</p><h3>What is GHK-Cu?</h3><p>GHK-Cu (Glycyl-L-Histidyl-L-Lysine copper complex) is a naturally occurring tripeptide-copper complex found in human plasma, saliva, and urine. Despite being just three amino acids long, its unique copper-chelating properties give it biological punch well beyond its size. The copper component plays a critical role in key enzymatic reactions — from collagen crosslinking to antioxidant defense — making GHK-Cu a focus of extensive research in dermatology, wound healing, and regenerative biology.</p><h3>Research Highlights</h3><p>The research on GHK-Cu reads like a highlight reel. Studies have demonstrated that the compound activates genes related to wound repair, anti-inflammatory responses, and antioxidant defense simultaneously. Its copper component is essential for lysyl oxidase activity (the enzyme that crosslinks collagen and elastin) and superoxide dismutase function (a primary cellular antioxidant). Research has shown that GHK-Cu modulates TGF-β expression and influences the balance of matrix metalloproteinases (MMPs) and their inhibitors (TIMPs), directly shaping how the extracellular matrix remodels in experimental models.</p><p>In animal wound models, researchers have reported accelerated wound closure and improved tensile strength of healed tissue compared to untreated controls. Gene array analyses have revealed something even more remarkable — GHK-Cu appears capable of resetting the gene expression patterns of aggressive fibroblasts toward a more normal phenotype, affecting genes involved in protein ubiquitination, DNA repair, and mitochondrial energy metabolism.</p><p>Recent genomic research has expanded the story further, suggesting that GHK-Cu may have neuroprotective properties and the ability to modulate pathways associated with neurodegeneration in experimental models — a finding that has opened entirely new research directions.</p><h3>Why Researchers Choose GHK-Cu</h3><p>GHK-Cu occupies a unique position in research peptide science: it's naturally occurring, has a well-characterized safety profile in preclinical models, and demonstrates activity across an unusually broad range of biological systems. From skin biology to neuroprotection to genomic reprogramming, few compounds offer the same breadth of research applications with the same depth of published supporting data.</p>`,
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
      `<p>Melanotan II has been a cornerstone of melanocortin receptor research since its development at the University of Arizona in the 1980s — and it remains one of the most versatile pharmacological tools for studying this fascinating receptor system. With non-selective agonist activity across four melanocortin receptor subtypes, each governing distinct physiological pathways, MT-II continues to generate significant research interest across multiple scientific disciplines.</p><h3>What is Melanotan II?</h3><p>Melanotan II (MT-II) is a synthetic cyclic heptapeptide analog of alpha-melanocyte-stimulating hormone (α-MSH), the natural pigmentation-regulating peptide derived from proopiomelanocortin (POMC). Engineers designed it to be more potent and metabolically stable than natural α-MSH, and its cyclic structure gives it impressive resistance to enzymatic degradation. MT-II activates multiple melanocortin receptors — MC1R, MC3R, MC4R, and MC5R — each associated with distinct signaling pathways, making it an incredibly versatile research compound.</p><h3>Research Highlights</h3><p>Research on Melanotan II spans an impressive range of biological systems. MC1R activation has been extensively studied in the context of melanogenesis — the production of eumelanin (dark pigment) — with investigators documenting dose-dependent increases in melanin production in melanocyte cultures. Studies have consistently demonstrated melanin synthesis stimulation in both cultured melanocytes and animal models, including measurable pigmentation changes in murine subjects.</p><p>But pigmentation is just one piece of the puzzle. MC4R activation in hypothalamic research models has been linked to appetite regulation and energy homeostasis pathways, and MT-II has been instrumental in dissecting these mechanisms. Research using MC4R knockout mouse models has helped clarify the receptor's role in energy balance, with MT-II serving as the key pharmacological tool. Studies in rodent models have also reported effects on feeding behavior and central nervous system activity attributed to MC4R engagement.</p><p>MC3R and MC5R interactions add additional research dimensions, with studies exploring autonomic function and exocrine gland activity respectively — demonstrating why this single compound remains relevant across so many research domains.</p><h3>Why Researchers Choose Melanotan II</h3><p>Melanotan II's value lies in its unique combination of broad receptor activity and exceptional metabolic stability. As a non-selective melanocortin agonist, it allows researchers to probe multiple receptor systems simultaneously or use it as a starting point for dissecting individual receptor contributions. Its cyclic structure confers resistance to enzymatic degradation, extending biological half-life in experimental systems and making it practical for a wide range of study designs.</p>`,
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
      `<p>PT-141 occupies a unique position in peptide research — it's one of the few melanocortin compounds that has been studied not only in preclinical models but also in controlled human clinical research. Engineered from Melanotan II with a critical structural modification, this compound has become an essential tool for researchers investigating the intersection of melanocortin signaling, dopaminergic neurotransmission, and autonomic arousal pathways in the central nervous system.</p><h3>What is PT-141?</h3><p>PT-141, also known as Bremelanotide, is a synthetic cyclic peptide analog of Melanotan II with a key difference: a hydroxyl group replaces the amide at the C-terminus, altering its pharmacological profile in meaningful ways. It acts as a non-selective melanocortin receptor agonist with affinity for MC1R, MC3R, MC4R, and MC5R, but research has focused particularly on its central nervous system receptor interactions — specifically how MC4R activation in the brain modulates downstream dopaminergic pathways.</p><h3>Research Highlights</h3><p>What sets PT-141 apart from many research peptides is its mechanism of central nervous system activity. Rather than acting through peripheral vascular pathways, PT-141's activity originates centrally via melanocortin pathway modulation. Studies have demonstrated that MC4R activation in the hypothalamus and limbic system is associated with modulation of dopaminergic neurotransmission, and researchers have used PT-141 as a primary tool for mapping these connections.</p><p>In rodent models, PT-141 administration produces measurable increases in dopamine release in specific brain regions, making it invaluable for studying melanocortin-dopamine pathway interactions. Clinical pharmacology studies have gone further, characterizing the compound's receptor binding kinetics, plasma half-life, and receptor-mediated effects in human subjects under controlled trial conditions — a level of clinical data that few research peptides can match.</p><p>Research suggests dose-dependent central nervous system activity mediated through MC4R in both animal and human study subjects, contributing to a growing understanding of how neuropeptide signaling intersects with autonomic function at the molecular level.</p><h3>Why Researchers Choose PT-141</h3><p>PT-141's combination of clinical-grade pharmacokinetic data, well-characterized receptor binding profile, and central nervous system activity makes it exceptionally valuable for neuroscience and melanocortin research. Unlike compounds studied purely in vitro, PT-141 comes with human pharmacological data that gives researchers confidence in its translational relevance. For investigating the melanocortin-dopamine axis, there's simply no better tool available.</p>`,
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
      `<p>When researchers need sustained, long-acting stimulation of the growth hormone axis, CJC-1295 with DAC is the compound that changed the game. Its ingenious Drug Affinity Complex modification enables it to bind to circulating albumin, creating a slow-release depot that extends its activity for days rather than minutes — a breakthrough that transformed how scientists study prolonged GHRH receptor stimulation and its downstream effects.</p><h3>What is CJC-1295 with DAC?</h3><p>CJC-1295 with DAC is a synthetic analog of growth hormone-releasing hormone (GHRH), the 44-amino-acid hypothalamic peptide that tells the pituitary to produce growth hormone. The DAC (Drug Affinity Complex) modification is the key innovation: a lysine linker enables covalent binding to plasma albumin, dramatically extending the peptide's half-life in circulation. This means a single administration can sustain elevated GHRH receptor stimulation far longer than unmodified GHRH or the non-DAC variant — making it an invaluable tool for studying what happens when the GH axis receives sustained activation.</p><h3>Research Highlights</h3><p>The pharmacological data on CJC-1295 with DAC is compelling. Clinical pharmacology studies have documented significant and prolonged elevations of plasma GH and IGF-1 in human research subjects, with effects persisting for up to two weeks following a single administration — a remarkable duration for a peptide compound. The mechanism is well-characterized: albumin binding via a maleimide group creates a circulating depot that slowly releases active peptide.</p><p>At the receptor level, CJC-1295 with DAC activates the GHRH receptor (GHRHR) on pituitary somatotrophs, stimulating adenylyl cyclase, elevating cAMP, and triggering growth hormone synthesis and pulsatile release. Animal model research has demonstrated dose-dependent GH stimulation with statistically significant increases in IGF-1 levels compared to controls.</p><p>Studies have also reported changes in body composition parameters in animal models, including alterations in fat mass distribution and protein synthesis markers — providing researchers with quantifiable endpoints for studying the metabolic consequences of sustained GH axis activation.</p><h3>Why Researchers Choose CJC-1295 with DAC</h3><p>The DAC modification isn't just clever chemistry — it's a practical research advantage. For investigators studying the long-term effects of sustained GHRH receptor activation on pituitary GH reserves, IGF-1 production, and the broader somatomedin cascade, the extended-duration profile of CJC-1295 with DAC eliminates the need for frequent re-dosing and provides a more consistent experimental platform. When the research question involves prolonged GH axis stimulation, this is the compound that delivers.</p>`,
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
      `<p>For researchers who want to study the growth hormone axis the way nature designed it — in pulses, not sustained elevation — CJC-1295 without DAC is the precision tool of choice. Also known as Modified GRF 1-29, this compound faithfully mimics the pulsatile pattern of natural GHRH while offering dramatically improved stability over the endogenous molecule. It's the difference between studying what the GH axis does when you nudge it versus when you hold the button down.</p><h3>What is CJC-1295 without DAC?</h3><p>CJC-1295 without DAC (Mod-GRF 1-29) is a synthetic modified analog of the first 29 amino acids of growth hormone-releasing hormone. It features four strategic amino acid substitutions at positions 2, 8, 15, and 27 — each designed to enhance resistance to enzymatic degradation while preserving the natural pulsatile GH secretion pattern. Without the DAC albumin-binding modification, this variant produces shorter-duration receptor stimulation that closely mirrors how endogenous GHRH actually works in the body.</p><h3>Research Highlights</h3><p>The beauty of CJC-1295 without DAC lies in its physiological fidelity. Research comparing the DAC and non-DAC variants has provided valuable insights into the biological consequences of pulsatile versus sustained GHRH receptor activation. Studies have demonstrated that the non-DAC variant produces GH pulses more consistent in timing with natural secretory episodes — making it the preferred tool when the research question involves understanding normal GH physiology rather than pharmacological override.</p><p>Animal model investigations have reported statistically significant increases in plasma GH and IGF-1 following administration, with effects proportional to dose and timing relative to natural GH secretory cycles. This timing sensitivity itself has been informative, revealing how the GH axis responds differently depending on where the stimulus falls within the natural pulse cycle.</p><p>One of the most exciting research applications involves combination studies with growth hormone secretagogues like Ipamorelin. Because CJC-1295 without DAC acts through the GHRH receptor while Ipamorelin targets the ghrelin receptor (GHSR-1a), researchers have documented synergistic enhancement of GH release — supporting the hypothesis of complementary signaling at the pituitary level and opening up dual-pathway research paradigms.</p><h3>Why Researchers Choose CJC-1295 without DAC</h3><p>When the research goal is to study physiological GH pulsatility rather than sustained pharmacological stimulation, CJC-1295 without DAC is the clear choice. Its enhanced stability over native GHRH ensures reproducible results, while its pulsatile action profile preserves the biological relevance that makes findings translatable. Combined with its well-documented synergy with GHSR agonists, it's an essential compound for any serious GH axis research program.</p>`,
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
      `<p>GHRP-6 is where modern growth hormone secretagogue research began. As one of the first synthetic GH secretagogues ever identified, this hexapeptide was instrumental in the discovery and characterization of the ghrelin receptor system — a contribution that reshaped our understanding of pituitary pharmacology. Today, it remains an essential reference compound and active research tool for investigators studying GH secretion, cardiac protection, and appetite regulation pathways.</p><h3>What is GHRP-6?</h3><p>GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide that acts as a ghrelin mimetic — it binds to and activates the same receptor (GHSR-1a) that the body's natural hunger hormone, ghrelin, uses. Developed and characterized in the 1980s, GHRP-6 served as the foundational compound that helped researchers map the entire ghrelin receptor system. It belongs to the growth hormone secretagogue family and has been studied extensively across species from rodents to humans.</p><h3>Research Highlights</h3><p>GHRP-6's primary mechanism — GHSR-1a agonism — triggers a well-characterized intracellular cascade: PLC activation via Gq/11 coupling, calcium mobilization, PKC activation, and ultimately GH secretion from pituitary somatotrophs. But it doesn't stop at the pituitary. Research has demonstrated that GHRP-6 also acts centrally to modulate GHRH release from the hypothalamus, creating a dual-action effect that explains its robust GH-releasing potency.</p><p>One of the most exciting research directions involves GHRP-6's interactions with cardiac tissue. Studies in rodent ischemia models have reported that GHRP-6 pre-treatment was associated with reduced infarct size and improved functional recovery metrics, with investigators attributing these effects to GHSR-1a-mediated anti-apoptotic signaling in cardiomyocytes — demonstrating that ghrelin receptor activity extends far beyond growth hormone release.</p><p>Research has established GHRP-6 as a potent stimulator of GH secretion across multiple species, with its GH-releasing activity demonstrated to be additive to that of GHRH through distinct receptor systems — supporting the foundational two-receptor model of GH secretion regulation. The compound also activates appetite-related pathways through GHSR-1a, reflecting ghrelin's natural orexigenic function and making it valuable for feeding behavior research.</p><h3>Why Researchers Choose GHRP-6</h3><p>GHRP-6's historical significance as the founding compound of GH secretagogue research gives it an unmatched publication record and research pedigree. Its broader hormonal profile — including cortisol and prolactin co-stimulation that the more selective Ipamorelin lacks — actually makes it more valuable for certain research applications, particularly comparative pharmacology studies investigating receptor selectivity. When the research question involves the full spectrum of GHSR-1a activation, GHRP-6 provides the complete picture.</p>`,
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
      `<p>When researchers need the most potent synthetic GH secretagogue available, GHRP-2 consistently rises to the top. This second-generation compound delivers enhanced potency over its predecessor GHRP-6, a well-characterized receptor binding profile, and a breadth of research applications spanning from pituitary diagnostics to bone biology. It's the heavy hitter of the GHRP family — and the data backs it up.</p><h3>What is GHRP-2?</h3><p>GHRP-2 (Growth Hormone Releasing Peptide-2), also known as Pralmorelin, is a synthetic hexapeptide and potent GHSR-1a (ghrelin receptor) agonist. Developed as a second-generation GH secretagogue following GHRP-6, it features a distinct amino acid sequence that delivers enhanced potency on a molar basis while maintaining the broad research utility that defines the GHRP compound class. GHRP-2 has been studied in both preclinical animal models and controlled human research settings.</p><h3>Research Highlights</h3><p>Clinical pharmacology studies have established GHRP-2 as one of the most potent synthetic GH secretagogues ever studied in human research subjects — peak GH concentrations following administration exceed those produced by GHRP-6 at equivalent doses. The mechanism is well-understood: GHSR-1a activation proceeds through Gq/11 coupling, stimulating PLC and mobilizing calcium stores via IP3 and DAG signaling, culminating in robust GH synthesis and pulsatile secretion from somatotrophs.</p><p>But GHRP-2's research value extends beyond raw GH-releasing power. Studies have documented robust dose-dependent elevations in both GH and IGF-1 with a pharmacokinetic profile characterized by rapid onset and relatively short duration — ideal for controlled experimental designs. Research in bone biology models has reported increased bone mineral density and markers of bone formation following GHRP-2 administration, opening up applications in skeletal research.</p><p>Perhaps most intriguingly, investigations into connective tissue biology have revealed GHRP-2's stimulatory effects on collagen production in fibroblast cultures and animal wound models — an activity attributed to GHSR-independent pathways that hints at the compound's broader biological reach beyond classical ghrelin receptor signaling.</p><h3>Why Researchers Choose GHRP-2</h3><p>GHRP-2 is chosen when maximum GH-releasing potency is the priority. Its superior efficacy over GHRP-6, documented activity in bone and connective tissue research, and established use as a diagnostic provocation tool for pituitary somatotroph reserve make it one of the most versatile and powerful GH secretagogues available. For comparative receptor pharmacology studies, its known cortisol and prolactin co-stimulation profile provides a valuable data point alongside the more selective Ipamorelin.</p>`,
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
      `<p>IGF-1 LR3 is what happens when scientists engineer a growth factor to be dramatically more potent than nature intended — and the results have made it one of the most powerful tools in cell biology and muscle physiology research. By reducing binding to inhibitory proteins while preserving full receptor activity, this modified analog delivers amplified signaling through the PI3K/Akt/mTOR and MAPK/ERK cascades — the master switches of protein synthesis and cell growth.</p><h3>What is IGF-1 LR3?</h3><p>IGF-1 LR3 (Insulin-like Growth Factor-1 Long Arg3) is a synthetic 83-amino-acid recombinant analog of human IGF-1, engineered with two key modifications: a 13-amino-acid N-terminal extension and an arginine substitution at position 3 (replacing glutamic acid). These changes dramatically reduce binding to IGF-binding proteins (IGFBPs) — the regulatory proteins that normally sequester and inactivate circulating IGF-1 — while fully preserving affinity for the IGF-1 receptor. The result is a compound with approximately 2-3x longer half-life and significantly greater bioavailability than native IGF-1.</p><h3>Research Highlights</h3><p>The enhanced potency of IGF-1 LR3 isn't theoretical — it's been demonstrated repeatedly in controlled studies. Research has shown that IGF-1 LR3 produces significantly greater and more sustained activation of PI3K/Akt and MAPK/ERK signaling compared to equimolar doses of native IGF-1 in cell culture systems. Because a greater proportion of administered compound remains in the biologically active, free form (not sequestered by IGFBPs), downstream signaling is amplified at every step.</p><p>In animal models, the data is equally compelling. Statistically significant increases in skeletal muscle mass and protein synthesis markers have been documented in both normal and catabolic state rodent models following IGF-1 LR3 administration. Research has also revealed inhibition of myostatin expression and signaling — myostatin being the body's natural brake on muscle growth — adding a disinhibition mechanism to IGF-1 LR3's direct anabolic effects.</p><p>The compound's research applications extend into fat metabolism as well, with studies reporting enhanced lipolysis and reduced lipid accumulation consistent with IGF-1R activation of fat metabolism pathways. Cancer biology researchers have also utilized IGF-1 LR3 as a pharmacological tool to study IGF-1R signaling in tumor cell proliferation models, demonstrating the breadth of its experimental utility.</p><h3>Why Researchers Choose IGF-1 LR3</h3><p>IGF-1 LR3 solves a fundamental problem in IGF signaling research: IGFBP interference. By removing the binding protein confound, it allows researchers to study IGF-1 receptor activation in its purest form. The enhanced half-life and bioavailability translate to more consistent experimental conditions, more reproducible results, and clearer data on downstream signaling cascades. For any research involving the insulin/IGF signaling axis, IGF-1 LR3 is the enhanced tool that makes clean science possible.</p>`,
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
      `<p>Sometimes nature's own modifications are the most elegant. IGF-1 DES — a naturally occurring truncated variant of IGF-1 first discovered in human brain tissue — has ten times less binding to inhibitory proteins than its full-length counterpart, yet maintains full receptor activity. This natural engineering feat has made it a fascinating research tool for investigators studying local, tissue-level IGF signaling — the kind of paracrine biology that full-length IGF-1 studies can miss entirely.</p><h3>What is IGF-1 DES?</h3><p>IGF-1 DES (Des(1-3)-IGF-1) is a naturally occurring variant of insulin-like growth factor-1 that's missing the first three amino acids (Gly-Pro-Glu) of the mature sequence. First identified in human brain tissue and bovine colostrum, this isn't a laboratory creation — it's a compound the body actually produces. The N-terminal truncation reduces IGFBP binding by approximately 10-fold while paradoxically increasing intrinsic potency at the IGF-1 receptor in some experimental systems — a combination that caught researchers' attention immediately.</p><h3>Research Highlights</h3><p>The key insight driving IGF-1 DES research is its relevance to local tissue signaling. Because it largely escapes IGFBP sequestration, IGF-1 DES is thought to represent how IGF-1 actually functions at the tissue level — in autocrine and paracrine mode rather than the endocrine (systemic) signaling that full-length IGF-1 is associated with. Research has confirmed this: cell culture studies have demonstrated greater bioavailability and enhanced receptor signaling at equivalent concentrations in IGFBP-rich conditions.</p><p>In muscle biology, IGF-1 DES has shown robust activation of anabolic signaling pathways, with some investigators reporting enhanced sensitivity compared to native IGF-1 in satellite cell differentiation models. These satellite cells — the body's muscle stem cells — respond differently to local versus systemic IGF-1 signals, making IGF-1 DES a uniquely informative research tool for studying muscle repair and growth at the cellular level.</p><p>The neuroscience dimension is equally compelling. IGF-1 DES has been identified as a naturally occurring neuropeptide in cerebrospinal fluid, and given its abundance in brain tissue, researchers have investigated its role in neuronal differentiation, proliferation, and survival. Animal studies comparing local tissue effects of IGF-1 DES versus native IGF-1 following intramuscular administration have confirmed enhanced local bioavailability of the truncated form — validating its research utility for studying tissue-level signaling.</p><h3>Why Researchers Choose IGF-1 DES</h3><p>IGF-1 DES fills a niche that no other IGF compound can: it models paracrine IGF-1 signaling as it naturally occurs in tissues. For researchers studying local growth factor dynamics in muscle, brain, or other tissues where IGFBPs are abundant, IGF-1 DES provides biologically relevant data that full-length IGF-1 or even IGF-1 LR3 cannot replicate. Its natural origin and endogenous presence in brain and colostrum add biological credibility that purely synthetic modifications cannot match.</p>`,
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
      `<p>In the world of muscle biology research, few findings have been as dramatic as what happens when you neutralize myostatin — the body's natural brake on muscle growth. Follistatin-344 does exactly that, and the results in preclinical models have been nothing short of remarkable: transgenic mice overexpressing this protein have developed muscle mass approximately twice that of their wild-type counterparts. It's no wonder researchers studying muscle physiology, gene therapy, and TGF-β signaling consider Follistatin-344 an essential compound.</p><h3>What is Follistatin-344?</h3><p>Follistatin-344 is a specific isoform of Follistatin (FST), a glycoprotein that acts as a binding protein and neutralizing antagonist for members of the TGF-β superfamily — most notably myostatin (GDF-8), activins, and bone morphogenetic proteins (BMPs). The "344" refers to its amino acid count, distinguishing it from the shorter Follistatin-288 isoform. Follistatin-344 is the predominant circulating isoform and has become a primary research tool for investigating muscle mass regulation, reproductive biology, and developmental signaling.</p><h3>Research Highlights</h3><p>Follistatin-344's primary mechanism is elegantly simple: it binds directly to myostatin and activins with high affinity, forming complexes that prevent these growth-inhibiting ligands from reaching their receptors (ACVR2A/B). By sequestering myostatin, Follistatin effectively removes the brakes on muscle growth, allowing the PI3K/Akt/mTOR pathway to drive protein synthesis and myoblast differentiation without inhibitory interference. Studies have demonstrated that Follistatin-344 binds myostatin with approximately 10-fold higher affinity than activins, making it a potent and selective tool.</p><p>The preclinical data speaks for itself. Transgenic mouse models overexpressing Follistatin-344 have exhibited dramatic increases in skeletal muscle mass — roughly double that of wild-type controls in specific muscle groups. Gene therapy research using viral vectors to deliver Follistatin-344 in animal models of muscular dystrophy has reported significant improvements in both muscle mass and functional strength metrics compared to untreated controls.</p><p>Beyond muscle biology, Follistatin-344 has confirmed its role in the hypothalamic-pituitary-gonadal axis through reproductive biology research, where overexpression in animal models produces alterations in FSH signaling and follicular development — demonstrating the breadth of TGF-β superfamily biology that this single compound can illuminate.</p><h3>Why Researchers Choose Follistatin-344</h3><p>For studying myostatin pathway biology, there is no more direct or powerful tool than Follistatin-344. Its high-affinity myostatin binding, well-characterized mechanism, and dramatic preclinical results in both transgenic and gene therapy models make it the reference standard for muscle growth signaling research. The fact that it's the predominant circulating isoform adds physiological relevance that synthetic alternatives cannot match.</p>`,
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
      `<p>MOTS-c may be the most exciting discovery in mitochondrial biology this decade. In 2015, researchers at USC made a remarkable finding: a peptide encoded not in our nuclear DNA, but in the mitochondrial genome — and it turned out to be a powerful regulator of metabolism, exercise response, and cellular aging. That discovery upended assumptions about where our signaling molecules come from and opened an entirely new frontier in metabolic and aging research.</p><h3>What is MOTS-c?</h3><p>MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA-c) is a 16-amino-acid mitochondrial-derived peptide (MDP) encoded within the 12S rRNA gene of the mitochondrial genome. This is remarkable because virtually all other peptide hormones are encoded in nuclear DNA — MOTS-c represents a new class of signaling molecules that challenge our understanding of how mitochondria communicate with the rest of the cell. Its discovery has provided unique insights into mitochondrial-nuclear crosstalk and cellular energy regulation.</p><h3>Research Highlights</h3><p>MOTS-c's mechanism centers on AMPK activation — the master metabolic switch that coordinates cellular energy balance. Studies have demonstrated that the peptide activates AMPK through an unexpected pathway: modulation of the folate cycle and purine biosynthesis. But it doesn't stop there. Under stress conditions, researchers have observed direct nuclear translocation of MOTS-c, where it modulates transcription factors including NRF2 and regulates antioxidant response element (ARE)-driven gene expression — a truly remarkable range of activity for a 16-amino-acid peptide.</p><p>The metabolic data is compelling. In aged and diet-induced obese mouse models, exogenous MOTS-c administration has produced significant improvements in insulin sensitivity, glucose tolerance, and weight management parameters compared to controls. Research in skeletal muscle cells has shown that MOTS-c promotes glucose utilization and fatty acid oxidation, providing mechanistic support for the whole-animal findings.</p><p>The exercise connection adds another fascinating layer. Human studies have documented that plasma MOTS-c concentrations increase following acute exercise and correlate positively with mitochondrial function markers. Research in aged mice has demonstrated improvements in physical performance metrics following MOTS-c treatment — suggesting this mitochondrial peptide may play a role in the molecular mechanisms linking exercise to metabolic fitness.</p><h3>Why Researchers Choose MOTS-c</h3><p>MOTS-c occupies a unique position as the only well-characterized mitochondrial-derived metabolic signaling peptide. For researchers studying the intersection of mitochondrial biology, metabolism, aging, and exercise physiology, there is simply no substitute. Its AMPK-activating mechanism, nuclear translocation capability, and demonstrated effects on metabolic parameters in animal models make it an essential tool for cutting-edge metabolic research — and the field is still in its early days.</p>`,
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
      `<p>In the expanding world of immunomodulatory peptide research, Thymosin Alpha-1 stands in a class of its own. It's one of the most clinically investigated thymic peptides worldwide, with research spanning from fundamental T-cell biology to clinical studies across multiple countries. When researchers need a well-validated tool for studying immune system modulation — from T-lymphocyte maturation to Toll-like receptor signaling — Tα1 delivers decades of published data and a depth of mechanistic understanding that few immune peptides can match.</p><h3>What is Thymosin Alpha-1?</h3><p>Thymosin Alpha-1 (Tα1, Thymalfasin) is a 28-amino-acid peptide originally isolated from bovine thymus tissue by Allan Goldstein and colleagues in 1977. It's derived from the N-terminal region of prothymosin alpha, a nuclear protein involved in chromatin remodeling. What sets Tα1 apart from many research peptides is the sheer volume of investigation it has undergone — including approval for clinical use in several countries for specific indications, making it one of the most validated immune peptides bridging preclinical and clinical research.</p><h3>Research Highlights</h3><p>Thymosin Alpha-1's immunomodulatory activity operates through multiple well-characterized pathways. Studies have demonstrated that it activates Toll-like receptor (TLR) signaling — particularly TLR-2 and TLR-9 — on dendritic cells and other antigen-presenting cells, promoting NF-κB activation and downstream cytokine production. Research has shown that Tα1 enhances T-helper 1 (Th1) immune responses by promoting IL-12 and IFN-γ production while simultaneously modulating regulatory T-cell (Treg) function — a sophisticated balancing act that distinguishes it from blunt immune stimulants.</p><p>Clinical research has examined Tα1 in studies involving chronic viral infections, with investigators reporting modulation of viral load markers and immune response parameters. Oncology research has documented its ability to enhance cytotoxic T-lymphocyte activity and NK cell function, with implications for tumor immunosurveillance research. Studies in aged animal models have reported normalization of several immune parameters associated with immunosenescence — the age-related decline in immune function that is one of the most active areas of gerontological investigation.</p><p>The compound's favorable safety profile across multiple clinical research contexts has been consistently documented, reinforcing its position as a reliable research tool for immune system studies.</p><h3>Why Researchers Choose Thymosin Alpha-1</h3><p>No other thymic peptide offers the same combination of mechanistic depth, clinical validation, and breadth of research applications. Tα1's dual activity on innate (TLR-mediated) and adaptive (T-cell and NK cell) immune pathways makes it uniquely versatile for immunological research. Its established safety profile and clinical research history in multiple countries provide a level of translational confidence that purely preclinical compounds cannot offer.</p>`,
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
      `<p>LL-37 is the human body's own antimicrobial weapon — the only cathelicidin peptide we produce — and it turns out to be far more than just a bacteria killer. Research has revealed a multifunctional molecule that bridges innate immunity, wound repair, and inflammatory regulation, making it one of the most fascinating compounds in immunology and antimicrobial research. In an era of growing concern about antimicrobial resistance, LL-37's natural membrane-disrupting mechanism has attracted intense scientific attention.</p><h3>What is LL-37?</h3><p>LL-37 is a 37-amino-acid cationic antimicrobial peptide (AMP) derived from the human cathelicidin protein hCAP-18. Named for its two N-terminal leucine residues and 37-amino-acid length, it's produced by neutrophils, monocytes, keratinocytes, and epithelial cells — the body's frontline defenders. In hydrophobic environments, LL-37 adopts an amphipathic alpha-helical structure that is central to its membrane-interactive properties, essentially becoming a molecular sword that targets microbial membranes.</p><h3>Research Highlights</h3><p>LL-37's antimicrobial mechanism is elegantly direct: electrostatic interactions with negatively charged bacterial membrane components, followed by insertion into the lipid bilayer, disrupting membrane integrity through pore formation or carpet-like dissolution. Research has established its broad-spectrum activity against bacterial, viral, and fungal pathogens in laboratory conditions, including multidrug-resistant strains — a finding with significant implications for antimicrobial resistance research.</p><p>But LL-37's story extends far beyond killing microbes. Research has demonstrated that the peptide neutralizes LPS-induced TLR4 activation (dampening dangerous inflammatory cascades), promotes wound repair through EGFR transactivation and FPR2 signaling, and modulates dendritic cell and T-cell activity. Wound healing studies have shown that LL-37 promotes keratinocyte migration and stimulates angiogenesis through VEGF receptor signaling — making it an active player in tissue repair, not just defense.</p><p>Immunological research has reported that LL-37 promotes dendritic cell differentiation and enhances antigen presentation capacity, adding yet another dimension. Studies have also documented altered LL-37 expression patterns in various inflammatory and neoplastic conditions, positioning it as both a research tool and a biomarker of growing interest across multiple disease model contexts.</p><h3>Why Researchers Choose LL-37</h3><p>LL-37's multifunctionality is its defining advantage. As the only human cathelicidin, it occupies a unique position at the intersection of antimicrobial defense, wound repair, and immune regulation. For researchers studying innate immunity, antimicrobial mechanisms, or the increasingly important connection between host defense and tissue repair, LL-37 provides a single compound that illuminates multiple interconnected biological systems. Its endogenous human origin adds clinical relevance that synthetic antimicrobial peptides cannot replicate.</p>`,
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
      `<p>NAD+ isn't just another research compound — it's a molecule so fundamental to life that every living cell depends on it. But what's driven the recent explosion of research interest isn't its role in basic metabolism (that's been known for a century). It's the groundbreaking discovery that NAD+ levels decline dramatically with age — and that this decline may be a central driver of age-related cellular dysfunction. That finding has made NAD+ one of the most actively investigated molecules in aging and metabolic biology research.</p><h3>What is NAD+?</h3><p>NAD+ (Nicotinamide Adenine Dinucleotide) is a critical coenzyme found in every living cell. Structurally, it consists of two nucleotides — adenine and nicotinamide — connected by a diphosphate bridge, and it exists in two interconvertible forms: oxidized (NAD+) and reduced (NADH). While its role as an electron carrier in cellular energy production is well-established, NAD+'s true importance for modern research lies in its function as a substrate for sirtuins, PARPs, and other enzymes that regulate gene expression, DNA repair, and cellular stress responses.</p><h3>Research Highlights</h3><p>The aging research on NAD+ has produced some of the most compelling data in gerontological science. Studies have consistently demonstrated that NAD+ levels decline significantly with age in multiple tissues in both rodent models and human studies, with associated impairments in mitochondrial function and sirtuin activity. This decline isn't subtle — it's dramatic enough to measurably limit the activity of critical enzymes including SIRT1 (which regulates metabolic gene expression), SIRT3 (which governs mitochondrial protein function), and PARPs (which drive DNA damage repair).</p><p>Preclinical studies restoring NAD+ levels in aged animals have reported improvements in mitochondrial biogenesis markers, energy metabolism parameters, and physical performance metrics compared to controls. Research on sirtuin activation has documented NAD+-dependent deacetylation of metabolic regulators and mitochondrial proteins, providing mechanistic support for the observed relationship between NAD+ levels and metabolic function in aging models.</p><p>DNA repair research has added another critical dimension, showing that NAD+ availability is rate-limiting for PARP-mediated DNA damage response under conditions of genotoxic stress. This means declining NAD+ doesn't just affect energy metabolism — it may compromise the cell's ability to maintain genomic integrity, a finding with profound implications for aging biology.</p><h3>Why Researchers Choose NAD+</h3><p>NAD+ sits at the crossroads of metabolism, aging, and DNA repair — three of the most important frontiers in biological research. Its role as a substrate for sirtuins and PARPs makes it uniquely positioned to influence gene expression, mitochondrial function, and genomic stability simultaneously. For researchers studying the molecular biology of aging, there may be no single molecule more important to understand. The depth of published data and the breadth of biological systems it touches make NAD+ an essential focus for any serious aging or metabolic research program.</p>`,
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
      `<p>The science of cellular senescence — how and why cells stop functioning optimally as they age — has exploded in recent years, and OS-01 is at the forefront of this research frontier. This synthetic small molecule compound has gained attention for its interactions with AMPK, the cell's master metabolic sensor, and its potential to modulate the molecular programs associated with biological aging. For researchers studying the intersection of cellular energy, senescence, and skin biology, OS-01 represents a genuinely novel approach.</p><h3>What is OS-01?</h3><p>OS-01 is a synthetic small molecule compound being investigated for its ability to modulate AMPK (AMP-activated protein kinase) signaling — a pathway central to cellular energy homeostasis, mitochondrial biogenesis, and autophagy regulation. The compound represents an emerging approach to studying cellular senescence: rather than targeting individual age-related changes, it engages a master regulatory pathway that influences multiple downstream aging-associated processes simultaneously. Research has focused particularly on its applications in skin biology and dermatological aging models.</p><h3>Research Highlights</h3><p>Research suggests that OS-01 activates AMPK by phosphorylating the AMPKα subunit, initiating a cascade of metabolically significant downstream effects. AMPK activation promotes mitochondrial biogenesis through PGC-1α transcription factor induction, enhances fatty acid oxidation, and suppresses mTOR signaling — a pathway increasingly associated with cellular aging and senescence regulation in experimental models.</p><p>In skin-relevant research, studies have examined OS-01's influence on collagen and elastin gene expression in dermal fibroblast cell culture systems, with investigators documenting measurable changes in structural protein expression profiles. Research has also explored the compound's effects on senescence-associated secretory phenotype (SASP) components — the inflammatory molecules that senescent cells produce — with preclinical data suggesting modulation of these markers following compound treatment.</p><p>Transcriptomic analyses have identified gene expression signatures consistent with AMPK pathway activation and modulation of aging-associated cellular programs in treated tissue samples. Research in topical application models has demonstrated meaningful tissue penetration with measurable target engagement at the molecular level, supporting its practical utility in dermatological research contexts.</p><h3>Why Researchers Choose OS-01</h3><p>OS-01 offers something unique in the aging research space: a compound designed specifically to engage the AMPK-senescence axis with demonstrated activity in skin biology models. For researchers studying how cellular aging manifests in specific tissues — particularly skin, where senescence biology is increasingly well-understood — OS-01 provides a targeted tool that connects master metabolic regulation to tissue-specific aging outcomes. It's an emerging compound, but the early data and novel mechanism have made it one of the most closely watched molecules in skin aging research.</p>`,
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

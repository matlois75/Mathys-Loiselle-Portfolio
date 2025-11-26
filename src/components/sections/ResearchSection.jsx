import { FiExternalLink } from "react-icons/fi";

const researchWorks = [
  {
    authors: "N. Krishna, M. Loiselle, A. Ryoo, M. Perich, G. Lajoie",
    title:
      "Towards a generalizable, unified framework for multimodal neural decoding",
    venue:
      "NeurIPS 2025 Workshop: Foundation Models for the Brain and Body (BrainBodyFM).",
  },
];

const ResearchSection = () => (
  <section id="research">
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
        <h2 className="text-h1 uppercase tracking-wide">4. Research</h2>
        <a
          href="https://scholar.google.com/citations?user=Osvxfa8AAAAJ"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-3 sm:px-4 py-2 border border-black rounded-full text-sm sm:text-base font-medium hover:bg-black/5 transition select-none flex items-center justify-center gap-2 w-fit"
        >
          Google Scholar{""}
          <FiExternalLink className="inline-block align-text-bottom" />
        </a>
      </div>
      <div className="space-y-8">
        {researchWorks.map((work, idx) => (
          <div key={idx} className="p-6 space-y-2">
            <h3 className="text-h3">{work.title}</h3>
            <div
              className="text-p text-gray-700"
              dangerouslySetInnerHTML={{
                __html: work.authors.replace(
                  "M. Loiselle",
                  `<strong class="font-semibold">M. Loiselle</strong>`
                ),
              }}
            />
            <div className="text-h4 italic text-gray-500">
              {work.venue}, {work.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ResearchSection;

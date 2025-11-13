export function Awards() {
  const awards = [
    {
      year: "2023 - Present",
      title: "ASEAN International Mobility Scholarship (AIMS)",
      detail: "Ministry of Education and Culture Republic of Indonesia",
    },
    {
      year: "2021",
      title: "Full Stack Digital Marketing",
      detail: "RevoU",
    },
    {
      year: "2021",
      title: "Basis Examen Inburgering A1",
      detail: "Dienst Uitvoering Onderwijs",
    },
    {
      year: "2014",
      title: "2nd Place in Olimpiade Sains Nasional (OSN)",
      detail: "Economics - Ministry of Education and Culture Republic of Indonesia",
    },
    {
      year: "2013",
      title: "Raised 100 Million IDR in Sponsorship",
      detail: "Asian English Olympics",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-white">Notable</span> <span className="text-[#5DADE2]">Achievements</span>
        </h2>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-card border-l-4 border-[#5DADE2] border-r border-t border-b border-gray-800 rounded-lg p-6 hover:border-[#5DADE2] hover:shadow-[0_0_20px_rgba(93,173,226,0.3)] transition shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <div className="text-base text-white mb-1">{award.year}</div>
                  <h3 className="text-xl font-bold text-white mb-1">{award.title}</h3>
                  <p className="text-white text-lg">{award.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

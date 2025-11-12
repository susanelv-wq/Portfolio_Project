export function Awards() {
  const awards = [
    {
      year: "2023 - Present",
      title: "Ministry of Education and Culture Republic of Indonesia",
      detail: "ASEAN International Mobility Scholarship (AIMS)",
    },
    {
      year: "2021",
      title: "Full Stack Digital Marketing Certification",
      detail: "RevoU",
    },
    {
      year: "2014",
      title: "2nd Place in Olimpiade Sains Nasional (OSN)",
      detail: "Economics - Ministry of Education and Culture Republic of Indonesia",
    },
    {
      year: "2013",
      title: "Raised 100 Million IDR in Sponsorship",
      detail: "Asian English Olympics - Balai Bahasa",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Awards & <span className="text-[#FF1493]">Achievements</span>
        </h2>

        <div className="space-y-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-lg p-6 border-l-4 border-[#FF1493] shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF1493] to-[#5DADE2] flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-[#5DADE2] mb-1">{award.year}</div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{award.title}</h3>
                  <p className="text-gray-300">{award.detail}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

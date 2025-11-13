export function Experience() {
  const experiences = [
    {
      period: "2021 - Present",
      location: "Bali, Indonesia",
      title: "Founder & Digital Marketing Strategist",
      company: "Bahasa Bule",
      highlights: [
        "Designed and implemented digital marketing strategies that grew the business to handle ~500 classes monthly",
        "Built and maintained the official website and other IT platforms",
        "Created diverse educational products, including books, flashcards, video lessons, and a mobile app",
        "Successfully managed social media campaigns, increasing brand awareness and engagement",
        "Established strategic partnerships with major brands like FINNS, Bwork, and Atlas",
        "Developed and nurtured community relationships with students through community platforms",
      ],
    },
    {
      period: "2020 - Present",
      location: "Remote",
      title: "Digital Marketing Consultant",
      company: "Clients",
      highlights: [
        "Developed content strategies, managed social media ads, and provided branding solutions",
        "Helped businesses establish a consistent and engaging online presence",
      ],
    },
    {
      period: "2016 - 2017",
      location: "Singapore",
      title: "Business Development Executive",
      company: "Ishaan Pte. Ltd",
      highlights: [
        "Conducted market research and identified business opportunities in the IT and technology sectors",
        "Built and maintained relationships with high-profile clients, including Singapore Airport Transport Service (SATS)",
        "Supported the planning of marketing strategies to enhance engagement and business growth",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-[#5DADE2]">Experience</span> <span className="text-white">That Matters</span>
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-[#5DADE2] pl-8 pb-8 last:pb-0 hover:shadow-[0_0_15px_rgba(93,173,226,0.2)] transition rounded-r-lg">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-lg text-gray-400 mb-2">{exp.company}</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-400 mb-1">{exp.period}</div>
                  <div className="text-sm text-gray-400">{exp.location}</div>
                </div>
              </div>
              <ul className="space-y-2 text-base text-gray-300">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#5DADE2] font-bold text-lg leading-6">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

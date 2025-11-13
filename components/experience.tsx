export function Experience() {
  const experiences = [
    {
      period: "2021 - Present",
      title: "Founder & Digital Marketing Strategist",
      company: "Bahasa Bule",
      highlights: [
        "Designed and implemented digital marketing strategies that grew the business to handle ~500 classes monthly",
        "Built and maintained the official website (bahasabule.com) using CMS platforms",
        "Created diverse educational products including books, flashcards, video lessons, and a mobile app",
        "Successfully managed social media campaigns, increasing brand awareness and engagement",
        "Established strategic partnerships with major brands like FINNS, Bwork, and BFB",
      ],
    },
    {
      period: "2020 - Present",
      title: "Website Specialist",
      company: "Freelance Projects",
      highlights: [
        "Designed and maintained websites using WordPress, ensuring responsive and user-friendly layouts",
        "Developed custom solutions tailored to client needs and business goals",
        "Managed website performance and user experience optimization",
      ],
    },
    {
      period: "2020 - Present",
      title: "Digital Marketing Consultant",
      company: "Small Business Clients",
      highlights: [
        "Developed content strategies and managed social media ads",
        "Provided branding solutions for small businesses",
        "Helped businesses establish a consistent and engaging online presence",
      ],
    },
    {
      period: "2016 - 2017",
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
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-[#FF1493]">Work</span> Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-[#5DADE2] pl-8 pb-8 last:pb-0">
              <div className="text-sm font-semibold text-[#FF1493] mb-2">{exp.period}</div>
              <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
              <p className="text-lg text-gray-600 mb-4">{exp.company}</p>
              <ul className="space-y-3 text-gray-700">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-[#FF1493] font-bold text-xl leading-6">•</span>
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

export function About() {
  const points = [
    "I love creating systems. Strategic thinking challenges and energizes me, and I enjoy turning complex problems into clear, workable structures.",
    "I've been a leader for many years. What fulfills me most is seeing each team member grow, while also building a fun, relaxed team culture where we laugh and stay connected.",
    "I automate many parts of my operations so things run on autopilot. This gives me space to focus on creative, innovative work.",
    "I'm applying for this role because I'm ready for a new challenge that pushes my critical thinking and lets me grow at an international level.",
    "My team knows my style well: when problems appear, we stay calm and focus on solutions, not drama.",
    "I bring over 10 years of experience in sales and marketing, from strategy to execution.",
    "I'm passionate about empowering startups, especially women-led businesses, to grow their skills, confidence, and mindset.",
    "Finance is one of my strongest interests. I believe in being smart with money and building sustainable businesses, my company operates at a 62.5% profit margin.",
    "We teach 115 students English in Orphanages in Bali with my foundation called TransforMe Academy. Our goal is to reach 2000 students within 2 years.",
    "Working in international environments is natural to me. Most of my students are foreigners, and I also support my husband's Indonesia–Netherlands (Data Analytics Company). With a 5-year Schengen visa, we travel to the Netherlands twice a year.",
  ]

  return (
    <section id="about" className="py-12 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-[#5DADE2]">About</span> <span className="text-white">Me</span>
        </h2>

        <div className="space-y-4">
          <ul className="space-y-4 text-base text-white">
            {points.map((point, index) => (
              <li key={index} className="flex gap-3">
                <span className="text-[#5DADE2] font-bold text-xl leading-6">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}


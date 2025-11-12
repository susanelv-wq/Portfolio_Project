export function Skills() {
  const skills = [
    "Digital Marketing Strategy",
    "Website Design & Development (WordPress, CMS)",
    "Social Media Marketing (Instagram, Facebook, LinkedIn, TikTok)",
    "Content Creation & Copywriting",
    "Google Analytics & Ads",
    "Branding & Business Development",
    "Client Relationship Management",
    "Project & Team Management",
    "Basic SEO Understanding",
    "Email Marketing",
    "Influencer Marketing",
    "Creative Design Tools",
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-[#FF1493]">Key</span> Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-900 border border-[#FF1493]/20 rounded-lg p-4 hover:border-[#FF1493] transition hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#FF1493]"></div>
                <span className="font-medium text-foreground">{skill}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

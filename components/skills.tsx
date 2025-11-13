export function Skills() {
  const skills = [
    "Business Consultant",
    "Digital Marketing Strategy & SEO",
    "Website Design & Development (WordPress)",
    "Social Media Marketing",
    "Cursor.ai and emergent.sh",
    "Google Analytics & Ads Branding",
    "Relationship Management",
    "Project & Team Management",
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-[#5DADE2]">Skills</span> <span className="text-white">& Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => {
            const colors = [
              { border: "border-[#5DADE2]", dot: "bg-[#5DADE2]", shadow: "hover:shadow-[0_0_15px_rgba(93,173,226,0.3)]" },
              { border: "border-[#FF1493]", dot: "bg-[#FF1493]", shadow: "hover:shadow-[0_0_15px_rgba(255,20,147,0.3)]" },
              { border: "border-[#5DADE2]", dot: "bg-[#5DADE2]", shadow: "hover:shadow-[0_0_15px_rgba(93,173,226,0.3)]" },
              { border: "border-[#FF1493]", dot: "bg-[#FF1493]", shadow: "hover:shadow-[0_0_15px_rgba(255,20,147,0.3)]" },
              { border: "border-[#5DADE2]", dot: "bg-[#5DADE2]", shadow: "hover:shadow-[0_0_15px_rgba(93,173,226,0.3)]" },
              { border: "border-[#FF1493]", dot: "bg-[#FF1493]", shadow: "hover:shadow-[0_0_15px_rgba(255,20,147,0.3)]" },
              { border: "border-[#5DADE2]", dot: "bg-[#5DADE2]", shadow: "hover:shadow-[0_0_15px_rgba(93,173,226,0.3)]" },
              { border: "border-[#FF1493]", dot: "bg-[#FF1493]", shadow: "hover:shadow-[0_0_15px_rgba(255,20,147,0.3)]" },
            ]
            const color = colors[index % colors.length]
            return (
            <div
              key={index}
              className={`bg-card border-l-4 ${color.border} border-r border-t border-b border-gray-800 rounded-lg p-5 hover:shadow-lg ${color.shadow} transition shadow-lg`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${color.dot}`}></div>
                <span className="font-medium text-white text-base">{skill}</span>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

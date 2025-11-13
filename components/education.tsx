export function Education() {
  const education = [
    {
      period: "2014 - 2015",
      degree: "Bachelor's Degree in Management Business",
      school: "BINUS University | GPA: 3.63",
    },
    {
      period: "2014 - 2015",
      degree: "Scholarship Student Exchange Program",
      school: "University Science of Malaysia (Business Management)",
    },
    {
      period: "2012 - 2016",
      degree: "Diploma in Montessori Teacher Training",
      school: "Asian College of Teachers (ACT)",
    },
  ]

  return (
    <section id="education" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-[#5DADE2]">Education</span> <span className="text-white">& Certifications</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card border-l-4 border-[#5DADE2] border-r border-t border-b border-gray-800 rounded-lg p-6 hover:border-[#5DADE2] hover:shadow-[0_0_20px_rgba(93,173,226,0.3)] transition shadow-lg"
            >
              <div className="text-base text-white mb-3">{edu.period}</div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-white text-base mb-2">{edu.school}</p>
              {edu.detail && <p className="text-white text-base italic">{edu.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

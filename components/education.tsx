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
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-[#5DADE2]">Education</span> <span className="text-white">& Certifications</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-32 bg-gradient-to-r from-[#5DADE2] to-[#FF1493]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const borderColors = [
              "border-l-4 border-[#FF1493]",
              "border-l-4 border-[#5DADE2]",
              "border-l-4 border-[#FF1493]",
            ]
            const hoverShadows = [
              "hover:shadow-[0_0_20px_rgba(255,20,147,0.4)]",
              "hover:shadow-[0_0_20px_rgba(255,20,147,0.4)]",
              "hover:shadow-[0_0_20px_rgba(255,20,147,0.4)]",
            ]
            return (
            <div
              key={index}
              className={`bg-card ${borderColors[index]} border-r border-t border-b border-gray-800 rounded-lg p-6 hover:shadow-lg ${hoverShadows[index]} transition shadow-lg`}
            >
              <div className="text-base text-white mb-3">{edu.period}</div>
              <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
              <p className="text-white text-base mb-2">{edu.school}</p>
              {edu.detail && <p className="text-white text-base italic">{edu.detail}</p>}
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

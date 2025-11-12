export function Education() {
  const education = [
    {
      period: "2014 - 2015",
      degree: "Bachelor's Degree in Management Business",
      school: "BINUS University | GPA: 3.63",
      detail: "Student Exchange Program - University Science of Malaysia (Business Management)",
    },
    {
      period: "2012 - 2016",
      degree: "Diploma in Montessori Teacher Training",
      school: "Asian College of Teachers (ACT)",
    },
    {
      period: "2016 - 2019",
      degree: "Business Studies IGCSE",
      school: "Sekolah Lentera Kasih",
      detail: "Designed and delivered interactive learning materials to enhance student engagement",
    },
  ]

  return (
    <section id="education" className="py-20 bg-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-[#FF1493]">Education</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border-t-4 border-[#5DADE2] hover:shadow-lg transition"
            >
              <div className="text-sm font-semibold text-[#FF1493] mb-3">{edu.period}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{edu.degree}</h3>
              <p className="text-gray-600 text-sm mb-2">{edu.school}</p>
              {edu.detail && <p className="text-gray-500 text-sm italic">{edu.detail}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

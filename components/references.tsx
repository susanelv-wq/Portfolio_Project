export function References() {
  const references = [
    {
      name: "Bahasa Bule",
      detail: "bahasabule.com",
      link: "https://bahasabule.com",
      borderColor: "border-[#5DADE2]",
    },
    {
      name: "Balai Bahasa",
      detail: "Ministry of Education and Culture Republic of Indonesia",
      link: null,
      borderColor: "border-[#FF1493]",
    },
  ]

  return (
    <section id="references" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-[#5DADE2]">References</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-[#5DADE2] to-[#FF1493]"></div>
        </div>

        <div className="space-y-6">
          {references.map((ref, index) => (
            <div
              key={index}
              className={`bg-card border-l-4 ${ref.borderColor} border-r border-t border-b border-gray-800 rounded-lg p-8 hover:shadow-[0_0_20px_rgba(255,20,147,0.3)] transition shadow-lg`}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{ref.name}</h3>
                {ref.link ? (
                  <p className="text-white text-base">
                    <a 
                      href={ref.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:text-[#FF1493] transition"
                    >
                      {ref.detail}
                    </a>
                  </p>
                ) : (
                  <p className="text-white text-base">{ref.detail}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


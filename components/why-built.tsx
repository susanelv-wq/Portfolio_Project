export function WhyBuilt() {
  const features = [
    {
      title: "Entrepreneurial DNA",
      description: "Built Bahasa Bule from zero to 500+ monthly classes. I don't just manage operations—I build them from scratch with speed and discipline.",
      borderColor: "border-[#5DADE2]",
    },
    {
      title: "Deep Bali Network",
      description: "Based in Bali with established connections across creative agencies, designers, business owners, and the entrepreneurial community.",
      borderColor: "border-[#FF1493]",
    },
    {
      title: "Full-Stack Operations",
      description: "Managed finance, data, marketing, recruitment, and partnerships hands-on. I combine structure with creativity, exactly what YOUNG needs.",
      borderColor: "border-[#5DADE2]",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-white">Why I'm Built for</span>{" "}
          <span className="text-[#5DADE2]">YOUNG</span>{" "}
          <span className="text-white">Indonesia</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-[#5DADE2] to-[#FF1493]"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-card border-2 ${feature.borderColor} rounded-lg p-6 hover:shadow-lg ${
                feature.borderColor === "border-[#5DADE2]"
                  ? "hover:shadow-[0_0_20px_rgba(93,173,226,0.3)]"
                  : "hover:shadow-[0_0_20px_rgba(255,20,147,0.3)]"
              } transition shadow-lg`}
            >
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-base text-gray-300 text-center leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


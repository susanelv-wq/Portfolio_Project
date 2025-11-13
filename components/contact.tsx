export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          <span className="text-[#5DADE2]">Let's</span> <span className="text-white">Connect</span>
        </h2>
        <div className="flex justify-center mb-12">
          <div className="h-1 w-24 bg-gradient-to-r from-[#5DADE2] to-[#FF1493]"></div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-400 mb-8">Ready to bring entrepreneurial energy, operational excellence, and Bali's best connections to your team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:susan@bahasabule.com"
              className="inline-flex items-center justify-center gap-2 bg-[#5DADE2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#FF1493] hover:shadow-[0_0_20px_rgba(255,20,147,0.5)] transition"
            >
              <span>✉️</span>
              Email Me
            </a>
            <a
              href="tel:+6281999201994"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#5DADE2] text-[#5DADE2] font-semibold py-3 px-8 rounded-lg hover:bg-[#FF1493] hover:border-[#FF1493] hover:text-white hover:shadow-[0_0_20px_rgba(255,20,147,0.5)] transition"
            >
              <span>📞</span>
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

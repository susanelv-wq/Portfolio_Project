export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-[#5DADE2]">Let's</span> <span className="text-white">Connect</span>
        </h2>

        <div className="text-center">
          <p className="text-lg text-gray-400 mb-8">Ready to bring entrepreneurial energy, operational excellence, and Bali's best connections to your team.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:susan@bahasabule.com"
              className="inline-flex items-center justify-center bg-[#5DADE2] text-white font-semibold py-3 px-8 rounded-lg hover:bg-[#5DADE2]/80 hover:shadow-[0_0_20px_rgba(93,173,226,0.5)] transition"
            >
              Email Me
            </a>
            <a
              href="tel:+6281999201994"
              className="inline-flex items-center justify-center border-2 border-[#5DADE2] text-[#5DADE2] font-semibold py-3 px-8 rounded-lg hover:bg-[#5DADE2] hover:text-white hover:shadow-[0_0_20px_rgba(93,173,226,0.5)] transition"
            >
              Call Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-pink-50 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-8 border-[#5DADE2] shadow-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Susan%20pas%20foto-j5zSSyQFJc7WTieoNQ9W8Y3bcQoO49.jpg"
                alt="Susan Elvionita"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="mb-4">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Susan <span className="text-[#FF1493]">Elvionita</span>
              </h2>
            </div>
            <p className="text-xl font-medium text-[#5DADE2] mb-6">Digital Marketing Specialist</p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              A creative and result-driven Digital Marketing Specialist with over 10 years of experience in business
              development, social media marketing, website management, and branding. Adept at creating impactful
              campaigns, managing teams, and developing engaging content to drive business growth.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                <span className="text-[#5DADE2] font-semibold">📍</span>
                <span>Badung, Bali</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#FF1493] font-semibold">📞</span>
                <span>+62 8199 20 1994</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#5DADE2] font-semibold">✉️</span>
                <a href="mailto:susanelv@gmail.com" className="hover:text-[#FF1493] transition">
                  susanelv@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#FF1493] font-semibold">🔗</span>
                <a
                  href="https://bit.ly/SusanPorto"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#5DADE2] transition"
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

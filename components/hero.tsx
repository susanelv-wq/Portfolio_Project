import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-center">
            <span className="text-white">Susan</span> <span className="text-[#5DADE2]">Elvionita</span>
          </h1>

          {/* Image */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-[#5DADE2] shadow-lg shadow-[#5DADE2]/30 mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Susan%20pas%20foto-j5zSSyQFJc7WTieoNQ9W8Y3bcQoO49.jpg"
              alt="Susan Elvionita"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Badung - Bali, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <span>✉️</span>
              <a href="mailto:susan@bahasabule.com" className="hover:text-[#FF1493] transition">
                susan@bahasabule.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>📞</span>
              <a href="tel:+6281999201994" className="hover:text-[#FF1493] transition">
                +62 81 999 20 1994
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

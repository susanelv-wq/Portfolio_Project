import Image from "next/image"

export function Hero() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="text-white">Susan</span> <span className="text-[#5DADE2]">Elvionita</span>
            </h1>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden border-2 border-[#5DADE2] shadow-lg shadow-[#5DADE2]/30">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Susan%20pas%20foto-j5zSSyQFJc7WTieoNQ9W8Y3bcQoO49.jpg"
                alt="Susan Elvionita"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

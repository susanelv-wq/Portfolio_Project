import Image from "next/image"

export function Gallery() {
  const images = [
    {
      src: "/gallery/group-photo-restaurant.jpg",
      alt: "Group photo at restaurant with dragon mural",
    },
    {
      src: "/gallery/traditional-indonesian-attire.jpg",
      alt: "Group of women in traditional Indonesian kebaya and batik",
    },
    {
      src: "/gallery/independence-day-celebration.jpg",
      alt: "Group selfie celebrating Indonesia Independence Day",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          <span className="text-[#FF1493]">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-white shadow-lg hover:shadow-xl transition group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


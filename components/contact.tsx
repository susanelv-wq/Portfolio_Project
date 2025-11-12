export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Let's <span className="text-[#FF1493]">Connect</span>
        </h2>

        <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-xl p-12 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 rounded-full bg-[#FF1493] text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                📞
              </div>
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <p className="text-gray-600">+62 8199 20 1994</p>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#5DADE2] text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                ✉️
              </div>
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:susanelv@gmail.com" className="text-gray-600 hover:text-[#FF1493] transition">
                susanelv@gmail.com
              </a>
            </div>
            <div>
              <div className="w-16 h-16 rounded-full bg-[#FF1493] text-white flex items-center justify-center mx-auto mb-4 text-2xl">
                🔗
              </div>
              <h3 className="font-bold text-foreground mb-2">Portfolio</h3>
              <a
                href="https://bit.ly/SusanPorto"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-[#5DADE2] transition"
              >
                bit.ly/SusanPorto
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600 mb-6">Ready to discuss your next project or opportunity?</p>
            <a
              href="mailto:susanelv@gmail.com"
              className="inline-block bg-gradient-to-r from-[#FF1493] to-[#5DADE2] text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition"
            >
              Send Me an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

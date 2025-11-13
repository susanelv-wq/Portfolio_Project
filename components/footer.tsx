export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background text-foreground py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold mb-4">Susan Elvionita</h4>
            <p className="text-gray-600 text-sm">Digital Marketing Specialist | Entrepreneur</p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <a href="#experience" className="hover:text-[#FF1493] transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#education" className="hover:text-[#FF1493] transition">
                  Education
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-[#FF1493] transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#FF1493] transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Follow</h4>
            <div className="flex gap-4 text-sm text-gray-600">
              <a href="#" className="hover:text-[#FF1493] transition">
                LinkedIn
              </a>
              <a href="#" className="hover:text-[#5DADE2] transition">
                Instagram
              </a>
              <a href="#" className="hover:text-[#FF1493] transition">
                Portfolio
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-8 text-center text-sm text-gray-600">
          <p>&copy; {currentYear} Susan Elvionita. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

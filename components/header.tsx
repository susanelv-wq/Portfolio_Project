export function Header() {
  return (
    <header className="bg-background border-b border-[#5DADE2]/30">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold text-white uppercase tracking-wide border-l-4 border-[#5DADE2] pl-3">Resume</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-base font-medium">
          <a href="#about" className="text-white hover:text-[#FF1493] transition">
            About
          </a>
          <a href="#experience" className="text-white hover:text-[#FF1493] transition">
            Experience
          </a>
          <a href="#education" className="text-white hover:text-[#FF1493] transition">
            Education
          </a>
          <a href="#skills" className="text-white hover:text-[#FF1493] transition">
            Skills
          </a>
          <a href="#contact" className="text-white hover:text-[#FF1493] transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

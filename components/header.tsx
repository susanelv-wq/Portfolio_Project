export function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-100 to-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF1493] to-[#5DADE2] flex items-center justify-center text-white font-bold">
            SE
          </div>
          <h1 className="text-xl font-bold text-foreground">Susan Elvionita</h1>
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#experience" className="text-foreground hover:text-[#FF1493] transition">
            Experience
          </a>
          <a href="#education" className="text-foreground hover:text-[#FF1493] transition">
            Education
          </a>
          <a href="#skills" className="text-foreground hover:text-[#FF1493] transition">
            Skills
          </a>
          <a href="#contact" className="text-foreground hover:text-[#5DADE2] transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}

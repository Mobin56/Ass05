import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="brand-gradient flex h-7 w-7 items-center justify-center rounded-md text-[10px] font-extrabold text-white">
            DS
          </div>

          <span className="text-base font-bold tracking-tight text-gray-900">
            Dev{" "}
            <span className="brand-gradient-text">
              Stack
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#"
            className="text-xs font-medium text-pink-500 transition hover:text-pink-600"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-xs font-medium text-gray-600 transition hover:text-pink-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-xs font-medium text-gray-600 transition hover:text-pink-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-xs font-medium text-gray-600 transition hover:text-pink-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-xs font-medium text-gray-600 transition hover:text-pink-500"
          >
            Contact
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            className="rounded-full px-4 py-2 text-xs font-medium text-gray-600 transition hover:bg-gray-50 hover:text-gray-900"
          >
            Sign In
          </button>

          <button
            type="button"
            className="brand-gradient rounded-full px-5 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-lg text-gray-700 transition hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-pink-500"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              Technologies
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              Projects
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              About
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-600 transition hover:text-pink-500"
            >
              Contact
            </a>

            {/* Mobile Buttons */}
            <div className="flex gap-3 border-t border-gray-100 pt-4">
              <button
                type="button"
                className="flex-1 rounded-full border border-gray-200 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
              >
                Sign In
              </button>

              <button
                type="button"
                className="brand-gradient flex-1 rounded-full py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Sign Up
              </button>
            </div>

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
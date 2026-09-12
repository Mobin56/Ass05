import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-extrabold text-white">
            DS
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Dev Stack
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Home
          </a>

          <a
            href="#technologies"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Technologies
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Projects
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            About
          </a>

          <a
            href="#"
            className="text-sm font-medium text-gray-700 transition hover:text-orange-500"
          >
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            Sign In
          </button>

          <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-xl text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Home
            </a>

            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Technologies
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Projects
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              About
            </a>

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-gray-700"
            >
              Contact
            </a>

            <div className="flex gap-3 border-t border-gray-100 pt-4">
              <button className="flex-1 rounded-lg border border-gray-200 py-2.5 text-sm font-semibold text-gray-700">
                Sign In
              </button>

              <button className="flex-1 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 py-2.5 text-sm font-semibold text-white">
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
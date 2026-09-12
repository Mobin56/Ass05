function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-lg font-bold text-white">
            D
          </div>

          <span className="text-xl font-bold text-gray-900">
            Dev Stack
          </span>
        </div>

        <div className="hidden items-center gap-7 md:flex">
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Home
          </a>
          <a href="#technologies" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Technologies
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Projects
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            About
          </a>
          <a href="#" className="text-sm font-medium text-gray-700 hover:text-orange-500">
            Contact
          </a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100">
            Sign In
          </button>

          <button className="rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-4 py-2 text-sm font-semibold text-white">
            Sign Up
          </button>
        </div>

        <button className="text-2xl md:hidden">
          ☰
        </button>
      </div>
    </nav>
  )
}

export default Navbar
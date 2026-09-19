function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-[10px] font-extrabold text-white">
                DS
              </div>

              <span className="text-base font-bold text-gray-900">
                Dev <span className="text-pink-500">Stack</span>
              </span>
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-gray-500">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-5 flex items-center gap-5 text-xs font-medium text-gray-600">
              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                GitHub
              </a>

              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                Twitter
              </a>

              <a
                href="#"
                className="transition-colors hover:text-pink-500"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-gray-500">
              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                Home
              </a>

              <a
                href="#technologies"
                className="block transition-colors hover:text-pink-500"
              >
                Technologies
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-gray-500">
              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                About
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                Contact
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wide text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-2.5 text-xs text-gray-500">
              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block transition-colors hover:text-pink-500"
              >
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-400">
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-gray-400">
            <a
              href="#"
              className="transition-colors hover:text-pink-500"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors hover:text-pink-500"
            >
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-sm font-extrabold text-white">
                DS
              </div>

              <span className="text-xl font-bold text-gray-900">
                Dev Stack
              </span>
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-500">
              Build your ideal development stack with the technologies
              that fit your next project.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Product
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#technologies" className="block hover:text-orange-500">
                Technologies
              </a>

              <a href="#" className="block hover:text-orange-500">
                Projects
              </a>

              <a href="#" className="block hover:text-orange-500">
                Features
              </a>

              <a href="#" className="block hover:text-orange-500">
                Roadmap
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Legal
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-orange-500">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-orange-500">
                Terms of Service
              </a>

              <a href="#" className="block hover:text-orange-500">
                Cookie Policy
              </a>

              <a href="#" className="block hover:text-orange-500">
                License
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold text-gray-900">
              Company
            </h3>

            <div className="mt-4 space-y-3 text-sm text-gray-500">
              <a href="#" className="block hover:text-orange-500">
                About Us
              </a>

              <a href="#" className="block hover:text-orange-500">
                Contact
              </a>

              <a href="#" className="block hover:text-orange-500">
                Careers
              </a>

              <a href="#" className="block hover:text-orange-500">
                Blog
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
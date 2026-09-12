function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-lg font-bold text-white">
                D
              </div>
              <span className="text-xl font-bold text-gray-900">
                Dev Stack
              </span>
            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
              Explore modern technologies and build the perfect technology
              stack for your development journey.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Quick Links</h3>

            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <a href="#" className="block hover:text-orange-500">
                Home
              </a>
              <a href="#technologies" className="block hover:text-orange-500">
                Technologies
              </a>
              <a href="#" className="block hover:text-orange-500">
                Projects
              </a>
              <a href="#" className="block hover:text-orange-500">
                About
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Contact</h3>

            <div className="mt-4 space-y-2 text-sm text-gray-500">
              <p>Email: hello@devstack.com</p>
              <p>Phone: +880 1234-567890</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
          © 2026 Dev Stack. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
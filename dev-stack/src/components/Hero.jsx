function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 md:grid-cols-2 lg:py-24">
        <div>
          <p className="mb-4 text-sm font-bold uppercase tracking-wider text-orange-500">
            Build Your Future
          </p>

          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Build Your
            <span className="block bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
              Perfect Tech Stack
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 md:text-lg">
            Explore modern technologies, compare your options, and build a
            technology stack that matches your goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#technologies"
              className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white shadow-md"
            >
              Explore Technologies
            </a>

            <button className="rounded-xl border border-gray-300 px-6 py-3 font-semibold text-gray-700 hover:bg-gray-50">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/banner-stack.png"
            alt="Technology stack"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
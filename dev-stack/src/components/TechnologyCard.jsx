function TechnologyCard({ technology, addToStack, stack }) {
  const isAdded = stack.some((item) => item.id === technology.id)

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-100 text-3xl">
          {technology.icon}
        </div>

        <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-500">
          {technology.badge}
        </span>
      </div>

      <div className="mt-5">
        <h2 className="text-xl font-bold text-gray-900">
          {technology.name}
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          {technology.description}
        </p>
      </div>

      <div className="mt-5 flex items-center justify-between text-sm">
        <span className="rounded-lg bg-gray-100 px-3 py-1 font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="font-semibold text-gray-700">
          ⭐ {technology.rating}
        </span>
      </div>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">
          Difficulty:
        </span>

        <span className="text-sm font-semibold text-gray-700">
          {technology.difficulty}
        </span>
      </div>

      <button
        onClick={() => addToStack(technology)}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-semibold transition ${
          isAdded
            ? "bg-green-100 text-green-600 hover:bg-green-200"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default TechnologyCard
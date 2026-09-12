function TechnologyCard({ technology, addToStack, stack }) {
  const isAdded = stack.some((item) => item.id === technology.id)

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-2xl">
          {technology.icon}
        </div>

        <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-600">
          {technology.badge}
        </span>
      </div>

      <h2 className="mb-2 text-xl font-bold text-gray-900">
        {technology.name}
      </h2>

      <p className="mb-4 min-h-12 text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      <div className="mb-4 flex items-center justify-between">
        <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600">
          {technology.category}
        </span>

        <span className="text-sm font-medium text-gray-600">
          {technology.difficulty}
        </span>
      </div>

      <div className="mb-4 flex items-center gap-1 text-sm">
        <span>⭐</span>
        <span className="font-semibold">{technology.rating}</span>
      </div>

      <button
        onClick={() => addToStack(technology)}
        disabled={isAdded}
        className={`w-full rounded-xl py-3 text-sm font-semibold transition ${
          isAdded
            ? "cursor-not-allowed bg-green-100 text-green-600"
            : "bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white hover:opacity-90"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default TechnologyCard
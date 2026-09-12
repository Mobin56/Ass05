function YourStack({ stack, removeFromStack, removeAll }) {
  return (
    <aside className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-gray-900">
            Your Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {stack.length} {stack.length === 1 ? "Technology" : "Technologies"} Selected
          </p>
        </div>
      </div>

      {stack.length === 0 ? (
        <div className="rounded-xl bg-gray-50 p-6 text-center">
          <div className="mb-3 text-4xl">📦</div>

          <p className="font-semibold text-gray-700">
            Your stack is empty
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Add technologies from the list.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center gap-3 rounded-xl border border-gray-100 p-3"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-xl">
                {technology.icon}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-semibold text-gray-900">
                  {technology.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {technology.category}
                </p>
              </div>

              <button
                onClick={() => removeFromStack(technology.id)}
                className="text-lg font-bold text-gray-400 hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}

          <button
            onClick={removeAll}
            className="mt-3 w-full rounded-xl border border-red-200 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}

export default YourStack
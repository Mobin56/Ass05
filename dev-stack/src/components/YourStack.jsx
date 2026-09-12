import {
  SiReact,
  SiVuedotjs,
  SiSvelte,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiRedis,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiDocker
} from "react-icons/si"

import { FaJava } from "react-icons/fa"

function YourStack({ stack, removeFromStack, removeAll }) {
  const icons = {
    React: SiReact,
    "Vue.js": SiVuedotjs,
    Svelte: SiSvelte,
    "Next.js": SiNextdotjs,
    "Node.js": SiNodedotjs,
    PostgreSQL: SiPostgresql,
    Redis: SiRedis,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Java: FaJava,
    "Tailwind CSS": SiTailwindcss,
    Docker: SiDocker
  }

  const iconColors = {
    React: "text-cyan-500",
    "Vue.js": "text-green-500",
    Svelte: "text-orange-500",
    "Next.js": "text-black",
    "Node.js": "text-green-600",
    PostgreSQL: "text-blue-600",
    Redis: "text-red-500",
    JavaScript: "text-yellow-500",
    TypeScript: "text-blue-500",
    Java: "text-red-600",
    "Tailwind CSS": "text-cyan-500",
    Docker: "text-blue-500"
  }

  return (
    <aside className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
      <div className="border-b border-gray-100 pb-4">
        <h2 className="text-lg font-bold text-gray-900">
          Your Stack
        </h2>

        <p className="mt-1 text-xs text-gray-500">
          {stack.length}{" "}
          {stack.length === 1
            ? "Technology"
            : "Technologies"}{" "}
          Selected
        </p>
      </div>

      {stack.length === 0 ? (
        <div className="mt-5 rounded-xl border border-dashed border-gray-200 bg-gray-50 px-5 py-10 text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
            📦
          </div>

          <p className="mt-4 text-sm font-semibold text-gray-700">
            Your stack is empty
          </p>

          <p className="mt-2 text-xs leading-5 text-gray-400">
            Add technologies from the list to build your stack.
          </p>
        </div>
      ) : (
        <div className="mt-5">
          <div className="space-y-3">
            {stack.map((technology) => {
              const Icon = icons[technology.name]
              const iconColor = iconColors[technology.name]

              return (
                <div
                  key={technology.id}
                  className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-3"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white shadow-sm">
                    {Icon && (
                      <Icon className={`text-lg ${iconColor}`} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-semibold text-gray-800">
                      {technology.name}
                    </h3>

                    <p className="mt-0.5 text-[11px] text-gray-400">
                      {technology.category}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromStack(technology.id)}
                    className="flex h-7 w-7 items-center justify-center rounded-md text-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                  >
                    ×
                  </button>
                </div>
              )
            })}
          </div>

          <button
            onClick={removeAll}
            className="mt-5 w-full rounded-lg border border-red-200 py-2.5 text-xs font-semibold text-red-500 transition hover:bg-red-50"
          >
            Remove All
          </button>
        </div>
      )}
    </aside>
  )
}

export default YourStack
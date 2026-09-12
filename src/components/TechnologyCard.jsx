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

function TechnologyCard({ technology, addToStack, stack }) {
  const isAdded = stack.some((item) => item.id === technology.id)

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

  const Icon = icons[technology.name]
  const iconColor = iconColors[technology.name]

  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50">
          {Icon && (
            <Icon className={`text-2xl ${iconColor}`} />
          )}
        </div>

        {technology.badge && (
          <span className="rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-500">
            {technology.badge}
          </span>
        )}
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-bold text-gray-900">
          {technology.name}
        </h2>

        <p className="mt-2 min-h-[72px] text-xs leading-5 text-gray-500">
          {technology.description}
        </p>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3">
        <span className="rounded bg-gray-50 px-2 py-1 text-[10px] font-medium text-gray-500">
          {technology.category}
        </span>

        <span className="text-[10px] font-medium text-gray-500">
          {technology.difficulty}
        </span>

        <span className="text-[11px] font-semibold text-gray-600">
          ⭐ {technology.rating}
        </span>
      </div>

      <button
        onClick={() => addToStack(technology)}
        className={`mt-3 w-full rounded-lg py-2.5 text-xs font-semibold transition ${
          isAdded
            ? "bg-green-100 text-green-600 hover:bg-green-200"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  )
}

export default TechnologyCard
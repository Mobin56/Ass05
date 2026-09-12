import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologyList from "./components/TechnologyList"
import YourStack from "./components/YourStack"

function App() {
  const [stack, setStack] = useState([])

  const addToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      return
    }

    setStack([...stack, technology])
  }

  const removeFromStack = (id) => {
    setStack(stack.filter((technology) => technology.id !== id))
  }

  const removeAll = () => {
    setStack([])
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <Hero />

      <main id="technologies" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-500">
            Explore
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Technologies
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Discover the technologies developers use to build modern
            applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologyList
            addToStack={addToStack}
            stack={stack}
          />

          <YourStack
            stack={stack}
            removeFromStack={removeFromStack}
            removeAll={removeAll}
          />
        </div>
      </main>
    </div>
  )
}

export default App
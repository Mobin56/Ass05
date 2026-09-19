import { useEffect, useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import TechnologyList from "./components/TechnologyList"
import YourStack from "./components/YourStack"

function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  // Load technologies from JSON
useEffect(() => {
  const loadTechnologies = async () => {
    try {
      const response = await fetch("/technologies.json")

      if (!response.ok) {
        throw new Error("Failed to load technologies")
      }

      const data = await response.json()

      // Loading state clearly visible for demo
      await new Promise((resolve) => setTimeout(resolve, 1500))

      setTechnologies(data)
    } catch (error) {
      console.error("Error loading technologies:", error)
      toast.error("Failed to load technologies.")
    } finally {
      setLoading(false)
    }
  }

  loadTechnologies()
}, [])

  // Add technology to stack
  const addToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    )

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      )
      return
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ])

    toast.success(
      `${technology.name} added to your stack!`
    )
  }

  // Remove one technology
  const removeFromStack = (id) => {
    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== id
      )
    )

    toast.info("Technology removed from your stack.")
  }

  // Remove all technologies
  const removeAll = () => {
    if (stack.length === 0) {
      toast.warning("Your stack is already empty.")
      return
    }

    setStack([])

    toast.info("All technologies removed.")
  }

  // Loading state
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="mx-auto mb-4 h-10 w-10 animate-spin rounded-full border-4 border-gray-200 border-t-orange-500"></div>

          <p className="font-medium text-gray-600">
            Loading technologies...
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" />

      <Navbar />

      <Hero />

      <main
        id="technologies"
        className="mx-auto max-w-7xl px-5 py-16"
      >
        <div className="mb-10">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-orange-500">
            Explore
          </p>

          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
            Popular Technologies
          </h2>

          <p className="mt-3 max-w-2xl text-gray-600">
            Discover the technologies developers use to
            build modern applications.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <TechnologyList
            technologies={technologies}
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

      <Footer />
    </div>
  )
}

export default App
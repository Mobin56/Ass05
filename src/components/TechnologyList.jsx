import TechnologyCard from "./TechnologyCard"

function TechnologyList({
  technologies,
  addToStack,
  stack,
}) {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
          addToStack={addToStack}
          stack={stack}
        />
      ))}
    </div>
  )
}

export default TechnologyList
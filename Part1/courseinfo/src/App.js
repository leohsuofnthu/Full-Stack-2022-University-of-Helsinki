// Header Component 
const Header = (course) => {
  return (
    <>
      <h1>
        {course.name}
      </h1>
    </>
  )
}

// Part Component
const Part = (part) => {
  return (
    <>
      <p>
        {part.part} {part.exercise}
      </p>
    </>
  )
}

// Content Component
const Content = (content) => {
  return (
    <>
     <Part part={content.parts[0].name} exercise={content.parts[0].exercises}/>
     <Part part={content.parts[1].name} exercise={content.parts[1].exercises}/>
     <Part part={content.parts[2].name} exercise={content.parts[2].exercises}/>
    </>
  )
}


// Total Component
const Total = (exercises) => {
  return (
    <>
      <p>
        Number of exercise {exercises.total}
      </p>
    </>
  )
}

// Root App
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name = {course} />
      <Content parts = {[part1, part2, part3]} />
      <Total total = {part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App
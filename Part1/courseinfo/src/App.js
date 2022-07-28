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
     <Part part={content.parts[0]} exercise={content.exercises[0]}/>
     <Part part={content.parts[1]} exercise={content.exercises[1]}/>
     <Part part={content.parts[2]} exercise={content.exercises[2]}/>
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
      ...
    </div>
  )
}

export default App
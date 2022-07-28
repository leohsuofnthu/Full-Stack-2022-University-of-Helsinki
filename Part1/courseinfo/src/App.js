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
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} />
      <Content parts = {[part1, part2, part3]} exercises = {[exercises1, exercises2, exercises3]} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
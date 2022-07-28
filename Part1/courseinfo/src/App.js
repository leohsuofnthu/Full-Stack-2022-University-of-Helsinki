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

// Content Component
const Content = (parts) => {
  return (
    <>
      <p>
        {parts.part} {parts.exercise}
      </p>
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
      <Header name={course} />
      <Content part={part1} exercise={exercises1} />
      <Content part={part2} exercise={exercises2} />
      <Content part={part3} exercise={exercises3} />
      <Total total = {exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App
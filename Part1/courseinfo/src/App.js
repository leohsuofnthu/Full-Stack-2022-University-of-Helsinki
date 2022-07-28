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
const Total = (contents) => {
  return (
    <>
      <p>
        Number of exercise {contents.total[0].exercises + contents.total[1].exercises + contents.total[2].exercises}
      </p>
    </>
  )
}

// Root App
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name = {course} />
      <Content parts = {parts} />
      <Total total = {parts} />
    </div>
  )
}

export default App
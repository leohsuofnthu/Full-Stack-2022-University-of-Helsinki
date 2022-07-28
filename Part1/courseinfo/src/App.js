// Header Component 
const Header = (info) => {
  return (
    <>
      <h1>
        {info.course.name}
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
const Content = (info) => {
  return (
    <>
     <Part part={info.course.parts[0].name} exercise={info.course.parts[0].exercises}/>
     <Part part={info.course.parts[1].name} exercise={info.course.parts[1].exercises}/>
     <Part part={info.course.parts[2].name} exercise={info.course.parts[2].exercises}/>
    </>
  )
}


// Total Component
const Total = (info) => {
  return (
    <>
      <p>
        Number of exercise {info.course.parts[0].exercises + info.course.parts[1].exercises + info.course.parts[2].exercises}
      </p>
    </>
  )
}

// Root App
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course = {course} />
      <Content course = {course} />
      <Total course = {course} />
    </div>
  )
}

export default App
import Course from "./components/Course"
import SumExercises from "./components/SumExercises"

const App = () => {

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <main style={{padding:'10px', paddingTop:'10px'}}>
      <h1>Web development curriculum</h1>
      <h2>{courses[0].name}</h2>
      <Course courses={courses} position={0} />
      <SumExercises courses={courses} position={0} />
      <h2>{courses[1].name}</h2>
      <Course courses={courses} position={1} />
      <SumExercises courses={courses} position={1} />
    </main>
  )
}

export default App
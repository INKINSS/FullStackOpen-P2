
const SumCourses = ({courses}) => {

    const totalExercises = courses.parts.reduce((sum, part) => sum + part.exercises, 0)

  return (
    <div>
        <h4>Total of {totalExercises} exercises</h4>
    </div>
  )
}

export default SumCourses
const Course = ({ courses }) => {

  return (
    <main>
        { courses.parts.map((course) => (
            <p style={{margin:'10px 0'}} key={course.id}>{course.name} <span>{course.exercises}</span></p>
        ))}
    </main>
  );
};

export default Course;

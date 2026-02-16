function StudentComponent({ name, course, year }) {
  return (
    <article className="student-card">
      <h3>{name}</h3>
      <dl>
        <div>
          <dt>Course</dt>
          <dd>{course}</dd>
        </div>
        <div>
          <dt>Year</dt>
          <dd>{year}</dd>
        </div>
      </dl>
    </article>
  )
}

export default StudentComponent

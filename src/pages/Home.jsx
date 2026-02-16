import { useState } from 'react'
import StudentComponent from '../components/StudentComponent.jsx'

const featuredStudents = [
  {
    id: 1,
    name: 'Aiah Arceta',
    course: 'Bachelor of Science in Information Technology',
    year: '2nd Year',
  },
  {
    id: 2,
    name: 'Colet Vergara',
    course: 'Bachelor of Science in Psychology',
    year: '3rd Year',
  },
  {
    id: 3,
    name: 'Maloi Ricalde',
    course: 'Bachelor of Science in Accountancy',
    year: '1st Year',
  },
  {
    id: 4,
    name: 'Stacey Sevilleja',
    course: 'Bachelor of Science in Engineering',
    year: '4th Year',
  },
  {
    id: 5,
    name: 'Mikha Lim',
    course: 'Bachelor of Science in Nursing (Medical Technology)',
    year: '2nd Year',
  },
  {
    id: 6,
    name: 'Jhoanna Robles',
    course: 'Bachelor of Science in Business',
    year: '1st Year',
  },
  {
    id: 7,
    name: 'Gwen Apuli',
    course: 'Bachelor of Arts',
    year: '3rd Year',
  },
  {
    id: 8,
    name: 'Sheena Catacutan',
    course: 'Bachelor of Science in Computer Studies',
    year: '4th Year',
  },
]

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showYear, setShowYear] = useState(true)

  const currentStudent = featuredStudents[currentIndex]

  const handleNextStudent = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredStudents.length)
  }

  return (
    <div className="page">
      <section className="panel hero">
        <p className="eyebrow">Student Info App</p>
        <h1>Track cohorts with clarity.</h1>
        <p>
          Explore student highlights, switch between profiles, and see how
          components and state work together.
        </p>
        <div className="actions">
          <button className="btn" onClick={handleNextStudent}>
            Next featured student
          </button>
          <button
            className="btn ghost"
            onClick={() => setShowYear((prev) => !prev)}
          >
            {showYear ? 'Hide year' : 'Show year'}
          </button>
        </div>
      </section>

      <section className="panel">
        <div className="section-header">
          <h2>Featured student</h2>
          <span className="badge">State + Props</span>
        </div>
        <StudentComponent
          name={currentStudent.name}
          course={currentStudent.course}
          year={showYear ? currentStudent.year : 'Hidden'}
        />
      </section>

      <section className="panel">
        <div className="section-header">
          <h2>All featured students</h2>
          <span className="badge">Reusable Component</span>
        </div>
        <div className="student-grid">
          {featuredStudents.map((student) => (
            <StudentComponent
              key={student.id}
              name={student.name}
              course={student.course}
              year={student.year}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home

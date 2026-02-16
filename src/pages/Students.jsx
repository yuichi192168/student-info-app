import { useEffect, useState } from 'react'
import { fetchStudents } from '../api/studentsApi.js'

function Students() {
  const [students, setStudents] = useState([])
  const [status, setStatus] = useState('loading')
  const [errorMessage, setErrorMessage] = useState('')

  const loadStudents = async () => {
    try {
      const data = await fetchStudents()
      setStudents(data)
      setStatus('success')
    } catch (error) {
      setErrorMessage(error.message || 'Unable to load students.')
      setStatus('error')
    }
  }

  const handleRetry = () => {
    setStatus('loading')
    setErrorMessage('')
    loadStudents()
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      loadStudents()
    }, 0)

    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="page">
      <section className="panel">
        <div className="section-header">
          <h1>Students from API</h1>
          <span className="badge">Fetch + Error Handling</span>
        </div>
        <p className="muted">
          Data comes from JSONPlaceholder to demonstrate API integration.
        </p>

        {status === 'loading' && (
          <div className="status-card">
            <div className="spinner" />
            <p>Loading student data...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="status-card error">
            <p>{errorMessage}</p>
            <button className="btn" onClick={handleRetry}>
              Try again
            </button>
          </div>
        )}

        {status === 'success' && (
          <ul className="api-list">
            {students.map((student) => (
              <li key={student.id}>
                <h3>{student.name}</h3>
                <p>{student.email}</p>
                <span className="pill">{student.company}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}

export default Students

const API_URL = 'https://jsonplaceholder.typicode.com/users'

export async function fetchStudents() {
  const response = await fetch(API_URL)

  if (!response.ok) {
    throw new Error('API request failed. Please try again later.')
  }

  const data = await response.json()

  return data.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    company: user.company?.name || 'Independent',
  }))
}

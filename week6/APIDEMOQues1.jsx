import { useEffect, useState } from 'react'

function APIDemo() {
  console.log('API Demo Rendered')

  // State
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Function to fetch API data
    async function getData() {
      setLoading(true)

      try {
        const res = await fetch(
          'https://jsonplaceholder.typicode.com/users'
        )

        const usersList = await res.json()

        // Update state
        setUsers(usersList)
      } catch (err) {
        console.log('Error:', err)
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    // Function call
    getData()
  }, [])

  // Loading state
  if (loading) {
    return <p className="text-center text-5xl">Loading...</p>
  }

  // Error state
  if (error !== null) {
    return (
      <p className="text-center text-red-500 text-5xl">
        {error.message}
      </p>
    )
  }

  return (
    <div className="text-center">
      <p className="text-6xl mb-8">Users List</p>

      <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {users.map((userObj) => (
          <div
            key={userObj.id}
            className="border p-5 rounded-lg shadow-md bg-white"
          >
            <p className="text-2xl font-semibold">{userObj.name}</p>
            <p className="text-lg text-gray-600">{userObj.email}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default APIDemo

import { useAuth } from '../context/AuthContext'

export default function Member() {
  const { user } = useAuth()

  return (
    <main>
      <h1>Member Area</h1>
      <p>Welcome, {user?.email}</p>
    </main>
  )
}

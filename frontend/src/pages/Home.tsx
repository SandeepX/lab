import { useAuth } from '../context/AuthContext'

const cards = [
  ['Sample Tests', 'Track and manage lab test samples.'],
  ['Patients', 'Manage patient records and history.'],
  ['Reports', 'Generate and view test reports.'],
] as const

export default function Home() {
  const { user, logout } = useAuth()

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="text-lg font-semibold">
            🔬 Lab Management System
          </span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              {user?.name} ({user?.role})
            </span>
            <button
              type="button"
              onClick={logout}
              className="rounded-lg border border-gray-300 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100"
            >
              Sign out
            </button>
          </div>
        </div>
      </nav>

      <header className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold tracking-tight">
          Welcome, {user?.name}
        </h1>
        <p className="mt-3 text-gray-600">
          NestJS backend, Tailwind CSS frontend, fully dockerized.
        </p>
      </header>

      <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 pb-16">
        {cards.map(([title, desc]) => (
          <div
            key={title}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg">{title}</h2>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </main>
    </div>
  )
}
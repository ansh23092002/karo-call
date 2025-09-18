"use client"

import { useSession, signIn, signOut } from "next-auth/react"

export default function AdminPage() {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <p>Loading...</p>
  }

  if (!session) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-xl mb-4">Admin Access Only</h1>
        <button
          onClick={() => signIn("github")}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Login with GitHub
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <p>Welcome, {session.user?.name}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 bg-red-500 text-white rounded mt-4"
      >
        Logout
      </button>
    </div>
  )
}

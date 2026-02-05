import { Link } from "react-router-dom"

const Accessdenied = () => {
  return (
            <div className="min-h-screen flex items-center justify-center bg-gray-400">
      <div className="bg-white p-8 rounded shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold text-red-600 mb-4">
          Access Denied 🚫
        </h1>

        <p className="text-gray-600 mb-6">
          You are not authorized to access this page.
          <br />
          Admin access is required.
        </p>

        <div className="flex gap-4 justify-center">
        

          <Link
            to="/"
            className="px-4 py-2 bg-blue-800 text-gray-200 rounded"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Accessdenied

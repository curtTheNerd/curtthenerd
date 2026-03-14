import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <h1 className="text-7xl font-bold tracking-tight text-gray-900">404</h1>

      <p className="mt-4 text-xl font-medium text-gray-800">Page not found</p>

      <p className="mt-2 max-w-md text-gray-600">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          to="/"
          className="rounded-md bg-black px-6 py-3 text-white transition-all duration-300 hover:bg-gray-700"
        >
          Back to Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="rounded-md border border-gray-300 bg-gray-100 px-6 py-3 text-gray-700 transition-all duration-300 hover:bg-gray-700 hover:text-gray-100"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

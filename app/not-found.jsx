import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-gray-800 px-4">
      <h1 className="text-9xl font-extrabold text-red-500 mb-6">404</h1>
      <h2 className="text-3xl font-semibold mb-4 text-white">Oops! Page not found</h2>
      <p className="text-lg text-white mb-8">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
}

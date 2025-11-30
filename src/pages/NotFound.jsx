function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-6">Oops! Page not found.</p>
        <a
          href="/"
          className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
}

export default NotFound;

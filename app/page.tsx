import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <main className="flex flex-col items-center justify-center gap-8 text-center">
        <h1 className="text-5xl font-bold text-gray-900">
          Sales Dashboard
        </h1>
        <p className="text-xl text-gray-600 max-w-md">
          View and analyze sales data for 2022, 2023, and 2024
        </p>
        <Link
          href="/dashboard"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Go to Dashboard
        </Link>
      </main>
    </div>
  );
}

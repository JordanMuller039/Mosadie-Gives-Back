/*
The main landing page of the application.
This page serves as the entry point for visitors and showcases
the charity's mission, featured projects, and calls to action.
*/

export function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container-custom py-16">
        <h1 className="text-5xl font-heading font-bold text-gray-900 mb-4">
          Welcome to Mosadie Gives Back
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Making a positive impact in our community through charitable giving and volunteer work.
        </p>
      </div>
    </div>
  )
}
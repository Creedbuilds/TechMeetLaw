import { NavLink } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-96 gap-4">
      <h2 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 48 }} className="text-gray-900">
        404
      </h2>
      <p style={{ fontFamily: "Inter, sans-serif" }} className="text-gray-500">Page not found.</p>
      <NavLink to="/" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em" }}
        className="bg-yellow-400 hover:bg-yellow-300 text-black px-6 py-2 uppercase transition-colors"
      >
        Go Home
      </NavLink>
    </div>
  );
}

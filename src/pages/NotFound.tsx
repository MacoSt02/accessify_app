import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white px-6 text-center">
      <h1 className="text-9xl font-bold text-red-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold">Pàgina no trobada</h2>
      <p className="mt-2 text-lg text-gray-400">
        Ho sentim, però la pàgina que busques no existeix.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block rounded-lg bg-red-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:bg-red-600"
      >
        Torna a l'inici
      </Link>
    </div>
  );
};

export default NotFound;
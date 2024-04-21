import { Link } from "react-router-dom";
export function Logo({ textPosition }) {
  return (
    <Link
      to='/'
      className={`drop-shadow-md hover:text-black-4 w-full col-span-1 py-4 text-2xl font-extrabold uppercase transition-all ${
        textPosition ? textPosition : "text-center"
      }`}
    >
      brooklyn
    </Link>
  );
}

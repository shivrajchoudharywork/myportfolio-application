import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <ul className="flex flex-wrap justify-center bg-gray-900 text-2xl font-extrabold sticky top-0 opacity-100 p-4 space-x-4 md:space-x-6">
        <li className="m-2 p-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 hover:scale-110 transition-transform duration-300">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="m-2 p-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 hover:scale-110 transition-transform duration-300">
          <Link to={"/projects"}>Projects</Link>
        </li>
        <li className="m-2 p-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 hover:scale-110 transition-transform duration-300">
          <Link to={"/opensource"}>Open Source</Link>
        </li>
        <li className="m-2 p-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 hover:scale-110 transition-transform duration-300">
          <Link to={"/resume"}>Resume</Link>
        </li>
        <li className="m-2 p-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-violet-500 hover:scale-110 transition-transform duration-300">
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
      <hr className="border-gray-700" />
    </>
  );
}

export default Navbar;

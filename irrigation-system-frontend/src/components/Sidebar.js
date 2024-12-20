import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-900 text-white h-screen p-6">
      <h1 className="text-2xl font-bold mb-8">
        agri<span className="text-green-500">🌱</span>cultur
      </h1>
      <nav>
        <ul className="space-y-4">
          <li className="hover:text-green-500">
            <Link to="">Dashboard</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="analytics">Analytics</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="fields">Fields</Link>
          </li>
          <li className="hover:text-green-500">
            <Link to="settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <button className="mt-10 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
        <Link to="/login">Logout</Link>
      </button>
    </aside>
  );
};

export default Sidebar;

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="">
      <div className="py-8 px-4">
        <h1 className="text-3xl text-green-600 font-extrabold">PHarma</h1>
      </div>
      <div>
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </div>
  );
}

const MenuItem = () => {
  return (
    <Link to="/dashboard">
      <div className="flex items-center  space-x-4 my-4 bg-green-300 py-2 px-2 hover:text-green-50 text-gray-700 hover:bg-green-500 cursor-pointer">
        <div className="w-6 h-6 rounded-full bg-yellow-300"></div>
        <h1 className="text-md font-medium ">Dashboard</h1>
      </div>
    </Link>
  );
};

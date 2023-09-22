import { Link } from "react-router-dom"


export default function index() {
  return (
    <div>
        <div className="py-8 px-4">
            <h1 className="text-3xl text-green-600 font-extrabold">PHarma</h1>
        </div>
        <div>

            <MenuItem />
            <MenuItem />
            <MenuItem />

        </div>
    </div>
  )
}

const MenuItem = () => {
    return (
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-green-500"></div>
            <div className="text-sm font-medium text-gray-700">Dashboard</div>
        </div>
    )
}




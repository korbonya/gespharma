import { Outlet } from 'react-router-dom';
import Sidebar from '../components/sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
        <div className="w-56 min-h-screen bg-green-50">
            <Sidebar />
        </div>
        <div>
           <Outlet />
        </div>
    </div>
  )
}

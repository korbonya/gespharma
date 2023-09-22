import Sidebar from '../components/sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
        <div className="w-56 min-h-screen">
            <Sidebar />
        </div>
        <div>
            page
        </div>
    </div>
  )
}

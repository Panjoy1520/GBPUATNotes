import { Link } from "react-router-dom"

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-screen w-60 bg-neutral-800 p-6 flex flex-col justify-between transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div>
        <ul className="space-y-4">
          <li className="cursor-pointer hover:text-orange-400">🏠 Home</li>
          <Link><li className="cursor-pointer hover:text-orange-400">❤️ Favourite</li></Link>
          <Link to = "/home/uploadform"><li className="cursor-pointer hover:text-orange-400 py-4">⬆ Upload files</li></Link>
        </ul>

        <h4 className="mt-8 text-sm text-gray-400">Colleges</h4>
        <ul className="space-y-4 mt-2">
          <li className="cursor-pointer hover:text-orange-400">📙 COT </li>
          <li className="cursor-pointer hover:text-orange-400">📙 CBSH</li>
          <li className="cursor-pointer hover:text-orange-400">📙 COF</li>
          <li className="cursor-pointer hover:text-orange-400">📙 CoVaSc</li>
          <li className="cursor-pointer hover:text-orange-400">📙 CoCS</li>
          <li className="cursor-pointer hover:text-orange-400">📙 COA</li>
        </ul>
      </div>

      
    </aside>
  )
}

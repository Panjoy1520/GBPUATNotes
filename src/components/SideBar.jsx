import { Link } from "react-router-dom"

export default function Sidebar({ isOpen }) {
  return (
    <aside
      className={`fixed md:static top-0 left-0 h-screen w-60 bg-neutral-800 p-6 flex flex-col justify-between transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
    >
      <div>
        <div className="space-y-4 gap-y-2">
          <Link to = '/home'><div className="text-white cursor-pointer hover:text-orange-400 py-1">🏠 Home</div></Link>
          <Link to='/home/favourite'><div className="text-white cursor-pointer hover:text-orange-400 py-1">❤️ Favourite</div></Link>
          <Link to = "/home/uploadform"><div className="text-white cursor-pointer hover:text-orange-400 py-1">⬆ Upload files</div></Link>
        </div>

        <h4 className="mt-8 text-sm text-gray-400">Colleges</h4>
        <ul className="space-y-4 mt-2">
          <Link to="/home/COT"><li className="text-white cursor-pointer hover:text-orange-400">📙 COT </li></Link>       
          <Link to ="/home/CBSH">  <li className="text-white cursor-pointer hover:text-orange-400">📙 CBSH</li></Link>
          <Link to="/home/COF"><li className="text-white cursor-pointer hover:text-orange-400">📙 COF</li></Link>        
          <Link to="/home/COVAS"><li className="text-white cursor-pointer hover:text-orange-400">📙 CoVaSc</li></Link>
          <Link to="/home/COCS"><li className="text-white cursor-pointer hover:text-orange-400">📙 CoCS</li></Link>         
          <Link to="/home/COA"><li className="text-white cursor-pointer hover:text-orange-400">📙 COA</li></Link>      </ul>
      </div>

      
    </aside>
  )
}

import { Link, useNavigate } from "react-router-dom"




export default function TopBar({place}) {

  const navigate = useNavigate();

  return (
    <nav className="bg-neutral-700 md:bg-neutral-900 px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-semibold">{place}</h2>
      </div>

      <div className="flex items-center gap-4">
        
        <button
        onClick={()=>navigate("/home/uploadform")}
        className="bg-orange-400 hover:bg-orange-500 px-4 py-2 rounded-lg font-medium">
          Upload file
        </button>

        {/* Favorites Button */}
        <Link to="/home/favourite">
        <div
          className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg font-medium cursor-pointer"
        >
          ❤️
          Favorites
        </div>
        </Link>
      </div>
    </nav>
  )
}

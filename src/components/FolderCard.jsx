import { Link } from "react-router-dom";

export default function FolderCard({ icon, title,link }) {
  return (
    <Link to={link}>
    <div className="bg-neutral-700 hover:bg-neutral-600 p-6 rounded-2xl text-center h-full cursor-pointer transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1">
      <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full">
        <img src={icon} alt={title} className="w-15 h-15 object-contain" />
      </div>
      <span className="text-base font-medium text-gray-200">{title}</span>
    </div>
    </Link>
  );
}

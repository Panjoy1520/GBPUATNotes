import { useParams } from "react-router-dom";
import CardGrid from "../components/CardGrid";
import Sidebar from "../components/SideBar";
import years from "../assets/years";

export default function YearPage() {
  const { collegevalue, branchvalue } = useParams();


  console.log(collegevalue);
  console.log(branchvalue);
  
  const defaulticon =
    "https://cdn-icons-png.flaticon.com/512/10265/10265075.png";

  const yearItems = years.map((year) => ({
    icon: defaulticon,
    title: `${year}st year `,
    link: `/home/${collegevalue}/${branchvalue}/${year}`,
  }));

  return (
    <div className="flex bg-neutral-900 text-white min-h-screen">
      <Sidebar />

      
        <div className="flex flex-col flex-1">
        <main className="overflow-y-auto">
          <CardGrid
            title={`Select year for ${branchvalue}`}
            items={yearItems}
          />
        </main>
      </div>
    </div>
  );
}

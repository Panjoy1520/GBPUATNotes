import SideBar from "../components/SideBar";
import TopBar from "../components/TopBar";
import CardGrid from "../components/CardGrid";
import branches from "../assets/branches";
import { useParams } from "react-router-dom";

export default function CotPage() {

  const {collegevalue} = useParams()
  console.log(collegevalue);
  

  const defaulticon =
    "https://cdn-icons-png.flaticon.com/512/10265/10265075.png";

  const branchesitem = branches.map((branch) => ({
    icon: defaulticon,
    title: branch.branch_name,
    link: `/home/${collegevalue}/${encodeURIComponent(branch.branch_value)}`,
  }));

  return (
    <div className="flex bg-neutral-900 text-white min-h-screen">
      <SideBar />
      <div className="flex flex-col flex-1">
        {/* <TopBar/> */}
        <main className="overflow-y-auto">
          <CardGrid title="Sort By Branches" items={branchesitem} />
        </main>
      </div>
    </div>
  );
}

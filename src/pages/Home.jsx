import SideBar from "../components/SideBar"
import TopBar from "../components/TopBar"
import CardGrid from "../components/CardGrid"
import colleges from "../assets/colleges"



export default function Home() {

  const defaulticon = "https://cdn-icons-png.flaticon.com/512/10265/10265075.png";

  const collegeItems = colleges.map(college=>({
    icon:defaulticon,
    title:college.college_name,
    link:`/home/${encodeURIComponent(college.college_value)}`
  }))

  return (
    <div className="flex bg-neutral-900 text-white min-h-screen">
      <SideBar  />
      <div className="flex flex-col flex-1">
        <TopBar/>
        <main className="overflow-y-auto">

          <CardGrid title="Sort By Colleges" items={collegeItems} />
        </main>
      </div>
    </div>
  )
}

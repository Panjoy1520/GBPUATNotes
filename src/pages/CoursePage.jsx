import courses from "../assets/courses";
import { useParams } from "react-router-dom";
import Sidebar from "../components/SideBar";
import CardGrid from "../components/CardGrid";

function CoursePage() {
  const { collegevalue, branchvalue, year } = useParams();

  const defaulticon =
    "https://cdn-icons-png.flaticon.com/512/10265/10265075.png";

  const filteredcourses = courses.filter(
    (course) =>
      course.course_college === collegevalue &&
      course.course_branch === branchvalue &&
      course.course_year === year
  );

  const courseitems = filteredcourses.map((course) => ({
    icon: defaulticon,
    title: course.course_name,
    link: `/home/${collegevalue}/${branchvalue}/${year}/${course.course_code}`,
  }));
  console.log(courseitems);

  return (
    <div className="flex bg-neutral-900 text-white min-h-screen">
      <Sidebar />

      <div className="flex flex-col flex-1">
        <main className="overflow-y-auto">
          {courseitems && courseitems.length > 0 ? (
            <CardGrid
              title={`Courses for ${branchvalue} ${year} year`}
              items={courseitems}
            />
          ) : (
            <div className="flex items-center justify-center min-h-[60vh]">
              <p className="text-neutral-400 text-3xl ">Coming Soon...</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default CoursePage;

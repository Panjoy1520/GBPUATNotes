import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Sidebar from "../components/SideBar";
import service from "../appwrite/services";
import { Query } from "appwrite"; // Appwrite query builder
import { FileText } from "lucide-react"; // nice file icon

function CourseFilesPage() {
  const { collegevalue, branchvalue, year, courseCode } = useParams();
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFiles = async () => {
      try {
        const response = await service.listDocuments(
          Query.and([
            Query.equal("college", collegevalue),
            Query.equal("branch", branchvalue),
            Query.equal("year", year),
            Query.equal("course", courseCode),
          ])
        );
        console.log(response);

        setFiles(response?.rows ?? []);
      } catch (error) {
        console.error("Error fetching files:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFiles();
  }, [collegevalue, branchvalue, year, courseCode]);

  return (
    <div className="flex bg-neutral-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">
          Files for {courseCode} ({branchvalue}
          {year}nd year)
        </h1>

        {loading ? (
          <p>Loading files...</p>
        ) : (
          //   files.length === 0 ? )(
          //   <p className="text-neutral-400">No files uploaded yet.</p>
          <div className="bg-neutral-800 rounded-xl shadow-lg overflow-hidden">
            <table className="w-full border-collapse">
              <thead className="bg-neutral-700 text-left text-sm uppercase text-neutral-300">
                <tr>
                  <th className="px-6 py-3">File</th>
                  <th className="px-6 py-3">Uploaded At</th>
                  <th className="px-6 py-3">Uploader</th>
                </tr>
              </thead>
              <tbody>
                {/* {console.log("files",files)
                } */}
                {files.map((file) => {
                  const previewUrl = service.getFileView(file.image);
                  const downloadUrl = service.getFileDownload(file.image);
                  // console.log(previewUrl);
                  // console.log(downloadUrl);
                  

                  return (
                    <tr
                      key={file.$id}
                      className="border-b border-neutral-700 hover:bg-neutral-600/40 transition"
                    >
                      <td className="px-6 py-4 flex items-center gap-3">
                        <FileText className="w-5 h-5 text-blue-400" />
                        <a
                          href={previewUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-blue-400 hover:underline"
                        >
                          {file.course}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-neutral-400">
                        {new Date(file.$createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-neutral-400">
                        {file.uploader || "Unknown"}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={downloadUrl}
                          className="bg-orange-500 hover:bg-orange-600 px-3 py-1 rounded text-sm"
                        >
                          Download
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseFilesPage;

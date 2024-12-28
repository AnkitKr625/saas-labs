import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/table/Table.jsx";
import Pagination from "./components/pagination/Pagination.jsx";
import { fetchData } from "./utils/service.js";
import { PROJECTS_API_URL, TABLE_COLUMNS } from "./constants.js";

const App = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  useEffect(() => {
    (async () => {
      try {
        const response = await fetchData(PROJECTS_API_URL);
        setProjects(response);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      }
    })();
  }, []);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentProjects = projects?.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="app-container">
      <h1>Highly-Rated Kickstarter Projects</h1>
      {Array.isArray(currentProjects) && (
        <>
          <Table tableRows={currentProjects} tableColumns={TABLE_COLUMNS} />
          <Pagination
            totalRecords={projects?.length}
            recordsPerPage={recordsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
};

export default App;

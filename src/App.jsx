import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(false);
  const [vehicles, setVehicles] = useState([]);
  const [filteredResult, setFilteredResult] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);
  let postsPerPage = 10;

  useEffect(() => {
    fetchVehicles(page);
  }, [page]);


  const fetchVehicles = async (page) => {

    setLoading(true);
    try {
      const response = await axios.get(
        `https://swapi.dev/api/vehicles?page=${page}`
      );
      setVehicles(response?.data?.results);
      setFilteredResult(response?.data?.results);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching vehicles:", error);
    }
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);

    if (!e.target.value) {
      return setFilteredResult(vehicles);
    } else {
      const searchArr = vehicles?.filter((item) => {
        const lowercasedName = item.name.toLowerCase();

        return lowercasedName.includes(searchValue);
      });

      setFilteredResult(searchArr);
    }
  };

  console.log(page,  "page");

  const handleBack = () => {

    fetchVehicles();
    setPage((page) => page - 1);

  };

  const handleForward = () => {
    fetchVehicles(page);
    setPage((page) => page + 1);
    console.log(page , "cliekced");
  };
  
  let pageNumbers = [];

  for(let i = 1; i <= Math.ceil(39 / postsPerPage); i++){

       pageNumbers.push(i);
  }


  const handlePagination = (pageNo) => {
      fetchVehicles(page);
       setPage(pageNo);
  }

  return (
loading ? <p>Loading</p> : <>

{/* <button onClick={handleFilter}>Filter by Date</button> */}
      
<input
  type="search"
  value={searchValue}
  onChange={(e) => handleChange(e)}
/>
{filteredResult?.map((item) => (
  <ul key={item?.name}>
    <li>{item?.name}</li>
  </ul>
))}

<button onClick={() => handleBack()}>Back</button>
<ul>
  {
    pageNumbers.map((item, idx) => (
      <li onClick={() => handlePagination(item)} key={idx}>{item}</li>
    ))
  }
</ul>
<button onClick={() => handleForward()}>Forward</button>
</>
    
  );
}

export default App;

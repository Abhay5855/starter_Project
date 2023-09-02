import { useEffect, useState } from "react"
import axios from "axios";
import CardContainer from "./Card";
import Search from "./Search";


const Results = () => {

     
       const [vehicles , setVehicles] = useState([]);
       const [loading , setLoading] = useState([]);
       const [filteredResults , setFilteredResults] = useState([]);

    useEffect(() => {

       fetchVehicles();    
    },[]);
    
    // Fetch api
   

      console.log(filteredResults, "this is what we want");
  return (
    <div>

        <Search filteredResults={filteredResults} setFilteredResults={setFilteredResults} vehicles={vehicles}/>
        {
            loading ? <p>...Loading</p> :    <CardContainer vehicles={vehicles} filteredResults={filteredResults} setFilteredResults={setFilteredResults} />
        }
    
    </div>
  )
}

export default Results

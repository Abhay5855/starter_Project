import { useState } from "react"



const Search = ({setFilteredResults , vehicles}) => {

  const [searchValue , setSearchValue] = useState("");

  if(searchValue === ""){
    
    const dataCopy = [...vehicles];

      setFilteredResults(dataCopy);
  }
   

    const handleSearch = (e) => {

            
            setSearchValue(e.target.value);

            const dataCopy = [...vehicles];

            const filteredResult = dataCopy.filter((item) => item.name.includes(searchValue));

            setFilteredResults(filteredResult);

    }


   
    

  return (
    <div>
      <input type="search" value={searchValue} onChange={(e) => handleSearch(e)}/>
    </div>
  )
}

export default Search

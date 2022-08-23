import React, { useState } from "react";

const SearchForm=({handleSearchSubmission})=>{
    const [inputVal, setInputVal] = useState("");

    function handleInput(e){
        
        setInputVal(e.target.value);


    }
    function handleSubmit(e){
        e.preventDefault()
        handleSearchSubmission(inputVal)
          
        }

    return(
        <>

<form onSubmit={handleSubmit}>
    <h1>Search your TV Shows </h1>
    <label htmlFor="search-box">Query:</label><br/>
    <input type="text" onChange={handleInput} value={inputVal} required/>
<input type="submit"value="search"/>
</form>
        </>
    )
}

export default SearchForm
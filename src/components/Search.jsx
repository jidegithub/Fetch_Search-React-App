import React, { useState } from 'react'

export default function Search({query}) {
    //this is a sample data, usually you get this from your endpoint
    // DON'T STORE STATE LIKE THIS!!!
    const names = ['miriam','chioma','Sadeeyah','oluchi','Genevieve','Halima']

    const [filteredNames, setFilteredNames] = useState(names);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (e) => {
        // this variable is storing the letter(s) you are typing and
        // converting it to lowercase
        const searchValue = e.target.value.toLowerCase();

        //update the state that is tracking the letters you type
        // so that its up to date and the same with searchValue
        setSearchTerm(searchValue);
        
        //take the data(array) you are getting from your api endpoint and
        // filter it, lowercase it and also search the individual
        //item if it contains the letter(s) you typed 

        //filter returns an array of items that matches the letter(s)
        // you are typing
        const filteredNames = names.filter((name) => name.toLowerCase().includes(searchValue));
        //update the state that is tracking/storing the filtered names
        setFilteredNames(filteredNames);
    };

    console.log(filteredNames)

  return (
    <div>
        <input 
            type="text"
            value={searchTerm}
            placeholder="Search names..."
            onChange={handleSearch}        />
    </div>
  )
}

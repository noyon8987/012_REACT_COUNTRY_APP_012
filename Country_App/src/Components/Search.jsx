import React, { useEffect, useState } from 'react'

export default function Search(props) {
    const [search, setSearch] = useState("");

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    useEffect(()=>{
        props.onSearch(search);
    }, [search])

  return (
    <div className='input_box'>
      <input type="text" placeholder='Search Country' value={search} onChange={handleSearch}/>
    </div>
  )
}

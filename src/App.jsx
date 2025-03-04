import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { apiUrl,filterData } from './data'
import Filter from './components/Filter'
import Cards from './components/Cards'
import Spinner from './components/Spinner'
import { toast } from "react-toastify";

function App() {

  const [courses , setCourses] = useState([]);
  const [loding , setLoding] = useState(true);
  const [category , setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoding(true);
    try{
      const resp = await fetch(apiUrl);
      const output = await resp.json();
      setCourses(output.data);
    }
    catch(error){

    }
    setLoding(false);
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2 bg-[#bbbbbb]">
      <div>
        <Navbar/>
      </div>
      <div className="bg-[#bbbbbb]">
      <div>
        <Filter filterData = {filterData} category = {category} setCategory = {setCategory}/>
      </div>
      <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
        {
          loding ? (<Spinner/>) : (<Cards courses = {courses} category = {category}/>)
        }
      </div>
      </div>
    </div>
  )
}

export default App;

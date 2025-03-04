import { useState } from "react";
import Card from "./Card";

function Cards(props){
    let courses = props.courses;
    let category = props.category;
    const [likedCourses , setLikedCourses] = useState([]);
    function getCousese(){
        if(category === "All")
            {
                let allCourses = [];
                Object.values(courses).forEach((array) => {
                array.forEach((coursesData) => {
                allCourses.push(coursesData);
                    });
                });
                return allCourses;
            }
            else{
             return courses[category];
            }
        
    }   
    
    return(
        <div className="flex flex-wrap justify-center gap-4 mb-4">
            {
                getCousese().map((course) => {
                   return (<Card course ={course}
                   likedCourses = {likedCourses}
                   setLikedCourses = {setLikedCourses}></Card>)
                })
            }
        </div>
    )
}

export default Cards;
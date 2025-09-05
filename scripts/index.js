

const loadLessons = () =>{
    fetch('https://openapi.programming-hero.com/api/levels/all')
    .then((res) =>res.json())
    .then((json) => displayLessons(json))
}


 const displayLessons =(lessons)=>{ 
    console.log(lessons);

 }

 loadLessons();
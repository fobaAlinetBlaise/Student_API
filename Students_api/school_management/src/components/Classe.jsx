import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Classes = () => {

  const params = useParams()
  const [courses, setCourses] = useState({});

  //creer une fonction qui va recuperer nos données
  const getCourses = () => {
    axios.get(`http://127.0.0.1:8000/courses/${params.id}`)
      .then((res) => {
        console.log("Request response ", res);
        if (res.status === 200)
          setCourses(res.data);
      })
  }
  //detection du premier rendu du composant ou lors de la mise à jour
  useEffect(() => {
    console.log(params.id);
    getCourses();
  }, [])
  return (
    <div className="row ">     
        <h1 className='col-12 text-center'>Les informations d'une salle</h1>
        <hr />
     <div className=" card col-4">
     <div  key={courses.id}>
        {courses.id}
      </div>
      <h5>
        {courses.coefficiant}
      </h5>
      <h4>
        {courses.description}
      </h4>
      {/* <h3>
                  {courses.teachers}
                </h3> */}
    </div>
     </div>
  )
}

export default Classes;
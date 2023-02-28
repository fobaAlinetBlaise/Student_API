import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);

  //creer une fonction qui va recuperer nos données
  const getTeachers = () => {
    axios.get('http://127.0.0.1:8000/teachers/')
      .then((res) => {
        console.log("Request response ", res);
        if (res.status === 200)
          setTeachers(res.data);
      })
  }
  //detection du premier rendu du composant ou lors de la mise à jour
  useEffect(() => {
    getTeachers();
  }, [])



  return (
    <div className="container-fluid row">
      <div className="col-12 text-center">
        <h1>Les informations d'un enseignant</h1>
        <hr />
      </div>
      {
        teachers.map((teacher) => {
          return (
            <div className="card col-3 mx-auto" style={{ border: "1px solid black" }} key={teacher.id} >

              <NavLink to={`/teachers/${teacher.id}`}>
                <img src={teacher.image} width="300px" height="300px" alt={'photo_de_' + teacher.name} className="rounded-circle" />
                <div className="card-body">
                  <h5>{teacher.name}</h5>
                  {/* <p>{teacher.gender}</p>
                  <h4>{teacher.email}</h4> */}
                  {/* on utilise map car classRoom est un tableau(cle etrangere) */}
                  {/* <h3>{teacher.classRoom.map((classe) => {
                    return (
                      <em key={classe.id}>
                        {classe.class_name}
                      </em>
                    )
                  })}</h3>
                  <h2>{teacher.description}</h2>
                  <h1>{teacher.courses}</h1> */}

                </div>
                </NavLink>
            </div>
          );
        })
      }
    </div >
  )
}
export default Teachers
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const Students = () => {
    const [students, setStudents] = useState([]);

    //creer une fonction qui va recuperer nos données
    const getStudents = () => {
        axios.get('http://127.0.0.1:8000/students/')
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 200)
                    setStudents(res.data);
            })
    }
    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        getStudents();
    }, [])

      return (
        <div className="container-fluid row  ">
          <div className="col-12 text-center">
                    <h1>Les informations d'un etudiant</h1>
                    <hr />
                  </div>
          {
            students.map((student) => {
              return (
                    <div className="card col-3 my-2 py-2" style={{border:"1px solid black" }} key={student.id} >
                      <NavLink to={`/students/${student.id}`}>
                      <img src={student.image} width="300px" height="300px" alt={'photo_de_' + student.name} className="rounded-circle" />
                      <div className="card-body">
                        <h5>{student.name}</h5>
                        {/* <p>{student.gender}</p>
                        <h4>{student.email}</h4> */}
                        {/* <h3>{student.classRoom}</h3>
                        <h2>{student.description}</h2>
                        <h1>{student.courses}</h1> */}
                      </div>
                      </NavLink>
                    </div>
              );
            })
          }
        </div>
      )
    }

export default Students;
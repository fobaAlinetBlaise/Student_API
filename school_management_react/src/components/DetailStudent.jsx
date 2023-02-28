import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailStudent = () => {

    const params = useParams()
    const [students, setStudents] = useState({});

    //creer une fonction qui va recuperer nos données
    const getStudents = () => {
        axios.get(`http://127.0.0.1:8000/students/${params.id}`)
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 200)
                    setStudents(res.data);
            })
    }
    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        console.log(params.id);
        getStudents();
    }, [])
    return (
        <div className="row ">
            <h1 className='col-12 text-center'>Les informations d'un etudiant</h1>
            <hr />
            <div className=" card col-4">
                <div>
                    <img src={students.image} alt="Pas d'image" />
                </div>
                <div key={students.id}>
                    {students.name}
                </div>
                <h5>
                    {students.gender}
                </h5>
                <p>
                    {students.email}
                </p>
                <h3>
                    {students.description}
                </h3>
                <div>
                    {/* <h4>
                        {students.classRoom.map((classes) => {
                            return (
                                <small>
                                    {classes.class_name}
                                </small>
                            );
                        })}
                    </h4> */}
                </div>
            </div>
        </div>
    )
}

export default DetailStudent;
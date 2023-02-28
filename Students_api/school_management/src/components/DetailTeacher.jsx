import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const DetailTeacher = () => {

    const params = useParams()
    const [teacher, setTeacher] = useState({});

    //creer une fonction qui va recuperer nos données
    const getTeacher = () => {
        axios.get(`http://127.0.0.1:8000/teachers/${params.id}`)
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 200)
                    setTeacher(res.data);
            })
    }
    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        console.log(params.id);
        getTeacher();
    }, [])
    return (
        <div className="container col-6 ">
                
                    <img src={teacher.image}  alt="Pas d'image" />
                
        <table class="table table-bordered border-primary" width="150px">
            <tr>
                <th>Id</th>
                <th>Nom</th>
                <th>Genre</th>
                <th>Email</th>
                <th>Description</th>
                <th>Classe</th>
            </tr>
            <tr>
               <td>{teacher.id} </td>
               <td>{teacher.name}</td>
               <td>{teacher.gender}</td>
               <td>{teacher.email}</td>
               <td>{teacher.description}</td>
               <td></td>
            </tr>
        </table>
    </div>
    )
}

export default DetailTeacher;
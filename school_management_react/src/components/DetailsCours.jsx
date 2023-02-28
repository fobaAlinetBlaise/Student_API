import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const DetailCours = () => {

    const params = useParams()
    const [courses, setCourses] = useState({});
    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        getCourses();
    }, [])
    //creer une fonction qui va recuperer nos données
    const getCourses = () => {
        axios.get(`http://127.0.0.1:8000/courses/${params.id}`)
            .then((res) => {
                console.log("Request response ", res.data);
                if (res.status === 200)
                    setCourses(res.data);
            })
    }

    const deleteCours = (id) => {
        axios.delete(`http://127.0.0.1:8000/courses/${id}/`)
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 200)
                    setCourses(res.data);
                window.location = '/courses';
            })
    }


    return (
        <div className="container my-3">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="shadow p-4 mb-5 bg-body rounded col-md-8">
                    <h3>Details d'un cours</h3>
                    <table className="table table-bordered table-striped table-hover">
                        <tbody>
                            <tr className="success">
                                <td><strong>ID: </strong>{courses.id}</td>
                            </tr>
                            <tr className="success">
                                <td><strong>Nom de la matière: </strong> {courses.course_name}</td>
                            </tr>
                            <tr className="success">
                                <td><strong>Coefficient:</strong> {courses.coefficiant}</td>
                            </tr>
                            <tr className="success">
                                <td><strong>Description:</strong> {courses.description}</td>
                            </tr>
                            {/* teacher est une clé etrangére mais on a pas mappé car il n'est pas ici un tableau mais un objet */}
                           <tr><strong>Teachers:</strong>{courses.teachers?.name}</tr>
                        </tbody>
                    </table>
                    <NavLink to={`/courses`} className='link'>
                        <button className='btn btn-info px-1 mx-1'>
                            {'Retour'}
                        </button>
                    </NavLink>
                    <Link to={`/edit/${courses.id}/course`} state={{ course: courses }} className='link'>
                        <button className='btn btn-warning px-1 mx-1'>
                            {'Editer'}
                        </button>
                    </Link>
                    <button onClick={() => deleteCours(courses.id)} className='btn btn-danger'>
                        {'Supprimer'}
                    </button>
                </div>
            </div>
        </div>
    );
}
export default DetailCours;
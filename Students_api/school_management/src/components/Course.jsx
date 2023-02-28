import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Cours = () => {
    const [cours, setCours] = useState([]);
    const [onDeleting, setOnDeleting] = useState(null);
    //creer une fonction qui va recuperer nos données
    const getCourses = () => {
        axios.get('http://127.0.0.1:8000/courses/')
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 200)
                    setCours(res.data);
            })
    }

    //detection du premier rendu du composant ou lors de la mise à jour
    useEffect(() => {
        getCourses();
    }, [])

    const deleteCours = (id) => {
        setOnDeleting(id);
        axios.delete(`http://127.0.0.1:8000/courses/${id}/`)
            .then((res) => {
                console.log("Request response ", res);
                if (res.status === 204)
                    setCours([...cours.filter((cours) => cours.id !== id)]);
            })
            .catch(err => {
                console.error("on deleting ", err.message);
            })
            .finally(() => setOnDeleting(null))
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 text-center">
                    <h1>Nos cours</h1>
                    <hr />
                    <div className="btn-container">
                        <a href="/Addcourse" className='btn btn-lg btn-outline-primary my-1' style={{ float: 'right' }}>Ajouter</a>
                    </div>
                </div>
                {
                    cours.map((cours) => {
                        return (
                            <div className="col-lg-3 my-3" key={cours.id}>
                                <div className="course_name">
                                    <h6><strong>{cours.course_name}</strong></h6>
                                    <hr />
                                    <Link to={`/courses/${cours.id}`}>
                                        <button className='btn btn-primary'>
                                            {'Details'}
                                        </button>
                                    </Link>
                                    <Link to={`/edit/${cours.id}/course`} state={{ course: cours }} className='link'>
                                        <button className='btn btn-warning px-1 mx-1'>
                                            {'Editer'}
                                        </button>
                                    </Link>
                                    <button disabled={onDeleting === cours.id} onClick={() => deleteCours(cours.id)} className='btn btn-danger'>
                                        {(!onDeleting || onDeleting !== cours.id) ? 'Supprimer' : 'en cours...'}
                                    </button>
                                    {/* <h4 style="display: inline-block; float: right"><strong>$</strong></h4> */}

                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
export default Cours;
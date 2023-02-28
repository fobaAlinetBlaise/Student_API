import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const EditCourse = (props) => {
    const location = useLocation();
    console.log("location", location);
    const { course = {} } = location.state;
    const [course_name, setCourseName] = useState(course.course_name);
    const [description, setDescription] = useState(course.description);
    const [coefficiant, setCoefficient] = useState(course.coefficiant);
    const [teacher_id, setTeacherId] = useState(course.teachers.id);
    const [isSubmetting, setIsSubmetting] = useState(false);
    const [errors, setErrors] = useState('');
// on utilise ce qui vient car teacher est une clé etrangére dans Cours
    const [teachers, setTeachers] = useState([]);

    const getTeachers = () => {
        axios.get('http://127.0.0.1:8000/teachers/')
            .then(res => {
                if (res.status === 200)
                    setTeachers(res.data);

            })
            .catch(err => {
                console.log('on get teachers', err.message);
            })
    }
//sa fin
    const onSubmit = () => {
        var errs = errors;
        if (course_name === '')
            errs['course_name'] = 'le champs course_name est obligatoire !';
        else if (course_name.length > 255)
            errs[course_name] = 'le nombre maxi est de 255';
        else if (description.length > 300)
            errs['course_name'] = 'le nombre maxi est de 300 !';
        if (!errs.course_name && !errs.description) {
            setIsSubmetting(true)

            const formData = new FormData()
            formData.append('course_name', course_name)
            formData.append('teachers', parseInt(teacher_id))
            formData.append('description', description)
            formData.append('coefficiant', coefficiant)

            axios.put(`http://127.0.0.1:8000/courses/${course.id}/`, formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then(res => {
                    console.log(res);
                    if (res.status === 200)
                        window.location = '/courses';
                })
                .catch(error => console.error('on added course', error.response?.data))
                .finally(() => setIsSubmetting(false));

        }
        else
            setErrors([...errs]);


        console.log('Its submit succesfuly!')
    }

    useEffect(() => {
        getTeachers();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mx-auto">
                    <form>
                        <div className="form-group">
                            <label for="course_name">Nom</label>
                            <input type="text" className="form-control" id="course_name" value={course_name}
                                onChange={(e) => setCourseName(e.target.value)}
                                name="course_name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="coefficiant">coefficiant</label>
                            <input value={coefficiant}
                                min={1}
                                max={5}
                                onChange={(e) => setCoefficient(e.target.value)}
                                type="number" step={1}
                                name="coefficient"
                                id="coefficient"
                                placeholder="1"
                                className="form-control" />
                        </div>
                        <label htmlFor="teacher_id">Enseignant</label>
                        <div className="form-control">
                            <select onChange={(e) => setTeacherId(e.target.value)} name="teacher_id" id="teacher_id" className="form-control">
                                <option value="">Choisir un Enseignant</option>
                                {
                                    teachers?.map((item, index) => (
                                        <option selected={item.id === teacher_id} key={'option-t-' + index} value={item?.id}>
                                            {item.name}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="message">Description</label>
                            <textarea defaultValue={''}
                                onChange={(e) => setDescription(e.target.value)}
                                value={description} name="description" id="description" cols="71" rows="4"></textarea>
                        </div>

                        <button className="btn btn-lg btn-primary" disabled={isSubmetting} onClick={onSubmit} type="button">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditCourse;

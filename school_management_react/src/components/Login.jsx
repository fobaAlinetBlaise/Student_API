import React from 'react'

const Login = () => {
    return (
        <>
            {/* <!-- Button trigger modal --> */}
            <button type="button" className="btn btn-info ms-auto" data-bs-toggle="modal" data-bs-target="#loginModal">
            <span className='fa fa-sign-in me-1   '></span>
                Login
            </button>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <button className="btn btn-primary w-100 mb-4">
                                <span className='fa fa-google me-2'></span>
                                Sign in with google
                            </button>
                            <button className="btn btn-primary w-100 mb-4">
                                <span className='fa fa-facebook me-2'></span>
                                Sign in with facebook
                            </button>
                            <form>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                                </div>
                                <div className="form-group form-check">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                                </div>
                                <button type="submit" className="btn btn-outline-primary w-100 mt-5">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;
import React from 'react'
import Login from './Login'
import Signup from './Signup'

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">Ecole Nouvelle Génération</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/courses">Cours</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/classes">Classes</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/teachers">Enseignants</a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/students">Etudiants</a>
              </li>
            </ul>
          </div>
        </div>
        <Login />
        <Signup />
      </nav>
    </>
  )
}
export default Header
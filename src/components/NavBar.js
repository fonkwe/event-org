import React from 'react'

export default function NavBar() {
  return (
    <div>
     <nav class="navbar navbar-expand-lg bg-light text-light">
    <div class="container-fluid">
    <a class="navbar-brand" href="#tickets">Event-Org</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#tickets">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tickets">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#tickes" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Events
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#tickes">FootBall Events</a></li>
            <li><a class="dropdown-item" href="#tickets">Seminar Events</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#tickets">Conference Events</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#tickets">Create Event</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

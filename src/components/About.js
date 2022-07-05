import React from 'react'
import man2 from "../assets/man2.jpeg";

function About() {
  return (
    <div>
        <div class="about-section">
  <h1>What we do</h1>
  <p>We sell Tickets for Events.</p>
  <p>Browser throught our various Tickets and Make a purchase.</p>
</div>

<h2 class="h2">Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={man2} alt="Jane" width={100} />
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Owner.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={man2} alt="Mike" width = {100} / >
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>incharge of sales</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={man2}alt="John" width ={100} />
      <div class="container">
        <h2>John mike</h2>
        <p class="title">Designer</p>
        <p>Incharge of Designs</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default About
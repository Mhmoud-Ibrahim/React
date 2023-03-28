import React from 'react'
import './About.css'
export default function About() {
  return <>
  <section id='about'className='about vh-100'>
  <div className="container d-flex py-3 align-items-center flex-column"> 
            <h1 className="about-heading text-uppercase mb-0">ABOUT</h1>
            <div className="divider-custom divider-light">
                <div className="line "></div>
                <div className="divider-custom-icon text-danger">
                  <i id='star' className=" fas fa-star m-2 fa-2x "></i></div>
                <div className="line"></div>
            </div>
        </div>
        <div className="container">
          <div className="row w-75 text-center m-auto">
            <div className="col-md-6">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
            </div>
            <div className="col-md-6">
              <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
            </div>
          </div>
        </div>

  </section>
  
  </>
}

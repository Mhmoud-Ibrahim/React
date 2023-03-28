import React from 'react';
import data from '../../store';
import imge from '../../assets/cabin.png'
import $ from 'jquery'
import './potfolio.css';

export default function Portfolio() {

  function openDetails(){
$('#details').fadeIn(400);
  }
  function closeDetails(){
    $('#details').fadeOut(500);
  }

  return<>
  <div className="Portfolio">
  <div className="container d-flex py-3 align-items-center flex-column">

            <h1 id='protfolioheading' className="masthead-heading text-uppercase mb-0">PORTFOLIO</h1>
            <div className="divider-custom divider-light">
                <div className="line2 "></div>
                <div className="divider-custom-icon "><i className="text-white fas fa-star fa-2x m-2"></i></div>
                <div className="line2"></div>
            </div>
        </div>

      <div className="container mt-4">
        <div id='cardscontainer' className="row g-5">
{data.map((value,index)=> {return(
<div key={value.id} onClick={()=>openDetails()} className="col-md-4">
            <div className="card rounded-2 position-relative">
              <img  className='w-100 rounded-2' src={value.image} alt="Portfolio" />
            <h1 className='text-danger'>{}</h1>
            <div className="layer position-absolute">
              <i className='fas fa-plus '></i>
            </div>
            </div>
          </div>
)})}
         
{/* 
          <div onClick={()=>openDetails()} className="col-md-4">
            <div className="card rounded-2 position-relative">
              <img className='w-100 rounded-2' src="./cake.png" alt="Portfolio" />
            <div className="layer position-absolute">
              <i className='fas fa-plus '></i>
            </div>
            </div>
          </div>
          <div onClick={()=>openDetails()} className="col-md-4">
            <div className="card rounded-2 position-relative">
              <img className='w-100 rounded-2' src="./circus.png" alt="Portfolio" />
            <div className="layer position-absolute">
              <i className='fas fa-plus '></i>
            </div>
            </div>
          </div>
          <div onClick={()=>openDetails()} className="col-md-4">
            <div className="card rounded-2 position-relative">
              <img className='w-100 rounded-2' src="./game.png" alt="Portfolio" />
            <div className="layer position-absolute">
              <i className='fas fa-plus '></i>
            </div>
            </div>
          </div>
          <div onClick={()=>openDetails()} className="col-md-4">
            <div className="card rounded-2 position-relative">
              <img className='w-100 rounded-2' src="./safe.png" alt="Portfolio" />
            <div className="layer position-absolute">
              <i className='fas fa-plus '></i>
            </div>
            </div>
          </div>
          <div onClick={()=>openDetails()} className="col-md-4">
            <div className="card rounded-2 position-relative">
              <img id='6' className='w-100 rounded-2' src="./submarine.png" alt="Portfolio" />
            <div className="layer position-absolute">
              <i className='fas fa-plus '></i>
            </div>
            </div>
          </div> */}


        </div>
      </div>
  </div>
  <section id='details' className='details ' >
  <div className="details-content mt-2 position-relative text-center w-50 m-auto  bg-light rounded-3 py-3">
  <div className="container d-flex py-0 m-0  align-items-center flex-column"> 
            <h1 id='protfolioheading' className="masthead-heading text-uppercase mb-0">PORTFOLIO</h1>
            <div className="divider-custom divider-light">
                <div className="line2 "></div>
                <div className="divider-custom-icon "><i className="text-white fas fa-star fa-2x m-2"></i></div>
                <div className="line2"></div>
            </div>
        </div>
        <img   className='w-50 m-0 rounded-3' src={imge} alt="" />
    <p className='m-3'>Lorem ipsum dolor sit amet.</p>
    <button onClick={closeDetails} className='btn '><i className='fas m-2 fa-close text-light ' ></i>close window </button>
  <i onClick={closeDetails} className='fas closebtn fa-close position-absolute top-0 end-0 fa-3x m-4' ></i>
  </div>

  </section>

  </>
}

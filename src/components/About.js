import React from 'react'
import Image from '../assets/shoesbanner/shoe1.png'
function About() {
  return (
    <>
      <div>
    <img src={Image} className="img-fluid w-100 img-square" alt="About Us"/>
      </div>
      <div className="container">
      <h1 className="text-primary text-center display-1">
        About Us
      </h1>
      <h3 className="text-justify">
      Hamza Shoe Store is a footwear design and supply company based in Karachi Pakistan.
      </h3>
        <div className="row">
          <div class="col-md-12 col-lg-6">
          <p className="text-justify">
          Traditionally, shoes have been made from leather, wood or canvas, but in the 2010s, they are increasingly made from rubber, plastics, and other petrochemical-derived materials. Though the human foot is adapted to varied terrain and climate conditions, it is still vulnerable to environmental hazards such as sharp rocks and temperature extremes, which shoes protect against. Some shoes are worn as safety equipment, such as steel-soled boots which are required on construction sites.
          
          </p>
          </div>
          <div class="col-md-12 col-lg-6">
          <p className="text-justify">
          A shoe is an item of footwear intended to protect and comfort the human foot. Shoes are also used as an item of decoration and fashion. The design of shoes has varied enormously through time and from culture to culture, with appearance originally being tied to function. Additionally, fashion has often dictated many design elements, such as whether shoes have very high heels or flat ones.
          </p>
          </div>
          </div>
        </div>
      </>


  )
}


export default About

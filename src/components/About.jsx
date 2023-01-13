import React from 'react'

export default function About() {
  return (
    <div>
        <section id="about">
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src="/assets/about2.png" alt="About" className='w-75 mt-5' />
                    </div>
                    <div className="col-md 6">
                        <h3 className="fs-5 mb-0">About Us</h3>
                        <h1 className="display-6 mb-2">
                            Who <b>We</b> Are
                        </h1><hr className='w-50'/>
                        <p className="lead mb-4">Lorem ipsum, dolor sit amet consectetur
                         adipisicing elit. Dolore quibusdam error culpa tenetur quos 
                         perspiciatis, ipsa necessitatibus reprehenderit veritatis saepe 
                         exercitationem alias eligendi dolores ducimus enim tempora natus 
                         asperiores tempore minima qui placeat nihil reiciendis fuga? 
                         Nostrum excepturi, totam dicta quam voluptate cumque amet dolorum 
                         alias ducimus vitae facere accusantium.</p>
                         <button className="btn btn-primary rounded-pill px-4 py-2">Get Started</button>
                         <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

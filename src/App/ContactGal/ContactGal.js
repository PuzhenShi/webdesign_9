import React from 'react'
import './contactgal.css'
import img1 from './pic/contact1.png';
import img2 from './pic/contact2.png';


function ContactGal() {
    return (
        <div>
            <section class="container-fluid px-0" id="contactback">
                <div class="row align-items-center content">
                    <div class="col-md-12">
                        <img src={img1} alt="" class="img-fluid" />
                    </div>
                </div>
            </section>


            <section class="container-fluid px-0" >
                <div class="row align-items-center content">

                    <div class="col-md-12">
                        <div class="row justify-content-center">
                            <div class="col-8 blurb mb-5 mb-md-0">
                            <br/><br/>
                                <h1>
                                    How do I contact Credit Karma for help?
                                </h1><br />
                                <div class="col-md-12">
                                    <img src={img2} alt="" class="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default ContactGal
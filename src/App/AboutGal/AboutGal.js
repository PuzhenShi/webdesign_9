import React from 'react'
import './aboutgal.css'
import img1 from './pic/about1.png';
import img2 from './pic/about2.png';

function AboutGal() {
    return (
        <div>

            <section class="container-fluid px-0" id="headingback">
                <div class="row align-items-center">
                    <div class="col-lg-6" >
                        <div id="headingGroup" class="text-black text-center d-none d-lg-block mt-5">
                            <h1 class="">Understanding your credit history.</h1>
                            <h3>Credit history is a work of art. And yours could be a masterpiece.</h3>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid" src={img1} alt="" />
                    </div>
                </div>
            </section>

            <section class="container-fluid px-0">
                <div class="row align-items-center content">
                    <div class="col-md-12">
                        <img src={img2} alt="" class="img-fluid" />
                    </div>
                </div>
            </section>


            <section class="container-fluid px-0" id="historypara">
                <div class="row align-items-center content">

                    <div class="col-md-12">
                        <div class="row justify-content-center">
                            <div class="col-10 blurb mb-5 mb-md-0">
                                <h4>
                                    Editorial Note: Credit Karma receives compensation from third-party advertisers, but that doesn’t affect our editors’ opinions. Our third-party advertisers don’t review, approve or endorse our editorial content. It’s accurate to the best of our knowledge when posted.
                                </h4>
                                <h1>
                                    Credit history: What’s in it and why it matters
                                </h1><br/>
                                <h4>
                                    Updated August 15, 2020
                                    <br/><br/>
                                    This date indicates our editors’ last comprehensive review and may not reflect recent changes in individual terms.
                                </h4>
                                <h5>
                                    Written by: Erin Dunn
                                    <br/><br/>
                                    Your credit history is a record of your borrowing and repayment activity. For instance, it may include information about how many credit cards or loans you have and whether you’ve paid your bills on time or not. You can find details about your credit history in your credit reports.
                                    <br /><br />
                                    Let’s review what you need to know about your credit history, and how a deeper understanding of the way credit history works can help you in your journey to build credit.
                                    <br /><br />
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default AboutGal
import React from 'react'
import img1 from './pic/home1.png';
import img2 from './pic/home2.png';
import img3 from './pic/home3.png';
import img4 from './pic/home4.png';
function HomeGal() {
    return (
        <div>

            <section class="container-fluid px-0">
                <div class="row align-items-center">
                    <div class="col-lg-6">
                        <div id="headingGroup" class="text-black text-center d-none d-lg-block mt-5">
                            <h1 class="">Credit Karma</h1>

                        </div>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid" src={img1} alt="" />
                    </div>
                </div>
            </section>

            <section class="container-fluid px-0">
                <div class="row align-items-center content">
                    <div class="col-md-6 order-2 order-md-1">
                        <img src={img2} alt="" class="img-fluid" />
                    </div>
                    <div class="col-md-6 text-center order-1 order-md-2">
                        <div class="row justify-content-center">
                            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>Where credit meets confidence.</h2>
                                <img src="/pic/home1.png" alt="" class="d-none d-lg-inline" />
                                <p class="lead">Credit Karma uses your credit profile to show you curated offers. Plus, with Karma Confidence, you can see your Approval Odds before you apply, without impacting your scores.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center content">
                    <div class="col-md-6 text-center">
                        <div class="row justify-content-center">
                            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>Introducing Credit
                                    Karma Money™</h2>
                                
                                <p class="lead">A rewarding new money experience with Instant Karma™ cash reimbursements* for debit purchases.*</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <img src={img3} alt="" class="img-fluid" />
                    </div>
                </div>
                <div class="row align-items-center content">
                    <div class="col-md-6 order-2 order-md-1">
                        <img src={img4} alt="" class="img-fluid" />
                    </div>
                    <div class="col-md-6 text-center order-1 order-md-2">
                        <div class="row justify-content-center">
                            <div class="col-10 col-lg-8 blurb mb-5 mb-md-0">
                                <h2>Get the personalized
                                    relief you need.</h2>
                                <img src="imgs/lolli_icon.png" alt="" class="d-none d-lg-inline" />
                                <p class="lead">Relief roadmap connects you to government support and personalized debt relief options.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeGal
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from "react";
import './footer.css';
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const Footer = () => {
    return (
        <footer class="w-100 pv5 ph4 bg-ck-black-90" nonce="" width="1024">
            <div class="w-100 mb4">
                <div class="dib w-30-l w-100 pv3-ns mt3-ns mt0 mb0-l mb3 tc mh0-ns" id="iconbar">
                    <a title="Facebook" class="fl-l dib mr4-l mr2 ml0-l ml2 v-mid" href="https://www.facebook.com/creditkarma" target="_blank" rel="noopener noreferrer">
                        <img srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Facebook.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Facebook.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Facebook.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Facebook.png?auto=compress%2Cformat&amp;dpr=4 4x" src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Facebook.png?auto=compress%2Cformat" height="30" width="30" role="img" aria-label="Facebook" alt="Facebook" />
                        </a>

                    <a title="Instagram" class="fl-l dib mr4-l mr2 ml0-l ml2 v-mid" href="https://www.instagram.com/creditkarma" target="_blank" rel="noopener noreferrer"><img srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Instagram.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Instagram.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Instagram.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Instagram.png?auto=compress%2Cformat&amp;dpr=4 4x" src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Instagram.png?auto=compress%2Cformat" height="30" width="30" role="img" aria-label="Instagram" alt="Instagram" />
                    </a>
                    <a title="Twitter" class="fl-l dib mr4-l mr2 ml0-l ml2 v-mid" href="https://twitter.com/creditkarma " target="_blank" rel="noopener noreferrer">
                        <img srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Twitter.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Twitter.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Twitter.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Twitter.png?auto=compress%2Cformat&amp;dpr=4 4x" src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Twitter.png?auto=compress%2Cformat" height="30" width="30" role="img" aria-label="Twitter" alt="Twitter" /></a>
                    <a title="YouTube" class="fl-l dib mr4-l mr2 ml0-l ml2 v-mid" href="https://www.youtube.com/user/creditkarma" target="_blank" rel="noopener noreferrer"><img srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/YouTube.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/YouTube.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/YouTube.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/YouTube.png?auto=compress%2Cformat&amp;dpr=4 4x" src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/YouTube.png?auto=compress%2Cformat" height="30" width="30" role="img" aria-label="YouTube" alt="YouTube" />
                    </a>
                    <a title="Tik Tok" class="fl-l dib mr4-l mr2 ml0-l ml2 v-mid" href="https://www.tiktok.com/@creditkarma" target="_blank" rel="noopener noreferrer">
                        <img srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/TikTok.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/TikTok.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/TikTok.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/TikTok.png?auto=compress%2Cformat&amp;dpr=4 4x" src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/TikTok.png?auto=compress%2Cformat" height="30" width="30" role="img" aria-label="Tik Tok" alt="Tik Tok" /></a>
                    <a title="Pinterest" class="fl-l dib mr4-l mr2 ml0-l ml2 v-mid" href=" https://www.pinterest.com/creditkarma" target="_blank" rel="noopener noreferrer"><img srcset="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Pinterest.png?auto=compress%2Cformat&amp;dpr=1 1x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Pinterest.png?auto=compress%2Cformat&amp;dpr=2 2x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Pinterest.png?auto=compress%2Cformat&amp;dpr=3 3x, https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Pinterest.png?auto=compress%2Cformat&amp;dpr=4 4x" src="https://creditkarmacdn-a.akamaihd.net/res/content/bundles/assets/1.151.39/footer/Pinterest.png?auto=compress%2Cformat" height="30" width="30" role="img" aria-label="Pinterest" alt="Pinterest" />
                    </a>
                </div>
            </div>
            <div>
                <div class="dib w-100 v-top lh-copy ck-black-40">
                    <div class="dib w-50-ns w-100 v-top">
                        <div class="dib w3 w-100-m fr-m tc pb3 v-top">
                            <a href="https://seal.digicert.com/seals/popup/?tag=0EscSmSQ&amp;url=www.creditkarma.com&amp;lang=en_US" target="_blank" rel="noopener noreferrer">
                                <img src="https://ck-assets.imgix.net/assets/1.54.5/footer/digicert.png" alt="digicert EV Secure. Click to Verify" height="35" />
                            </a>
                        </div>
                        <div class="dib w-100 w-80-l fr-ns">
                            <div>
                                <div class="dib f7 mb2 pl2-l pr2">© 2007–2022 Credit Karma, LLC. Credit Karma® is a registered trademark of Credit Karma, LLC.
                                    All Rights Reserved. Product name, logo, brands, and other trademarks featured or referred to within
                                    Credit Karma are the property of their respective trademark holders. This site may be compensated through third party advertisers.
                                </div>
                            </div>
                            <div class="f7 lh-copy ph2-l mb2">
                                <div>Credit Karma Mortgage, Inc. NMLS ID# 1588622<span> | </span>
                                    <a class="ck-footer-link ck-black-50 underline no-link-hover" href="https://www.creditkarma.com/about/mortgage-licenses">Licenses</a>
                                    <span> | </span>
                                    <a class="ck-footer-link ck-black-50 underline no-link-hover" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1588622" target="_blank">NMLS Consumer Access</a></div><div>Credit Karma Offers, Inc. NMLS ID# 1628077
                                    <span> | </span>
                                    <a class="ck-footer-link ck-black-50 underline no-link-hover" href="https://www.creditkarma.com/about/loan-licenses">Licenses</a>
                                    <span> | </span>
                                    <a class="ck-footer-link ck-black-50 underline no-link-hover" href="http://www.nmlsconsumeraccess.org/EntityDetails.aspx/COMPANY/1628077" target="_blank">NMLS Consumer Access</a>
                                </div>
                                <div>California loans arranged pursuant to Dep't of Business Oversight Finance Lenders License #60DBO-78868.

                                </div>
                                <div>Auto, homeowners, and renters insurance services offered through Karma Insurance Services, LLC (CA resident license #0172748).
                                </div>
                            </div>
                            <div class="dib f7 mb2 pl2-l pr2">Only mortgage activity by Credit Karma Mortgage, Inc., dba Credit Karma is licensed by the State of New York. Credit Karma, LLC. and Credit Karma Offers, Inc. are not registered by the NYS Department of Financial Services.
                            </div>
                        </div>
                    </div>
                    <div class="dib w-50-ns w-100 v-top">
                        <div class="dib f7 mb2 pl2-l pr2 w-100 w-80-l">iPhone is a trademark of Apple Inc., registered in the U.S. and other countries. App Store is a service mark of Apple Inc.
                        </div>
                        <div class="dib f7 mb2 pl2-l pr2 w-100 w-80-l">Android is a trademark of Google Inc.
                        </div>
                        <div class="dib f7 mb2 pl2-l pr2 w-100 w-80-l">The Equifax logo is a registered trademark owned by Equifax in the United States and other countries.
                        </div>
                        <div>
                            <div class="dib f7 mb2 pl2-l pr2 w-100 w-80-l">Credit Karma is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone, and applying the relevant accessibility guidelines.
                            </div>
                            <div id="legalcom" >If you have specific questions about the accessibility of this site, or need assistance with using this site, contact us. Please call Member Support at 833-675-0553 or email legal@creditkarma.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    );
};

export default Footer;
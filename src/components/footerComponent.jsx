import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";


class FooterComponent extends Component {
    state = {  }
    render() { 
        return (
            <footer class="footer-color text-center text-lg-start">
                <div class="container p-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Travelingo</h5>

                            <p>
                            Travelingo is an online booking site where you can book any hotel room in the world, with no hidden fees.
                            </p>
                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                            <h5 class="text-uppercase">Links</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="http://twitter.com" class="primary">Our Twitter page</a>
                                </li>
                                <li>
                                     <a href="http://facebook.com" class="primary">Our Facebook Page</a>
                                </li>
          
                             </ul>

                        </div>
                        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                        <h5 class="text-uppercase">Sponsors</h5>
                            <ul class="list-unstyled mb-0">
                                <li>
                                    <a href="http://google.com" class="primary">Google</a>
                                </li>
                                <li>
                                     <a href="http://www.trustartme.com" class="primary">TrustartME</a>
                                </li>
          
                             </ul>

                        </div>

                        
                    </div>
                </div>
                <div class="text-center p-3 footer-color">
                    <h5>© 2020 Copyright: 
                    <a class="primary" href="https://google.com/"> TrivalingoME.com</a></h5>

                </div>
                
                
                
            </footer>
          );
    }
}
 
export default FooterComponent;
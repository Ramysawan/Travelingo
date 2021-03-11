import React, { Component } from 'react';
import 'bootstrap-css-only/css/bootstrap.min.css';
import "bootstrap/dist/css/bootstrap.css";


class FooterComponent extends Component {
    state = {  }
    render() { 
        return (
            <div class="d-flex flex-column">
             <footer color = "dark">
        <div>
            <a href="/">Travelingo</a>
            <span>&copy; 2020 Travelingo</span>
        </div>
            <div class="ml-auto">
            <span>Powered by</span>
            <a href="/">Travelingo</a>
         </div>
        </footer>
    </div>
          );
    }
}
 
export default FooterComponent;
import React, { Component } from 'react';  

class MainComponent extends Component {
    state = {  }
    render() { 
        return ( 
            <div class = "container">
                <h1>Start your booking session NOW</h1><br/>
                <h3>First Name:</h3>
                <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}/><br/><br/>
                <h3>Last Name:</h3>
                <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}/><br/><br/>
                <h3>Phone Number:</h3>
                <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}/><br/><br/>
                <h3>Your email:</h3>
                <input
                type="text"
                value={this.state.value}
                onChange={this.handleChange}/><br/><br/>
                <button class = "btn btn-primary">BOOK NOW</button><br/><br/>
            </div>
         );
    }
}
 
export default MainComponent;
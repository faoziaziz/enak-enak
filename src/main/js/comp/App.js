import React, { Component } from 'react';


class App extends Component {

    state = { displayBio: false };
    styles = {
      display: 'flex',  
      justifyContent:'center', 
      alignItems:'center', 
      height: '100vh'
    }

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }


    render() {
        return (
        <div>
            <h1 >Hallo, Pecinta Roti !!</h1>
            <p>Aku pecinta roti, kamu juga??</p>
            <p>I'm always looking forward to working on meaningful projects.</p>
        {
          this.state.displayBio ? (
            <div className="center">
              <p>I live in San Francisco, and code every day.</p>
              <p>My favorite language is JavaScript, and I think React.js is awesome.</p>
              <p>Besides coding, I also love music and ramen!</p>
              <button  type="button" className="btn btn-outline-primary"
 
               onClick={this.toggleDisplayBio}>Show less</button>
            </div>
          ) : (
            <div className="center">
              <button  
              type="button" className="btn btn-outline-primary"  
               
              onClick={this.toggleDisplayBio}>Read more</button>
            </div>
          )
        }

        </div>
        );

    }


}




export default App;
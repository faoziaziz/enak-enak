import React, {Component} from 'react';


class App extends React.Component {
    state={displayBio: false};

    toggleDisplayBio=()=>{
        this.setStte({displayBio: !this.state.displayBio});
    }

    
    render(){
        return(<div>
                    <h1>Hallo, Pecinta Roti !!</h1>
                    <p>Aku pecinta roti, kamu juga??</p>
                    sLet Say
               </div>);

    }


}

export default App;
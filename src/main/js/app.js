import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './component/header.js'

class App extends React.Component {

    render(){
        return(<div>
            <Header />
            
                           Let Say
               </div>);

    }


}

ReactDOM.render(<App />, document.getElementById('react'))


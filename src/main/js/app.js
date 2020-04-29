// tag::vars[]
const React = require('react'); // <1>
const ReactDOM = require('react-dom'); // <2>
//const client = require('./client'); // <3>
class App extends React.Component {

    render(){
        return(<div>
               Let Say
               </div>);

    }


}

ReactDOM.render(<App />, document.getElementById('react'))


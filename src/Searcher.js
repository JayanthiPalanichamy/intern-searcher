import interns from './List'
import React, {Component} from 'react';
import Filter from './Filter';

class Searcher extends Component {
    constructor(props) {
        super(props);
        this.state = {result: null}
        this.search=this.search.bind(this)
    }

    render() {
        return (
            <section id="userInput">
                <input className="nameSearch" id="nameSearch"/>
                <button id="Search" onClick={this.search}> Search</button>
                {this.state.result}
            </section>

        )
    }

    search() {

        const data = document.getElementById("nameSearch");
        this.setState({
           result:<Filter interns={interns} data={data.value}/>
        });



    }

}

export default Searcher;
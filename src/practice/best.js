import React, { Component } from 'react';



class Best extends Component {
    constructor() {
        super();

        this.state = {
            

        }
    }

    render() {

        //receving full aray of objects here
        return (<div className="jombotron">
        <li>
            {this.props.pArr.title} - {this.props.pArr.category}
            </li>
        
        </div>


        );
    }
}

export default Best;
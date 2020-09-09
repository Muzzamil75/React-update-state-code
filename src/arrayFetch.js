import React, { Component } from 'react';
import Card from './cards'
class nice extends Component {
    constructor(){
        super();
    this.state = { 
        robots:[]
        
     }
     this.fetch=this.fetch.bind(this);
}
    fetch(){

        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response=> Response.json())
        .then(data => this.setState({robots:data}))
        .catch(error => console.log(error))
    }

    render() { 
        return (<div>
            <button onClick={this.fetch} className="btn btn-primary">Click to fetch robots</button>
            <div>
                {this.state.robots.map(i=>{
                    return <Card   name={i.name} key={i} email={i.email} id={i.id}/>

                })}
            </div>


        </div>  );
    }
}
 
export default nice;
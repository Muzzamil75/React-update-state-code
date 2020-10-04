import React, { Component } from 'react';
import Card from './cards'
class ArrayFetch extends Component {
    constructor(){
        super();
    this.state = { 
        robots: []
        
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
        const { robots } = this.state;

        return (<div style={{
            height:'inherit',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex'
        }}>
            {!robots.length > 0 && <button onClick={this.fetch} className="btn btn-primary">Click to fetch Robots</button>}
            <div>
                {robots.length > 0 && robots.map(i=>{
                    return <Card   name={i.name} key={i} email={i.email} id={i.id}/>

                })}
            </div>


        </div>  );
    }
}
 
export default ArrayFetch;
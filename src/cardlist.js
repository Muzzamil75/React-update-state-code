import React from 'react';
import Card from './cards';

/* //receivng the array of robots from index.js
const CardList = ({ robots }) => {
    const array = robots.map((user, i) => {
        //SENDING EACH ROBOT INFO TO CARD FOR DISPLAY
      
        return (
            <Card
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                Key={i} />)
    })
    return (
        <div>
            {array}
        </div>

    )} */
class App extends React.Component {
    constructor() {
        super();

        this.state = {
            robots: []
        }
        this.fetchData = this.fetchData.bind(this);
    }

    fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => this.setState({robots: data }))
        .catch(err => console.error('Error ', err.toString()));
    }

    render() {
        return (
            <div>
                <button onClick={this.fetchData}>Fetch</button>
                <p>
                    {this.state.robots.map(el => {
                        return <Card key={el.id} email={el.email} name={el.name} id={el.id}
                            />                       
                    })}
                </p>
            </div>
        )
    }

}


export default App;
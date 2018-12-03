import React, { Component } from 'react';
import Best from './best';
import Addproject from './addproject'
class nice extends Component {
    constructor() {
        super();
        this.state = {}
        
    }

    componentWillMount(){
        this.setState({
            projects : [
             {
                title: 'senior',
                category : 'webdesigner'

            },{
                title: 'junior',
                
                category : 'Pclaptop'

            },{
                title: 'Fresher',
                category : 'mobile'

            }
        
        ]
    });
    //console.log("mount  " + this.state.projects);
    }
    niceF(){
        alert('I am clicked!!')

    }
    handleAddproject =(params)=>{
        console.log("ye h wo "+ params.category);
        let Project = this.state.projects;   // var = state
        Project.push(params);             // var+newComer
        //console.log("ye h wo  new"+ Project);
        this.setState({params:Project})
    }

    render() {
        return (
        <div className="jumbotron jutify-content-center">
                <h1 className="bg-warning">Here We are dealing with State update and geting function called by props with geting parameters</h1>

            <button onClick={this.niceF} className="btn btn-danger">i m a button</button>    
            
            
            {this.state.projects.map(array=>{
                return <Best key ={array} pArr={array}  />
            })
            }
            <Addproject addProject={this.handleAddproject} />

        </div>)
    }
}

export default nice;
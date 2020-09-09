import React, { Component } from 'react';
//import Best from './best';
class nice extends Component {
    static defaultProps = { categories: ['web', 'samsung', 'opppo'] }
    constructor(){
        super();
        this.state={
            newprojects: {}

        }

    }
	
	//03084879106  //farhan

    handleSubmit = (e) => {
        if (this.refs.title.value === '')
            alert('title is required !!')
        else {
            this.setState
                ({
                    newprojects: {
                        title: this.refs.title.value,
                        category: this.refs.category.value
                    }
                    
                }, 
                function () { 
                    //calling function written in parent component and passsing ned project object
                    this.props.addProject(this.state.newprojects)
                })
        }

        //stops the page to reload continuosly
        e.preventDefault();
    }

    render() {
        //using hardcoded props
        let categoryOptions = this.props.categories.map(cat => {
            return <option key={cat} value={cat}> {cat}</option>
        })
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <label>Title</label>
                    <input type="text" ref="title" />


                    <label>Title</label>
                    <select ref="category">
                        {categoryOptions}

                    </select>


                    <input type="submit" value="submit" />
                </form>

            </div>)
    }
}

export default nice;
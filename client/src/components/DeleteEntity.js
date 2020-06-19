import React, { Component } from 'react'
import Axios from 'axios'

export class DeleteEntity extends Component {
    constructor(props) {

        super(props);

        this.state = {

            name: ''
        };
    }

    handleInputChange = (e) => {

        const re = /^[a-zA-Z]+$/;
        this.setState({resp:''})
        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ [e.target.name]: e.target.value })
        }
    }


    handleSubmit = (e) => {

        e.preventDefault();

        const url = '/delete';

        const nam=this.state.name
        const entity = {

            name: this.state.name
        }
        console.log({ entity });
        console.log(entity);
        this.setState({
            name: '',
            resp:''
        })
        Axios.post(url, entity).then((res) => {

            //console.log(res);
            this.setState({resp:res.data})
            //console.log(this.state.resp);
            
            //handle your login 

        }).catch((e) => {

            console.log("ERROR");

            //handle your errors
        });
        
    }


    render() {
        return (
            <div>
                <h1>Delete Entity</h1>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                        Name: <br></br>
                    <input type="text" onChange={this.handleInputChange} name="name" value={this.state.name}></input>
                    <br></br>
                    <span className="red-text">{this.state.resp}</span>
                    <br></br>
                       
                    <input type="submit" value="Submit" style={{
                        width: "140px",
                        borderRadius: "3px",
                        letterSpacing: "1.5px",
                    }}
                        className="btn btn-large btn-flat waves-effect blue black-text"></input>
                    <br></br>
                </form>
            </div>
        )
    }
}

export default DeleteEntity

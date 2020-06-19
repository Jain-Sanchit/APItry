import React, { Component } from 'react'
import Axios from 'axios'

export class UpdateEntity extends Component {
    constructor(props) {

        super(props);

        this.state = {

            name: '',
            kind: '',
            value: '',
            synonyms: ''
        };
    }
    
    handleInputChange = (e) => {

        const re = /^[a-zA-Z]+$/;

        // if value is not blank, then test the regex

        if (e.target.value === '' || re.test(e.target.value)) {
            this.setState({ [e.target.name]: e.target.value })
        }
    }


    handleSubmit = (e) => {

        e.preventDefault();

        const url = '/update';

        const entity = {

            name: this.state.name,
            kind: this.state.kind,
            value: this.state.value,
            synonyms: this.state.synonyms
        }
        console.log({ entity });
        console.log(entity);
        this.setState({
            name: '',
            kind: '',
            value: '',
            synonyms: ''
        })
        Axios.post(url, entity).then((res) => {

            console.log(res);

            //handle your login 

        }).catch((e) => {

            console.log("ERROR");

            //handle your errors
        });

    }


    render() {
        return (
            <div>
                <h1>Update Entity</h1>
                <form onSubmit={this.handleSubmit}>
                    <br></br>
                        Name: <br></br>
                    <input type="text" onChange={this.handleInputChange} name="name" value={this.state.name}></input>
                    <br></br>
                    <br></br>
                        Kind: <br></br>
                    <input type="text" name="kind" onChange={this.handleInputChange} value={this.state.kind}></input>
                    <br></br>
                    <br></br>
                    Value: <br></br>
                    <input type="text" name="value" onChange={this.handleInputChange} value={this.state.value}></input>
                    <br></br>
                    <br></br>
                    Synonyms: <br></br>
                    <input type="text" name="synonyms" onChange={this.handleInputChange} value={this.state.synonyms}></input>
                    <br></br>
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

export default UpdateEntity

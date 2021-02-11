import React from 'react';
import _ from 'lodash'

import { addSmurf, updateFormError } from '../actions'
import { connect } from 'react-redux';

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            position: '',
            nickname: '',
            description: ''
        }
    }
    

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.updateFormError('');
        if(!_.every(this.state)){
            this.props.updateFormError("All fields must be included to Submit");
            console.log("ErrorText " + this.props.errorText)
        }
        else if((this.props.smurfs.filter(existingSmurf => 
            existingSmurf.name === this.state.name)).length > 0){
            this.props.updateFormError("Smurf by that name already exist")
        }
        else {
            
        }
    }

    render() {
        return (<section>
            <h2>Add Smurf</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="name">Name:</label><br />
                    <input onChange={this.handleChange} name="name" id="name" />
                    <label htmlFor="position">Position:</label><br />
                    <input onChange={this.handleChange} name="position" id="position" />
                    <label htmlFor="nickname">Nickname:</label><br />
                    <input onChange={this.handleChange} name="nickname" id="nickname" />
                    <label htmlFor="description">Position:</label><br />
                    <input onChange={this.handleChange} name="description" id="description" />
                </div>

                {this.props.errorText ? <div data-testid="errorAlert" className="alert alert-danger" role="alert">
                    Error: {this.props.errorText} </div>:
                    <div></div>}
                <button onClick={(e) => this.handleSubmit(e)}>Submit Smurf</button>
            </form>
        </section>);
    }
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs,
        errorText: state.errorText
    }
}

const mapDispatchToProps = {addSmurf, updateFormError}

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
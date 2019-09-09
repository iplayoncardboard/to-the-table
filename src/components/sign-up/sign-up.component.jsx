import React from 'react';
import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state={
            displayName:'',
            emailAddress:'',
            password: '',
            confirmPassword: ''
        }
    }


    handleSubmit = (event) =>{
        event.preventDefault();
    }
     handleChange = (event)=>{
        const {value, name} = event.target;
        this.setState({[name]: value})
     }

    render(){
        return(
            <div className='sign-up'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange = {this.handleChange} label='display name' value={this.state.displayName} name='displayName' required/>
                    <FormInput handleChange = {this.handleChange} label='email' type='email' value= {this.state.emailAddress} name='email' required/>
                    <FormInput handleChange = {this.handleChange}  label='password' type='password' value={this.state.password} required/>
                    <FormInput handleChange = {this.handleChange} label='confirm password' type='password' value={this.state.confirmPassword} required/>
                    <CustomButton>SIGN UP</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignUp;
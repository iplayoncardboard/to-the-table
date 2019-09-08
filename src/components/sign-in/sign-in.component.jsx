import React, {Component} from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password: ''
        }
    }

    handleSubmit = event => {
        event.prevetDefault();
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({[name]: value})
    }

    render(){
        return(
            <div className='sign-in'>
                <form onSubmit={this.handleSubmit}>
                    <FormInput value={this.state.email} name='email' type='email' label='email' handleChange={this.handleChange}/>
                    <FormInput  value={this.state.password}name='password' type='password' label='password' handleChange={this.handleChange}/>
                    <CustomButton handleClick={this.handleSubmit}>Sign In</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;
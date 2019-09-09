import React, {Component} from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
import { auth } from '../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props){
        super(props);

        this.state={
            email:'',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} = this.state;
         try {
            await auth.signInWithEmailAndPassword(email, password)
        } catch (error){
            console.error(error);
        }
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
                    <CustomButton handleClick={signInWithGoogle}>SIGN IN WITH GOOGLE</CustomButton>
                </form>
            </div>
        )
    }

}

export default SignIn;
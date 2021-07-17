import React from "react";

import { FormInput, CustomButton } from '../../components';
import './sign-in.style.scss';

import { signInWithGoogle } from '../../firebase/config';
class SignIn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }

    handleSubmit =(ev) =>{
        ev.preventDefault();
        this.setState({username:'',password:''});
    }

    handleChange = (ev) => {
        let { value, name} = ev.target;
        this.setState({[name]:value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I Already have account</h2>
                <span>Sign in with username and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    handleChange={this.handleChange} 
                    name="username" 
                    value={this.state.username} 
                    label="email"
                    required />

                    <FormInput 
                    handleChange={this.handleChange} 
                    name="password" 
                    value={this.state.password} 
                    label="password"
                    required />
                    
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form" >
                            Sign In
                        </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn >
                            Sign In with Google
                        </CustomButton>
                    </div>
                 </form>
            </div>
        )
    }
}

export default SignIn;
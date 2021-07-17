import React from "react";

import { FormInput, CustomButton } from '../../components';
import './sign-in.style.scss';

import { auth, signInWithGoogle } from '../../firebase/config';
class SignIn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    handleSubmit = async (ev) =>{
        ev.preventDefault();
        try{
            const { email, password } = this.state;
            await auth.signInWithEmailAndPassword(email, password);
        }catch(error){
            console.log(error);
        }
        this.setState({email:'',password:''});
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
                    name="email" 
                    value={this.state.email} 
                    label="email"
                    required />

                    <FormInput 
                    handleChange={this.handleChange} 
                    name="password" 
                    value={this.state.password} 
                    label="password"
                    type="password"
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
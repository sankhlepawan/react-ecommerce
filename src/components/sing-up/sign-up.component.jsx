import React from 'react';
import {FormInput, CustomButton }  from '..';
import { auth, createUserProfileDocument } from '../../firebase';

import './sign-up.style.scss';

class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { displayName, email, password } = this.state;

        try{
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );
            await createUserProfileDocument(user, { displayName } );
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        }catch(error) {
            console.log(error);
        }
    }

    handlerChange = ({target}) => this.setState({[target.name]: target.value});
    
    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className="sign-up">
                <h2 className="title"> I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={this.handlerChange}
                        label='Display nmae'
                        required />
                    <FormInput
                        type="text"
                        name="email"
                        value={email}
                        onChange={this.handlerChange}
                        label='Email'
                        required />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handlerChange}
                        label='Password'
                        required />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={this.handlerChange}
                        label='Confirm Password'
                        required />
                    <CustomButton type="submit" value="Submit Form" >
                            Sign Un
                    </CustomButton>

                </form>
            </div>
        )
    }
}

export default SignUp;
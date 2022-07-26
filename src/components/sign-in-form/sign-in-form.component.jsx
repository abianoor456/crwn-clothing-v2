import { useState } from "react";
import Button from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { signInWithGoogleEmailAndPassword } from "../../utils/firebase/firebase.utils"
import './sign-in-form.styles.scss'
const SignInForm = ({ onClickHandler }) => {

    const defaultFormFields = {
        email: '',
        password: ''
    };

    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await signInWithGoogleEmailAndPassword(email, password);
        resetFormFields();
    }

    return (
        <div className='sign-in-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput
                    label='Email'
                    required type='email'
                    onChange={handleChange}
                    name="email"
                    value={email}
                />

                <FormInput
                    label='Password'
                    required type='password'
                    onChange={handleChange}
                    name="password"
                    value={password}
                />
                <div className='buttons-container'>
                    <Button type='submit' >Sign In</Button>
                    <Button type='button' onClick={onClickHandler} btnType='google' > Google Sign In</Button>
                </div>

            </form>

        </div>
    )
}

export default SignInForm;
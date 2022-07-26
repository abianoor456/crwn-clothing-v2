import {
    signInWithGooglePopup
} from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up-form/sign-up-form';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';
import './authentication.styles.scss'

const Authentication = () => {
    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    }

    return (
        <div className='authentication-container'>
            <SignInForm onClickHandler={logGoogleUser}></SignInForm>
            <SignUpForm ></SignUpForm>
        </div>
    )
}

export default Authentication;
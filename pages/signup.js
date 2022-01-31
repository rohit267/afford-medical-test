import Email from '../components/Email';
import Layout from '../components/Layout';
import Password from '../components/Password';
import Button from '../components/Button';
import Text from '../components/Text';
import { useSelector, useDispatch } from 'react-redux';
import { updateFirstName, updateLastName, updateSignupConfirmPassword, updateSignupEmail, updateSignupPassword } from '../redux/actions'
import axios from 'axios';
import Router from 'next/router';


function Singup(props) {

    const dispatch = useDispatch();
    const signupStore = useSelector(state => state.signupPage);

    function handleFirstName(e) {
        dispatch(updateFirstName({ firstName: e.target.value }))
    }

    function handleLastName(e) {
        dispatch(updateLastName({ lastName: e.target.value }))
    }

    function handleEmailChange(e) {
        dispatch(updateSignupEmail({ email: e.target.value }));
    }

    function handlePasswordChange(e) {
        dispatch(updateSignupPassword({ pass: e.target.value }))
    }

    function handleConfirmPasswordChange(e) {
        dispatch(updateSignupConfirmPassword({ pass: e.target.value }))
    }

    function handleSingup() {
        if (signupStore.password === signupStore.confirmPass) {
            axios.post('http://localhost:3030/signup', signupStore).then((res) => {
                if (res.data.result == 'registration successful!') {
                    Router.push('/');
                }
            })
        }
        else {
            alert('Passwords does not match.')
        }
    }


    return (
        <Layout>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 mt-4">
                    <Text place='First Name' onChange={handleFirstName} value={signupStore.firstName} />
                    <Text place='Last Name' onChange={handleLastName} value={signupStore.lastName} />
                    <Email onChage={handleEmailChange} value={signupStore.email} />
                    <Password onChage={handlePasswordChange} value={signupStore.password} />
                    <Password onChage={handleConfirmPasswordChange} value={signupStore.confirmPass} />
                    <Button onClick={handleSingup} />

                </div>
                <div className="col-md-4"></div>
            </div>
        </Layout>
    )
}

export default Singup;
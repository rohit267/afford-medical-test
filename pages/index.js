import Email from '../components/Email';
import Layout from '../components/Layout';
import Password from '../components/Password';
import Button from '../components/Button';
import Link from 'next/link';

export default function Login() {

  function handleEmailChange(e) {

  }

  function handlePasswordChange(e) {

  }

  function handleLogin() {

  }

  return (
    <Layout>
      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4 mt-4">
          <h2>Login</h2>
          <Email onChage={handleEmailChange} value={""} />
          <Password onChage={handlePasswordChange} value={""} />
          <Button onClick={handleLogin} type="Login" />
          <br />
          <Link href="/signup">Create an account</Link>
        </div>
        <div className="col-md-4"></div>
      </div>

    </Layout>
  )
}

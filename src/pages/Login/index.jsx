import './styles.css'
import '../../styles/global.css'
import LoginForm from '../../components/LoginForm'

export default function Login() {
  return (
    <div id="container">
      <div id="background">
        <LoginForm />
      </div>
      <div id="image-container"></div>
    </div>
  )
}

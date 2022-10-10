import Button from '../Button'
import Input from '../Input'
import PasswordReminder from '../PasswordReminder'
import Title from '../Title'
import './styles.css'

export default function LoginForm() {
  return (
    <div id="container-login-form">
      <Title />
      <Input label="E-mail" type="email" placeholder="Digite seu email" />
      <Input label="Senha" type="password" placeholder="Digite sua senha" />
      <PasswordReminder />
      <Button />
    </div>
  )
}

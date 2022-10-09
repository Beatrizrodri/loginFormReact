import './styles.css'

export default function PasswordReminder() {
  return (
    <div id="password-reminder-container">
      <div id="checkbox-content">
        <input type="checkbox" id="checkbox-input" />
        <label htmlFor="checkbox-input">Lembre-me</label>
      </div>

      <span>Esqueci minha senha</span>
    </div>
  )
}

import loginImage from '../../assets/log-in.svg'
import './styles.css'

export default function Title() {
  return (
    <div id="title-container">
      <div id="title">
        <img src={loginImage} alt="" />
        <span>Faça seu login</span>
      </div>

      <div id="caption">
        <span>Entre com suas informações de cadastro.</span>
      </div>
    </div>
  )
}

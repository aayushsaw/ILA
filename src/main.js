import './style.css'
import { createLoginComponent } from './login.js'

document.querySelector('#app').innerHTML = ''

const loginComponent = createLoginComponent()
document.querySelector('#app').appendChild(loginComponent)

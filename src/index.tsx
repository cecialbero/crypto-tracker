import * as React from "react"
import ReactDOM from "react-dom"
import { App } from "./App"
import reportWebVitals from "./reportWebVitals"
import * as serviceWorker from "./serviceWorker"
import CoinsState from './context/CoinsState'
import './styles/styles.scss'

ReactDOM.render(
  <React.StrictMode>
  <CoinsState>
    <App />
  </CoinsState>
  </React.StrictMode>,
  document.getElementById("root"),
)

serviceWorker.unregister()
reportWebVitals()

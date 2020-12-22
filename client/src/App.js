import logo from './assets/hk-logo-new.png'
import './App.css'
import LoginView from './components/Views/LoginView'
import { useHistory } from 'react-router-dom'

const App = () => {
    const history = useHistory()
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" onClick={() => history.push('/')} />
                <LoginView />
            </header>
        </div>
    )
}

export default App

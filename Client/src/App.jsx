import { Dashboard } from './Modules/Dashboard/Dashboard'
import './Normalize.css'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3001')

function App() {
  return (
    <Dashboard />
  )
}

export default App

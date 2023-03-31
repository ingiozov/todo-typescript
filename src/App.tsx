import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from './features/Todo/LoginForm/LoginForm'
import Dashboard from './features/Todo/Dashboard/Dashboard'
import styles from './App.module.css'

function App() {
  return (
    <main className={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App

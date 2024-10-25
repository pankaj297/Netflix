import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App.jsx';
// import { Practices } from './Practices'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Practices /> */}
  </StrictMode>,
)

// press h + enter to show help
// h

//   Shortcuts
//   press r + enter to restart the server
//   press u + enter to show server url
//   press o + enter to open in browser
//   press c + enter to clear console
//   press q + enter to quit
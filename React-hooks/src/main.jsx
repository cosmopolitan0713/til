import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const codeInfo = {
  name: "testcode",
  age: "36"
};

const CodeContext = createContext(codeInfo);

ReactDOM.createRoot(document.getElementById('root')).render(
  <CodeContext.Provider value={codeInfo}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CodeContext.Provider>
)

export default CodeContext;

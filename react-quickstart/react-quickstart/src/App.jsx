// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function AdminPanel() {
  return (
    <h1>this is admin</h1>
  )
}

function LoginForm() {
  return (
    <h1>this is a form</h1>
  )
}

function App() {
  const isLoggedIn = true;
    let content;

  if (isLoggedIn) {
    content = <AdminPanel />;
  } else {
    content = <LoginForm />;
  }

  return (
    <div>
      {content}
    </div>
  );
}



export default App

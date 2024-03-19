// import { useEffect } from 'react'
import './App.css'

// import MyPage from './pages/MyPage';
import CounterAgain from './pages/counterAgain';


function App() {

  // useEffect(() => {
  //   localStorage.clear();
  // });

  return( 
  <>
  {/* <h1>{JSON.stringify(localStorage)}</h1>
  <button onClick={() => localStorage.removeItem("hello")}> Delete </button>
  <button onClick={() => localStorage.clear()}> Clear </button>
  <button onClick={() => localStorage.setItem("hello", "world")}> 
  {" "}
  Create Local Storage 
  </button>
  <button onClick={() => sessionStorage.setItem("login", "1")}> 
  {" "}
  Create Session 
  </button> */}
  <CounterAgain />
  </>
  )
}
export default App

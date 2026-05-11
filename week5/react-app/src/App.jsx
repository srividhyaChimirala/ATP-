import './App.css'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList"
import Counter from './components/Counter';

function App(){
  //state
  //return
  return(
    <div>
      <Navbar/>
      <div className='m-20 min-h-screen'>
        <UsersList/>
      </div>
      <Counter/>
      <Footer/>

    </div>
  )

}

export default App;
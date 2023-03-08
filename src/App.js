import './App.css';
import Header from './components/Header'
import Cyclinks from './components/Cyclinks'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App" style={{height:'100vh'}}>
      <Header />
      <Cyclinks />
      <Footer />
    </div>
  );
}

export default App;

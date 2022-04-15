
import './App.css';
import Great from './components/Greet';
import Person from './components/Person';


function App() {
  const personName={
    first :'Bruce',
    last : 'Wayne' , 
  }
  return (
    <div className="App">
        <Great name='Hamdan' messageCount={10} isLoggedIn={false}/>
        <Person  name={personName}/>
    </div>
  );
}

export default App;

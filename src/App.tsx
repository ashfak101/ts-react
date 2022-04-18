
import './App.css';
import Great from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';


function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: '',
      last: 'Wayne'
    },
  ]
  return (
    <div className="App">
      <Great name='Hamdan' messageCount={10} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList}/>
      <Status status='error'/>
    </div>
  );
}

export default App;

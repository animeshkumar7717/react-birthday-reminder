import './App.css';
import UpcommingBirthday from './upcommingBirthday';
import Cart from './Cart';

const App = () => {
  return (
    <div className='body'>
      <h1 style={{color: 'lightpink'}}>Today's Birthday</h1>
      <Cart />
      <h1 style={{color: 'lightgreen'}}>Upcomming Birthday</h1>
      <UpcommingBirthday />
    </div>
  )
}

export default App;

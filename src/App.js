import './App.css';
import { AddTodo } from './Components/AddTodo';
import { Dashboard } from './Components/Dashboard';
// import { Dashboard } from './Components/Dashboard';
// import { Sidebar } from './Components/Sidebar';

function App() {
  return (
    <div>
      <AddTodo/>
      <Dashboard/>
    </div>
  );
}

export default App;

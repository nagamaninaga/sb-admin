import './App.css';
import Desbord from './Components/Desbord';
import Sidebar from './Components/Sidebar';

function App() {

let data={ 
earningsMonthly:"40,000",
earningsAnnuals:"215,000",
task:"50",
pendingRequest:18
}

  return <>
  <div id='wrapper'>
   <Sidebar/>
   <Desbord data={data}/>
   </div>
  </>
}

export default App;

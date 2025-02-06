import React from 'react';
// import './App.css'
import Welcome from './Welcome';
const App=()=>{
  return(
    <div style={{textAlign:'center',color:'red'}}>
      <Welcome name="Poojitha" greeting="Hello" />
      <Welcome/>
    </div>
    
  )
}

// const Welcome =()=> <h1 className='message'>Hello!</h1>
// function App(){
//   return (
//     <div className="App">
//       <Welcome />
//     </div>
//     );
// }


export default App;

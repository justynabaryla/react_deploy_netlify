import {BlueButton} from './Components/BlueButton.jsx';


function App() {
  return (
  // can't do <Button/>   <Button/> for 2 separate buttons ????!! but this way <> <elements/> </>
  // <button> Hello </button></> - it needs text to be inside to show 
      <><BlueButton name="Click me,I am button 1" header="I am 1st header" />
      <BlueButton name="I am button 2" header="I am 2nd header"/>
      <button> Hello </button></> 
     
      )

};
  
export default App;



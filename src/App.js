import  {Car}  from "./Car";
import {Garage} from "./Garage.js"
function App()
{

// in react we can only one have one root element
// we can either wrap all the elements in a <div> or fragment <></>

return(
<>
<Car color="red" />
<Garage></Garage>
</>

);

}
// default export
export default App;
import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import DataPicker from "./pages/data-picker";
import ChartsPage from "./pages/charts";

const App = () => {

  const [xDataArray, setXDataArray] = useState([]);
  const [yDataArray, setYDataArray] = useState([]);

  useEffect(() => {
    const sessionXArray = sessionStorage.getItem("xDataArray");
    const sessionYArray = sessionStorage.getItem("yDataArray");
    if (sessionXArray?.length > 0) {
      let storedArray = sessionXArray.split(',');
      for (let index in storedArray) {
        storedArray[index] = parseInt(storedArray[index])
      }
      setXDataArray(storedArray);
    }
    if (sessionYArray?.length > 0) {
      let storedArray = sessionYArray.split(',');
      for (let index in storedArray) {
        storedArray[index] = parseInt(storedArray[index])
      }
      setYDataArray(storedArray);
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem("xDataArray", [...xDataArray])
    sessionStorage.setItem("yDataArray", [...yDataArray])
  }, [xDataArray, yDataArray])

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <DataPicker 
            xDataArray={xDataArray}
            yDataArray={yDataArray}
            setXDataArray={setXDataArray}
            setYDataArray={setYDataArray}
          />
        </Route>
        <Route exact path="/charts">
          <ChartsPage 
            xDataArray={xDataArray}
            yDataArray={yDataArray}
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

// why we need to understand this -- because we know react renders alot and for that we need to know the memoisation, and this helps us in improving the application performence

import ExpensiveComponent from "./component/3.ExpensiveComponent";


// actually whenever a state change the whole component re-render, just not the main but it's child will also re-render
function App() {
  return (
    <>
    <ExpensiveComponent/>
    </>
  );
}

export default App;

import ApiRequests from "./components/5ApiRequests";



// follow component folder in serial order
function App() {
  return (
    <div>
      <ApiRequests />
    </div>
  );
}

export default App;

// react strict mode
// in strict mode component gets render twice -- that is only done is the development mode not in production mode
// so how it effect useEffect lifeCycle
// there are problem with useEffect (if we don't include cleanup function) that will be visible to us only during the second render, basically it aware us of the life cycle issue

// for testing run the one incremental function without clean up with a without strict mode 

// strict mode is really important to found out bugs,especially in use effect

import React from 'react'
// use React.memo to component
const ExpensiveComponent = React.memo(() => {
  return (
    <div>ExpensiveComponent</div>
  )
});

export default ExpensiveComponent
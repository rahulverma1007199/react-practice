import React from 'react'
import Parent from './Parent'
import Child from './Child'


const Page = () => {
  return (
    <div>
        <Parent>
            <Child/>
        </Parent>
    </div>
  )
}

export default Page
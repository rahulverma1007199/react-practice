import React from 'react'

const page = () => {
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        // how use different type of event and their html element just hover over the fuction --- for above hover onClick.
        e.preventDefault();
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    const handleDelete = (e:React.MouseEvent<HTMLButtonElement>, id:number) =>{
        // if you are not using any parameter then you don't have to pass this event when call this function.
        e.preventDefault();
    }
  return (
    <div>
        <form >
            <input type="text" placeholder='Search for anything ...' onChange={handleChange}/>
            <button onClick={handleClick}>Search</button>
        </form>
        <form className='post'>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, perferendis.</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio quidem eos, quisquam culpa ut ipsa asperiores! Cupiditate qui ducimus, nemo vel praesentium doloribus laudantium eius non, ea nesciunt saepe reprehenderit?</p>
            <button onClick={(e)=>handleDelete(e,1)}>Delete</button>
            
        </form>
    </div>
  )
}

export default page
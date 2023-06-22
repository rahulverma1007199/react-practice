// in next js we can fetch data both in client side and server side.

// On client side we can use traditional methods like useeffect, use a fecting library like React Query or SWR -- in this case our component will render first and then it will try to fetch the data

// On server side -- we change our components to async components and we will dirctly fetch the data on the server and if our data never changes we can use static fetching -- cache : 'force-cache' -- and cache the result on the server and if our data changes but not too often we can revalidate it at any desired second -- next:{revalidate:10} and if our data changes all the time and we want to fetch the fresh data on ever request we can use dynamic fetching -- cache : 'no-store'

// go to nest js offical website and head to data fetching -- there we will see that we have to make a getData function which will get the data, also this function should be async and it should be outside of our main const function

//  for testing api use jsonplaceholder website

// by default fetch function uses -- 'force-cache'

// to throw error as 404 not found -- use "return notFound()" and import it from next/navigateion -- (import {notFound} from 'next/navigation')

// HOW TO FETCH DATA FROM CLIENT SIDE

//  just use  "use client"  and do same as we do in react, using useffect and storting data in setState()

// but the author doesn't recommend using useEffect any more and encourages us to use "reactQuery" because those kind of library comes with error and isLoading variables and also we can able to mutate our data.

// and in our case instead of use effect we are going to use nextSWR hook, and make sure to npm i swr and see the demo in dashboard pages.

// HOW TO FETCH LOCAL DATA

//  So in portfolio we have category folder and there we created data.js file which we will use to getData for each catergory and this is local fetching and there to see how to fetch localdata.
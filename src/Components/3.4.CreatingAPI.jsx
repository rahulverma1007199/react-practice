// we will create api and use mongoDB in backend

// go to cloud.mongodb.com -- new project -- build a database -- create username and password  and select cloud environment -- for testing purpose add 0.0.0.0 (meaning any one can reach) but for production you should add your own ip address -- finish and close.

// npm i mongoose
// we store our data in .env file

// to connet -- go to the cluster and press -- connect -- drivers -- copy secret url
// in .env -- MONGO = <paste the url> -- you can add your db after mongodb.net/<addDB>?<blabla>

// inside utils folder -- db.js -- where we connect to mongo db

// to change version of any library (cause latest doesn't mean stable) -- go to package.json and change version there. -- but do make sure to do npm i 

// we create models folder in src -- where we define our tables and their respective columns. like user.js and post.js

// HOW TO CREATE OUR OWN API 
// For this we create an api folde in src and we write our end points like in folder structure and the file should should be route.js

// eg - to create post api -- src/api/posts/route.js

// we all route function should be async and the response should be send like -- return new NextResponse(<any message ("ya it works") or variable (posts)>,{status:200, message :"anything"}); and this NextReponse comes from next/server
// we import our db in each route.

// make sure to send data as stringify -- JSON.stringify(posts) ;

// NEST.JS SEO (Generating Meta Data)
// So till now if we go to any page the page title and desc is same and making it dynamic is important

// in main layout in metadata function -- copy that function and in each page or the page where you want to change -- paste this function and change the values. -- make sure to describe function as export const  metadata = ;

// go to next.js -- search generate metadata -- and above method is only for static and to see that go to contact page and for dynamic we use function name as generateMetadata to check it, go to blog id page.


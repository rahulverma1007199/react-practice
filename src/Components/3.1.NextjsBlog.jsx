// Why do we need Next.js

// Biggest framework of React that is used to build Server Rendered Application

// We can create all the page using single pages and it's really easy and group pages in next.js thus we are not dependent on react-router-dom library

// for fullstack application we can create our own APIs and in react we have to use a framework like express.js and create a different appliation

// with next js we can create server side and client side component together, so we can fetch data on server side and and improve the seo of application and client side component to intract with users

// Next js is great for optimisation as it uses code spliting to improve application initial load time and automatically optmise the images by compressing them.

// open next.js website and head to installation and run "npx create-next-app@latest ."

// here we no to TypeScript, yes to ESLint (help us to find potential errors), no tailwind, yes to src. yes to app router, yes to alias

// to run -- npm run dev

// .next stores cache data

// delete .svg files in public folder and we place our photos, icons in this folder

// So every page we create will locate in the app folder and this folder represent the homepage and to create different pages just create different folder within and to create subpages, create folder in parents, like a tree with different subtress, but this is static, what about dynamic names, just like -- [anything like id or slug]

// if you have multiple folder in single and want to group them, then use (like auth) in a folder to group, it's just for groiping and does not effect on routing

// create folder and name the file page.jsx, how ever change the method name.

// layout and components -- in layout we generally add common components and we can create different layout for different routes and we can create individual layout inside just add to that folder layout.jsx file.

// as for page we are bound to use page.jsx but for component we can name anything to file.

//for link we use <Link> tag and pass href in parameter

// we can add loading.jsx and error.jsx in each file to customised the layout, also layout.jsx too.

// NEXT RENDERING
// we have two type of rendering SSR and CSR, by default in next js we have SSR. and to change any page to render at client use at the very top "use client" and that page.jsx

// to create event we have to use CSR, so when we need user interation like for navbar or for login we use CSR

// NEXT STYLING
// we use global.css for common element, link anchor tag, and can use for layout.js.
// and for specific we create -- page.module.css and we use 'import styles from './page.module.css'
// and we use className={styles.<className>}

// IMAGES
// we use <Image /> tag , we always put our images in public folder and we always provide width and height property OR set 'fill={true}' as it also helps for lazy loading. but if you set fill to true as in that case we don't really need to define width and height because it comes from parent imgContainer div, then make sure to add position relative to the parent image div aka imgContainer

// there are two way to use images in src of Image tag, one is '/1.jpg' or image as component just like react

// importing images like component does not require fill or width and height property. but it is recommedn to use path directly than to import component,

// to add external image we have to add that domain in next.config.js


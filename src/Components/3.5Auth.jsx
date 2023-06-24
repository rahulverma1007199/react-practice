// How we can authenticate users -- for that we will us next auth library and newest version of that library is auth.js , for more search authjs.dev.

// npm i next-auth -- so we need an auth end point in our api -- api/auth folder

// So this library handles differnt ends points like -- api/auth/sigin or /signout or /session and many more so we don't need to make these ends point and this will be handles by the libray itself, but we do need to destructure -- api/auth/[...nextauth] but we can also craete specfic and independent routes likes register. for more see the strucutre itself.

// And we can provide multile provider , like github, google, custom provider and many more

// for using google provder we need clientId and clientSecret. and for that we need google cloud function -- cloud.google.com -- console -- api & services -- credentails -- create crdentials - oAuth clined Id -- application type web application -- name (any thing) -- url -- http://localhost:3000 --  redirect -- http://localhost:3000/api/auth/callback/google  -- create.  

// Also it is mandatory to create an secret key in env. its value can be anything i.e NEXTAUTH_SECRET and Another is NEXTAUTH_URL = "http://localhost:3000" -- make sure to change it for production 

// and then wrap the application with SessionProvider which comes from next-auth/react in layout.js

// but if we do that then we have to use client in layout.js but if we do that then our dynamic meta tags will not generate

// to prevent this -- we create an AuthProvider component  and use this session provider there and wrap the application with AuthProvider

// Run and see if the application is working noramlly

// To see this in aciton see Dashboard page.jsx

// the router we are using is from next not from react

// we import mutate from swr -- this allow us to revalidate our data and no need to relaod the page in dashbaord

// In short -- install library -- make an api -- then component -- wrap it with app -- Use login and register in Dashboard
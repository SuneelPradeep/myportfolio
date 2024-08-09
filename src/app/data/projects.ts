import {Project} from '../types/Sections'
export const projectList : Project[] = [
    { 
        id: 1,
        image  :"/projects/animeshop.png",
    name: "AnimeShop",
    summary: `An E-commerce Anime site using MongoDB, React.js, ExpressJS, and
            NodeJS (MERN) that shows the data of different products like their rating,
            price, and stock which can be filtered and sorted. Redux is used to handle the
            state of the products added to the cart and the necessary backend data using
            the API made by Node and Express stored in the MongoDB database.`,
    tags: ["reactjs","nodejs","expressjs","mongodb","html/css","javascript","styled_components"],
    link: {
         url : "https://animeshops.netlify.app/", 
        github : "https://github.com/SuneelPradeep/AnimeShop",
          }
    },
     { 
            id: 2,
            image  :"/projects/movieeflix.png",
        name: "Movieeflix",
        summary: `A site similar to Netflix where it shows the movie data from
RapidAPI using server-side rendering and using NextJS for frontend and
backend to connect to MongoDB to send and retrieve data`,
        tags: ["reactjs","nextjs","mongodb","html/css","javascript","tailwindcss"],
        link: {
             url : "https://movieeeflixx.netlify.app/",
            github : "https://github.com/SuneelPradeep/movieeflix",
              },
        },
        { 
            id: 3,
            image  :"/projects/deliveroo.png",
        name: "Deliveroo clone",
        summary: `This delivery app is a React Native Expo app that has a similar look to the
                Deliveroo app. The UI is made with Tailwindcss and Reduxjs Toolkit to handle
                the state of React and for the backend, Sanity CMS is used as it stores the data
                and queries with GROQ query language to connect and is deployed as API`,
        tags: ["reactnative","tailwindcss","groq_query","mongodb","html/css","javascript","Redux"],
        link: {
             url : "",
            github : "https://github.com/SuneelPradeep/Deliveroo_clone",
              },
        },
        { 
            id: 4,
            image  :"/projects/music.png",
        name: "MY songs music site",
        summary: `A site featuring five songs that I sang in five different languages.`,
        tags: ["javascript","reactjs","html/css"],
        link: { 
             url : "https://suneelmusic.netlify.app/",
            github : "",
              },
        },
        { 
            id: 5,
            image  :"/projects/handwritten.png",
        name: "Handwritten digit recognition",
        summary: `using Machine Learning tools we created an application that recognizes the
                    various digits on a handwritten text using tools like CNN, and MNIST dataset`,
        tags: ["python","ML","CNN","MNIST"],
        
        },
        { 
            id: 6,
            image  :"/projects/uber.png",
        name: "Uber clone",
        summary: `This uber app is a React Native app that has a similar look to the
                Uber app. The UI is made with Tailwindcss and Reduxjs Toolkit to handle
                the state of React and for the backend, Sanity CMS is used as it stores the data
                and queries with GROQ query language to connect and is deployed as API`,
        tags: ["reactnative","tailwindcss","groq_query","mongodb","html/css","javascript","Redux"],
        link: {
             url : "",
            github : "https://github.com/SuneelPradeep/Uber_clone",
              },
        },

]


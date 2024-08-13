import {Project, Certificate} from '../types/Sections'
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

export const certificationList : Certificate[] =[
   { id : 1,
      name : 'Top 5% Front End Engineer Certificate',
      issuer : 'Pro5.ai',
      date : "13th July 2024",
      link : "https://drive.google.com/file/d/1ywwbVnxdNl89AByEZv9lYC0J0CfD-RJu/view?usp=sharing"

   },
   { id : 2,
    name : 'Get in-depth understanding of Kafka and Zookeeper masterclass',
    issuer : 'Scaler',
    date : "July 2024",
    link : "https://moonshot.scaler.com/s/sl/9VSo1qDA4f"

 },
 { id : 3,
    name : 'Programming for Everybody',
    issuer : 'Coursera(University of Michigan)',
    date : "July-Oct 2018",
    link : "https://coursera.org/share/1917299d4823fdcd94fc50df211bbc50"

 },
 { id : 4,
    name : 'Using python to access web data',
    issuer : 'Coursera(University of Michigan)',
    date : "April 2019",
    link : "https://coursera.org/share/c1e250aaa86e094cea3f4e1b7d7d3f32"

 },
 { id : 5,
    name : 'Introduction to IOT',
    issuer : 'NPTEL',
    date : "July-Oct 2018",
    link : "https://drive.google.com/file/d/1eZhpiMbqVPlg3Jau7czD928c5to6MW7R/view?usp=sharing"

 },
 { id : 6,
    name : 'Usable Security',
    issuer : 'Coursera(University of Mariyland)',
    date : "May 2019",
    link : "https://coursera.org/share/6d2cc49c70c53135028edda2394c9674"

 },
 { id : 7,
    name : 'Programming, DS,Algo using Python',
    issuer : 'NPTEL',
    date : "Aug-Sep 2018",
    link : "https://drive.google.com/file/d/1edsn2nKEx7_gZp0vZ0CTb21Py8qbxHfs/view?usp=sharing"

 },
 { id : 8,
    name : 'Using databases with Python',
    issuer : 'Coursera(University of Michigan)',
    date : "May 2019",
    link : "https://coursera.org/share/2e883307018ed0a994c727606d20b52d"

 },
 { id : 9,
    name : 'Pyton data structures',
    issuer : 'Coursera(University of Michigan)',
    date : "4th Dec 2018",
    link : "https://coursera.org/share/d7752bb3ee96ba351f532240ba55bf66"

 },
 { id : 10,
    name : 'INQUIZATE',
    issuer : 'Delhi School of Management(DSM)',
    date : " 2017",
    link : "https://drive.google.com/file/d/1ejLAgIgO_fVrbbJUHCcxPuqeZ0KN9EaA/view?usp=sharing"

 },

]


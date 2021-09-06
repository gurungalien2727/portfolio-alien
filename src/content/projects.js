import preventCorona from "../images/pc.png";
import covidMap from "../images/ma.png";
//import virtualQueue from "../images/vq.png";
import platypus from "../images/pa.png";
import ecomm from "../images/ea.png";
//import chefItUp from "../images/ca.png";

// image can be any size. just make sure it is close to a 1:1 ratio - a square.

export default [
  {
    title: "Chef It Up",
    description:
      'Chef It Up is a cross platform recipe search based Mobile app that suggests the list of dishes to the user based on the ingredients user input; allows user to share post with image, ingredients and instructions to prepare certain dish and also get feedback from other users.',
    skills: [
      "C#",
      "ASP.NET",
      "Xamarin",
      "MSSQL",
      "Microsoft Azure",
    ],
    image: '',
    links: {
      github: "https://github.com/gurungalien2727/chefitup_app",
      preview: "https://vimeo.com/503667080",
    },
  },
  {
    title: "Prevent Corona",
    description:
      'Prevent Corona is a web application that allows patients with COVID-19 symptoms to register about their health status and view the number of people with COVID-19 symptoms in the area within the application This application also has an interactive Chabot to answer the users’ queries about the virus.',
    skills: [
      "React",
      "Node",
      "Express",
      "MongoDB",
      "DialogFlow API",
      "Google Maps API"
    ],
    image: preventCorona,
    links: {
      github: "https://github.com/gurungalien2727/vandyHack2020",
      preview: "https://devpost.com/software/prevent-corona",
    },
  },
  {
    title: "Virtual Queue",
    description:
      'Virtual Queue is an android application built to allocate the number to each customer upon entering the Geo-fence around the store and to help customer keep shop safely by keeping them in a virtual queue and eventually reduce the COVID-19 transmission.',
    skills: [
      "Java",
      "Android Studio",
      "FireBase",
      "Geofencing API",
    ],
    image: '',
    links: {
      github: "https://github.com/gurungalien2727/hackShipIt",
      preview: "https://devpost.com/software/shopsafe-fdc1xo",
    },
  },
  {
    title: "Covid-19 Map",
    description:
      'Covid-19 Map is a web application to show the impact of corona virus all over the world with the map and also shows the table that consists of the countries and their cases.',
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "JQuery"
      
    ],
    image: covidMap,
    links: {
      github: "https://github.com/gurungalien2727/COVID-19-MAP",
      preview: "https://www.youtube.com/watch?v=hfO7AzF5x30&ab_channel=AlienGurung",
    },
  },
  {
    title: "Ecommerce Website",
    description:
     'Built an e-commerce web application where users could buy and sell products and also perform live search for products; added a scripted bot for users to provide information about the products.',
    skills: ["HTML", "CSS", "Javascript", "JQuery", "Ajax", "PHP", "MYSQL"],
    image: ecomm,
    links: {
      github: "https://github.com/gurungalien2727/e-commApp",
      preview: "https://www.youtube.com/watch?v=Jda1mqEz8PM&ab_channel=AlienGurung",
    },
  },
  {
    title: "Platypus",
    description:
      "Platypus is an android app for Data Scientists thats helps in outsourcing the task of labeling to crowd-oriented environments. This android app helps in presenting training data in simple manner to help users identify, classify, or otherwise comment on images, text, objects, and other presented entities.",
    skills: [
      "Java",
      "Andriod Studio",
      "SQLite",
      "Cognitive Vision API",
    ],
    image: platypus,
    links: {
      github: "https://github.com/gurungalien2727/HackGSU2019",
      preview: "https://devpost.com/software/platypus",
    },
  },
  
];

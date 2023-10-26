import aboutMePhotoS from "../data/about-s.png";
import aboutMePhotoM from "../data/about-m.png";
import aboutMePhotoL from "../data/about-l.png";

import { PythonOriginal, JavascriptOriginal, CplusplusOriginal, TypescriptOriginal, PhpOriginal, Html5OriginalWordmark, Css3OriginalWordmark, ReactOriginal, JestPlain, FastapiOriginal, FirebasePlain, TailwindcssOriginal, BootstrapPlain, AntdesignOriginal, SassOriginal, MysqlOriginal, SqliteOriginal, MongodbOriginal, MongooseOriginal, GitOriginal, DockerOriginal, WebpackOriginal, NodejsOriginal, NextjsOriginal, VercelOriginal } from 'devicons-react';
import { BsTools } from 'react-icons/bs';

import screenshot_missing from "../data/sc-missing.jpg"
import screenshot_kaado from "../data/sc-kaado.jpg"
import screenshot_minimessageboard from "../data/sc-minimessageboard.jpg"
import screenshot_wheresdoggo from "../data/sc-wheresdoggo.jpg"
import screenshot_shoppingcart from "../data/sc-shoppingcart.jpg"
import screenshot_memorygame from "../data/sc-memorygame.jpg"
import screenshot_battleship from "../data/sc-battleship.jpg"
import screenshot_weatherapp from "../data/sc-weatherapp.jpg"
import screenshot_todolist from "../data/sc-todolist.jpg"
import screenshot_dashboard from "../data/sc-dashboard.jpg"
import screenshot_simplemercari from "../data/sc-simplemercari.jpg"
import screenshot_hackathonmercari from "../data/sc-hackathonmercari.jpg"
import screenshot_calculator from "../data/sc-calculator.jpg"
import screenshot_taskmanagement from "../data/sc-taskmanagement.jpg"

export let aboutMePhotoS_path = aboutMePhotoS;
export let aboutMePhotoM_path = aboutMePhotoM;
export let aboutMePhotoL_path = aboutMePhotoL;

export function getAboutMeTextArray() {

  let textArray = [`Hello! I'm Tsoi, a self-taught developer. I'm currently working as a freelance Japanese-English interpreter and wish to transition into a developer role. `];

  textArray.push(`With a strong interest in software development, I've completed a range of courses covering web development technologies, AI programming and algorithms, equipping myself with the knowledge I would've learnt in a CS major.`);

  textArray.push(`I am ready to contribute as a developer.`);

  return textArray;
}

export function getAboutMeUrls() {
  let urlObj = {
    "Linkedin": "https://www.linkedin.com/in/sungyan-t/",
    "Github": "https://github.com/tsoibet",
    "Leetcode": "https://leetcode.com/tsoibet/"
  }
  return urlObj;
}

export function getSkills() {

  return ([
    {
      "name": "Python",
      "icon": <PythonOriginal />
    }, 
    {
      "name": "Javascript",
      "icon": <JavascriptOriginal />
    }, 
    {
      "name": "Typescript",
      "icon": <TypescriptOriginal />
    },
    {
      "name": "C++",
      "icon": <CplusplusOriginal />
    },
    {
      "name": "PHP",
      "icon": <PhpOriginal />
    },
    {
      "name": "Next.js",
      "icon": <NextjsOriginal />
    }, 
    {
      "name": "Node.js",
      "icon": <NodejsOriginal />
    }, 
    {
      "name": "React",
      "icon": <ReactOriginal />
    }, {
      "name": "Jest",
      "icon": <JestPlain />
    },
    {
      "name": "HTML",
      "icon": <Html5OriginalWordmark />
    },
    {
      "name": "CSS",
      "icon": <Css3OriginalWordmark />
    },
    {
      "name": "TailwindCSS",
      "icon": <TailwindcssOriginal />
    },
    {
      "name": "MongoDB",
      "icon": <MongodbOriginal />
    },
    {
      "name": "MySQL",
      "icon": <MysqlOriginal />
    },
    {
      "name": "SQlite",
      "icon": <SqliteOriginal />
    },
    {
      "name": "Vercel",
      "icon": <VercelOriginal />
    },
    {
      "name": "Firebase",
      "icon": <FirebasePlain />
    },
    {
      "name": "Git",
      "icon": <GitOriginal />
    },
    {
      "name": "Docker",
      "icon": <DockerOriginal />
    },
    {
      "name": "Webpack",
      "icon": <WebpackOriginal />
    }
  ]);
}

export function getWorks() {
  let objArray = [
    {
      "name": "Kaado",
      "description": "A web-based card holder where users can keep their paper member cards. This project is built with the latest technology, Next.js 13. Data are stored in MongoDB Atlas. ",
      "skills": [<NextjsOriginal />, <ReactOriginal />, <TypescriptOriginal />, <MongodbOriginal />, <MongooseOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <TailwindcssOriginal />, <VercelOriginal />, ],
      "screenshotPath": screenshot_kaado,
      "repoUrl": "https://github.com/tsoibet/kaado",
      "demoUrl": "https://kaado.vercel.app/"
    },
    {
      "name": "Mini Message Board",
      "description": "A simple message board where users can leave short messages. Data are stored in MongoDB Atlas. This is a full stack project.",
      "skills": [<NextjsOriginal />, <NodejsOriginal />, <ReactOriginal />, <TypescriptOriginal />, <MongodbOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <VercelOriginal />, ],
      "screenshotPath": screenshot_minimessageboard,
      "repoUrl": "https://github.com/tsoibet/mini-message-board/",
      "demoUrl": "https://tsoibet-s-mini-message-board.vercel.app/"
    }, {
      "name": "Where's Doggo",
      "description": "A Where's Waldo game where player's score equals to the time the player takes to find all the targets on the picture. Players' scores are uploaded to database for being shown on the leaderboard.",
      "skills": [<ReactOriginal />, <JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <FirebasePlain />],
      "screenshotPath": screenshot_wheresdoggo,
      "repoUrl": "https://github.com/tsoibet/odin-wheres-waldo",
      "demoUrl": "https://odin-where-s-waldo-9fa41.web.app/"
    }, {
      "name": "Shopping Cart",
      "description": "A dummy online store for React Router practice purpose. Total amount is updated immediately once a new item is added to cart.",
      "skills": [<ReactOriginal />, <JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />],
      "screenshotPath": screenshot_shoppingcart,
      "repoUrl": "https://github.com/tsoibet/odin-shopping-cart",
      "demoUrl": "https://tsoibet.github.io/odin-shopping-cart/#/"
    }, {
      "name": "Memory Game",
      "description": "A card game where player wins when every single card is clicked once and only once. After clicking on a card, player score are updated and the cards are shuffled.",
      "skills": [<ReactOriginal />, <JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />],
      "screenshotPath": screenshot_memorygame,
      "repoUrl": "https://github.com/tsoibet/odin-memory-card",
      "demoUrl": "http://tsoibet.github.io/odin-memory-card/"
    }, {
      "name": "Battleship",
      "description": "A game where player competes with computer by attacking opponent's ships. The one who first sinks all the opponent's ships wins. Drag and Drop API is used to allow users dragging ship to designated position.",
      "skills": [<JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <WebpackOriginal />, <JestPlain />],
      "screenshotPath": screenshot_battleship,
      "repoUrl": "https://github.com/tsoibet/odin-battleship",
      "demoUrl": "https://tsoibet.github.io/odin-battleship/"
    }, {
      "name": "Weather App",
      "description": "A single page web app which allows user to check current weather and weather forecast of the designated city. Fetch API is used to retrieve weather information from openweathermap.org.",
      "skills": [<JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <WebpackOriginal />],
      "screenshotPath": screenshot_weatherapp,
      "repoUrl": "https://github.com/tsoibet/odin-weather-app",
      "demoUrl": "https://tsoibet.github.io/odin-weather-app/"
    }, {
      "name": "Todo List",
      "description": "A single page web app which allows user to create, edit and delete to-do items and projects. Web Storage API is used to store todos in user's browser.",
      "skills": [<JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <WebpackOriginal />],
      "screenshotPath": screenshot_todolist,
      "repoUrl": "https://github.com/tsoibet/odin-todo-list",
      "demoUrl": "https://tsoibet.github.io/odin-todo-list/"
    }, {
      "name": "Admin Dashboard",
      "description": "A dummy admin dashboard web page for CSS practice purpose.",
      "skills": [<Html5OriginalWordmark />, <Css3OriginalWordmark />],
      "screenshotPath": screenshot_dashboard,
      "repoUrl": "https://github.com/tsoibet/odin-admin-dashboard",
      "demoUrl": "https://tsoibet.github.io/odin-admin-dashboard/"
    }, {
      "name": "Simple Mercari",
      "description": "A single page web application which shows items from database and allows users to upload items into database.",
      "skills": [<PythonOriginal />, <FastapiOriginal />, <TypescriptOriginal />, <ReactOriginal />, <SqliteOriginal />],
      "screenshotPath": screenshot_simplemercari,
      "repoUrl": "https://github.com/tsoibet/mercari-build-training-2022",
      "demoUrl": ""
    }, {
      "name": "New Mercari for Hackathon",
      "description": "A new version of Simple Mercari with new lising features including video upload and image background change. This is a team project of four.",
      "skills": [<PythonOriginal />, <FastapiOriginal />, <TypescriptOriginal />, <ReactOriginal />, <SqliteOriginal />, <SassOriginal />, <AntdesignOriginal />],
      "screenshotPath": screenshot_hackathonmercari,
      "repoUrl": "https://github.com/tsoibet/mercari-build-hackathon-team14",
      "demoUrl": ""
    }, {
      "name": "Simple Calculator",
      "description": "A simple calculator which can perform four basic math operations - addition, subtraction, multiplication and division.",
      "skills": [<JavascriptOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />],
      "screenshotPath": screenshot_calculator,
      "repoUrl": "https://github.com/tsoibet/odin-calculator",
      "demoUrl": "https://tsoibet.github.io/odin-calculator/"
    }, {
      "name": "Retreive, Process and Visualize Data",
      "description": "A program which retreives data from internet, cleans and stores data into database, and displays organized data on a webpage.",
      "skills": [<PythonOriginal />, <SqliteOriginal />],
      "screenshotPath": screenshot_missing,
      "repoUrl": "https://github.com/tsoibet/Retreive-Process-and-Visualize-Data-with-Python",
      "demoUrl": ""
    }, {
      "name": "Task Management Site",
      "description": "A website which shows tasks and allows users to add, edit, delete and sort tasks.",
      "skills": [<PhpOriginal />, <MysqlOriginal />, <Html5OriginalWordmark />, <Css3OriginalWordmark />, <BootstrapPlain />],
      "screenshotPath": screenshot_taskmanagement,
      "repoUrl": "https://github.com/tsoibet/task-management-site",
      "demoUrl": ""
    }
  ];
  return objArray;
}

export function getContactTextArray() {
  let textArray = ["I'm actively seeking new opportunities in software development. If you're interested in discussing potential roles, please don't hesitate to contact me on Linkedin."];

  return textArray;
}

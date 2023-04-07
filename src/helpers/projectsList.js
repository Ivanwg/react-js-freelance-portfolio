import project1 from './../img/projects/01.jpg';
import project2 from './../img/projects/02.jpg';
import project3 from './../img/projects/03.jpg';
import project4 from './../img/projects/04.jpg';
import project5 from './../img/projects/05.jpg';
import project6 from './../img/projects/06.jpg';

import project1Big from './../img/projects/01-big.jpg';
import project2Big from './../img/projects/02-big.jpg';
import project3Big from './../img/projects/03-big.jpg';
import project4Big from './../img/projects/04-big.jpg';
import project5Big from './../img/projects/05-big.jpg';
import project6Big from './../img/projects/06-big.jpg';

import { getRandomString } from './../utils/getRandomString';



export const projectsArr = [
  {
    slug: 'gaming-streaming-portal',
    imgSrc: project1,
    imgBigSrc: project1Big,
    title: 'Gaming streaming portal',
    skills: 'React, Node.js, MongoDB',
    gitHub: 'https://github.com/',
  },
  {
    slug: 'video-service',
    imgSrc: project2,
    imgBigSrc: project2Big,
    title: 'Video service',
    skills: 'React, Node.js, MongoDB',
    gitHub: 'https://github.com/',
  },
  {
    slug: 'video-portal',
    imgSrc: project3,
    imgBigSrc: project3Big,
    title: 'Video portal',
    skills: 'React, Node.js, MongoDB',
    gitHub: 'https://github.com/',
  },
  {
    slug: 'dating-app',
    imgSrc: project4,
    imgBigSrc: project4Big,
    title: 'Dating app',
    skills: 'React, Node.js, MongoDB',
    gitHub: 'https://github.com/',
  },
  {
    slug: 'landing',
    imgSrc: project5,
    imgBigSrc: project5Big,
    title: 'Landing',
    skills: 'React, Node.js, MongoDB',
    gitHub: 'https://github.com/',
  },
  {
    slug: 'gaming-community',
    imgSrc: project6,
    imgBigSrc: project6Big,
    title: 'Gaming community',
    skills: 'React, Node.js, MongoDB',
    gitHub: 'https://github.com/',
  },
].map(obj => {
  return {...obj, id: getRandomString()}
});
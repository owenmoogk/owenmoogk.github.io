import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import splashes from './splashes.json';
import FeaturedIcon from '../projects/FeaturedIcon';
import { assetUrl } from '@global/global';

export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Homepage() {
  const defaultSplash = 'Mechatronics Engineering Student';
  const [splash, setSplash] = useState(defaultSplash);

  function changeSplash() {
    setSplash(
      splashes ? splashes[getRandomInt(0, splashes.length)] : defaultSplash
    );
  }

  return (
    <div id="homePage">
      <Helmet>
        <title>{'Owen Moogk'}</title>
      </Helmet>
      <div id="homepageTitle">
        <div id="text">
          <div className="larger">
            Hey, I'm
            <br />
            <span className="special">Owen Moogk</span>
          </div>
          <p className="subtitle" id="splash" onClick={() => changeSplash()}>
            {splash}
          </p>
        </div>
        <div className="photo" id="pfp">
          <img src={assetUrl + 'pfps/suit-edited-square.png'} alt="" />
        </div>
      </div>
      <div>
        <p>
          I'm currently a{' '}
          <a
            href="https://uwaterloo.ca/future-students/programs/mechatronics-engineering"
            target="_blank"
            rel="noreferrer"
          >
            Mechatronics Engineering
          </a>{' '}
          student at the{' '}
          <a target="_blank" rel="noreferrer" href="https://uwaterloo.ca/">
            University of Waterloo
          </a>
          , quite passionate about engineering and design. I made this website
          to work on my web development skills as well as showcase some work.
          Check out my <a href="projects">projects</a> page for details on
          personal endeavors with programming, mechanical design, web
          development, and 3D printing.
          <br />
          <br />
          I've recently completed a internship as a Software Developer at{' '}
          <a href="https://busplanner.com" target="_blank" rel="noreferrer">
            BusPlanner
          </a>
          , where I worked to develop a fullstack application for the BusPlanner
          Student Transportation Suite, allowing clients to easily plan and
          implement transportation solutions.
          <br />
          <br />
          This winter, I have accepted a internship in a Research and
          Development engineering role at the{' '}
          <a href="https://uleth.ca" target="_blank" rel="noreferrer">
            University of Lethbridge
          </a>{' '}
          <a
            href="https://www.linkedin.com/company/hub-for-neuroengineering-solutions"
            target="_blank"
            rel="noreferrer"
          >
            Neuroengineering Hub
          </a>
          , and am very excited to spend the winter in Alberta, working and
          learning more about hardware development and project development.
          <br />
          <br />
          In high school, I worked as a student on the FRC robotics team{' '}
          <a href="https://2702rebels.com" target="_blank" rel="noreferrer">
            2702 Rebels
          </a>
          , involved myself in the{' '}
          <a href="https://dukeofed.org" target="_blank" rel="noreferrer">
            Duke of Edinburgh's Award
          </a>
          , and attended the prestigious month-long{' '}
          <a href="https://shad.ca" target="_blank" rel="noreferrer">
            SHAD
          </a>{' '}
          program. For more info, check out my <a href="work">work</a> page.
        </p>
      </div>
      <div>
        <h1>Featured Projects</h1>
        <p>
          Some of the most interesting <a href="projects">projects</a> that I've
          worked on:
        </p>
        <div id="featuredContainer">
          <FeaturedIcon
            data={{
              title: '2702 Rebels 2020 Robot',
              name: '2702-2020',
              types: ['Mechanical', 'Solidworks'],
              link: 'projects/2702-2020',
            }}
          />
          <FeaturedIcon
            data={{
              title: 'Pathfinding Visualizer',
              name: 'pathfinding-visualizer',
              types: ['Python', 'React'],
              link: 'projects/pathfinding-visualizer',
            }}
          />
        </div>
      </div>
    </div>
  );
}

import { Anchor, Box, Text } from '@mantine/core';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

import splashes from './splashes.json';

function getRandomIntInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export default function Homepage() {
  const defaultSplash = 'Mechatronics Engineering Student';
  const [splash, setSplash] = useState(defaultSplash);
  const alreadyShownSet = useRef(new Set<number>());

  function changeSplash() {
    if (alreadyShownSet.current.size === splashes.length) {
      alreadyShownSet.current.clear();
    }

    let randomInt: number | null = null;
    while (randomInt === null || alreadyShownSet.current.has(randomInt)) {
      randomInt = getRandomIntInclusive(0, splashes.length - 1);
    }
    alreadyShownSet.current.add(randomInt);
    setSplash(splashes[randomInt]);
  }

  return (
    <Box maw="800px">
      <Helmet>
        <title>Owen Moogk</title>
      </Helmet>
      <Text fz={60} lh={1.3}>
        Owen Moogk
      </Text>
      <Text
        id="splash"
        className="subtitle"
        onClick={() => changeSplash()}
        ta="left"
        mb={30}
        style={{
          userSelect: 'none',
          transition: '0.3s',
          transformOrigin: 'left top',
        }}
      >
        {splash}
      </Text>
      <div>
        <Text>
          I'm currently a mechatronics engineering student at the{' '}
          <Anchor href="https://uwaterloo.ca/" target="_blank" rel="noreferrer">
            University of Waterloo
          </Anchor>
          , passionate about engineering. I love using programming and design
          skills to build awesome systems! Check out my{' '}
          <Link to="/projects">projects</Link> page for details on personal
          endeavors with software development, electrical engineering, and
          mechanical design.
          <br />
          <br />
          I've formerly been employed at{' '}
          <Anchor target="_blank" rel="noreferrer" href="https://virtu.com">
            Virtu Financial
          </Anchor>
          ,{' '}
          <Anchor
            target="_blank"
            rel="noreferrer"
            href="https://basepowercompany.com"
          >
            Base Power Company
          </Anchor>
          ,{' '}
          <Anchor target="_blank" rel="noreferrer" href="https://wrmth.com">
            Wrmth
          </Anchor>
          ,{' '}
          <Anchor target="_blank" rel="noreferrer" href="https://rfa.space">
            Rocket Factory Augsburg
          </Anchor>
          ,{' '}
          <Anchor
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/company/qampio/"
          >
            QAMP
          </Anchor>
          ,{' '}
          <Anchor
            target="_blank"
            rel="noreferrer"
            href="https://qccareerschool.com/"
          >
            QC Career School
          </Anchor>
          , the{' '}
          <Anchor
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/company/hub-for-neuroengineering-solutions"
          >
            ULethbridge Hub for Neuroengineering Solutions
          </Anchor>
          , and{' '}
          <Anchor
            target="_blank"
            rel="noreferrer"
            href="https://busplanner.com"
          >
            BusPlanner
          </Anchor>{' '}
          in engineering related roles. For more information about my work, see
          my <Link to="/work">work page</Link>.
        </Text>
      </div>
    </Box>
  );
}

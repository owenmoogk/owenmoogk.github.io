import {
  Anchor,
  Box,
  Container,
  Flex,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router';

import splashes from './splashes.json';
import FeaturedIcon from '../projects/FeaturedIcon';
import { assetUrl } from '@global/global';

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
    <Container maw="800px">
      <Helmet>
        <title>{'Owen Moogk'}</title>
      </Helmet>
      <Flex
        justify={'space-between'}
        align={'center'}
        mb={30}
        id="homepageTitle"
      >
        <div>
          <Text fz={40} fw={'bold'}>
            Hey, I'm
            <Text fz={60} fw={'bold'} className="special">
              Owen Moogk
            </Text>
          </Text>
          <Text
            id="splash"
            className="subtitle"
            onClick={() => changeSplash()}
            ta={'left'}
            style={{
              userSelect: 'none',
              transition: '0.3s',
              transformOrigin: 'left top',
            }}
          >
            {splash}
          </Text>
        </div>
        <Image
          id={'pfp'}
          h={175}
          w={175}
          bdrs={'50%'}
          src={assetUrl + 'pfps/suit-edited-square.png'}
          alt=""
        />
      </Flex>
      <div>
        <Text>
          I'm currently a mechatronics engineering student at the{' '}
          <Anchor href="https://uwaterloo.ca/" target="_blank" rel="noreferrer">
            University of Waterloo
          </Anchor>
          , quite passionate about engineering and design. I'm usually using
          Altium, Python, React, 3D printing, and SolidWorks to make cool stuff!
          Check out my <Link to="/projects">projects</Link> page for details on
          personal endeavors with programming, mechanical design, and web
          development.
          <br />
          <br />
          I've formerly been employed at{' '}
          <Anchor target="_blank" rel="noreferrer" href="https://rfa.space">
            Rocket Factory Augsburg
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
      <Box mt={30}>
        <Title order={1}>Featured Projects</Title>
        <Text>
          Some of the most interesting <Link to="/projects">projects</Link> that
          I've worked on:
        </Text>
        <Flex gap={20} mt={20} wrap={'wrap'}>
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
        </Flex>
      </Box>
    </Container>
  );
}

import { Accordion, Anchor, Box, Flex, List, Title } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router';

import data from './work.json';
import { getLogo } from './workLogos';
import WorkItem, { LOGO_GAP, LOGO_SIZE } from './WorkItem';
import type { ResumeSchema } from './workSchema';
import { extracurricularsLink, linkedIn, resumeLink } from '@global/global';

const workData = data as ResumeSchema;

function formatDate(dateString: string) {
  if (!dateString) {
    return 'Present';
  }
  const date = new Date(dateString);
  const month = date.toLocaleString('en-US', { month: 'short' });
  const year = date.getFullYear().toString();
  return `${month} ${year}`;
}

function getDateString(startDate: string, endDate?: string) {
  if (startDate && endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }
  return formatDate(startDate);
}

// Mantine has no props for these inner accordion parts
const accordionStyles = {
  item: { borderBottom: 'none' },
  control: { padding: '12px 0', background: 'transparent' },
  label: { padding: 0 },
  content: { padding: `0 0 12px ${String(LOGO_SIZE + LOGO_GAP)}px` },
};

export default function Workpage() {
  const chevron = (
    <FaChevronDown size={20} color="var(--mantine-color-dimmed)" />
  );
  return (
    <Flex direction="column" maw="800px">
      <Helmet>
        <title>Work - Owen Moogk</title>
      </Helmet>
      <p className="title">Work</p>
      <p className="subtitle">
        Connect with me on{' '}
        <Anchor href={linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </Anchor>
        , or have a look at my{' '}
        <Anchor href={resumeLink} target="_blank" rel="noreferrer">
          resume
        </Anchor>
        !
      </p>
      <Box pb={20} w="100%">
        <Box pt={12} mb={16}>
          <Title order={1} fz={24} fw={600} m={0} mb={8}>
            Experience
          </Title>
          <Accordion
            chevron={chevron}
            chevronSize={24}
            styles={accordionStyles}
          >
            {workData.work.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  divider={itemKey > 0}
                  title={item.position}
                  subtitle={item.name}
                  logo={getLogo(item.name, item.url)}
                  summary={item.summary}
                  dateString={getDateString(item.startDate, item.endDate)}
                />
              );
            })}
          </Accordion>
        </Box>
        <Box pt={12} mb={16}>
          <Title order={1} fz={24} fw={600} m={0} mb={8}>
            Awards
          </Title>
          <Accordion
            chevron={chevron}
            chevronSize={24}
            styles={accordionStyles}
          >
            {workData.awards.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  divider={itemKey > 0}
                  title={item.title}
                  subtitle={item.awarder}
                  logo={getLogo(item.awarder)}
                  dateString={formatDate(item.date)}
                  summary={item.summary}
                />
              );
            })}
          </Accordion>
        </Box>
        <Box pt={12} mb={16}>
          <Title order={1} fz={24} fw={600} m={0} mb={8}>
            Certificates
          </Title>
          <Accordion
            chevron={chevron}
            chevronSize={24}
            styles={accordionStyles}
          >
            {workData.certificates.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  divider={itemKey > 0}
                  title={item.name}
                  subtitle={item.issuer}
                  logo={getLogo(item.issuer)}
                  dateString={getDateString(item.startDate)}
                  summary={
                    <List mb={10}>
                      <List.Item>
                        <Anchor href={item.url}>Certification</Anchor>
                      </List.Item>
                    </List>
                  }
                />
              );
            })}
          </Accordion>
        </Box>
        <Box pt={12} mb={16}>
          <Title order={1} fz={24} fw={600} m={0} mb={8}>
            Education
          </Title>
          <Accordion chevron={null} styles={accordionStyles}>
            {workData.education.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  divider={itemKey > 0}
                  title={item.area === '' ? item.studyType : item.area}
                  subtitle={item.institution}
                  logo={getLogo(item.institution)}
                  dateString={getDateString(item.startDate, item.endDate)}
                />
              );
            })}
          </Accordion>
        </Box>
      </Box>
      <p className="subtitle">
        A condensed version of my working documents can be found{' '}
        <Link to="/assets">here</Link>.
      </p>
      <p className="subtitle">
        And for anyone really curious:{' '}
        <Anchor href={extracurricularsLink} target="_blank" rel="noreferrer">
          everything I've ever done
        </Anchor>
        .
      </p>
    </Flex>
  );
}

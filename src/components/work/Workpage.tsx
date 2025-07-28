import { Accordion, Anchor, Box, Flex, List } from '@mantine/core';
import { Helmet } from 'react-helmet-async';
import { FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router';

import data from './work.json';
import WorkItem from './WorkItem';
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

export default function Workpage() {
  const chevron = <FaChevronDown />;
  return (
    <Flex direction="column" align="center" id="workItems">
      <Helmet>
        <title>Work - Owen Moogk</title>
      </Helmet>
      <p className="title">Work</p>
      <p className="subtitle">
        Connect with me on{' '}
        <Anchor href={linkedIn} target="_blank" rel="noreferrer">
          LinkedIn
        </Anchor>
        <br />
        or have a look at my{' '}
        <Anchor href={resumeLink} target="_blank" rel="noreferrer">
          Resume
        </Anchor>
      </p>
      <Box pb={20}>
        <div>
          <h1>Work</h1>
          <Accordion chevron={chevron}>
            {workData.work.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  title={item.position}
                  subtitle={item.name}
                  summary={item.summary}
                  dateString={getDateString(item.startDate, item.endDate)}
                />
              );
            })}
          </Accordion>
        </div>
        <div>
          <h1>Awards</h1>
          <Accordion chevron={chevron}>
            {workData.awards.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  title={item.title}
                  subtitle={item.awarder}
                  dateString={formatDate(item.date)}
                  summary={item.summary}
                />
              );
            })}
          </Accordion>
        </div>
        <div>
          <h1>Certificates</h1>
          <Accordion chevron={chevron}>
            {workData.certificates.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  title={item.name}
                  subtitle={item.issuer}
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
        </div>
        <div>
          <h1>Volunteer</h1>
          <Accordion chevron={chevron}>
            {workData.volunteer.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  title={item.position}
                  subtitle={item.organization}
                  dateString={getDateString(item.startDate, item.endDate)}
                  summary={item.summary}
                />
              );
            })}
          </Accordion>
        </div>
        <div>
          <h1>Education</h1>
          <Accordion chevron={null}>
            {workData.education.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  title={item.area === '' ? item.studyType : item.area}
                  subtitle={item.institution}
                  dateString={getDateString(item.startDate, item.endDate)}
                />
              );
            })}
          </Accordion>
        </div>
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

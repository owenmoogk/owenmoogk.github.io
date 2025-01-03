import { Anchor, Container, Text } from '@mantine/core';
import { Helmet } from 'react-helmet-async';

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
  const year = date.getFullYear();
  return `${month} ${year}`;
}

function getDateString(startDate: string, endDate?: string) {
  if (startDate && endDate) {
    return `${formatDate(startDate)} - ${formatDate(endDate)}`;
  }
  return formatDate(startDate);
}

export default function Workpage() {
  return (
    <Container id="workPage">
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
      <div id="workItems">
        <div>
          <h1>Work</h1>
          <div className="workCategory">
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
          </div>
        </div>
        <div>
          <h1>Awards</h1>
          <div className="workCategory">
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
          </div>
        </div>
        <div>
          <h1>Certificates</h1>
          <div className="workCategory">
            {workData.certificates.map((item, itemKey) => {
              return (
                <WorkItem
                  key={itemKey}
                  title={item.name}
                  subtitle={item.issuer}
                  dateString={getDateString(item.startDate)}
                  summary={
                    <Text>
                      <Anchor href={item.url}>Certification</Anchor>
                    </Text>
                  }
                />
              );
            })}
          </div>
        </div>
        <div>
          <h1>Volunteer</h1>
          <div className="workCategory">
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
          </div>
        </div>
        <div>
          <h1>Education</h1>
          <div className="workCategory">
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
          </div>
        </div>
      </div>
      <p className="subtitle">
        A condensed version of my working documents can be found{' '}
        <Anchor href="/assets">here</Anchor>.
      </p>
      <p className="subtitle">
        And for anyone really curious:{' '}
        <Anchor href={extracurricularsLink} target="_blank" rel="noreferrer">
          everything I've ever done
        </Anchor>
        .
      </p>
    </Container>
  );
}

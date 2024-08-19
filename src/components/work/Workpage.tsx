import React, { useEffect, useState } from 'react';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router';
import type { UnknownDictionary } from '../../api/types';
import global from '../../global/global.json';
import links from '../../global/links.json';
import WorkItem from './WorkItem';

export default function Workpage() {

  const [ workData, setWorkData ] = useState<UnknownDictionary>({});
  const navigate = useNavigate();

  const categories = [
    'Work',
    'Awards',
    'Certificates',
    'Volunteer',
    'Education',
  ];

  useEffect(() => {
    fetch('/assets/work.json')
      .then(response => response.json() as unknown as UnknownDictionary)
      .then(json => setWorkData(json))
      .catch(() => console.log('error'));
  }, [ navigate ]);

  return (
    <div className="main" id="workPage">
      <Helmet>
        <title>Work - Owen Moogk</title>
      </Helmet>
      <p className="title">Work</p>
      <p className="subtitle">Connect with me on <a href={links.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a><br />or have a look at my <a href={global.resume} target="_blank" rel="noreferrer">Resume</a></p>
      <div id="workItems">
        {categories.map((category, key) => {
          const sectionData = workData[category.toLowerCase()];
          return(
            <div key={key}>
              <h1>{category}</h1>
              <div className="workCategory" key={key}>
                {Array.isArray(sectionData) ? sectionData.map((item, itemKey) => {
                  return(
                    <WorkItem key={itemKey} data={item} />
                  );
                }) : null}
              </div>
            </div>
          );
        })}
      </div>
      <p className="subtitle">A condensed version of my working documents can be found <a href="/assets">here</a>.</p>
      <p className="subtitle">And for anyone really curious: <a href={global.extracurriculars} target="_blank" rel="noreferrer">everything I've ever done</a>.</p>
    </div>
  );
}

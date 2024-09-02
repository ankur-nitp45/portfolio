import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdSchool } from 'react-icons/md';
import './Education.css';
const Education = () => {
  return (
    <>
      <div className="education" id="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education details
        </h2>
        <hr />
        <VerticalTimeline lineColor="#0b726da9">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  white' }}
            //   date="2021 - 2025"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.Tech</h3>
            <h5 className="vertical-timeline-element-subtitle">
              National Institute of Technology Patna, Bihar
            </h5>
            <span className="_date">2021 - 2025</span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  white' }}
            //   date="2020"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Intermediate</h3>
            <h5 className="vertical-timeline-element-subtitle">
              H.D Jain Collage Ara,Bihar
            </h5>
            <span className="_date">2020</span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  white' }}
            //   date="2018"
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">Matriculation</h3>
            <h5 className="vertical-timeline-element-subtitle">
              Utkramit M. S. Tarari Bhojpur, Bihar
            </h5>
            <span className="_date">2018</span>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Education;

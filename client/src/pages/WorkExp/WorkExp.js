import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FcPortraitMode } from 'react-icons/fc';
import './WorkExp.css';
const WorkExp = () => {
  return (
    <>
      <div className=" work" id="workexp">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Work Experience
        </h2>
        <hr />

        <VerticalTimeline lineColor="#1cc7bed5">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  white' }}
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<FcPortraitMode />}
          >
            <h3 className="vertical-timeline-element-title">Summer Trainee</h3>
            <h6 className="vertical-timeline-element-subtitle">
              South Bihar Power Distribution Company Limited , Ara
            </h6>
            <span className="_date">1 June 2023 - 6 july 2023</span>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'black' }}
            contentArrowStyle={{ borderRight: '10px solid  white' }}
            iconStyle={{ background: '#138781', color: '#fff' }}
            icon={<FcPortraitMode />}
          >
            <h3 className="vertical-timeline-element-title">Summer Intern</h3>
            <h6 className="vertical-timeline-element-subtitle">Apna Guide</h6>
            <span className="_date">15 June 2024 - 15 July 2024</span>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default WorkExp;

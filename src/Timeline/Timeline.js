import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Badge from 'react-bootstrap/Badge'
import './Timeline.css';
class Timeline extends React.Component {
    render() {
        return (
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date={<strong>JAN. 2022 - PRESENT</strong>}
                    contentStyle={{borderTop: '5px solid #0050A5'}}
                    icon={<img src={require("../images/rbc.jpeg")} className="vertical-timeline-element-icon bounce-in"/>}
                >
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Python
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Java
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Javascript
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        ElasticsearchDB
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Jenkins
                    </Badge>
                    <p></p>
                    <h5 className="vertical-timeline-element-title">Automation Analyst Developer Co-op @ <span className="rbc">RBC</span></h5>
                    <h6 className="vertical-timeline-element-subtitle">Toronto, ON</h6>
                    <p>
                    Core Banking, Retail Banking, Payment Technology and System Modernization
                    </p>
                    
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{borderTop: '5px solid #005ACF'}}
                    date={<strong>MAY. 2021 - DEC. 2021</strong>}
                    icon={<img src={require("../images/ericsson.jpeg")} className="vertical-timeline-element-icon bounce-in"/>}
                >
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Python
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        NodeJS
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        ExpressJS
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        ReactJS
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        ElasticsearchDB
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Jenkins
                    </Badge>
                    <p></p>
                    <h5 className="vertical-timeline-element-title">Software Developer Co-op @ <span className="ericsson">Ericsson</span></h5>
                    <h6 className="vertical-timeline-element-subtitle">Ottawa, ON</h6>
                    <p>
                    5G Features, Cloud Tools and Web-Based Reporting Tools Development 
                    </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    contentStyle={{borderTop: '5px solid #015F98'}}
                    className="vertical-timeline-element--work"
                    date={<strong>MAY. 2020 - SEP. 2020</strong>}
                    icon={<img src={require("../images/versaterm.jpeg")} className="vertical-timeline-element-icon bounce-in"/>}
                >
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        NodeJS
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        PostgreSQL
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        ReactJS
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Bootstrap
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        MS Word Javascript API
                    </Badge>
                    <p></p>
                    <h5 className="vertical-timeline-element-title">Software Developer Co-op @ <span className="versaterm">Versaterm</span></h5>
                    <h6 className="vertical-timeline-element-subtitle">Ottawa, ON</h6>
                    <p>Automation of Filing Police Documents, MS Teams Presence and Meeting Integration Tool</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    contentStyle={{borderTop: '5px solid #0D6B72'}}
                    className="vertical-timeline-element--work"
                    date={<strong>MAY. 2019 - AUG. 2019</strong>}
                    icon={<img src={require("../images/canada.jpeg")} className="vertical-timeline-element-icon bounce-in"/>}
                >
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        ASP.NET MVC
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        VueJS
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        SQL
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        C#
                    </Badge>
                    <p></p>
                    <h5 className="vertical-timeline-element-title">Full Stack Developer Co-op @ <span className="envCanada">Environment Canada</span></h5>
                    <h6 className="vertical-timeline-element-subtitle">Gatineau, QC</h6>
                    <p>Built Web-Based Framework for 50+ Government of Canada Departments and NPRI Query Tool </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{borderTop: '5px solid #E3353C'}}
                    date={<strong>JAN. 2019 - PRESENT</strong>}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<img src={require("../images/carleton1.png")} className="vertical-timeline-element-icon bounce-in"/>}      
                >
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Java
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Swift
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Python
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Android Development
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        IOS Development
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        COMP2601
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        COMP1601
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        COMP1406
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        COMP1001
                    </Badge>
                    <p></p>
                    <h5 className="vertical-timeline-element-title">Teaching Assistant @ <span className="carleton">Carleton University</span></h5>
                    <h6 className="vertical-timeline-element-subtitle">Ottawa, ON</h6>
                    <p>Managed Tutorials, Office Hours and Developed Assignments</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    contentStyle={{borderTop: '5px solid #E3353C'}}
                    className="vertical-timeline-element--education"
                    date={<strong>SEP. 2017 - PRESENT</strong>}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<img src={require("../images/carleton1.png")} className="vertical-timeline-element-icon bounce-in"/>}
                >
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Database Mangement
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Full Stack Web Development
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Mobile Development
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Operating Systems
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Machine Learning
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Security
                    </Badge>
                    <Badge pill bg="secondary" style={{marginRight: 5}}>
                        Object Oriented Programming
                    </Badge>
                    <p></p>
                    <h5 className="vertical-timeline-element-title">Carleton University</h5>
                    <h6 className="vertical-timeline-element-title">Bachelors of Computer Science</h6>
                    <h6 className="vertical-timeline-element-subtitle">Ottawa, ON</h6>
                    <p>
                    5<sup>th</sup> Year Undergraduate, CGPA 11.1/12 (A)<br></br>
                    2018, 2019, 2020, 2021 Dean’s Honor List
                    </p>
                </VerticalTimelineElement>
                
        </VerticalTimeline>
        )
    }
}

export default Timeline
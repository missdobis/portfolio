import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
    render() {
        return (
            <div style={{ background: 'whitesmoke' }}>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="./img/dobis.jpg"
                                alt="avatar"
                                style={{ height: "250px" }}
                            />
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Adaobi Ezenwa</h2>
                        <h4 style={{ color: '#141E30' }}>Programmer | Hardware Engineer</h4>
                        <hr style={{ borderTop: '3px solid', width: '50%' }} />
                        <p style={{ fontSize: '17px' }}>Software Developer, Hardware Engineer and, a partial Electrical 
                        Engineer. Currently working as a Hardware Engineer and Electrical 
                        Engineer at Hinckley Associates (HP Service Centre) and interning 
                        as a FrontEnd  Web Developer at Dev_Careers with both companies based
                        in Lagos, Nigeria.</p>
                        <hr style={{ borderTop: '3px solid', width: '50%' }} />
                        <h5>Address</h5>
                        <p style={{ fontSize: '16px' }}>No 6 Ayodele street, Abule-Oja, Yaba, Lagos State, Nigeria.</p>
                        <h5>Phone</h5>
                        <p style={{ fontSize: '16px' }}>+234 8104223355</p>
                        <h5>Email</h5>
                        <p style={{ fontSize: '16px' }}>missdobis@gmail.com</p>
                        <hr style={{ borderTop: '3px solid', width: '50%' }} />
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Education</h2>
                        <Education
                            startYear={1997}
                            endYear={2004}
                            schoolName="Globetty International Childhood Education Centre"
                            schoolDescription="Fisrt School Leaving Certificate"
                        />
                        <Education
                            startYear={2004}
                            endYear={2010}
                            schoolName="Harold Klemp Academy, Port Harcourt, Rivers State"
                            schoolDescription="Senior Secondary Certificate Examination"
                        />
                        <Education
                            startYear={2014}
                            endYear={2017}
                            schoolName="Les cours Sonou Universite, Cotonou, Republic of Benin"
                            schoolDescription="B.Sc Computer Science"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        
                        <h2>Experience</h2>
                        <Experience
                            startYear={2017}
                            endYear="Now"
                            companyName="Hinckley Associates (HP Service Centre)"
                            jobDescription="Hardware and Electrical Engineer"
                        />
                        <Experience
                            startYear={2020}
                            endYear="Now"
                            companyName="Dev_Careers"
                            jobDescription="FrontEnd Web Developer"
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Skills</h2>
                        <Skills
                            skills="HTML"
                            progress="100"
                        />
                        <Skills
                            skills="CSS"
                            progress="60"
                        />
                        <Skills
                            skills="Bootstrap"
                            progress="80"
                        />
                        <Skills
                            skills="Javascrpit"
                            progress="60"
                        />
                        <Skills
                            skills="Jquery"
                            progress="60"
                        />
                        <Skills
                            skills="React"
                            progress="50"
                        />
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;
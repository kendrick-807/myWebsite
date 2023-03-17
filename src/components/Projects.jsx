import React from "react";
import { Link } from "react-router-dom";
import styles from "./Project.module.css";
import { SocialIcon } from 'react-social-icons';

const Projects = () => {
    return (
        <div>
            <div className={styles.topBar}>
                <ul>
                    <li>
                        {/* Endpoint to route to Home component */}
                        <Link to="/" className={styles.link} >Home</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to Contact Us component */}
                        <Link to="/contactme" className={styles.link}>About Me</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to Contact Us component */}
                        <Link to="/skills" className={styles.link}>Skills</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to Contact Us component */}
                        <Link to="/projects" className={styles.current}>Projects</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.textContainer}>
                <div>
                    <h2>ABB Ventilation Control System</h2>
                    <h6 className={styles.test}>The project is combination of a Ventilation Fan System with Vaisala's  <br></br>
                    GMP252 Carbon Dioxide probe, HMP60 Temperature and Humidity sensor.<br></br>
                    Fan speed inside the duct can be controlled with Produal MIO 12V Actuator,<br></br>
                    while pressure difference between the inside and outside of the duct<br></br>
                    will be measured with Sensirion's SDP600 differential pressure sensor.</h6>

                    <br style={{ marginTop:-50 }}></br>
                    <SocialIcon url="https://github.com/phamduylong/abb-ventilation-controller " label="Vent Project" style={{height: 70, width: 70}} />
                </div>
                <div style={{marginTop: 50}}>
                    <h2>Voice Controller</h2>
                    <h6 className={styles.test}>This project is about digital audio, whereas an RTTTL string will be sent<br></br>
                        by the website using voice recognition to the Raspberry Pico through MQTT,<br></br>
                        or chosen from the LCD interface and the string will be parsed into playable<br></br>
                        audio and played through the piezo-buzzer. </h6>
                    <br style={{ marginBottom:20 }}></br>
                    <SocialIcon url="https://github.com/IoT-project-groups-1-2/g2-voice-controller" label="Voice Project" style={{ marginRight:30,height: 70, width: 70}}  />
                    <SocialIcon url="https://www.youtube.com/watch?v=tQpu81TbtpA" label="Voice Project Video" style={{height: 70, width: 70}} />
                </div>


            </div>

        </div>
    );
};

export default Projects;
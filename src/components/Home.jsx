import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';
import { SocialIcon } from 'react-social-icons';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';


const Home = () => {
    return (

        <div>
            {/*<div className={styles.img}></div>*/}
            {/*<div className={styles.imgbox}>*/}
            {/*    <img src={imageName} />*/}
            {/*</div>*/}
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
                        <Link to="/projects" className={styles.link}>Projects</Link>
                    </li>
                </ul>
            </div>

            <div className={styles.nameContainer} >
                <h1 className={styles.bigblue}>Hello! I am</h1>
                <h1 className={styles.bold}>Kendrick</h1>
                <h3>Third year Infromation Technology Student</h3>
            </div>



            <div className={styles.iconContainer}>

                <SocialIcon url="https://www.linkedin.com/in/kendrick-kwong-837838237/" style={{ height: 100, width: 100, margin: 30 }}   />
                <SocialIcon url="https://github.com/kendrick-807" style={{ height: 100, width: 100, margin: 30 }}  />
            </div>



        </div>
    );
};

export default Home;
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
            <br />
            <ul className={styles.list}>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/" className={styles.link} >Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/contactme" className={styles.link}>Contact Me</Link>
                </li>
            </ul>

            <h1 className={styles.bigblue}>Hi! I am Kendrick Kwong</h1>

            <div className={styles.iconContainer}>

                <SocialIcon url="https://www.linkedin.com/in/kendrick-kwong-837838237/" style={{ height: 100, width: 100, margin: 30 }}   />
                <SocialIcon url="https://github.com/kendrick-807" style={{ height: 100, width: 100, margin: 30 }}  />
            </div>



        </div>
    );
};

export default Home;
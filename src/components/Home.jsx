import React from "react";
import { Link } from "react-router-dom";
import styles from './Home.module.css';

const Home = () => {
    return (
        <div>
            <h1 className={styles.bigblue}>Home Page</h1>
            <br />
            <ul>
                <li>
                    {/* Endpoint to route to Home component */}
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    {/* Endpoint to route to Contact Us component */}
                    <Link to="/contactme">Contact Me</Link>
                </li>
            </ul>
        </div>
    );
};

export default Home;
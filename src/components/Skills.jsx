import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Skills.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import 'bootstrap/dist/css/bootstrap.min.css';



const Skills = () => {
    const [good, setGoodNow] = useState(0)
    const [okay, setOkayNow] = useState(0)
    const [elementry, setElementryNow] = useState(0)

    const updateGoodNowHandler = setInterval(() => {
        if (good >= 70 ){
            setGoodNow(70)
            clearInterval(updateGoodNowHandler)
        }
        setGoodNow(s => s+1)
    }, 50)

    const updateOkayNowHandler = setInterval(() => {
        if (okay >= 50 ){
            setOkayNow(50)
            clearInterval(updateOkayNowHandler)
        }
        setOkayNow(s => s+1)
    }, 50)

    const updateElementryNowHandler = setInterval(() => {
        if (okay >= 30 ){
            setElementryNow(30)
            clearInterval(updateElementryNowHandler)
        }
        setElementryNow(s => s+1)
    }, 50)

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
                        <Link to="/skills" className={styles.current}>Skills</Link>
                    </li>
                    <li>
                        {/* Endpoint to route to Contact Us component */}
                        <Link to="/projects" className={styles.link}>Projects</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.container}>
                <p>I'm familiar with</p>
                <div className={styles.animation}>
                    <div className={styles.first}>
                        <div>C++</div>
                    </div>
                    <div className={styles.second}>
                        <div>C</div>
                    </div>
                    <div className={styles.third}>
                        <div>NodeJS</div>
                    </div>
                    <div className={styles.fourth}>
                        <div>Robot Framework</div>
                    </div>
                    <div className={styles.fifth}>
                        <div>ReactJS</div>
                    </div>
                </div>
            </div>

            <div className={styles.barContainer}>
                <div className={styles.title}><span>C++</span></div>
                <ProgressBar variant={"warning"} className={styles.bars}  now={good} label={"Good"}/>
                <div className={styles.title}><span>C</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={okay} label={"Okay"} />
                <div className={styles.title}><span>NodeJS</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={good} label={"Good"} />
                <div className={styles.title}><span>Robot Framework</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={okay} label={"Okay"} />
                <div className={styles.title}><span>ReactJS</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={elementry} label={"Elementry"} />
            </div>
        </div>
    );
};




export default Skills;
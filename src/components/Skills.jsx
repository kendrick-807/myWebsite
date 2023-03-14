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
                {/*<h1>Flat & Responsive Percentage Bars</h1>*/}
            <div className={styles.barContainer}>
                <div className={styles.title}><span>C++</span></div>
                <ProgressBar variant={"warning"} className={styles.bars}  now={good} label={"Good"}/>
                <div className={styles.title}><span>C</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={okay} label={"Okay"} />
                <div className={styles.title}><span>NodeJS</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={good} label={"Good"} />
                <div className={styles.title}><span>Robot Framework</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={okay} label={"Okay"} />
                <div className={styles.title}><span>React JS</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={elementry} label={"Elementry"} />
            </div>
        </div>
    );
};

// function animate() {
//     let bars =document.getElementsByClassName("percentage-bar");
//     for(let i=0; i < bars.length; i++){
//             bars[i].find('.bar').animate({width: bars[i].getAttribute('data-percent')},6000);
//     }
// }


export default Skills;
import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './Skills.module.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
// import 'bootstrap/dist/css/bootstrap.min.css';



const Skills = () => {
    const [good, setGoodNow] = useState(0)
    const [okay, setOkayNow] = useState(0)

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

    return (
        <div>
            <h1>Skills Page</h1>
                {/*<h1>Flat & Responsive Percentage Bars</h1>*/}
            <div className={styles.barContainer}>
                <div className={styles.title}><span>Item 1</span></div>
                <ProgressBar variant={"warning"} className={styles.bars}  now={good} />
                <div className={styles.title}><span>Item 1</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={okay} />
                <div className={styles.title}><span>Item 1</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={60} />
                <div className={styles.title}><span>Item 1</span></div>
                <ProgressBar variant={"warning"} className={styles.bars} now={80} />
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
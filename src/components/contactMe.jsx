import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './contactMe.module.css';
import ProgressBar from "react-bootstrap/ProgressBar";



const ContactMe = () => {

    const [good, setGoodNow] = useState(0)
    const [excellent, setExcellentNow] = useState(0)


    const updateGoodNowHandler = setInterval(() => {
        if (good >= 60 ){
            setGoodNow(60)
            clearInterval(updateGoodNowHandler)
        }
        setGoodNow(s => s+1)
    }, 50)

    const updateExcellentNowHandler = setInterval(() => {
        if (excellent >= 100 ){
            setExcellentNow(100)
            clearInterval(updateExcellentNowHandler)
        }
        setExcellentNow(s => s+1)
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
                        <Link to="/contactme" className={styles.current}>About Me</Link>
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
            <div className={styles.imgContainer}>
                <img className={styles.image}></img>
            </div>
            <div className={styles.textContainer}>
                <h2 className={styles.aboutMe}>About Me</h2>
                <p>As a year 3 year IT student, I have good skills in the IT field including C++, C, NodeJs, Python and Robot Framework.
                    I am seeking employment with a company that can make use of my skills that I have learnt. Being a hard-working individual,
                    I am ideally suited to companies with graduate recruitment programmes. My hobbies are basketball and football, and I sometimes
                    play video games in spare time.</p>
            </div>

            <div className={styles.barContainer}>
                <h4 className={styles.header}>Language Proficiency</h4>
                <div className={styles.title}><span>Cantonese</span></div>
                <ProgressBar variant={"info"} className={styles.bars}  now={excellent} label={"Native or bilingual proficiency"}/>
                <div className={styles.title}><span>Mandarin</span></div>
                <ProgressBar variant={"info"} className={styles.bars} now={excellent} label={"Native or bilingual proficiency"} />
                <div className={styles.title}><span>English</span></div>
                <ProgressBar variant={"info"} className={styles.bars} now={good} label={"Professional working proficiency"} />
            </div>

        </div>
    );
};

export default ContactMe;
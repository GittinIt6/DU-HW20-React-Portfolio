const Work = () => {
    return (
        <ul  id="WorkFigures">
        <li id="PriWorkItem">
            <a href="https://nextgen-event-tracker.herokuapp.com/" className="WorkItemLink" target="_blank" rel="noreferrer">
            <img className="work-img" src="./assets/images/main-project.png" alt="moutain and clouds with map" />
            </a>
            <summary className="work-summary-top">Natural Events Map</summary>
            <summary className="work-summary-bottom"><a href="https://nextgen-event-tracker.herokuapp.com/" target="_blank" rel="noreferrer">
                GitHub Repo </a></summary>
        </li>
        <li className="SecWorkItem">
            <a href="https://gittinit6.github.io/DU-HW3-Password-Generator/" target="_blank" rel="noreferrer">
            <img className="work-img" src="./assets/images/project-2.png" alt="random characters of password" />
            </a>
            <summary className="work-summary-top">Password Generator</summary>
            <summary className="work-summary-bottom"><a href="https://github.com/GittinIt6/NextGen-event-tracker" target="_blank" rel="noreferrer">
                GitHub Repo </a></summary>
        </li>
        <li className="SecWorkItem">
            <a href="https://gittinit6.github.io/DU-HW4-Code-Quiz/" target="_blank" rel="noreferrer">
            <img className="work-img" src="./assets/images/project-3.png" alt="coding quiz snips" />
            </a>
            <summary className="work-summary-top">Coding Quiz</summary>
            <summary className="work-summary-bottom"><a href="https://github.com/GittinIt6/DU-HW4-Code-Quiz" target="_blank" rel="noreferrer">
                GitHub Repo </a></summary>
        </li>
        <li className="SecWorkItem">
            <a href="https://gittinit6.github.io/DU-HW5-Work-Day-Scheduler/" target="_blank" rel="noreferrer">
            <img className="work-img" src="./assets/images/project-4.png" alt="Calendar" />
            </a>
            <summary className="work-summary-top">Day Scheduler</summary>
            <summary className="work-summary-bottom"><a href="https://github.com/GittinIt6/DU-HW5-Work-Day-Scheduler" target="_blank" rel="noreferrer">
                GitHub Repo </a></summary>
        </li>
        <li className="SecWorkItem">
            <a href="https://gittinit6.github.io/DU-HW6-Weather-Dashboard/" target="_blank" rel="noreferrer">
            <img className="work-img" src="./assets/images/project-5.png" alt="sailboat in sunset with forecast" />
            </a>
            <summary className="work-summary-top">Weather Dashboard</summary>
            <summary className="work-summary-bottom"><a href="https://github.com/GittinIt6/DU-HW6-Weather-Dashboard" target="_blank" rel="noreferrer">
                GitHub Repo </a></summary>
        </li>
    </ul>
    );
}

export default Work;
import resume from '../../assets/files/MJ-resume.pdf'

const Resume = () => {
    return (
        <div>
            Resume
            <p>
            <a
             href={resume}
            >
                Download Resume (PDF)
            </a>
            </p>
            <p>Summary Of Qualifications:
                <ul>
                <li>Coding Experience (React, Nodejs, Javascript, HTML, CSS</li>
                <li>Coding Database (MySQL, GraphQL, MongoDB)</li>
                <li>Coding API (Creating and Using)</li>
                <li>IT Team Management</li>
                <li>IT Architecture Design and Review</li>
                <li>Networking (IP and Storage)</li>
                <li>IT Security</li>
                <li>Server Administration</li>
                <li>Data Center Infrastructure</li>
                <li>Virtual Infrastructure</li>
                <li>Backup / Disaster Recovery</li> 
                <li>High Availability Services</li>
                <li>Hardware Consolidation</li>
                <li>File, Database, and Web Server</li> 
                <li>Cloud Infrastructure</li>
                </ul>
            </p>
        </div>
    );
}

export default Resume;
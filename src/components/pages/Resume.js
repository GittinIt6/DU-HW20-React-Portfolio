import resume from '../../assets/files/MJ-resume.pdf'

// const styTitle = {
//     fontSize: 16,
//     margin: 10,
    
// };

const quals = [
{ id: 1, name: "Coding Experience (React, Nodejs, Javascript, HTML, CSS)" },
{ id: 2, name: "Coding Database (MySQL, GraphQL, MongoDB)" },
{ id: 3, name: "Coding API (Creating and Using)" },
{ id: 4, name: "IT Team Management" },
{ id: 5, name: "IT Architecture Design and Review" },
{ id: 6, name: "Networking (IP and Storage)" },
{ id: 7, name: "IT Security" },
{ id: 8, name: "Server Administration" },
{ id: 9, name: "Data Center Infrastructure" },
{ id: 10, name: "Virtual Infrastructure" },
{ id: 11, name: "Backup / Disaster Recovery" }, 
{ id: 12, name: "High Availability Services" },
{ id: 13, name: "Hardware Consolidation" },
{ id: 14, name: "File, Database, and Web Server" }, 
{ id: 15, name: "Cloud Infrastructure" }
]

const Resume = () => {
    return (
        <div className='Resume'>
            <div className="ResumeTitle">Resume</div>
            <p>
            <a
             href={resume}
            >
                Download Resume (PDF)
            </a>
            </p>
            <p>Summary Of Qualifications:</p>
                <ul>
                {quals.map((qual) =>
                    <li key={qual.id}>{`${qual.name}`}</li>
                )}
                </ul>
            
        </div>
    );
}

export default Resume;
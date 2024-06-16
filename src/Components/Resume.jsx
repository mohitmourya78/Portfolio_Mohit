import React, {useState} from 'react'
import './Resume.css'

const Resume = () => {
    const onButtonClick = () => {
        const pdfUrl = "resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "./public/files/resume.pdf"; // specify the filename
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    return (
        <>
            <center>
                <button disabled className='trans' onClick={onButtonClick} style={{ color: 'white' }} >
                    Download CV
                </button>
              
            </center>
        </>
    );
};

export default Resume

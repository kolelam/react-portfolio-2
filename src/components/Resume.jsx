import React from 'react';
import resumePDF from './assets/Kole Lam Resume.pdf';

export default function Resume() {
    return (
        <div className='py-16'>
            <section className='main-container resume-container bg-white shadow-md rounded-lg p-6'>
                <p className='mb-4'>
                    <strong className='text-xl block mb-2'>Front-end Proficiencies</strong>
                    <ul className='list-disc pl-6'>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>HTML/ CSS</li>
                        <li>jQuery</li>
                        <li>Typescript</li>
                        <li>Tailwind</li>
                    </ul>
                </p>

                <p className='mb-4'>
                    <strong className='text-xl block mb-2'>Back-end Proficiencies</strong>
                    <ul className='list-disc pl-6'>
                        <li>MySQL</li>
                        <li>Express JS</li>
                        <li>MongoDB</li>
                        <li>Node JS</li>
                        <li>Next JS</li>
                    </ul>
                </p>
                <div>
                    <a href={resumePDF} target='_blank' rel='noopener noreferrer' className='download-link text-blue-500 hover:underline'>
                        Download my resume!
                    </a>
                </div>
            </section>
        </div>
    );
}

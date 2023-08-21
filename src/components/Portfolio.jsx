import React from 'react';

import githublogo from './assets/github.png'; 
import tyrsvault from './assets/tyrsvaultlandingpage.png';   
import crusader from './assets/crusaderslogo.png';


const galleryData = [
    {
        title: 'Writers Corner | CSS, JavaScript',
        deployedLink: 'https://brockhanni.github.io/Writers-Corner/',
        gitHubLink: 'https://github.com/BrockHanni/Writers-Corner',
        image: githublogo
    },
    {
        title: 'Tyrs Vault | Handlebars, Express JS, MySQL, Sequelize',
        deployedLink: 'https://tyrs-vault.herokuapp.com/login',
        gitHubLink: 'https://github.com/sadums/tyrs-vault',
        image: tyrsvault
    },
    {
        title: 'Crusaders',
        deployedLink: 'https://crusaders-media-e9469ade02da.herokuapp.com/',
        gitHubLink: 'https://github.com/sadums/crusaders',
        image: crusader
    },
    {
        title: 'Coming soon!',
        deployedLink: '',
        gitHubLink: '',
    }
];

export default function Portfolio() {
    return (
        <div className='portfolio-gallery flex flex-wrap justify-center'>
            {galleryData.map((app, index) => (
                <div className='gallery-item main-container bg-white shadow-md rounded-lg p-4 m-4' key={index}>
                    <h3 className='gallery-titles text-lg font-semibold'>{app.title}</h3>
                    <div className='gallery-links mt-2'>
                        {app.deployedLink && (
                            <a href={app.deployedLink} target='_blank' rel='noopener noreferrer' className='mr-4 text-blue-500 hover:underline'>
                                Deployed app
                            </a>
                        )}
                        {app.gitHubLink && (
                            <a href={app.gitHubLink} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
                                GitHub repo
                            </a>
                        )}
                    </div>
                    <img src={app.image}
                        alt={app.title}
                        className={index === 0 ? 'horiseon-image mt-4' : 'gallery-images mt-4'}
                    />
                </div>
            ))}
        </div>
    );
}

import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaHome, FaUser, FaUserGraduate, FaAddressBook, FaFileCode, FaUserAlt, FaFolderOpen } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        icon: <FaHome />

    },
    {
        id: 2,
        url: '/About',
        text: 'about',
        icon: <FaUserAlt />
    },
    {
        id: 3,
        url: '/Portfolio',
        text: 'Portfolio',
        icon: <FaFolderOpen />
    },
    {
        id: 4,
        url: '/Contact',
        text: 'contact',
        icon: <FaAddressBook />
    },
    {
        id: 5,
        url: '/Resume',
        text: 'resume',
        icon: <FaUserGraduate />
    },
];

export const social = [
    {
        id: 1,
        url: 'https://github.com/Saipurciful',
        icon: <FaGithub />,
    },
    {
        id: 2,
        url: 'mailto:saipurciful@gmail.com',
        icon: <FaEnvelope />,
    },
    {
        id: 3,
        url: 'https://www.linkedin.com/in/suthunya-purciful-59956a18b',
        icon: <FaLinkedin />,
    },
    {
        id: 4,
        url: 'tel:7022036562',
        icon: <FaPhone />,
    },
];


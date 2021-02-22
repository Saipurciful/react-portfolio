import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaHome, FaAddressBook, FaUserAlt, FaFolderOpen, FaFilePdf } from 'react-icons/fa';

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home',
        icon: <FaHome />

    },
    {
        id: 2,
        url: 'about',
        text: 'About',
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
        url: '/contact',
        text: 'Contact',
        icon: <FaAddressBook />
    },
    {
        id: 5,
        url: '/resume',
        text: 'Resume',
        icon: <FaFilePdf />
    },
];



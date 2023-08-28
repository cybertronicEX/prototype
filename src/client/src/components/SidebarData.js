import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData =[
    {
        title: 'Home',
        path: '/home',
        icon: <AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'order',
        path: '/order',
        icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
    }, {
        title: 'Nopage',
        path: '/nopage',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },

    {   title: 'Cart',
        path: '/cart',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    },
    {   title: 'Login',
        path: '/',
        icon: <FaIcons.FaCartPlus />,
        cName: 'nav-text'
    }
    

]
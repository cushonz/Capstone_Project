import React from 'react'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },

    {
        title: "Schedule",
        icon: <CalendarTodayIcon />,
        link: "/schedule"
    },

    {
        title: "Employees",
        icon: <PersonIcon />,
        link: "/employees"
    },

    {
        title: "Fresh Produce",
        icon: <FastfoodIcon />,
        link: "/fresh-produce"
    },

    {
        title: "Settings",
        icon: <SettingsIcon />,
        link: "/settings"
    },



]
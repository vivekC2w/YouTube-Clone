import React from "react";
import { FaHome, FaYoutube, FaMusic, FaGamepad, FaFilm, FaTrophy, FaNewspaper, FaFutbol, FaGraduationCap, FaPalette, FaCog, FaHistory, FaQuestion, FaComment } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    if(isMenuOpen) return null;
    return (
        <div className="p-5 shadow-lg w-48">
            <ul>
                <li className="flex items-center">
                    <FaHome className="mr-2" />
                    <Link to="/">Home</Link>
                </li>
                <li className="flex items-center">
                    <FaYoutube className="mr-2" />
                    Shorts
                </li>
                <li className="flex items-center">
                    <FaMusic className="mr-2" />
                    Subscriptions
                </li>
                <li className="flex items-center">
                    <FaYoutube className="mr-2" />
                    YouTube Music
                </li>
            </ul>
            <h1 className="font-bold pt-5">Subscriptions</h1>
            <ul>
                <li className="flex items-center">
                    <FaMusic className="mr-2" />
                    Music
                </li>
                <li className="flex items-center">
                    <FaFutbol className="mr-2" />
                    Sports
                </li>
                <li className="flex items-center">
                    <FaGamepad className="mr-2" />
                    Gaming
                </li>
                <li className="flex items-center">
                    <FaFilm className="mr-2" />
                    Movies
                </li>
            </ul>
            <h1 className="font-bold pt-5">Explore</h1>
            <ul>
                <li className="flex items-center">
                    <FaTrophy className="mr-2" />
                    Trending
                </li>
                <li className="flex items-center">
                    <FaMusic className="mr-2" />
                    Music
                </li>
                <li className="flex items-center">
                    <FaFilm className="mr-2" />
                    Movies
                </li>
                <li className="flex items-center">
                    <FaNewspaper className="mr-2" />
                    Live
                </li>
                <li className="flex items-center">
                    <FaGamepad className="mr-2" />
                    Gaming
                </li>
                <li className="flex items-center">
                    <FaNewspaper className="mr-2" />
                    News
                </li>
                <li className="flex items-center">
                    <FaFutbol className="mr-2" />
                    Sports
                </li>
                <li className="flex items-center">
                    <FaGraduationCap className="mr-2" />
                    Learning
                </li>
                <li className="flex items-center">
                    <FaPalette className="mr-2" />
                    Fashion & Beauty
                </li>
            </ul>
            <ul className="pt-5">
                <li className="flex items-center">
                    <FaCog className="mr-2" />
                    Settings
                </li>
                <li className="flex items-center">
                    <FaHistory className="mr-2" />
                    Report history
                </li>
                <li className="flex items-center">
                    <FaQuestion className="mr-2" />
                    Help
                </li>
                <li className="flex items-center">
                    <FaComment className="mr-2" />
                    Send feedback
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;

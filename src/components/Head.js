import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Head = () => {
    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className="grid grid-flow-col p-2 m-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={() => toggleMenuHandler()} 
                className="h-9 cursor-pointer" alt="menu" src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"/>
                <a href="">
                <img className="h-9 mx-1" alt="youtube-logo" src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg" />
                </a>
            </div>
            
            <div className="col-span-10 px-10">
                <input className="w-1/2 border border-gray-400 p-1 rounded-l-full" type="text" />
                <button className="border border-gray-400 p-1 rounded-r-full px-2 bg-gray-100">🔍
                </button>
            </div>
            
            <div className="col-span-1">
                <img className="h-9" alt="user-icon" src="https://www.nicepng.com/png/full/128-1280406_user-icon-png.png"/>
            </div>
        </div>
    )
}

export default Head;
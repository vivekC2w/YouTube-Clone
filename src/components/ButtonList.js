import React from "react";
import Button from "./Button";

const buttonNames = ["All", "Live", "Mixes", "Gaming", "Songs", "Cricket", "Soccer", "Cooking", "News", "Valentines", "JavaScript", "Indian pop music", "Dramedy"];

const ButtonList = () => {
    return (
        <div className="overflow-y-auto max-h-40"> 
            <div className="flex flex-nowrap">
                {buttonNames.map((name, index) => (
                    <Button key={index} name={name} />
                ))}
            </div>
        </div>
    );
}

export default ButtonList;

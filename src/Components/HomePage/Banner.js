import React from "react";
import bgPic from "./help.webp";

const Banner = () => {
    return (
        <div
            style={{ backgroundImage: `url(${bgPic})` }}
            className=" bg-fixed bg-no-repeat bg-cover h-screen py-10 flex justify-center items-center"
        >
            <div>
                <h1 className="text-9xl text-primary font-bold pt-5">Save The Life</h1>
                <h2 className="text-5xl text-white font-bold pt-5">
                    Help people for their needs all over the Bangladesh
                </h2>
                <button
                    className={"rounded-lg text-white bg-primary ml-3 p-3 text-xl font-bold mt-5"}
                >
                    Ask For Help
                </button>
            </div>
        </div>
    );
};

export default Banner;

import { Carousel } from "flowbite-react";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import { Carousel } from "react-responsive-carousel";

const WelcomeCarousel = () => {
    return (
        <div>
            <div className="my-10 flex justify-center items-center container mx-auto">
                <div className="container mx-auto">
                    <h1 className="md:text-3xl text-2xl font-bold my-5">
                        Welcome to{" "}
                        <span className="bg-black px-1 rounded-lg">
                            <span className="text-primary">Great</span>{" "}
                            <span className="text-white">Assists</span>
                        </span>
                    </h1>
                    <hr className="w-1/12 mx-auto border-2 border-primary" />
                    <div className="md:w-2/3 mx-auto">
                        <p className="my-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
                            placeat dolores quas esse, saepe reprehenderit aliquam ad ipsam
                            perferendis explicabo quae voluptate rerum. Vel quidem sequi dolorum
                            earum, totam obcaecati?
                        </p>
                    </div>
                </div>
            </div>
            <div className=" mx-auto">
                <div className="h-56 sm:h-64 md:h-screen 2xl:h-full md:w-2/3 mx-auto">
                    <Carousel>
                        <img
                            src="https://www.successconsciousness.com/blog/wp-content/uploads/helping-others.jpg"
                            alt="..."
                        />
                        <img
                            src="https://ofhsoupkitchen.org/wp-content/uploads/2021/11/100-ways-to-help-others-1.jpg"
                            alt="..."
                        />
                        <img
                            src="https://www.psychnewsdaily.com/wp-content/uploads/2021/05/helping-others-girl-helping-boy-stand-up.jpg"
                            alt="..."
                        />
                        <img
                            src="https://www.theguesthouseocala.com/wp-content/uploads/2018/12/0065.jpg"
                            alt="..."
                        />
                        <img
                            src="https://ggsc.s3.amazonaws.com/images/uploads/How_Generosity_Can_Make_You_Happier_in_a_Pandemic.jpg"
                            alt="..."
                        />
                    </Carousel>
                </div>
            </div>
            <div className=" bg-red-600">
                <div className="flex md:flex-row flex-col gap-5 justify-around items-center my-10 py-10 container mx-auto">
                    <div>
                        <h1 className="text-white text-3xl font-bold font-rs">
                            24/7 available. call us or message immediately <br />
                            +8801234567890
                        </h1>
                    </div>
                    <div>
                        <button
                            to="/sing-in"
                            className={
                                "rounded-lg text-primary bg-white ml-3 py-3 px-6 text-xl font-bold"
                            }
                        >
                            Contact us Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WelcomeCarousel;

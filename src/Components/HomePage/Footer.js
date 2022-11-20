import React from "react";
import { Link } from "react-router-dom";
import assist from "./assist.png";

const Footer = () => {
    return (
        <footer class="bg-black text-white h-fit">
            <div class="max-w-screen-xl px-4 py-10 mx-auto sm:px-6 lg:px-8 h-fit">
                <div class="flex flex-col md:flex-row gap-5 md:gap-0 h-62">
                    <div>
                        <div className="flex flex-row md:justify-center justify-center items-center">
                            <img src={assist} className="mr-3 h-20 sm:h-20" alt="Site Logo" />
                            <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
                                <span className="text-primary">Great</span>
                                <span>Assists</span>
                            </span>
                        </div>
                        <p class="max-w-xs mt-4 text-md text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
                            accusantium.
                        </p>
                        <div class="flex justify-center mt-8 space-x-6 text-gray-600">
                            <a
                                class="hover:opacity-75 mx-4"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Facebook </span>
                                <i class="fa-brands fa-facebook text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-75 mx-4"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> LinkedIn </span>
                                <i class="fa-brands fa-linkedin text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-75 mx-4"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Github </span>
                                <i class="fa-brands fa-github text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-75 mx-4"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Twitter </span>
                                <i class="fa-brands fa-twitter text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-75 mx-4"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Instagram </span>
                                <i class="fa-brands fa-instagram text-3xl mx-1"></i>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-8 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <p class="font-medium">Important Link</p>
                            <div class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <Link to="about" class="hover:opacity-75">
                                    {" "}
                                    About{" "}
                                </Link>
                                <Link to="about" class="hover:opacity-75">
                                    {" "}
                                    Contact{" "}
                                </Link>
                                <Link to="about" class="hover:opacity-75">
                                    {" "}
                                    Gallery{" "}
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p class="font-medium">Services</p>
                            <nav class="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
                                <a class="hover:opacity-75" href>
                                    {" "}
                                    1on1 Coaching{" "}
                                </a>
                                <a class="hover:opacity-75" href>
                                    {" "}
                                    Company Review{" "}
                                </a>
                                <a class="hover:opacity-75" href>
                                    {" "}
                                    Accounts Review{" "}
                                </a>
                                <a class="hover:opacity-75" href>
                                    {" "}
                                    HR Consulting{" "}
                                </a>
                                <a class="hover:opacity-75" href>
                                    {" "}
                                    SEO Optimisation{" "}
                                </a>
                            </nav>
                        </div>
                        <div>
                            <p class="font-medium">Gallery</p>

                            <div class="flex w-full flex-wrap content-start justify-center p-5">
                                <div class="grid grid-cols-3 gap-3">
                                    <img
                                        class="h-20 w-20 "
                                        src="https://i.imgur.com/5yeBVeM.jpeg"
                                        alt="gallery-pic"
                                    />
                                    <img
                                        class="h-20 w-20 "
                                        src="https://i.imgur.com/5yeBVeM.jpeg"
                                        alt="gallery-pic"
                                    />
                                    <img
                                        class="h-20 w-20 "
                                        src="https://i.imgur.com/5yeBVeM.jpeg"
                                        alt="gallery-pic"
                                    />
                                    <img
                                        class="h-20 w-20 "
                                        src="https://i.imgur.com/5yeBVeM.jpeg"
                                        alt="gallery-pic"
                                    />
                                    <img
                                        class="h-20 w-20 "
                                        src="https://i.imgur.com/5yeBVeM.jpeg"
                                        alt="gallery-pic"
                                    />
                                    <img
                                        class="h-20 w-20 "
                                        src="https://i.imgur.com/5yeBVeM.jpeg"
                                        alt="gallery-pic"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p class="mt-8 text-xl font-bold text-cyan-500">
                    © 2022 All rights reserved by{" "}
                    <span className="self-center whitespace-nowrap text-3xl font-semibold font-rs">
                        <span className="text-primary">Great</span>
                        <span className="text-white">Assists</span>
                    </span>
                </p>
            </div>
        </footer>
    );
};

export default Footer;

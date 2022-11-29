import React, { useRef, useState } from "react";
import CountUp from "react-countup";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
// import ConfettiExplosion from "react-confetti-explosion";
import Confetti from 'react-confetti'
import help from './help-them.png'

const NeedHelp = () => {
    const form = useRef();
    const [isExploding, setIsExploding] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        console.log(form);

        emailjs
            .sendForm(
                "service_xahqw4n",
                "template_elkp9tb",
                form.current,
                "user_1WP45SDevcirhN4i48N1M"
            )
            .then(
                (result) => {
                    Swal.fire({
                        title: "Success!",
                        text: "Your mail sent successfully",
                        icon: "success",
                        confirmButtonText: "Ok",
                    });
                    e.target.reset();
                    setIsExploding(true);
                },
                (error) => {
                    Swal.fire({
                        title: "Error!",
                        text: `${error.message}`,
                        icon: "error",
                        confirmButtonText: "Ok",
                    });
                }
            );
    };

    return (
        <>
            {isExploding && <Confetti width={window.innerWidth} height={3000} recycle={false} numberOfPieces={1000} />}
            <div className="bg-slate-white py-14">
                <div className="flex md:flex-row flex-col justify-around items-center">
                    <div className="">
                        <img
                            src={help}
                            alt=""
                            width={'350px'}
                        />
                    </div>

                    <div>
                        <div className="">
                            <h1 className="text-6xl font-bold ">
                                <span className="text-primary">Help</span> Them With Us
                            </h1>
                        </div>
                        <div class="flex items-center justify-center">
                            <div class="mx-auto w-full max-w-[550px] px-3">
                                <form class="mt-6" ref={form} onSubmit={sendEmail}>
                                    <div class="flex-1">
                                        <input
                                            name="user_name"
                                            type="text"
                                            placeholder="John Doe"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>

                                    <div class="flex-1 mt-6">
                                        <input
                                            name="user_email"
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <input
                                            name="subject"
                                            type="text"
                                            placeholder="subject"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>
                                    <div class="flex-1 mt-6">
                                        <input
                                            name="image"
                                            type="file"
                                            placeholder="image"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>

                                    <div class="w-full mt-6">
                                        <textarea
                                            name="message"
                                            class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-24 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50"
                                    >
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-red-600">
                    <div className="flex md:flex-row flex-col gap-10 justify-around items-center my-10 p-10 container mx-auto">
                        <div className="text-white font-bold">
                            <h1 className="text-5xl">
                                <i class="fa-solid fa-heart"></i>
                            </h1>
                            <h1 className="text-5xl">
                                <CountUp end={150} duration={10} />+
                            </h1>
                            <h2 className="md:text-start">
                                110+ Rescue People Saved
                            </h2>
                        </div>
                        <div className="text-white font-bold">
                            <h1 className="text-5xl">
                                <i class="fa-sharp fa-solid fa-user-group"></i>
                            </h1>
                            <h1 className="text-5xl">
                                <CountUp end={130} duration={10} />+
                            </h1>
                            <h2 className="md:text-start">
                                120+ Rescue Animals Saved
                            </h2>
                        </div>
                        <div className="text-white font-bold">
                            <h1 className="text-5xl">
                                <i class="fa-solid fa-house-user"></i>
                            </h1>
                            <h1 className="text-5xl">
                                <CountUp end={170} duration={10} />+
                            </h1>
                            <h2 className="md:text-start">
                                More Help
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NeedHelp;

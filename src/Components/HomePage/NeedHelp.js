import React from "react";
import CountUp from 'react-countup';

const NeedHelp = () => {
    return (
        <div className="bg-slate-white py-14">
            <div className="flex md:flex-row flex-col justify-around items-start">
                <div className="">
                    <img
                        src="https://img.freepik.com/premium-vector/psychology-concept-helpless-person-suffering-from-depression-mental-disorder-woman-despair-feeling-hopeless-depressed-unhappy-human-with-psychological-problem-flat-vector-illustration_633472-67.jpg"
                        alt=""
                    />
                </div>

                <div >
                    <div className="">
                        <h1 className="text-6xl font-bold ">
                            They need your <span className="text-primary">help</span>
                        </h1>
                    </div>
                    <div class="flex items-center justify-center">
                        <div class="mx-auto w-full max-w-[550px] px-3">
                            <form action="https://formbold.com/s/FORM_ID" method="POST">
                                <div class="my-5">
                                    
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-primary "
                                    />
                                </div>
                                <div class="mb-5">
                                    
                                       
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="example@domain.com"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-primary "
                                    />
                                </div>
                                <div class="mb-5">
                                    
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Enter your subject"
                                        class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-primary "
                                    />
                                </div>
                                <div class="mb-5">
                                    
                                    <textarea
                                        rows="4"
                                        name="message"
                                        id="message"
                                        placeholder="Type your message"
                                        class="w-full  rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium  outline-none focus:border-primary "
                                    ></textarea>
                                </div>
                                <div>
                                    <button class="hover:shadow-form rounded-md bg-primary py-3 px-8 text-base font-semibold text-white outline-none">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" bg-red-600">
                <div className="flex md:flex-row flex-col gap-10 justify-around items-center my-10 p-10 container mx-auto">
                    <div className="text-white font-bold">
                        <h1 className="text-5xl"><i class="fa-solid fa-heart"></i></h1>
                        <h1 className="text-5xl"><CountUp end={150} duration={10} />+</h1>
                        <h2 className="md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis facere, modi quia iusto necessitatibus!</h2>
                    </div>
                    <div className="text-white font-bold">
                        <h1 className="text-5xl"><i class="fa-sharp fa-solid fa-user-group"></i></h1>
                        <h1 className="text-5xl"><CountUp end={130} duration={10} />+</h1>
                        <h2 className="md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis facere, modi quia iusto necessitatibus!</h2>
                    </div>
                    <div className="text-white font-bold">
                        <h1 className="text-5xl"><i class="fa-solid fa-house-user"></i></h1>
                        <h1 className="text-5xl"><CountUp end={170} duration={10} />+</h1>
                        <h2 className="md:text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit nobis facere, modi quia iusto necessitatibus!</h2>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NeedHelp;

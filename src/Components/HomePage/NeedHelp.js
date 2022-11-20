import React from "react";

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
                                        placeholder="Enter your details"
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
            <div className=" bg-primary">
                <div className="flex md:flex-row flex-row gap-5 justify-around items-center my-10 py-10 container mx-auto">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default NeedHelp;

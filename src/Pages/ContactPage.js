import React from "react";

const ContactPage = () => {
    const bgImage = 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    return (
        <section
            class="min-h-screen bg-cover "
            style={{ backgroundImage:`url(${bgImage})`}}
        >
            <div class="flex flex-col min-h-screen bg-black/60">
                <div class="container flex flex-col flex-1 px-6 py-12 mx-auto">
                    <div class="flex-1 lg:flex lg:items-center lg:-mx-6">
                        <div class="text-white lg:w-1/2 lg:mx-6">
                            <h1 class="text-3xl font-semibold capitalize lg:text-5xl">
                                Ultimate design solution
                            </h1>

                            <p class="max-w-xl mt-6">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem
                                quo aliquid molestiae hic incidunt beatae placeat accusantium! Alias
                                ex quisquam ab tempora. Ratione autem doloremque ducimus numquam
                                doloribus, error sed.
                            </p>

                            <button class="px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                                get in touch
                            </button>

                            <div class="mt-6 md:mt-8">
                                <h3 class="text-sky-300 ">Follow us</h3>

                                <div class="flex justify-center mt-8 space-x-6 ">
                            <a
                                class="hover:opacity-70 mx-4 text-sky-600"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Facebook </span>
                                <i class="fa-brands fa-facebook text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-70 mx-4 text-sky-800"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> LinkedIn </span>
                                <i class="fa-brands fa-linkedin text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-70 mx-4 text-black"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Github </span>
                                <i class="fa-brands fa-github text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-70 mx-4 text-cyan-600"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Twitter </span>
                                <i class="fa-brands fa-twitter text-3xl mx-1"></i>
                            </a>
                            <a
                                class="hover:opacity-70 mx-4 text-pink-600"
                                href="www.facebook.com"
                                target="_blank"
                            >
                                <span class="sr-only"> Instagram </span>
                                <i class="fa-brands fa-instagram text-3xl mx-1"></i>
                            </a>
                        </div>
                            </div>
                        </div>

                        <div class="mt-8 lg:w-1/2 lg:mx-6">
                            <div class="w-full px-8 py-10 mx-auto overflow-hidden bg-white shadow-2xl rounded-xl dark:bg-gray-900 lg:max-w-xl">
                                <h1 class="text-2xl font-medium text-red-600 dark:text-gray-200">
                                    Contact form
                                </h1>

                                <p class="mt-4 text-gray-500 dark:text-gray-400">
                                    Ask us everything and we would love to hear from you
                                </p>

                                <form class="mt-6">
                                    <div class="flex-1">
                                        
                                        <input
                                            type="text"
                                            placeholder="John Doe"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>

                                    <div class="flex-1 mt-6">
                                        
                                        <input
                                            type="email"
                                            placeholder="johndoe@example.com"
                                            class="block w-full px-5 py-3 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        />
                                    </div>

                                    <div class="w-full mt-6">
                                        
                                        <textarea
                                            class="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-red-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                            placeholder="Message"
                                        ></textarea>
                                    </div>

                                    <button class="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;
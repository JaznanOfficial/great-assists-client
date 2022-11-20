import React from 'react';

const VolunteerSection = () => {
    const volunteerDataIcon = (
        
            <div className="flex flex-nowrap justify-center items-center">
                <a
                    href="https://github.com/jaznanofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                >
                    <i className="fa-brands fa-github-alt text-black m-0 p-0"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/jaznanofficial/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                >
                    <i className="fa-brands fa-linkedin-in text-black m-0 p-0"></i>
                </a>
                <a
                    href="https://www.facebook.com/jaznan.official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                >
                    <i className="fa-brands fa-facebook-f text-black m-0 p-0"></i>
                </a>
                <a
                    href="https://twitter.com/jaznanofficial"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" p-1 rounded-full text-white transition-colors duration-500  hover:bg-red-200 w-8"
                >
                    <i className="fa-brands fa-twitter text-black m-0 p-0"></i>
                </a>
            </div>
        
    );

    return (
        <div className="py-8">
            <div className="card  text-center md:w-2/3 mx-auto px-3">
                <h1 className=" text-4xl font-ubuntu py-8 font-rs">Our <span className='text-primary'>volunteers</span></h1>
                <h6 className='font-lpen text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A, minima! Unde quos assumenda est, corrupti vero fuga magnam, dicta odit dignissimos obcaecati, corporis architecto odio molestias iusto nesciunt perspiciatis numquam hic mollitia iste explicabo ratione.
                </h6>
            </div>

            <div className="flex flex-wrap justify-center items-center pt-16">
                <div className="card w-72 text-center">
                    
                        <img
                            className="h-80 bg-gray-100 mx-auto"
                            src="https://images.unsplash.com/photo-1597204081767-4c14a6b7cbec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2xlJTIwbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                            alt=""
                        />
                    
                    <div className="card-body">
                        <h2 className="text-2xl font-bold  text-primary mt-2"> Paul Trueman</h2>
                        <p>Lead volunteer</p>
                        {volunteerDataIcon}
                    </div>
                </div>

                <div className="card w-72">
                    
                        <img
                            className="h-80 bg-gray-100 mx-auto"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9t5dQdalgqBiLsEJIFNTAOyxFBfK8VmGIGrmuk5zoK56xxhu6QQn25yRuzW_Nx-tnyWk&usqp=CAU"
                            alt=""
                        />
                   
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-primary mt-2">Oscar Oldman</h2>
                        <p>Volunteer</p>
                        {volunteerDataIcon}
                    </div>
                </div>

                <div className="card w-72">
                    
                        <img
                            className="h-80 bg-gray-100 mx-auto"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHNbynmB8yNn7dBWB4Lv4SDbcBURfi9pJA844LYeV6SO6GX3snZHHCknIrLBY4XBt0BY&usqp=CAU"
                            alt=""
                        />
                    
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-primary mt-2">Emma Newman</h2>
                        <p>Volunteer</p>
                        {volunteerDataIcon}
                    </div>
                </div>

                <div className="card w-72">
                    
                        <img
                            className="h-80 bg-gray-100 mx-auto"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-uhxAlnK7tjipELRLxivnyROtiMwMl_Z-dhQYlABw5f89ISrsO7SFKQ7y9NhfPWUBDg&usqp=CAU"
                            alt=""
                        />
                    
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-primary mt-2">Ed Freeman</h2>
                        <p>Volunteer</p>
                        {volunteerDataIcon}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VolunteerSection;
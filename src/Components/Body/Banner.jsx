/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";


import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <>
            <Navbar />
            <div className="relative  pb-[110px] lg:pt-[60px] dark:bg-dark pt-[20px]">
                <div className="container">
                    <div className=" flex mx-10 lg:ml-32  flex-wrap">
                        <div className="w-full px-4 lg:w-5/12">
                            <div className="hero-content flex-col lg:mt-20 justify-start items-start">
                                <h1 className="mb-5 text-4xl font-bold !leading-[1.208]  dark:text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                               PH Job Task 
                                </h1>
                                <p className="mb-8 max-w-[480px] text-base  dark:text-dark-6">

                                    "Effortless Task Mastery: Your Ultimate Task Management Platform! Streamline Your Workflow, Boost Productivity, and Achieve Success with Ease. Your Tasks, Your Way – Simplified, Organized, and Always On Point!"
                                </p>
                                <ul className="flex flex-wrap items-center">
                                    <li>
                                        <Link
                                            to={"/dashboard/Home"}

                                            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-white hover:bg-blue-dark lg:px-7"
                                        >
                                            Let’s Explore
                                        </Link>
                                    </li>

                                </ul>
                        
                            </div>
                        </div>
                        <div className="hidden px-4 lg:block lg:w-1/12"></div>
                        <div className="w-full px-4 lg:w-6/12">
                            <div className="lg:ml-auto lg:text-right">
                                <div className="relative z-10 inline-block pt-11 lg:pt-0">
                                    <img
                                        src="https://i.ibb.co/h9jrbhL/jobs-task-banner.jpg"
                                        alt="hero"
                                        className="max-w-full lg:ml-auto "
                                    />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner

const SingleImage = ({ href, imgSrc }) => {
    return (
        <>
            <a href={href} className="flex w-full items-center justify-center">
                <img src={imgSrc} alt="brand image" className="h-10 w-full" />
            </a>
        </>
    );
};

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className={`absolute left-0 top-0 z-20 flex w-full items-center`}>

        </header>
    );
};

const ListItem = ({ children, NavLink }) => {
    return (
        <>
            <li>
                <a
                    href={NavLink}
                    className="flex py-2 text-base font-medium text-dark hover:text-primary dark:text-white lg:ml-10 lg:inline-flex"
                >
                    {children}
                </a>
            </li>
        </>
    );
};

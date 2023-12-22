import { Link, NavLink } from "react-router-dom";

const DashboardNav = () => {
    return (
        <div>
            <div className="navbar-start gap-10 flex lg:hidden shadow-2xl p-2 border-b w-full">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="dropdown-content  mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="Home"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="newTask"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                                New Task
                            </NavLink>
                        </li>
                        <li className="block p-1 font-sans text-lg font-bold leading-normal text-inherit antialiased">
                            <NavLink
                                to="previousTasks"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#000000]  underline" : ""
                                }
                            >
                               Previous Tasks
                            </NavLink>
                        </li>



                        



                      


                    </ul>
                </div>
                <Link to={"/"}><img className="w-12 mt-1 lg:hidden" src="https://i.ibb.co/Brc6x47/task-circle-management-project-management-task-management-scope-project-manager-computer-software-sc.png" alt="" /></Link>
            </div>
        </div>
    );
};

export default DashboardNav;
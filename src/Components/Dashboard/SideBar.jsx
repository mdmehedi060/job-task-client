/* eslint-disable no-unused-vars */
// import { NavLink } from "react-router-dom";

// const SideBar = () => {
//     return (
//         <div>
//             <div className="drawer lg:drawer-open">
//                 <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
//                 <div className="drawer-content flex flex-col items-center justify-center">
//                     {/* Page content here */}
//                     <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

//                 </div>
//                 <div className="drawer-side">
//                     <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

//                     <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content shadow-xl">
//                     <img className="w-20 mx-auto " src="https://i.ibb.co/Brc6x47/task-circle-management-project-management-task-management-scope-project-manager-computer-software-sc.png" alt="" />
//                         {/* Sidebar content here */}
//                         <li><NavLink
//                                 to="/"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "" : ""
//                                 }
//                             >
//                                Home
//                             </NavLink></li>
//                         <li><NavLink
//                                 to="Home"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "bg-pink-800 text-slate-200" : ""
//                                 }
//                             >
//                                 Dashboard
//                             </NavLink></li>
//                             <li><NavLink
//                                 to="newTask"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "bg-pink-800 text-slate-200" : ""
//                                 }
//                             >
//                                 New Task
//                             </NavLink></li>
//                             <li><NavLink
//                                 to="previousTasks"
//                                 className={({ isActive, isPending }) =>
//                                     isPending ? "pending" : isActive ? "bg-pink-800 text-slate-200" : ""
//                                 }
//                             >
//                                 Previous Tasks
//                             </NavLink></li>
//                     </ul>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default SideBar;

import { useState } from 'react';



import { Layout, Menu, Button, theme } from 'antd';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { BiSolidDashboard } from "react-icons/bi";
import { MdOutlineAddTask } from "react-icons/md";
import { GrTask } from "react-icons/gr";

import DashboardNav from './DashboardNav';





const { Sider, Content } = Layout;

const SideBar = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();


    return (
        <Layout className='h-screen '>
            <Sider trigger={null} style={{ backgroundColor: "white" }} collapsible className='hidden lg:flex' collapsed={collapsed}>
                <div className="mx-auto" />
                <img className="w-12 mt-5 mx-auto" src="https://i.ibb.co/Brc6x47/task-circle-management-project-management-task-management-scope-project-manager-computer-software-sc.png" alt="" />



                <Menu className='mt-5'
                    theme="light"
                    mode="inline"
                    defaultSelectedKeys={['2']}

                >

                    <Menu.Item key={1} icon={<IoHome />}>
                        <NavLink to={"/"}>Home</NavLink>
                    </Menu.Item>





                    <Menu.Item key={2} icon={<BiSolidDashboard />}>
                        <NavLink to={"Home"}>Dashboard</NavLink>
                    </Menu.Item>
                    <Menu.Item key={3} icon={<MdOutlineAddTask />}>
                        <NavLink to={"newTask"}>New Task</NavLink>
                    </Menu.Item>
                    <Menu.Item key={4} icon={<GrTask />}>
                        <NavLink to={"previousTasks"}>Previous Tasks</NavLink>
                    </Menu.Item>















                </Menu>





            </Sider>

            <Layout>

                <Content className='overflow-y-scroll h-[85vh]'
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,

                    }}
                >



                    <DashboardNav></DashboardNav>
                    <Outlet></Outlet>
                </Content>
            </Layout>
        </Layout>
    );
};

export default SideBar;

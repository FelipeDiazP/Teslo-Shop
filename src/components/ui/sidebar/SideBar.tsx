'use client';

import { useUIStore } from "@/store";
import clsx from "clsx";

import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearch, IoShirtOutline, IoTicketOutline } from "react-icons/io5";


export const Sidebar = () => {

    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu)


    return(
        <div>
            {/* Background Black */}

            {
                isSideMenuOpen && (
                    <div
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
                    />
                    
                )
            }


            {/* Blur */}

            {
                isSideMenuOpen && (
                    <div
                    onClick={closeMenu}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                    />

                )
            }


            {/* SideMenu */}

            <nav 
            className={
                clsx(
                    "fixed p-5 right-0 top-0 w-[500px] h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                    {
                        "translate-x-full": !isSideMenuOpen
                    }
                )
            }>
                <IoCloseOutline
                size={40}
                className="absolute top-5 right-5 cursor-pointer z-10"
                onClick={ () => closeMenu()}
                />

                {/* Input */}

                <div className="relative mt14 ">
                    <IoSearch size={20} className="absolute top-2 left-2"/>
                    <input type="text" 
                    placeholder="Buscar"
                    className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus: border-blue-500" 
                    />
                </div>
                <a href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoPersonOutline size={30}/>
                    <span className="ml-3 text-xl">Perfil</span>
                </a>

                <a href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoTicketOutline size={30}/>
                    <span className="ml-3 text-xl">Ordenes</span>
                </a>

                <a href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoLogInOutline size={30}/>
                    <span className="ml-3 text-xl">Ingresar</span>
                </a>

                <a 
                href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoLogOutOutline size={30}/>
                    <span className="ml-3 text-xl">Salir</span>
                </a>

                {/* Line Separator */}

                <div className="w-full h-px bg-gray-500 my-10"/>

                <a href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoShirtOutline size={30}/>
                    <span className="ml-3 text-xl">Productos</span>
                </a>

                <a href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoTicketOutline size={30}/>
                    <span className="ml-3 text-xl">Ordenes</span>
                </a>

                <a href="/"
                className="flex items-center mt-10 p-2 hover:bg-gray-300  rounded transition-all"
                >
                    <IoPeopleOutline size={30}/>
                    <span className="ml-3 text-xl">Usuarios</span>
                </a>

            </nav>

        </div>
    );
}
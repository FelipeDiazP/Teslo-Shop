'use client';

import { titleFont } from "@/config/fonts";
import { useUIStore } from "@/store";
import {IoSearchOutline,  IoCartOutline} from 'react-icons/io5';

export const TopMenu = () => {

    const openSideMenu = useUIStore ( state => state.openSideMenu);


    return(
        <nav className="flex px-5 justify-between items-center w-full">
            <div>
                {/* AppBar */}
                <link href="/" />
                <span className={`${titleFont.className} antialiased font-bold`}>Teslo</span>
                <a href="/">| Shop </a>
            </div>
            {/* Center Menu */}
            <div className="hidden sm:block">
            <a className="m-2 p-2 rounded-md transition-all hover:bg-blue-300" href="/category/men">Hombres</a>
            <a className="m-2 p-2 rounded-md transition-all hover:bg-red-300" href="/category/women">Mujer</a>
            <a className="m-2 p-2 rounded-md transition-all hover:bg-green-300" href="/category/kid">Niño</a>
            </div>

            <div className="flex items-center">
                {/* Search, Cart, Menu */}
                <a href="/search" className="mx-2">
                <IoSearchOutline className="w-5 h-5"/>
                </a>

                <a href="/cart" className="mx-2">
                    <div className="relative">
                        <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-blue-700 text-white">
                            3
                        </span>
                        <IoCartOutline className="w-5 h-5"/>
                    </div>
                </a>

                <button 
                onClick={openSideMenu}
                className="m-2 p-2 rounded-md transition-all hover:bg-gray-300">
                    menu
                </button>
                
            </div>

        </nav>
    )
}
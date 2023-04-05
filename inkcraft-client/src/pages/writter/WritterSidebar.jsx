import React from "react";
import { Link, useLocation } from "react-router-dom";
import {GiBookshelf, GiGreekTemple, GiBookmark} from "react-icons/gi"
import {BsFilePerson} from "react-icons/bs"
import {MdOutlineEventNote} from "react-icons/md"
import {AiOutlineBuild, AiOutlineSetting} from "react-icons/ai"


export const WritterSidebar = () => {
  const location = useLocation()
  

  return (
    <div className="max-h-[90%]">
      <div className="relative hidden h-screen my-4 ml-4 shadow-lg lg:block w-80">
        <div className="h-full bg-white rounded-2xl dark:bg-gray-700">
          <nav className="mt-6">
            <div>
              <Link
               className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/stories")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="stories"
              >
                <span className="text-left">
                    <GiBookshelf size={25}/>
                </span>
                <span className="mx-4 text-sm font-normal">Stories</span>
             </Link>
              <Link
               className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/persons")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="persons"
              >
                <span className="text-left">
               <BsFilePerson size={25} />
                </span>
                <span className="mx-4 text-sm font-normal">Persons</span>
             </Link>
              <Link
               className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/places")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="places"
              >
                <span className="text-left">
              <GiGreekTemple size={25} />
                </span>
                <span className="mx-4 text-sm font-normal">Places</span>
             </Link>
              <Link
                className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/events")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="events"
              >
                <span className="text-left">
               <MdOutlineEventNote size={25}/>
                </span>
                <span className="mx-4 text-sm font-normal">Events</span>
             </Link>
              <Link
                className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/chapters")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="chapters"
              >
                <span className="text-left">
              <GiBookmark size={23}/>
                </span>
                <span className="mx-4 text-sm font-normal">Chapters</span>
             </Link>
              <Link
                 className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/tools")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="tools"
              >
                <span className="text-left">
               <AiOutlineBuild size={25} />
                </span>
                <span className="mx-4 text-sm font-normal">Tools</span>
             </Link>
              <Link
                 className={`flex items-center justify-start w-full p-4 my-2 font-thin uppercase ${location.pathname.startsWith("/dash/settings")?"border-r-4 border-green-500 bg-gradient-to-r from-white to-green-100 ":"transition-colors duration-200 hover:text-green-500"}`}
               to="settings"
              >
                <span className="text-left">
                <AiOutlineSetting size={25} />
                </span>
                <span className="mx-4 text-sm font-normal">Settings</span>
             </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

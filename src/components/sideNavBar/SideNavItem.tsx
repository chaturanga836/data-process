"use client";

import Link from "next/link";

type propType ={
    Icon:any, text:string, link:string 
}

export function SideNavItem(props:propType) {

    const {Icon, text, link} = props;
    return(<>
            <li>
          <Link href={link} className="flex items-center justify-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> 

          <Icon className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"/>
          <span className="flex-1 whitespace-nowrap px-3">{text}</span>
          </Link>
        </li>
    </>)
}
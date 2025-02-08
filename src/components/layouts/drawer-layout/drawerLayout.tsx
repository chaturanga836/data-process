"use client";
import { Footer } from "flowbite-react";
import TopNavBar from "../top-nav-bar/TopNavBar";
import { SideBar } from "@/components/sideNavBar/SideBar";
import { DataModelView } from "@/components/data-model-view/dataModelView";

export default function DrawerLayout() {

    return (<>
        {/* top layer */}
        <div>
            <TopNavBar />
        </div>

        {/* middle body */}
        <div>
            <div className="flex">
                <SideBar />
                <div className="w-full">
                    
                </div>
            </div>
        </div>

        {/* bottom layer */}
        <div>
            <Footer container>
                <Footer.Copyright href="#" by="Flowbite™" year={2022} />
                <Footer.LinkGroup>
                    <Footer.Link href="#">About</Footer.Link>
                    <Footer.Link href="#">Privacy Policy</Footer.Link>
                    <Footer.Link href="#">Licensing</Footer.Link>
                    <Footer.Link href="#">Contact</Footer.Link>
                </Footer.LinkGroup>
            </Footer>
        </div>
    </>)
}
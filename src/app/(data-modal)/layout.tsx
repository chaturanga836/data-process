import { Footer } from "flowbite-react";
import { SideBar } from "@/components/sideNavBar/SideBar";
import { DataModelView } from "@/components/data-model-view/dataModelView";
import TopNavBar from "@/components/layouts/top-nav-bar/TopNavBar";

export default function DrawerLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    return (<>
        {/* top layer */}
        <div>
            <TopNavBar />
        </div>

        {/* middle body */}
        <div>
            <div className="flex ">
                <SideBar />
                <div className="w-full px-8 py-8">
                {children}
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
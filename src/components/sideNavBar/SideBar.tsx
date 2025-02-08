
"use client";

import { Sidebar } from "flowbite-react";
import Link from "next/link";
import {
  HiBell,
  HiChartBar,
  HiCog,
  HiCube,
  HiDatabase,
  HiLink,
  HiLogout,
  HiOutlineDatabase,
  HiOutlineMinusSm,
  HiOutlinePlusSm,
  HiOutlineTable,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { SideNavItem } from "./SideNavItem";

export function SideBar() {

  return (
    <Sidebar aria-label="Sidebar with multi-level dropdown example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <SideNavItem Icon={HiCube} text='Dashboard' link='/dashboard' />

          <SideNavItem Icon={HiLink} text='Connections' link='/end-points' />

          <Sidebar.Collapse
            icon={HiDatabase }
            label="Schemas"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

              return (<>
              <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />
              </>);
            }}
          >
           
          
            <Sidebar.Collapse
            icon={HiOutlineDatabase } label="Schema 01"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

              return (<>
              <IconComponent aria-hidden className={twMerge(theme.label.icon.open[open ? 'on' : 'off'])} />
              </>);
            }}>
                <Sidebar.Item href="#" icon={HiOutlineTable  }>Table 01</Sidebar.Item>
            </Sidebar.Collapse>
           
            
          </Sidebar.Collapse>
          <Sidebar.Item href="#" icon={HiBell}>
            Notification
          </Sidebar.Item>

          <Sidebar.Item href="#" icon={HiChartBar }>
            Report
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiLogout }>
            Logout
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiCog }>
            Settings
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}


"use client";

import useBearStore from "@/store/userStore";
import { Button } from "flowbite-react";
import Link from "next/link";
import { HiOutlineArrowRight, HiShoppingCart, HiPlusSm  } from "react-icons/hi";

export function DataModelView() {
    const { bears, increase } = useBearStore();

  return (
    <div className="flex flex-wrap gap-2">
            <Link href="/create-modal">
            <Button>
        <HiPlusSm className="mr-2 h-5 w-5" />
    
        New Data Model
      </Button>
            </Link>

      <Button onClick={ ()=>{ increase (1)} }>
        Choose plan
        <HiOutlineArrowRight className="ml-2 h-5 w-5" />
      </Button>
      { bears }
    </div>
  );
}

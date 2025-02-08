"use client";

import schemaStore from "@/store/schemaStore";
import { Badge } from "flowbite-react/components/Badge";
import { Banner } from "flowbite-react/components/Banner";
import { Button } from "flowbite-react/components/Button";
import { HiCheck, HiClock, HiCog, HiExclamationCircle } from "react-icons/hi";

const NoSchema = () =>{

    return(<>
        <div className="flex flex-wrap gap-2 justify-center">

        <Banner>
        <div className="flex-col">
        <span className="inline-flex">
        <HiExclamationCircle /> No schemas generated. click the button to generate schemas.
        
        </span>
                </div>
                <Button> <HiCog  className="mr-2 h-5 w-5" /> Generate</Button>
      
        </Banner>
    </div>
    </>)
}

export default function SchemaGenerator() {
    const schemas = schemaStore ( (state:any)=>state.schemas)

    return(
        <>
        {
            schemas.length == 0 ? <NoSchema /> : <h1>Has schema</h1>
        }
            
        </>
    )
}
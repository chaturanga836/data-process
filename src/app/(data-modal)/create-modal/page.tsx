
"use client";

import { Button, Table } from "flowbite-react";
import { useEffect, useState } from "react";
import { HiPlusSm  } from "react-icons/hi";
import CreateModel from "./_add-column-modal/createModal";
import schemaStore from "@/store/schemaStore";

export default function CreateModelPage() {
  const tableRow = schemaStore( (state:any)=>state.rows);
  // const [tableRow, setTableRow] = useState<Array<any>>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);

  const onCloseModal = (isCloses: boolean) =>{
    setOpenModal( !isCloses);
  }



  return (<>
    <div className="flex mb-4">
    <Button onClick={ ()=>setOpenModal(true)}>
      Add <HiPlusSm className="mr-2 h-5 w-5" /> 
    </Button>
    </div>

    <CreateModel showModel={openModal} onClose={ onCloseModal}/>

    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Attri</Table.HeadCell>
          <Table.HeadCell>Default</Table.HeadCell>
          <Table.HeadCell>Comment</Table.HeadCell>
          <Table.HeadCell>
          Action
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            tableRow.map( (value:any, index: number)=>{

              return(
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                  <Table.Cell>{value.name}</Table.Cell>
                  <Table.Cell>{value.dataType}</Table.Cell>
                  <Table.Cell>{value.attribute}</Table.Cell>
                  <Table.Cell>{value.defaultValues}</Table.Cell>
                  <Table.Cell>{value.comment}</Table.Cell>
                </Table.Row>
              )
            
            })
          }
  
        </Table.Body>
      </Table>
    </div>
    </>
  );
}

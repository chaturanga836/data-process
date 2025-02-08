
"use client";

import { Button, Table } from "flowbite-react";
import { useState } from "react";
import { HiPlusSm  } from "react-icons/hi";

export default function ViewModal() {

  const [tableRow, setTableRow] = useState<Array<any>>([]);
  return (<>
    <div className="flex mb-4">
    <Button>
      Add <HiPlusSm className="mr-2 h-5 w-5" /> 
    </Button>
    </div>

    <div className="overflow-x-auto">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Attri</Table.HeadCell>
          <Table.HeadCell>Default</Table.HeadCell>
          <Table.HeadCell>
          Action
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {
            tableRow.map( (value:any, index: number)=>{

              return(
                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                  <Table.Cell>{value}</Table.Cell>
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

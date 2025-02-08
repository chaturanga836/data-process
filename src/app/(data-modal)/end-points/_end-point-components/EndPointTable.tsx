"use client"

import { redirect, useRouter } from 'next/navigation'
import { Button } from "flowbite-react/components/Button"
import { Table } from "flowbite-react/components/Table"
import { useState } from "react";
import { HiPlusSm, HiPencil, HiTrash  } from "react-icons/hi";
import AddConnectionModel from "./AddConnectionModal";
import connectionStore from "@/store/connectionsStore";
import { Dropdown } from "flowbite-react/components/Dropdown";

export function EndPointTable() {
  const connStoreList = connectionStore((state: any) => state.connections)
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openEditModal, setOpenEditModal] = useState<boolean>(false);
  const router = useRouter()
  const onCloseModal = (isCloses: boolean) => {
    setOpenModal(!isCloses);
  }

  const onEditConn = (id:number) =>{
    console.log(id)
    router.push('/end-points/view-connection')
  }

  const onRemove = (id:number) =>{

  }

  return (<>

    <div className="flex mb-4">
      <Button onClick={() => setOpenModal(true)}>
        New Connection <HiPlusSm className="mr-2 h-5 w-5" />
      </Button>
    </div>

    <AddConnectionModel showModel={openModal} onClose={onCloseModal} />

    <Table striped>
      <Table.Head>
        <Table.HeadCell></Table.HeadCell>
        <Table.HeadCell>Name</Table.HeadCell>
        <Table.HeadCell>Desc</Table.HeadCell>
        <Table.HeadCell>Status</Table.HeadCell>
        <Table.HeadCell>Action</Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {
          connStoreList.map((val: any, index: number) => {

            return (
              <>
                <Table.Row key={index}>
                  <Table.Cell> <img className="h-12 w-2/4" src={val.logo} alt="image 1" /></Table.Cell>
                  <Table.Cell> {val.name}  </Table.Cell>
                  <Table.Cell> {val.desc} </Table.Cell>
                  <Table.Cell></Table.Cell>
                  <Table.Cell>
                    <Dropdown label="..." inline>
               
                      <Dropdown.Item icon={HiPencil } onClick={ ()=>onEditConn(index)}>Edit</Dropdown.Item>
                      <Dropdown.Item icon={HiTrash } onClick={ ()=>onRemove(index)}>Remove</Dropdown.Item>
                      
                    </Dropdown>
                  </Table.Cell>
                </Table.Row>
              </>
            )
          })
        }
      </Table.Body>
    </Table>
  </>)

}
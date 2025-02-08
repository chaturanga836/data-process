"use client";

import { Button, Table } from "flowbite-react";
import { Modal } from "flowbite-react/components/Modal";
import { useState } from "react";
import { HiPlusSm  } from "react-icons/hi";
import ColDetails from "./ColDetails";
import schemaStore from "@/store/schemaStore";
import { ColumnTypes } from "./_types/ColType";

type propType = {
    showModel: boolean,
    onClose: (closed:boolean) => void
}
export default function CreateModel({ showModel, onClose }: propType){

    const addRow = schemaStore ( (state:any)=>state.addRow)
    const [rows, setRows] = useState<Array<ColumnTypes>>([]);

    const onSetCol = () =>{
   
        const colTypes = new ColumnTypes;

        setRows([...rows, colTypes]);
    }

    const onUpdateCol = (rowIndex:number, col:ColumnTypes) =>{
      
        setRows((prevItems) =>{
            
            return prevItems.map((item:any, index) => {
                
                return item.name === col.name ? { ...item, ...col } : col})
        }
            
          );
    }

    const onSave = () =>{

        addRow(rows);
        onClose(true);
    }

    
    return(<>
          <Modal show={showModel} onClose={() => onClose(true)} size="6xl">
        <Modal.Header>Add Column(s)</Modal.Header>
        <Modal.Body className="p-5">
        <Button color="light" pill size="sm" onClick={ ()=>{ onSetCol()}}>
                    <HiPlusSm className="h-6 w-6" /> 
                </Button>

        <div className="flex h-90">
        <Table striped>
        <Table.Head>
          <Table.HeadCell>Name</Table.HeadCell>
          <Table.HeadCell>Type</Table.HeadCell>
          <Table.HeadCell>Length</Table.HeadCell>
          <Table.HeadCell>Attri</Table.HeadCell>
          <Table.HeadCell>Default val</Table.HeadCell>
          <Table.HeadCell>Comment</Table.HeadCell>
          <Table.HeadCell>
          Action
          </Table.HeadCell>
        </Table.Head>
        <Table.Body>

        {
            rows.map( (value:any, index: number)=>{
            
                return(
                    <ColDetails 
                        key={index} 
                        colType={value}
                        updateCol= { (column:ColumnTypes) => { onUpdateCol(index, column)}}
                        />
                    )
                }
            )
          }
        </Table.Body>
        </Table>
        </div>
 
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => onSave()}>Save</Button>
          <Button color="gray" onClick={() => onClose(true)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>)
}
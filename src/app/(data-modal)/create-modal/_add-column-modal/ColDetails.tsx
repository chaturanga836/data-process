"use client";

import { Select, Table, TextInput } from "flowbite-react";
import { ColumnTypes } from "./_types/ColType";

type propType ={
    colType: ColumnTypes,
    updateCol: Function 
}


export default function ColDetails(props:propType){

    const {colType, updateCol} = props;
    

    const setName = (val:any) =>{
        //colType.name = val;
        const col:ColumnTypes = {...colType, name:val};
        updateCol(col);
    }

    const setDataType = (val:any) =>{

        const col:ColumnTypes = {...colType, dataType:parseInt(val)};
        updateCol(col);
    }

    const onChangeLength = (val:any) =>{
       
        const col:ColumnTypes = {...colType, inputLength:parseInt(val)};
        updateCol(col);
    }


    const setAttribute = (val:any) =>{

        const col:ColumnTypes = {...colType, attribute:val};
        updateCol(col);
    }

    const setDefaultVal = (val:any) =>{

        const col:ColumnTypes = {...colType, defaultValues:val};
        updateCol(col);
    }

    const setComment = (val:any) =>{

        const col:ColumnTypes = {...colType, comment:val};
        updateCol(col);
    }

    return(<>
        <Table.Row>
            <Table.Cell >
                <TextInput placeholder="Name" value={colType.name} type="text" sizing="sm" onChange={ (event)=>setName(event.target.value)}/>
            </Table.Cell>
            <Table.Cell>
                <Select id="type" value={colType.dataType} required onChange={(e) => {
          setDataType(e.target.value);
        }}>
                    <option value={1}>Int</option>
                    <option value={2}>string</option>
                    <option value={3}>boolean</option>
                    <option value={4}>object</option>
                </Select>
            </Table.Cell>
            <Table.Cell>
                <TextInput placeholder="length" value={colType.inputLength} type="number" sizing="sm" onChange={ (event)=>onChangeLength(event.target.value)}/>
            </Table.Cell>
            <Table.Cell>
                <TextInput placeholder="Attribute" value={colType.attribute} type="text" sizing="sm" onChange={ (event)=>setAttribute(event.target.value)} />
            </Table.Cell>
            <Table.Cell>
                <TextInput placeholder="Default Val" value={colType.defaultValues} type="text" sizing="sm" onChange={ (event)=>setDefaultVal(event.target.value)} />
            </Table.Cell>
            <Table.Cell>
                <TextInput placeholder="Comment" value={colType.comment} type="text" sizing="sm" onChange={ (event)=>setComment(event.target.value)} />
            </Table.Cell>
        </Table.Row>
    </>)
}
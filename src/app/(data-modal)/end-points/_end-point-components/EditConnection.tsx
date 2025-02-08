import { Button, Card, Checkbox, Label, Modal, TextInput } from "flowbite-react"
import Image from "next/image";
import Connectors from "../_data/connector";
import connectionStore from "@/store/connectionsStore";
type propType = {
    showModel: boolean,
    onClose: (closed: boolean) => void
}
export default function EditConnectionModel({ showModel, onClose }: propType) {
    const connStoreAdd = connectionStore ( (state:any)=>state.add)
    const conn = new Connectors;
    const connArr = conn.getConnectors();


    const getString = (str: string) => {
       
        if (str.length > 100) {

            const newStr = str.slice(0, 90);
            return newStr;
        }
        return str;
    }
    const onSave = () => {

        onClose(true);
    }

    const onSelect = (index:number) =>{
        console.log(connArr[index]);
        connStoreAdd( connArr[index] )
        onClose(true);
    }

    return (<>
        <Modal show={showModel} onClose={() => onClose(true)} size="6xl">
            <Modal.Header>Add New Connection</Modal.Header>
            <Modal.Body className="p-5">
                <div className="flex flex-wrap -mb-4">
                    {
                        connArr.map((val: any, index: number) => {

                            return (

                                <div className="w-1/3 mb-4 bg-gray-400 h-auto cursor-pointer" key={index} onClick={ ()=>onSelect(index)}>
                                    <Card
                                        className="max-w-sm p-4"
                                        renderImage={() => <img className="h-12 w-2/4" src={val.logo} alt="image 1" />}

                                    >
                                        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                            {val.name}
                                        </h5>
                                        <p className="font-normal text-gray-700 dark:text-gray-400">
                                            {getString(val.desc)}
                                        </p>
                                    </Card>
                                </div>

                            )
                        })
                    }


                </div>

            </Modal.Body>
            <Modal.Footer>
           
                <Button color="gray" onClick={() => onClose(true)}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
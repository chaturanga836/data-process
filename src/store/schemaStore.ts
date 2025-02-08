import { ColumnTypes } from '@/app/(data-modal)/create-modal/_add-column-modal/_types/ColType';
import { create } from 'zustand'


const createSchemalSlice = (set: any) => ({
    schemas: [],
    addSchema: (schema:any) => set( (state:any) => {
        return { schemas: state.schemas.map( (schm:any, index:number)=> (schm.name === schema.name ? {...schm, schema} : schema)) }
    })
})

// Define the Todo slice with types
const createModelSlice = (set: any) => ({
  rows: [] ,
  addRows: (rowsNew:Array<ColumnTypes>) =>set( (state: any) => (
    { rows: [...state.rows, ...rowsNew] }
  )),
  addRow: (row: ColumnTypes) => set((state: any) =>{
    console.log(row, state.rows)
    return { rows: [...state.rows, row] }
  }),
  updateRow :(id:number, object:any) => set( (state:any) => ( 
    {rows: state.rows.map( (row:any, index: number)=>{ 
        return id === index ? {...row, object}: object 
    })}
 )),
  
  removeRow: (index: number) => set((state: any) => ({
    rows: state.rows.filter((_:any, i:number) => i !== index),
  })),
  clearAll: () => set((state:any) =>({rows:[]}))
});

// Combine the slices in the store
const schemaStore = create((set) => ({
  ...createModelSlice(set),
  ...createSchemalSlice(set)
}));

export default schemaStore;

import { create } from 'zustand'

const connectionsSlice = (set: any) => ({
    connections: [],
    add: (conn:any) => set( (state:any) => {
        return { connections: [...state.connections, conn] }
    }),
    remove: (connId:any) =>set( (state:any) =>{
        return { connections: state.rows.filter((_:any, i:number) => i !== connId) }
    }),

    update: (id:number, object:any) => set( (state:any) => ( 
        {rows: state.rows.map( (row:any, index: number)=>{ 
            return id === index ? {...row, object}: object 
        })}
     )),
})

const connectionStore = create((set) => ({
    ...connectionsSlice(set),
  }));
  
  export default connectionStore;
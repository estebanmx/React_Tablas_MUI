import MUIDataTable from "mui-datatables";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


export const TableAxios = () => {
    //1- Configuramos los hooks
    const [products,setProducts] = useState([])

    //2- function para mostrar los dacot son axios
    const endpoint = 'http://fakestoreapi.com/products'

    const getData = async () => {
        await axios.get(endpoint).then((response) => {
            const data =  response.data
            console.log(data)
            setProducts(data)
        })
    }

    useEffect( () => {
            getData()
        },[] )

    //3- Definimos las columnas
    const columnas=[ 
        {name:"id", label:"ID"},
        {name:"title", label:"TITLE"} ,
        {name:"category", label:"CATEGORY"} 
    ]

    //4- renderizamos la databale
    return(
        <MUIDataTable
        title={"Productos"}
        data={products}
        columns={columnas}
        />
    )
}
import MUIDataTable from "mui-datatables";


const columnas =["Nombre","Empresa","Ciudad","Estado"]
const datos = [
                ["Joe James","Test Corp","Yonker","NY"],
                ["Jonh","Test Corp","Hartford","FL"],
                ["Bob","Test Corp","Dallas","TX"]
]
const options ={filterType:'checkbox',}

export const TableBasic =() => {
return(
        <MUIDataTable
        title={"Lista de empleados"}
        data={datos}
        columns={columnas}
        options={options}
        />
    )
}
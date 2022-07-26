import MUIDataTable from "mui-datatables";
import user from './user.json';

const columnas = [
    {
        name: "id",
        label: "ID"
    },
    {
        name: "name",
        label: "NAME"
    },
    {
        name: "gender",
        label: "GENDER"
    }
]

export const TableJson = () => {
    return (
        <MUIDataTable
        title={"Lista de usuarios"}
        data={user}
        columns={columnas}
        />
    )
}
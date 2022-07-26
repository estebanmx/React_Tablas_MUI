import { TableJson } from "./tablas/TablaJson";
import { TableAxios } from "./tablas/TableAxios";
import { TableBasic } from "./tablas/TableBasic";

function App() {
  return (
    <div className="App">
     <TableBasic/>
     <TableJson/>
     <TableAxios/>
    </div>
  );
}

export default App;

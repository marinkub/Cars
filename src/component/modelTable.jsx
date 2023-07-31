import { BsFillTrashFill, BsPencil } from "react-icons/bs";

function ModelTable(props) {
    return (
        <div>
            <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>abrv</th>
                    <th>Make</th>
                </tr>
            </thead>
            <tbody>
            {props.list
                ? props.list.map((make) => (
                        <tr key={make.id}>
                            <td>{make.name}</td>
                            <td>{make.abrv}</td>
                            <td>{make.makename}</td>
                            <td><button className="deleteButton" onClick={() =>{props.store.openDeleteMoadl(make.id)}}>Delete <BsFillTrashFill className="listIcon"/></button></td>
                            <td><button className="buttonEdit" onClick={() => props.store.openModelsModal(make.id)}>Edit <BsPencil className="listIcon"/></button></td>
                        </tr>
                    ))
                :<tr><td>No results</td></tr>
                }
            </tbody>
            </table>
        </div>
    )
}

export default ModelTable;
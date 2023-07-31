import { BsSearch } from "react-icons/bs";

function Heading(props) {

    return (
        <div>
            {(() => {
                if (props.service === "make") {
                return (
                    <button className='buttonNew' onClick={() => props.store.openMakeModal()}>Add New</button>
                )
                } else if (props.service === "model") {
                return (
                    <button className='buttonNew' onClick={() => props.store.openModelsModal()}>Add New</button>
                )
                } else {
                return (
                    <div>catch all</div>
                )
                }
            })()}
           
        <select
            className='MakeSort'
            onChange={(e) => {
                if(props.service === "make")
                {
                    props.store.MakeStore.handleSort(e.target.value);
                }
                if(props.service === "model")
                {
                    props.store.ModelStore.handleSort(e.target.value);
                }
            }}
        >
            <option className="option" value="asc">A-Z</option>
            <option className="option" value="desc">Z-A</option>
        </select>
        <input 
            type="search"
            onChange={(e) => {
                props.store.onChangeFilter(e.target.value)
            }}
            className="input"
            placeholder="Filter"
        />
        <button className='buttonSearch' onClick={() => props.store.filterFunction(props.service)}><BsSearch className="searchIcon"/></button>
        </div>
    )
}

export default Heading;
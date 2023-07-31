import './Modal.css';
import { observer } from "mobx-react";


function DeleteModal(props) {
    if(!props.show)
    {
        return null
    }
    const store = props.store;
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className="modal-title">Delete</h4>
                </div>
                <div className="modal-body">
                <label>Are you sure you want to delete? </label>
                    
                </div>
                <div className="modal-footer">
                {(() => {
                    if (props.service === "make") {
                    return (
                        <button className="modal-button" onClick={()=>{store.MakeStore.onDelte(store.makeid); store.closeDeleteModal();}}>Delete make</button>
                    )
                    } else if (props.service === "model") {
                    return (
                        <button className="modal-button" onClick={()=>{store.ModelStore.onDelete(store.makeid); store.closeDeleteModal();}}>Delete model</button>
                    )
                    } else {
                    return (
                        <div>catch all</div>
                    )
                    }
                })()}

                    <button className="modal-button" onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default observer(DeleteModal);
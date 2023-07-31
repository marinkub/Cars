import { observer } from "mobx-react";
import { useEffect } from "react";
import ModelEditModal from "../component/ModelEditModal";
import DeleteModal from "../component/DeleteModal";
import Pagination from "../component/Pagination";
import Heading from "../component/Heading";
import ModelTable from "../component/modelTable";



function ModelsPage(props) { 

    useEffect(()=> {
        props.store.ModelStore.getMakesAsync();
    }, []);

    return (
        <div className="home">
        <h1>Vehicle Model List</h1>
        <Heading store={props.store} service={"model"}/>
        <ModelTable store={props.store} list={props.store.ModelStore.DataList}/>
        <Pagination previous={() =>props.store.ModelStore.previousPage()} next={() => props.store.ModelStore.nextPage()}/>
        <ModelEditModal store={props.store} title={props.store.ModleTitle} show={props.store.MakeModalShow} buttonTitle={props.store.buttonTitle} onClose={() => props.store.closeModelsModal()}></ModelEditModal>
        <DeleteModal store={props.store} show={props.store.DeleteModalShow} onClose={() => props.store.closeDeleteModal()} service={"model"}></DeleteModal>
    </div>
    )
}

export default observer(ModelsPage);
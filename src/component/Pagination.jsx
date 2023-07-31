import { BsArrowRight, BsArrowLeft } from "react-icons/bs";


function Pagination(props) {
    return(
        <div className="pagination">
            <button className='buttonPrev' onClick={props.previous}><BsArrowLeft className="paginationIcon"/> previous</button>
            <button className='buttonNext' onClick={props.next}>next <BsArrowRight className="paginationIcon"/></button>
        </div>
    )
}

export default Pagination
import Pagination from "react-bootstrap/Pagination";

function Paginationtag() {
    return(
        <Pagination size="lg">
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
      </Pagination>
    )
}

export default Paginationtag
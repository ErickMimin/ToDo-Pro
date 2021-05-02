const Card = ({title, id, todos, onDeleteTodos, onDeleteLists}) => {
    const todosItems = todos.map((todo, index)=><li key={index.toString()} className="list-group-item">{todo}<span className="badge bg-danger ms-3" onClick={()=>onDeleteTodos(id, index)}>X</span></li>)
    return(
        <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <ul className="list-group list-group-flush">
                    {todosItems}
                </ul>
                <button type="button" className="btn btn-danger btn-sm" onClick={()=>onDeleteLists(id)}>Eliminar lista</button>
                </div>
            </div>
        </div>
    );
};

export default Card;


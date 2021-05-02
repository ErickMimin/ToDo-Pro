import { useRef, useState } from 'react';

const FormTodos = ({onPress, lists}) => {
    const [id, setID] = useState(null);
    const inputEl = useRef(null);
    const listsItems = lists.map((list, index) => <li key={index.toString()}><a className="dropdown-item" href="/#" onClick={() =>setID(index)}>{list.title}</a></li>);
    return(
        <div className="input-group mb-3">
            <input ref={inputEl} type="text" className="form-control" placeholder="Nombre"/>
            <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{id != null && lists.length > 0 ? lists[id].title : 'Listas'}</button>
            <ul className="dropdown-menu">
                {listsItems}
            </ul>
            <button className="btn btn-outline-secondary" type="button" onClick={() =>{
                if(id != null){
                    onPress(id, inputEl.current.value);
                    inputEl.current.value = "";
                }
            }}>Agregar</button>
        </div>
    );
};

export default FormTodos;
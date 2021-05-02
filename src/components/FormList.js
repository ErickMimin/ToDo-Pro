import { useRef } from 'react';

const FormLists = ({onPress}) => {
    const inputEl = useRef(null);
    return(
        <div className="input-group mb-3">
            <input ref={inputEl} type="text" className="form-control" placeholder="Nombre"/>
            <button className="btn btn-outline-secondary" type="button" onClick={() => {
                onPress(inputEl.current.value);
                inputEl.current.value = "";
            }}>Agregar</button>
        </div>
    );
};

export default FormLists;
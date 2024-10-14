import {useState, useContext} from 'react';
import AmateurDriverService from '../../services/AmateurDriverService';
import { AmateurDriverContext } from '../../contexts/AmateurDriverContext';

const DeleteAmateurDriver = () => {

    const {deleteAmateurDriver} = useContext(AmateurDriverContext);
    const [name, setName] = useState("");
    const [deleteStatus, setDeleteStatus] = useState(""); 

    const handleChange = (e) => {
        setName(e.currentTarget.value); 
    }    

    const handleClick = async() => {
        const result = await deleteAmateurDriver(name); 
        if(result === true ){ 
            setDeleteStatus("AmateurDriver ble slettet!");
        }else{
            setDeleteStatus("noe galt skjedde ved sletting!")
        }
        setTimeout(() => {
            setDeleteStatus("");
        }, 5000);
    }

    return (
        <section className='mb-3'>
            <h3>Slett en Amateur Drver</h3>
            <div>
                <label className='p-3'>Angi navent til AmateurDriver for å slette</label>
                <input onChange={handleChange} name="name" value={name} type='text'/>
                <span>{deleteStatus}</span>
                <input onClick={handleClick} type='button' value="Slett amateurDriver"  className="btn-amDriver"/>
            </div>
        </section>
    )
}

export default DeleteAmateurDriver;
import React, { useContext } from 'react';
import { Mycontext } from '../../App';
import './Travelarea.css';


const Travelarea = (props) => {

    const[showarea, setShowarea] =useContext(Mycontext);
    const {title, description, img} = props.place;

    const handletravelarea = () => {
        setShowarea(props.place);
    }

    return (
        <div className='aaa' onClick={handletravelarea}>
            <div className='slide-img' style={{backgroundImage: `linear-gradient(0deg, #000 0%, rgba(0, 0, 0, 0.00) 70.01%),url(${img})`, height: '416px', width: '270px', borderRadius: '20px', marginLeft: '100px'}}>
                <h2 className='title'>{title}</h2>
            </div>
        </div>
    );
};

export default Travelarea;
import React, {useState} from 'react';
import Filter from "../../Filter/Filter";
import Goods from "../../Goods/Goods";


export default function Catalog() {

    const [valueFromChild, setValueFromChild] = useState('all')

    const handleValueFromChild = (value) => {
        setValueFromChild(value)
        console.log(value)
    }


    return (
        <>
            <div className="wrapper-catalog">
                <Filter handleFilter={handleValueFromChild}/>
                <Goods  filterValue={valueFromChild}/>
            </div>
        </>
    )
}
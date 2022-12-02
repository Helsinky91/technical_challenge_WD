import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { getPhoneId } from '../services/phone.servie';
import BeatLoader from "react-spinners/BeatLoader";


function PhoneDetails(props) {

    const navigate = useNavigate();
    const { id } = useParams()

    //states
    const [phoneDetails, setPhoneDetails] = useState([])

    //for loading time
    const [isFetching, setIsFetching] = useState(true)

    //calling API
    useEffect(() => {
        getData() 
    }, [])

    const getData = async () => {
        try {
            const response = await getPhoneId(id)
            setPhoneDetails(response.data)
            console.log(response.data)
            setIsFetching(false)

        } catch (error) {
            navigate("/error")
        }
    }

       //if content is not loading, show spinner
    if (isFetching === true) {
        return (
        <div className="spinner">
            <BeatLoader color="#000000" size={30}/>
        </div> 
        )
    }

    const {name, imageFileName, description, manufacturer, color, price, screen, processor, ram} = phoneDetails

  return ( 
    <div>
        <h1>Check out this {name}</h1>
        <div className='phone-details'>
            <img src={`/images/${imageFileName}`} alt={name} width={200} />
            <p>{description}</p>
            <section>
            <ul>
                <li>Color: {color}</li>
                <li>Price: {price}$</li>
                <li>Screen: {screen}</li>
                <li>Processor: {processor} </li>
                <li>Ram: {ram}</li>
                
            </ul>
                <p>Phone made by {manufacturer}</p>
            </section>
        </div>
    </div>
  )
}

export default PhoneDetails
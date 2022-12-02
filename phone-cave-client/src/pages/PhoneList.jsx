import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { getPhoneList } from '../services/phone.servie';
import BeatLoader from "react-spinners/BeatLoader";
import PhoneDetails from '../components/PhoneDetails';


function PhoneList() {

    const navigate = useNavigate();
    
    //states
    const [phoneList, setPhoneList] = useState([])

    //for loading spinner
    const [isFetching, setIsFetching] = useState(true);

    //calling the API
    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        
        try {
        const response = await getPhoneList();
        setPhoneList(response.data);
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

  return (
    <div>
        <h1>This is a list of our phones:</h1>
        <div >
        {phoneList.map((eachPhone) => {
            return (
                <div key={eachPhone.id}>
                    <Link to={`/phones/${eachPhone.id}`}>
                        <img src={`/images/${eachPhone.imageFileName}`} alt={eachPhone.name} width={200} />
                        
                        <h1>{eachPhone.name}</h1>
                    </Link>
                </div>
            )
        })}
        
        </div>
        {/* <div className='phoneDetails'>
            <PhoneDetails phoneList={phoneList}/>
        </div> */}

    </div>
  )
}

export default PhoneList
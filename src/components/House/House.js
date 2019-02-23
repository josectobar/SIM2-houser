import React from 'react'

export default function House(props) {
    const { id, name, address, city, state, zip_code, mortgage_amount, desire_rent, img_url } = props.house
    
        return(
            <div>
                <button 
                    onClick={() => props.deleteHouseFn(id)}>
                    Delete
                </button>
                <p>Property Name: {name}</p>
                <p>Address: {address}</p>
                <p>City: {city}</p>
                <p>State: {state}</p>
                <p>Zip code: {zip_code}</p>
                <p>Monthly mortgage: {mortgage_amount}</p>
                <p>Desired Rent: {desire_rent}</p>
                <img src={img_url} alt={name} />
            </div>
        )
}

import React, { Component } from 'react'

export default function House(props) {
    const { id, name, address, city, state, zip_code } = props.house
    
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
                <p>Zip: {zip_code}</p>
            </div>
        )
}
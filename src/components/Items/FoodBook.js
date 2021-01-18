import React from 'react'
import Image from 'react-bootstrap/Image'
import FoodBookLogo from '../../assets/FoodBookLogo.png'

export default function FoodBook() {
    return (
        <div>
            <a target="_blank" href="https://evening-hamlet-32394.herokuapp.com/">
            <Image src={FoodBookLogo} thumbnail />
            </a>
        </div>
    )
}

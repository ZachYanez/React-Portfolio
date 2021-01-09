import React from 'react'
import Image from 'react-bootstrap/Image'
import FoodBookLogo from '../../assets/FoodBookLogo.png'

export default function FoodBook() {
    return (
        <div>
            <a target="_blank" href="http://www.frizzcheck.com">
            <Image src={FoodBookLogo} thumbnail />
            </a>
        </div>
    )
}

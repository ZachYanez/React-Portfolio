import React from 'react'
import Image from 'react-bootstrap/Image'
import FrizzCheckLogo from '../../assets/FrizzCheckLogo.png'

export default function FrizzCheck() {
    return (
        <div>
            <a target="_blank" href="http://www.frizzcheck.com">
            <Image src={FrizzCheckLogo} thumbnail />
            </a>
        </div>
    )
}

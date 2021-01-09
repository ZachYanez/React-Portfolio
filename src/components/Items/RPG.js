import React from 'react'
import Image from 'react-bootstrap/Image'
import RPGLogo from '../../assets/RPGLogo.png'

export default function RPG() {
    return (
        <div>
            <a target="_blank" href="https://zachyanez.github.io/randompasswordgenerator/">
            <Image src={RPGLogo} thumbnail />
            </a>
        </div>
    )
}

import React from 'react'
import Image from 'react-bootstrap/Image'
import sayHeyLogo from '../../assets/sayHeyLogo.png'

export default function SayHey() {
    return (
        <div>
            <a target="_blank" href="https://zachyanez.github.io/heyFrom6/">
            <Image src={sayHeyLogo} thumbnail />
            </a>
        </div>
    )
}

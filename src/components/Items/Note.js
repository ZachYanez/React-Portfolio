import React from 'react'
import Image from 'react-bootstrap/Image'
import NoteLogo from '../../assets/NoteLogo.png'

export default function Note() {
    return (
        <div>
            <a target="_blank" href="https://zach-yanez-note-taker.herokuapp.com/notes">
            <Image src={NoteLogo} thumbnail />
            </a>
        </div>
    )
}

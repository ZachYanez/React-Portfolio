import React from 'react'
import Image from 'react-bootstrap/Image'
import BudgetLogo from '../../assets/BudgetLogo.png'

export default function Budget() {
    return (
        <div>
            <a target="_blank" href="https://budgettrackeryanez.herokuapp.com/">
            <Image src={BudgetLogo} thumbnail />
            </a>
        </div>
    )
}

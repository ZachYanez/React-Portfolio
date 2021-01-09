import React from 'react'
import Image from 'react-bootstrap/Image'
import BudgetLogo from '../../assets/BudgetLogo.png'

export default function Budget() {
    return (
        <div>
            <a target="_blank" href="https://zachyanez.github.io/randompasswordgenerator/">
            <Image src={BudgetLogo} thumbnail />
            </a>
        </div>
    )
}

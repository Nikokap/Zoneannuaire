import React from 'react'
import Styled from 'styled-components'
import Search from '../search/search'
import Menu from '../menu/menu'

const Header = () => {
    return (
        <HeaderNav>
            <Menu/>
            <Search/>
        </HeaderNav>
    );
}

const HeaderNav = Styled.div `
    display: flex;
    padding: 5px;
    border-radius: 2px;
    
`

export default Header;
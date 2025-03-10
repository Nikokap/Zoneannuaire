import React from 'react';
import Styled from 'styled-components';

function Menu(){
    return (
        <MenuNav>
            <Menubtn>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 1792 1792"><path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"/></svg>
            </Menubtn>
        </MenuNav>
    );
}

const MenuNav = Styled.div `
    display: flex;
    padding: 5px;
    border-radius: 2px;
`
const Menubtn = Styled.button `
    display: flex;
`
export default Menu;
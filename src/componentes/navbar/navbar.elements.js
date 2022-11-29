import styled from "styled-components";
 
export const Container = styled.div `
width: 100%;
height: 80px;
background-color: #23394d;
` ;

export const Wrapper = styled.div `
width: 100%;
max-width: 1300px;
height: 100%;
display: flex;
justify-content: space-evenly;
margin: auto;
flex-wrap: wrap;
` ;


export const LogoContainer = styled.div `
margin-left: 0.5rem;
display: flex;
align-items: center;
font-size: 1.2rem;
font-family: sans-serif;

svg{
    fill: #e07924;
    margin-right: 0.5rem;
}
` ;

export const Menu = styled.ul `
height: 100%;
display: flex;
justify-content: space-between;
list-style: none;

@media screen and (max-width: 960px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    left: ${({open}) => open ? "0" : "-100%"};
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
}
`;

export const MenuItem = styled.li `
heigh: 100%;

@media screen and (max-width: 960px){
    width: 100%;
    height: 70px;
    justify-content: center;
    display: flex;
}
` ;

export const MenuItemLink = styled.a `
display: flex;
justify-content: center;
align-items: center;
height: 100%;
padding: 0.5rem 2.5rem ;
color: #64b2ff;
font-family: sans-serif;
font-size: 1rem;
font-weight: 300;
cursor: pointer;
trnaisition: 0.5s all ease;


&:hover { 
    color: #fff;
    background-color: #e0792a;
    transition: 0.5 all ease;
 }

 @media screen and (max-width: 960px){
    width: 100%;
 }
` ;

export const MobileIcon = styled.div `
display: none;

 @media screen and (max-width: 960px){
    display: flex;
    align-items: center;
    cursor: pointer;

    svg {
        fill: #e07924;
        margin-right: 0.5rem;
    }
 }
`
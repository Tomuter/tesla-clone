import React,{useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import {selectCars}  from '../features/car/carSlice';
import {useSelector} from 'react-redux';


function Header() {

  const[burgerStatus,setBurgerStatus]=useState(false);

  const openBurger=()=>{
    setBurgerStatus(true);
  }
  const closeBurger=()=>{
    setBurgerStatus(false);
  }
  //from redux
  const cars=useSelector(selectCars)

  return (
    <Container>
      <a href='www.##.com'>
        <img src='images/logo.svg' alt='logo' />
      </a>
      <Menu>
        {cars && cars.map((car,i)=>(
           <a key={i} href="www.#.com">{car}</a>
        ))}
         
      </Menu>
      <RightMenu>
         <a href="www.#.com">Shop</a>   
         <a href="www.#.com">Tesla Account</a> 
         <CustomMenu  onClick={openBurger}/>         
      </RightMenu>
      <BurgerNav show={burgerStatus}>
        <ShiftWrapper>
           <CustomClose onClick={closeBurger} />
        </ShiftWrapper>       
        <li><a href="#.#.com"> Accessories</a></li>
        <li><a href="#.#.com"> Existing Inventory</a></li>
        <li><a href="#.#.com"> CyberTruck</a></li>
        <li><a href="#.#.com"> Model-S</a></li>
        <li><a href="#.#.com"> Model-3</a></li>
        <li><a href="#.#.com"> Model-X</a></li>
        <li><a href="#.#.com"> Model-Y</a></li>
        <li><a href="#.#.com"> Roadster</a></li>        
      </BurgerNav>
    </Container>
  )
}

export default Header;

const Container= styled.div`
  min-height:60px !important; 
  position:fixed !important; 
  display:flex !important; 
  align-items:center !important; 
  justify-content:space-between !important;
  padding:0 20px !important; 
  top:0 !important; 
  left:0 !important; 
  right:0 !important; 
  z-index:1 !important;
`
const Menu=styled.div`
    display:flex !important; 
    align-items:center !important; 
    justify-content:center !important; 
    flex:1 !important; 

    a{
      font-weight:600 !important; 
      text-transform:uppercase !important; 
      padding:0 10px !important; 
      flex-wrao:nowrap !important; 
    }
    @media (max-width:760px){
      display : none !important;
    }
`
const RightMenu=styled.div`
  display:flex  !important; 
  align-items:center !important; 

a{
  font-weight:600 !important; 
  text-transform:uppercase !important; 
  margin-right:10px !important; 
  
}
`
const CustomMenu=styled(MenuIcon)`
cursor:pointer !important; 
`
const BurgerNav =styled.div`
   position:fixed !important;
   top: 0 !important;
   bottom: 0  !important;
   right: 0  !important;
   background:white !important;
   width:300px !important;
   z-index:16 !important;
   list-style:none;
   padding: 20px;
   transform: ${props=>props.show?'translateX(0)':'translateX(100%)'};
   transition: transform 0.2s ease-in;
   li{
     padding:15px 0;
     border-bottom:1px solid rgba(0,0,0,0.2);

     a{
       font-weight:600;
     }

   }
`
const CustomClose=styled(CloseOutlinedIcon)`
  cursor:pointer;
`
const ShiftWrapper=styled.div`
   display:flex;
   justify-content:flex-end;
`
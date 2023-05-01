import {React, useState } from 'react'
import { Flex,Img,Button } from '@chakra-ui/react'
import { HamburgerIcon,CloseIcon } from '@chakra-ui/icons'
import '../style.css'

const Nav=(props)=> {
    const[menu,setMenu]=useState(false)
  return (<>
    <Flex flexDir={'row'} justifyContent={'space-between'} padding={props.val?'20px 30px':'20px 70px'} alignItems={'center'} >
        <div className='main_font'>Remine</div>
        {!props.val && <div className={'header_links'}>
            <a href="#about">About Us</a>
            <a href="#contact">Contact Us</a>
            <a href="#">Join Us</a>
        </div> }
        {props.val && <>{menu?<CloseIcon width={'20px'} height={'20px'} onClick={()=>setMenu(!menu)}/>:<HamburgerIcon width={'25px'} height={'25px'} onClick={()=>setMenu(!menu)}/>}</> }      
    </Flex>
    {props.val && <div className={menu?'links_mobile_open':'links_mobile_close'}>
            <div style={{marginTop:'20%'}}>
            <a href="#about" onClick={()=>setMenu(!menu)}>About Us</a>
            <a href="#contact" onClick={()=>setMenu(!menu)}>Contact Us</a>
            <a href="#" onClick={()=>setMenu(!menu)}>Join Us</a>
            </div>
        </div> }
    </>
  )
}

export default Nav
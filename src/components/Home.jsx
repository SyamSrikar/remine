import React from 'react'
import { Flex, Image, Img } from '@chakra-ui/react'
import Nav from './Nav'

const Home=(props) =>{
  return (
    <>
    <Flex flexDir={'column'}>
        <Nav val={props.value}/>
        <Flex width={'100%'} height={props.value && '80vh'} marginTop={props.value && '20%'}>
            {!props.value && <Flex width={!props.value && '50%'} >
                <Flex  className='home_content' flexDir={'column'}>
                    <div className='home_main_text'>
                        <p>Be part of the<br/>solution to <br/>E-Waste pollution</p>
                    </div>
                    <div className='home_sub_text'>
                        <p>E-waste is toxic.<br/>Let's work together to protect<br/>the planet.</p>  
                    </div>
                </Flex>
            </Flex>}
            <Img src={process.env.PUBLIC_URL+'/images/logo_home.jpg'} width={props.value?'100%':'50%'} height={'100%'} marginTop={props.value && '30%'} objectFit={'contain'} opacity={props.value && '0.5'}/>
        </Flex>
    </Flex>
    {props.value &&
        <Flex className='home_content_mobile' flexDir={'column'}>
                    <div className='home_main_text home_main_text_mobile'>
                        <p>Be part of the<br/>solution to <br/>E-Waste pollution</p>
                    </div>
                    <div className='home_sub_text home_sub_text_mobile'>
                        <p>E-waste is toxic.<br/>Let's work together to protect<br/>the planet.</p>  
                    </div>
                </Flex>
    }
    </>
  )
}

export default Home
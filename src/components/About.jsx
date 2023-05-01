import React from 'react'
import { Flex,Img, textDecoration } from '@chakra-ui/react'

const About=(props)=> {
  return (

    <Flex flexDir={'column'} marginTop={'30px'} marginBottom={'50px'} id='about'>
        <Flex flexDir={'column'} width={'100%'} justifyContent={'center'} textAlign={'center'} margin={'50px 0px'}>
            <div className='about_heading'>We Are <span className='remine_india'>Remine India</span></div>
            <div className={props.value?'about_tagline tagline_mobile':'about_tagline'} >Recycling India's e-waste and Li batteries for a <span className='span sustainable'>sustainable</span> future.</div>
        </Flex>
        <Flex width={'100%'} justifyContent={'center'} flexDir={props.value && 'column'}>
            {!props.value &&<Flex width={'40%'} justifyContent={'center'} marginTop={props.value && '-50px'} >
                <Img src={process.env.PUBLIC_URL+'/images/img1.jpg'} width={props.value?'100vw':'70%'} height={props.value?'75vh':'100%'} opacity={props.value && '0.2'}  />
            </Flex>}
            {props.value && <Flex className={'about_container_mobile'}>
                <p className={'about_us about_mobile'}>We are specialized in the <span className='span recycling'>recycling</span>  of e-waste and Li batteries.
                We are committed to ensure that these materials are disposed of in a safe and sustainable manner, <span className='span reducing'>reducing</span> the environmental impact of electronic waste.<br/><br/>
                Our team of experts are well-versed in the latest technologies and methods for handling e-waste, and they are dedicated to providing a transparent and responsible recycling process.<br/><br/></p>
                </Flex>}
            {!props.value && 
             <Flex className={props.value?'about_container_mobile':'about_container'}>
                <p className={props.value?'about_us about_mobile':'about_us'}>We are specialized in the <span className='span recycling'>recycling</span>  of e-waste and Li batteries.
                We are committed to ensure that these materials are disposed of in a safe and sustainable manner, <span className='span reducing'>reducing</span> the environmental impact of electronic waste.<br/><br/>
                Our team of experts are well-versed in the latest technologies and methods for handling e-waste, and they are dedicated to providing a transparent and responsible recycling process.<br/><br/>
                {!props.value && 'Overall, Remine India Private Limited is committed to making a positive impact on the environment and promoting a more sustainable future through responsible e-waste recycling.'} </p>
            </Flex>}
        </Flex>
    </Flex>
   
  )
}

export default About
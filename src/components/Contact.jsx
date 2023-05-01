import React from 'react'
import { Flex } from '@chakra-ui/react'
import {EmailIcon  } from '@chakra-ui/icons'


const Contact=(props)=> {
  return (
        <Flex id="contact" flexDir={props.value?'column':'row'} margin={'100px 0px 50px 0px'}>
            <Flex width={props.value?'100%':'50%'} justifyContent={'center'} flexDir={'column'}>
                <Flex flexDir={'column'}  margin={'auto'}>
                    <div className='contact_heading'>Get In Touch!</div><br/>
                    <div style={{height:'8px',backgroundColor:'red',borderRadius:'20px',width:'50px'}}></div><br/>
                    <div style={{marginBottom:'15px'}}><input type='text' size={props.value?'30':'50'} placeholder='Enter Your Name'></input></div>
                    <div style={{marginBottom:'15px'}}><input type='email' size={props.value?'30':'50'} placeholder='Enter valid email address'></input></div>
                    <div style={{marginBottom:'15px'}}><textarea rows={props.value?'3':"5"} cols={props.value?'30':"50"} placeholder='Enter Your Message'></textarea></div>
                    <div className='submit_button'>Submit</div><br/><br/>
                    <div className='details'><EmailIcon width={'35px'} height={'35px'}/><span style={{padding:'20px'}}>director@remine.in</span></div>
                </Flex>
            </Flex>
            <Flex width={props.value?'100%':'50%'} flexDir={'column'} padding={!props.value && '30px'} marginTop={props.value && '30px'}>
                <Flex justifyContent={'center'}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13951.45264078263!2d79.6763416!3d29.0506283!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a08b264fbb876d%3A0x7c65bace743dcc5!2sRemine%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1682834889151!5m2!1sen!2sin" className={props.value?'map_mobile':'map_desktop'} style={{border:'0'}} zoom="3" allowfullscreen="" loading="lazy" tabindex="0" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </Flex>
            </Flex>
        </Flex>
  )
}

export default Contact

import { Text, CloseButton, Box,  Heading, ModalBody, Square} from '@chakra-ui/react'
import React from 'react'
import {BiCheck, BiCopy, BiPhone, BiWallet } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

const JobScreen = ({profile,close}) => {

  const skills = ["React", "Html 5", "Css 3", "Javascript", "Lighting"];

  return (
        <Box p='1.2em'>
            <Text fontWeight="700" fontSize="28px" lineHeight="35px">Job information</Text>
            <Box width="40px" h="40px" border="1px solid #DBE1E7" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                <CloseButton  onClick={close}  size='md' color="red" />
            </Box>
            
            <Box display="flex" bg="#FFF8F5" p="1rem">
                <Square size="100px" border="1px solid #DBE1E7">Image</Square>
                <Box pl="1.3rem"  w="400px">
                    <Box display="flex" justifyContent="space-between">
                        <Heading fontWeight="700" fontSize="16px" lineHeight="20px" color="#090909">Stephen Nico</Heading>
                        <Box display="flex" alignItems="center">
                            <Box w="8px" h="8px" bg="#28EC09" borderRadius="50%" mr="0.6rem"></Box>
                            <Text fontWeight="500" fontSize="12px" lineHeight="21px" color="#666666">Active</Text>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="space-between" pt="1.5rem">
                        <Box display="flex" alignItems="center">
                            <Box h="32px" w="32px" bgColor="#FFE1D6" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                                <BiPhone width="12.5px" height="12.5px" color='#FE4600' />
                            </Box>
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="12px" lineHeight="13.97px">Phone Number</Text>
                                <Text color="#0D0D0D" fontWeight="500" fontSize="12px" lineHeight="16.8px" pt="0.6rem">+2349023421755</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <Box h="32px" w="32px" bgColor="#FFE1D6" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                                <MdEmail width="12.5px" height="12.5px" color='#FE4600' />
                            </Box>
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="12px" lineHeight="13.97px">Email</Text>
                                <Text color="#0D0D0D" fontWeight="500" fontSize="14px" lineHeight="16.8px" pt="0.6rem">Malaika.br@gmail.com</Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box pt="1.5rem" display="flex" justifyContent="space-between" alignItems="center">
                        <Box display="flex" alignItems="center">
                            <Box h="32px" w="32px" bgColor="#FFE1D6" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                                <BiWallet width="12.5px" height="12.5px" color='#FE4600' />
                            </Box>
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="12px" lineHeight="13.97px">Wallet Address</Text>
                                <Text color="#0D0D0D" fontWeight="500" fontSize="14px" lineHeight="16.8px" pt="0.6rem">npub13tkurcqqjd4...8d4c9hk57lhq7r5gy4</Text>
                            </Box>
                        </Box>
                        
                        <BiCopy width="12.5px" height="12.5px" />
                        
                    </Box>
                </Box>
            </Box>

            <Box bg="#FFF8F5" p="1rem">
                <Heading my='0.5em' fontSize={'14px'}>Skills</Heading>
                <Box display="flex" gap="2rem" mt="1rem" flexWrap="wrap">
                    {skills.map(skill => (
                        <Box border="1px solid #666666" bgColor="#FFF" p="0.1rem 1.9rem" borderRadius="32px">
                            <Text color="#090909" lineHeight="21px" fontSize="12px" fontWeight="400">{skill}</Text>
                        </Box>
                    ))}
                </Box>
            </Box>

            <Box bg="#FFF8F5" p="2rem" mt="1.5rem">
                <Heading color="#090909" fontSize="16px" lineHeight="20px" fontWeight="700">Job Description</Heading>
                <Box display="flex" justifyContent="space-between" pt="1rem">
                    <Box>
                        <Text fontWeight="500" lineHeight="21px" fontSize="12px">Name</Text>
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px" pt="0.6rem">Project #876364</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="500" lineHeight="21px" fontSize="12px">Duration</Text>
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px" pt="0.6rem">1 month</Text>
                    </Box>
                    <Box>
                        <Text fontWeight="500" lineHeight="21px" fontSize="12px">price</Text>
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px" pt="0.6rem">0.5BTC</Text>
                    </Box>
                </Box>

                <Box pt="2rem">
                    <Text fontWeight="400" color="#666666" fontSize="11px" lineHeight="18.2px">
                        Led the redesign of the booking process for Airbnb's mobile app, resulting in a 30% increase in conversion. 
                        Led the redesign of the booking process for Airbnb's mobile app, Airbnb's mobile app, 
                        resulting in a 30% increase in conversion of the wor......<span style={{fontWeight:"700", color:"#FE4600"}}>SEE MORE</span>
                    </Text>
                </Box>
            </Box>

            <Box bg="#FFF8F5" p="2rem" mt="1.5rem">
                <Heading fontWeight="700" fontSize="15px" lineHeight="20px" color="#090909">Project information</Heading>

                <Box display="flex" pt="1.2rem" pl="2rem" pr="2.5rem">
                    <Box bgColor="#00D26C" h="40px" w="40px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <BiCheck color='#FFFFFF' size="18px"  />
                    </Box>
                    <Box width="160px" alignSelf="center" border="dashed 1px #666666"></Box>
                    <Box bgColor="#00D26C" h="40px" w="40px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <BiCheck color='#FFFFFF' size="18px"  />
                    </Box>
                    <Box width="135px" alignSelf="center" border="dashed 1px #666666"></Box>
                    <Box bgColor="#00D26C" h="40px" w="40px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <BiCheck color='#FFFFFF' size="20px"  />
                    </Box>
                    <Box width="135px" alignSelf="center" border="dashed 1px #666666"></Box>
                    <Box bgColor="#00D26C" h="40px" w="40px" borderRadius="50%" display="flex" alignItems="center" justifyContent="center">
                        <BiCheck color='#FFFFFF' size="20px"  />
                    </Box>
                </Box>

                <Box display="flex" justifyContent="space-between" pt="1rem">
                    <Box display="flex" justifyContent="center" flexDir="column" alignItems="center">
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px">Screening</Text>
                        <Text fontWeight="500" lineHeight="13.97px" fontSize="11px" fontStyle="italic" pt="0.6rem">March 20, 2023</Text>
                    </Box>
                    <Box display="flex" justifyContent="center" flexDir="column" alignItems="center">
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px">Project</Text>
                        <Text fontWeight="500" lineHeight="13.97px" fontSize="11px" fontStyle="italic" pt="0.6rem">March 20, 2023</Text>
                    </Box>
                    <Box display="flex" justifyContent="center" flexDir="column" alignItems="center">
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px">Review</Text>
                        <Text fontWeight="500" lineHeight="13.97px" fontSize="11px" fontStyle="italic" pt="0.6rem">April 10, 2023</Text>
                    </Box>
                    <Box display="flex" justifyContent="center" flexDir="column" alignItems="center">
                        <Text fontWeight="700" lineHeight="21px" fontSize="13px">Payment</Text>
                        <Text fontWeight="500" lineHeight="13.97px" fontSize="11px" fontStyle="italic" pt="0.6rem">April 22, 2023</Text>
                    </Box>
                </Box>
            </Box>
            <Box display="flex" alignItems="center" bgColor="#FE4600" p="7px 10px" justifyContent="center" mt="0.5rem" mb="0.5rem">
                <Text color='#FFFFFF' fontWeight="600" fontSize="13px" lineHeight="28px" mr="1rem">Generate Payment request</Text>
                <BsArrowRight color='#FFFFFF' size="16px" />
            </Box>
        </Box>

  )
}




export default JobScreen;
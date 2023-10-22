import { Box, Heading, Text } from '@chakra-ui/layout';
import React from 'react';
import TopNav from '../../components/layouts/TopNav';
import { BsClock } from 'react-icons/bs';
import { BiBrain, BiBriefcase, BiCalendar, BiCalendarEvent } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { GrLocation } from 'react-icons/gr';
import { SiOpera } from 'react-icons/si';
import { FaFlag, FaUserFriends } from 'react-icons/fa';
import { WorKCard } from './find-work';
import Footer from '../../components/layouts/Footer';

const JobDetail = () => {

    const jobs = [
        {
            title: "Bitcoin Designer to design a Bitcoin Wallet with full functional prototype",
              priceType: "Fixed-price",
              level: "Intermediate",
              price: "$100",
              time: "6 hours",
              description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",        
              ratings: "4.8",
              location: "Remote",
        },
        {
            title: "Bitcoin Designer to design a Bitcoin Wallet with full functional prototype",
              priceType: "Fixed-price",
              level: "Intermediate",
              price: "$100",
              time: "6 hours",
              description: "Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",        
              ratings: "4.8",
              location: "Remote",
        },

    ]

    const skills = ["User Interface Design", "User Experience Design", "Wire-froming", "Graphic Design", "Responsive Design", "Prototyping", "Web Design"];
    const hoverEffect = {
        ":hover": {
            color: "white",
            bgColor: "#FE4600",
            cursor: "pointer"
        }
    };
  return (
    <Box bgColor="white">
        <TopNav />
        <Box p="4px 80px" bgColor="#fff">
            <Heading fontWeight="700" fontSize="32px" lineHeight="48px" color="#1A1A1A">Job detail</Heading>
            <Box border="1px solid #DBE1E7" borderRadius="20px" mt="2rem">

                <Box p="2.5rem" borderBottom="1px solid #DBE1E7">
                    <Heading color="#090909" fontWeight="700" fontSize="28px" lineHeight="42px">Bitcoin Designer to design a Bitcoin Wallet with full functional prototype</Heading>
                    <Box display="flex" pt="2rem">
                        <Text color="#FE4600" fontWeight="700" fontSize="20px" lineHeight="30px">Bitcoin Designer</Text>
                        <Box display="flex" alignItems="center">
                            <Box width="6px" height="6px" bgColor="#E0E0E0" borderRadius="50%" m="0 1rem"></Box>
                            <MdLocationOn size="20px" color='#090909' />
                            <Text ml="0.6rem" fontWeight="500" lineHeight="24px" fontSize="16px">Remote</Text>
                        </Box>
                    </Box>
                    <Text fontWeight="500" fontSize="16px" lineHeight="24px" color="#666666" pt="1.4rem">Posted 23 hours ago</Text>
                </Box>

                <Box p="2.5rem" borderBottom="1px solid #DBE1E7">
                    <Text color="#090909" fontWeight="400" fontSize="18px" lineHeight="30px">
                     We are seeking a talented UX/UI designer to join our team and help us complete our business event marketplace. 
                     The designer will be responsible for creating visually appealing and user-friendly interfaces and experiences for our platform.
                     The ideal candidate should have a strong understanding of UX/UI principles and be able to apply them to solve complex design challenges. 
                     Excellent communication skills and the ability to collaborate with cross-functional teams are essential. 
                     Familiarity with design tools such as Sketch, Adobe XD, or Figma is required. Experience designing for marketplaces or similar platforms is a plus.
                    </Text>
                </Box>

                <Box p="2.5rem" borderBottom="1px solid #DBE1E7" display="flex" justifyContent="space-between" flexWrap="wrap">
                    <Box display="flex" alignItems="center">
                        <BsClock size={"20px"} color='#FE4600'/>
                        <Box pl="1rem">
                            <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Hourly</Text>
                            <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">28 hours/week</Text>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <BiCalendar size={"20px"} color='#FE4600'/>
                        <Box pl="1rem">
                            <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Project Duration</Text>
                            <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">1 to 3 months</Text>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <BiBrain size={"25px"} color='#FE4600'/>
                        <Box pl="1rem">
                            <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Experience</Text>
                            <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">Mid Level/Intermediate</Text>
                        </Box>
                    </Box>
                    <Box display="flex" alignItems="center">
                        <SiOpera size={"20px"} color='#FE4600'/>
                        <Box pl="1rem">
                            <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Rate</Text>
                            <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">0.000897 BTC/ Month</Text>
                        </Box>
                    </Box>

                </Box>

                <Box p="2.5rem" borderBottom="1px solid #DBE1E7">

                    <Heading fontWeight="700" fontSize="20px" lineHeight="30px" color="#090909">Required Skill</Heading>
                    <Box display="flex" gap="2rem" mt="1.5rem" flexWrap="wrap">
                        {skills.map(skill => (
                            <Box border="1px solid #666666" bgColor="#DBE1E7" p="4px 20px" borderRadius="32px">
                                <Text color="#090909" lineHeight="30px" fontSize="20px" fontWeight="400">{skill}</Text>
                            </Box>
                        ))}
                    </Box>

                </Box>

                <Box p="2.5rem" borderBottom="1px solid #DBE1E7">
                    <Heading fontWeight="700" fontSize="20px" lineHeight="30px" color="#090909">About The Client</Heading>
                    <Box p="1rem 0" display="flex" justifyContent="space-between">
                        <Box display="flex" alignItems="center">
                            <GrLocation size="20px" color='#FE4600' />
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Location</Text>
                                <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">New Zealand</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <SiOpera size="20px" color='#FE4600' />
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Payment</Text>
                                <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">Payment Verified</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <FaUserFriends size="20px" color='#FE4600' />
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Company Size</Text>
                                <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">Small Company (2-9 people)</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <BiBriefcase size="20px" color='#FE4600' />
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Jobs Posted</Text>
                                <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">3 jobs posted</Text>
                            </Box>
                        </Box>
                        <Box display="flex" alignItems="center">
                            <BiCalendarEvent size="20px" color='#FE4600' />
                            <Box pl="1rem">
                                <Text color="#666666" fontWeight="400" fontSize="14px" lineHeight="21px">Member Since</Text>
                                <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px">Oct 16, 2023</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box p="2.5rem" display="flex" justifyContent="space-between">
                    <Box display="flex">
                        <Box p="20px 40px" border="1px solid #FE4600" color="#FE4600" sx={hoverEffect} mr="1.5rem" borderRadius="4.13px">
                            <Text fontSize="20px" lineHeight="30px" fontWeight="500">Apply Now</Text>
                        </Box>
                        <Box p="20px 40px" border="1px solid #FE4600" color="#FE4600" sx={hoverEffect} borderRadius="4.13px">
                            <Text fontSize="20px" lineHeight="30px" fontWeight="500">Save Job</Text>
                        </Box>
                    </Box>

                    <Box display="flex" alignItems="center">
                        <FaFlag size="18px" color='#FE4600'/>
                        <Text fontSize="20px" lineHeight="30px" fontWeight="500" color='#FE4600' ml="1rem">Report Job Post</Text>
                    </Box>
                </Box>

            </Box>
        </Box>


        <Box p="2rem 80px">
            <Heading color="#1A1A1A" fontWeight="700" fontSize="32px" lineHeight="48px">Similar Job Posts</Heading>
            {
                jobs.map(job => <WorKCard title={job.title} priceType={job.priceType} level={job.level} price={job.price} time={job.time} description={job.description} ratings={job.ratings} location={job.location} />)
            }
        </Box>

        <Box display="flex" justifyContent="center" p="2rem 0 10rem 0">
             <Box p="10px 40px" border="1px solid #FE4600" color="#FE4600" sx={hoverEffect} mr="1.5rem" borderRadius="4.13px">
                <Text fontSize="20px" lineHeight="30px" fontWeight="500">See All</Text>
            </Box>
        </Box>

        <Footer />
    </Box>
  )
}

export default JobDetail
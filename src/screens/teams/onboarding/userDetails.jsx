import { useParams } from 'react-router-dom';
import useGoBack from '../../../hooks/useGoBack';
import Spinner from '../../../components/layouts/Spinner';
import { useEffect, useRef, useState } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel, Circle, Box, Flex } from '@chakra-ui/react'
import AdminAsideBar from '../../../components/layouts/AdminAsideBar';
import Nda from './onboarding-steps/nda';
import useTeams from '../../../hooks/useTeams';
import JiraTicket from './onboarding-steps/jira-ticket';

const UserOnboardingDetails = ()=>{

    const goback = useGoBack({})

    
    const { id } = useParams();


    const {onboardings,fetchOnboarding} = useTeams()


    const onboardingProfile = onboardings?.find(entry=>entry?._id ===id)

    const {currentStep} = onboardingProfile || {};

    const onboardingSteps =  ['NDA','JIRA ISSUE','AZURE USER','PERSONAL INFO']

    const [activeTab,setActiveTab] = useState(null);

    const handleTabsChange = (index) => {
        setActiveTab(index)
    }
    

    const handleTab = (type)=>{
        setActiveTab(prev=>type ==='next'?prev+1:prev-1 )
    }

    const renderTabStyle =(indexV)=> ({
        ...currentStep ===indexV?  
            {
             bg: 'var(--primary-color)',
             color:'white'
            }
        :indexV< currentStep?
            {bg:'#00DE31'}
        :
            {
                bg:'color',
                border:'1px solid var(--hash)',
                color:'var(--hash)'
            } 
    }) 

    const fetchOnboardingRefs= useRef(fetchOnboarding);

    useEffect(()=>{
       !onboardings.length && fetchOnboardingRefs.current() 
    },[])

    useEffect(()=>{
        onboardingProfile && setActiveTab(currentStep-1)
    },[onboardingProfile])

    if(activeTab ===null){
        return(  
            <Spinner full/>
        )
    }


    return(
        <AdminAsideBar>
          {goback}
        
         <Tabs index={activeTab} onChange={handleTabsChange} mt={'0.9em'}>
            <TabList borderBottom={'none'}>
                {
                    onboardingSteps.map((step,index)=>{   
                        let indexV = index+1
                        return(                     
                            <Tab isDisabled={currentStep < indexV} _selected={{borderBottom:'none'}} p={0} alignItems={'flex-start'} flexDirection={'column'} key={index}>
                                <Flex align='center'>

                                    <Circle size='60px' 
                                     {...renderTabStyle(indexV)}
                                     fontSize={'19px'} 
                                    > 
                                        {indexV} 
                                    </Circle>

                                    <Box w='75px' borderTop={'2px solid #DADADA'} fontSize={'1px'} color='transparent'  >  a </Box>


                                </Flex>

                                <Box pl='0.4em' mt='0.5em' fontSize={'13px'}>
                                    {step}
                                </Box>
                            </Tab>
                        )                        
                    })
                }
            </TabList>

            <TabPanels>
                <TabPanel>
                    <Nda handleTab={handleTab} profile={onboardingProfile} />
                </TabPanel>
                <TabPanel>
                    <JiraTicket handleTab={handleTab} profile={onboardingProfile} />
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
           

        </AdminAsideBar>
    )

}

export default UserOnboardingDetails;
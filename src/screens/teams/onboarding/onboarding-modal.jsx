import { Box, Flex, Text } from "@chakra-ui/react";
import TextInput from "../../../widgets/Text";
import { GrClose } from "react-icons/gr";
import InputElement from "../../../widgets/Input";
import { useState } from "react";
import useValidate from "../../../hooks/useValidate";
import Btn from "../../../widgets/Button";
import useAuthActions from "../../../hooks/useAuth";




const StartOnboardingModal = ({initiateOnboarding,close})=>{


    const {isRequired} = useValidate()
    const {profile} = useAuthActions()
    const [onboardingState,setOnboardinState] = useState({
        contactEmail:'',
        name:'',
        ccEmail:profile?.sjultraEmail
    })

    const [isLoading,setIsLoading] = useState(false)

    const handleChange = (e)=>setOnboardinState(prev=>({
        ...prev,
        [e?.target?.name]:e?.target?.value
    }));


    const submit = (e)=>{
        e?.preventDefault();

        let error = isRequired(Object.values(onboardingState));

        if(!error) initiateOnboarding({
            ...onboardingState,setIsLoading
        });


    }

    return(
        <Box p='2em 2.5em'>

            <Flex align={'center'} justifyContent={'space-between'}>
                <TextInput weight={600}>
                    Onboard new user 
                </TextInput>

                <GrClose onClick={close} cursor='pointer' fontSize={'15px'} color='#827777'/>

            </Flex>
            <Text mt='1.5em' color='#827777'>
                Please enter the following to initiate onboarding process for new user 
            </Text>        

            <Flex
             mt="1em"
             direction={{ base: 'column'}}
             gap={'2em'} as={'form'} onSubmit={submit} >

                <InputElement name='name' onChange={handleChange} placeholder={''} label='Full name'/>

                <InputElement name='contactEmail' onChange={handleChange} label='Email address'/>

                <Btn loading={isLoading} type='submit'>Submit</Btn>

            </Flex>
            
                



        </Box>
    )
}

export default StartOnboardingModal;

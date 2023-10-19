import { Box, Center, Flex,  Text, useToast } from "@chakra-ui/react"
import TextInput from "../../../../widgets/Text"
import Btn from "../../../../widgets/Button"
import InputElement from "../../../../widgets/Input"
import {  useRef, useState } from "react"
import useValidate from "../../../../hooks/useValidate"
import useTeams from "../../../../hooks/useTeams"


const JiraTicket = ({profile,handleTab})=>{

    const formRef = useRef();

    let {isRequired} = useValidate();

    let {updateOnboarding} = useTeams();

    const [isSubmitting,setSubmitting] = useState({
        type:'',
        submitting:false
    });

    const {currentStep,_id} = profile;

    const [confirm,setConfirm] = useState (currentStep >1 || false)
   
    const {type:loadingType,submitting} = isSubmitting;

    const toast = useToast();

    const resendNda = async()=>{
        
        const formData = new FormData(formRef.current);
        
        const values = {
            _id
        };

        formData.forEach((value, key) => {
            values[key] = value;
        });

        let error = isRequired(Object.values(values));

        if(!error){

            try{
                setSubmitting({
                    type:'resend',
                    submitting:true,
                });

                let {status,data} = await updateOnboarding(values,true);
                if(status===200){
                    toast({
                        status:'success',
                        position:'top',
                        title:'Success',
                        description:'NDA email resent'
                    })
                }
            }
            catch(err){
                console.log('err caught',err)
                toast({
                    status:'error',
                    position:'top',
                    title:'success',
                    description:'Oops, an error occured'
                })
            }
            finally{
                setSubmitting({type:'',submitting:false})
            }

        };

    }

    const nextStep = async()=>{
        if(currentStep===1){
            try{
                setSubmitting({
                    type:'next',
                    submitting:true,
                })

                let {status} = await updateOnboarding({
                    _id,
                    ndaSigned:true,
                    currentStep:2,
                });
                if(status===200){
                    handleTab();
                };

            }
            catch(err){
                console.log('err')
                toast({
                    status:'error',
                    position:'top',
                    title:'success',
                    description:'Oops, an error occured'
                })
            }
            finally{
                setSubmitting({type:'',submitting:false})
            }
        }
        else{
            handleTab();
        }


    }


    console.log('jml issue',profile);

    return(

        <Box mt='0.5em'>
           
            <TextInput>Jira Onboarding Ticket</TextInput>

            <Text color='var(--hash)' mt='0.8em' fontSize={'13px'} >
                Create Jira issue to track the onboarding of {profile?.name}
            </Text>

            <Flex direction={'column'} ref={formRef} as='form' mt='1.5em' gap={{lg:'1em',xl:'1.5em' }}>

                <InputElement 
                 defaultValue={profile?.name} flex={1} label={'Full name'} name='name' 
                 preview={profile?.jmlIssue}/>

                <InputElement defaultValue={profile?.jmlIssue} 
                 flex={1} label={'Contact email'} name='contactEmail' preview={profile?.jmlIssue}/>


                <Flex ref={formRef} as='form' gap={{lg:'2em',xl:'3em' }}>

                    <InputElement defaultValue={profile?.name} flex={1} label={'Asignee'} 
                     name='name' preview={profile?.jmlIssue}/>

                    <InputElement defaultValue={profile?.jmlIssue} 
                     flex={1} label={'Contact email'} name='contactEmail' preview={profile?.jmlIssue}/>

                </Flex>

            </Flex>



            <Btn mt='1.5em' loading={submitting && loadingType==='resend'} 
             onClick={resendNda} px='1.2em'>
                Resend NDA Email
            </Btn>
 


            <Center mt='1.8em'>
                <Btn onClick={nextStep} disabled={!confirm} 
                    loading={submitting && loadingType==='next'} fontSize={'17px'}>
                    Next Step
                </Btn>
            </Center>

 
        </Box>


    )
}

export default JiraTicket
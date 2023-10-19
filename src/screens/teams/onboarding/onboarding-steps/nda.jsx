import { Box, Center, Flex,  Text, useToast } from "@chakra-ui/react"
import TextInput from "../../../../widgets/Text"
import Btn from "../../../../widgets/Button"
import InputElement from "../../../../widgets/Input"
import {  useRef, useState } from "react"
import useValidate from "../../../../hooks/useValidate"
import useTeams from "../../../../hooks/useTeams"


const Nda = ({profile,handleTab})=>{

    const formRef = useRef()


    let {isRequired} = useValidate()

    let {updateOnboarding} = useTeams()

    const [isSubmitting,setSubmitting] = useState({
        type:'',
        submitting:false
    })

    const {currentStep,_id} = profile

    const [confirm,setConfirm] = useState (currentStep >1 || false)
   
    const {type:loadingType,submitting} = isSubmitting;


    const toast = useToast()

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

        }

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

    console.log('confirmed',confirm)


    return(

        <Box mt='0.5em'>
           
            <TextInput>Send Non-Disclosure Agreement</TextInput>

            <Text color='var(--hash)' mt='0.8em' fontSize={'13px'} >
                View status of NDA agreement
            </Text>

            <Flex ref={formRef} as='form' mt='1.5em' gap={{lg:'2em',xl:'3em' }}>

                <InputElement defaultValue={profile?.name} flex={1} label={'Full name'} name='name' preview={true}/>

                <InputElement defaultValue={profile?.contactEmail} flex={1} label={'Contact email'} name='contactEmail' preview={true}/>

            </Flex>

            <Btn mt='1.5em' loading={submitting && loadingType==='resend'} 
             onClick={resendNda} px='1.2em'>
                Resend NDA Email
            </Btn>
 

            <Box mt='1em'>

                <TextInput>Verify</TextInput>
            
                <Text color='var(--hash)' mt='0.6em' fontSize={'13px'} >
                    View status of NDA agreement
                </Text>
            
                <Flex mt='1.2em' gap='0.5em'>
                    {/* set checkbox to permanently checked if user has been confirmed to have signed on revisiting this page */}
                    <input onChange={(e)=>setConfirm(e.target.checked)}  {...currentStep >1 ?{checked:true}:{} } type='checkbox' />
                    {/* <Input cursor={'pointer'} color='var(--primary-color)' maxW={'23px'} type='checkbox'/> */}
                    <Text>Non-Disclosure Agreement has been signed</Text>
                </Flex>
            </Box>

            <Center mt='1.8em'>
                <Btn onClick={nextStep} disabled={!confirm} 
                    loading={submitting && loadingType==='next'} fontSize={'17px'}>
                    Next Step
                </Btn>
            </Center>

 
        </Box>


    )
}

export default Nda
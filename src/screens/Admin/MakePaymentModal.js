import { Modal, ModalHeader, ModalOverlay, useDisclosure, Box, Heading, Text, CloseButton, ModalContent, ModalBody } from "@chakra-ui/react";
import { useEffect } from "react";
import { BiCopy } from "react-icons/bi";


const MakePaymentModal = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        onOpen()
    }, [onOpen])

    const hoverEffect = {
        ":hover": {
            color: "white",
            bgColor: "#FE4600",
            cursor: "pointer"
        }
    };
    return(
        <Modal isOpen={isOpen} size="5xl" onOpen={onOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader display="flex" justifyContent="space-between" mt="2rem">
                    <Box >
                        <Heading color="#0D0D0D" fontSize="28px" lineHeight="35px" fontWeight="700">Make payment</Heading>
                        <Text pt="1rem" fontSize="18px" fontWeight="400" lineHeight="28px" color="#666666">Make payment into the wallet address provided below.</Text>
                    </Box>
                    <Box width="40px" height="40px" border="1px solid #DBE1E7" borderRadius="20px" display="flex" alignItems="center" justifyContent="center">
                        <CloseButton  onClick={onClose}  size='md' color="red" />
                    </Box>
                </ModalHeader>
                <ModalBody bgColor="#FFF8F5" mt="4rem">
                    <Box display="flex" alignItems="center" flexDir="column" mt="6rem">
                        <Box display="flex" flexDir="column" alignItems="center" justifyContent="center">
                            <Text color="#666666" fontWeight="400" fontSize="20px" lineHeight="30px">You are to pay:</Text>
                            <Text color="#090909" fontWeight="700" fontSize="28px" lineHeight="40px">0.000490 BTC</Text>
                        </Box>
                        <Box width="260px" height="260px" border="1px dashed #000000" m="4rem 0">

                        </Box>
                        <Box p="12px 20px" border="1px solid #666666" borderRadius="4px" display="flex" alignItems="center">
                            <Text color="#090909" fontWeight="500" fontSize="16px" lineHeight="24px" mr="1rem">Copy Address</Text>
                            <BiCopy size="18px" />
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" pt="10rem" pb="5rem">
                        <Box p="20px 60px" border="1px solid #FE4600" color="#FE4600" sx={hoverEffect} mr="1.5rem" borderRadius="4.13px">
                            <Text fontSize="20px" lineHeight="30px" fontWeight="500">I have paid</Text>
                        </Box>
                        <Box p="20px 75px" border="1px solid #FE4600" color="#FE4600" sx={hoverEffect} borderRadius="4.13px">
                            <Text fontSize="20px" lineHeight="30px" fontWeight="500">Cancel</Text>
                        </Box>
                    </Box>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
};


export default MakePaymentModal;
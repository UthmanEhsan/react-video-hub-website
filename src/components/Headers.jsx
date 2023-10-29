import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    useDisclosure,
    Stack,
    VStack,
    HStack,
  } from '@chakra-ui/react';
  import { Link } from 'react-router-dom';
import {BiMenuAltLeft} from "react-icons/bi";

  function Headers() {
    const {isOpen,onOpen,onClose} = useDisclosure();
  
    return (
      <>
         <Button 
         pos={'fixed'}
         top={'4'}
         left={'4'}
         colorScheme='purple'
         p={'0'}
         w={'10'}
         h={'10'}
         borderRadius={'full'}
         onClick={onOpen}
         zIndex={'1'}
         >
            <BiMenuAltLeft size={'20'} />
         </Button>

         <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay />
           <DrawerContent>
             <DrawerCloseButton />
             <DrawerHeader>
                VIDEO HUB
             </DrawerHeader>
             <VStack alignItems={'flex-start'}>
                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/'}>Home</Link>
                </Button>

                <Button variant={'ghost'} colorScheme='purple'>
                    <Link to={'/videos'}>Videos</Link>
                </Button>

                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/videos?category=free'}>Free Videos</Link>
                </Button>
                <Button onClick={onClose} variant={'ghost'} colorScheme='purple'>
                    <Link to={'/upload'}>Upload Video</Link>
                </Button>
             </VStack>

             <HStack pos={'absolute'} 
             bottom={'10'}
             left={'0'}
             w={'full'}
             justifyContent={'space-evenly'}
             >
                <Button onClick={onClose} colorScheme={'purple'}>
                    <Link to={'/login'}>Log In</Link>
                </Button>
                <Button onClick={onClose} colorScheme={'purple'} variant={'outline'}>
                    <Link to={'/signup'}>Sign Up</Link>
                </Button>
             </HStack>
           </DrawerContent>
         </Drawer>
      </>
    )
  }

export default Headers
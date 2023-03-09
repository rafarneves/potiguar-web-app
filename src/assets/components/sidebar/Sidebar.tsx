import { Box, Divider, Flex, Icon, Link, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { MdHome } from 'react-icons/md';
import PotiguarLogo from '../icons/icons';

// FUNCTIONS

function Sidebar(props: { routes: RoutesType[] }) {
	const { routes } = props;
    let variantChange = '0.2s linear';
	let shadow = useColorModeValue('14px 17px 40px 4px rgba(112, 144, 176, 0.08)', 'unset');
	// Chakra Color Mode
	let sidebarBg = useColorModeValue('white', 'navy.800');
	// SIDEBAR
	return (
        <Box display={{ sm: 'none', xl: 'block' }} position='fixed' minH='100%'>
			<Box
				backgroundColor="white"
                w='290px'
				transition={variantChange}
				h='100vh'
				minH='100%'
				overflowX='hidden'
				boxShadow={shadow}>
				<Flex direction='column' height='100%' pt="32px" borderRadius='30px'>
                    <PotiguarLogo />
					<Divider backgroundColor="#F4F7FE" mt="37px" border="1px solid #F4F7FE" opacity={1}/>
                    <Stack direction='column' mt='41px'>
                        <Flex direction="column" justifyContent="center" rowGap="26px" ps='35px'>
                            {routes.map((data, index) => 
								<Link borderRightWidth={index === 0 ? '4px' : '0'} key={index} borderRightColor={index === 0 ? "#4318FF" : 'inherit'} pt={1} pb={1}>
									<Flex gap={15} alignItems="center">
										{data.icon}
										<Text color={index === 0 ? "#2B3674" : "#A3AED0"} fontWeight={index === 0 ? 'bold' : 'inherit'}>{data.name}</Text>
									</Flex>
								</Link>
                            )}
                        </Flex>
                    </Stack>
		        </Flex>
			</Box>
		</Box>
		
	);
}

export default Sidebar;

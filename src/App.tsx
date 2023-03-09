import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Flex,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  CardFooter,
  SimpleGrid,
  Divider,
  Icon,
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Table,
  Menu,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Avatar,
  Input
} from "@chakra-ui/react"
import routes from "./routes"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { MdAttachMoney, MdInfoOutline, MdNotificationsNone } from 'react-icons/md';
import { Logo } from "./Logo"
import Sidebar from "./assets/components/sidebar/Sidebar"
import { SearchBar } from "./assets/components/searchbar/SearchBar"
import { FaMoon } from "react-icons/fa";

function App() {

  const line3 = [
    {
      id: 1,
      valor: '312.321',
      legenda: 'Cotações realizadas',
      porcentagem: '+15,3%(+223)'
    },
    {
      id: 2,
      valor: '212.012',
      legenda: 'Vendas finalizadas',
      porcentagem: '+15,3%(+223)'
    },
    {
      id: 3,
      valor: '42.021',
      legenda: 'Cotações não concluídas',
      porcentagem: '+15,3%(+223)'
    },
    {
      id: 4,
      valor: '3.122',
      legenda: 'Cotações não respondidas',
      porcentagem: '+15,3%(+223)'
    }
  ];

  return (
    <ChakraProvider theme={theme}>
        <Box minH="100vh">
          <Sidebar routes={routes}/>
          <Box float='right'
              minHeight='100vh'
              height='100%'
              backgroundColor="#F4F7FE"
              overflow='auto'
              position='relative'
              padding="20px"
              maxHeight='100%'
              w={{ base: '100%', xl: 'calc( 100% - 290px )' }}
              maxWidth={{ base: '100%', xl: 'calc( 100% - 290px )' }}
              transition='all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)'
              transitionDuration='.2s, .2s, .35s'
              transitionProperty='top, bottom, width'
              transitionTimingFunction='linear, linear, ease'
          >
            <Box
              position="relative"
              bg="transparent"
              borderColor="transparent"
              filter="none"
              backdropFilter='blur(20px)'
              backgroundPosition='center'
              backgroundSize='cover'
              borderRadius='16px'
              borderWidth='1.5px'
              borderStyle='solid'
              alignItems={{ xl: 'center' }}
              display="flex"
              minH='75px'
              justifyContent={{ xl: 'center' }}
              lineHeight='25.6px'
              mt="0px"
              pb='8px'
              pt='8px'
              top={{ base: '12px', md: '16px', xl: '18px' }}
              w="100%">
              <Flex
                w='100%'
                flexDirection={{
                  sm: 'column',
                  md: 'row'
                }}
                alignItems={{ xl: 'center' }}
                >
                <Box mb={{ sm: '8px', md: '0px' }}>
                  <Breadcrumb>
                    <BreadcrumbItem color="#2B3674" fontSize='sm'>
                      <BreadcrumbLink href='#' color="#2B3674">
                        Principal
                      </BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem color="#2B3674" fontSize='sm'>
                      <BreadcrumbLink href='#' color="#2B3674">
                        Dashboard
                      </BreadcrumbLink>
                    </BreadcrumbItem>
                  </Breadcrumb>
                  {/* Here we create navbar brand, based on route name */}
                  <Link
                    color="#2B3674"
                    href='#'
                    bg='inherit'
                    borderRadius='inherit'
                    fontWeight='bold'
                    fontSize='34px'
                    _active={{
                      bg: 'inherit',
                      transform: 'none',
                      borderColor: 'transparent'
                    }}
                    _focus={{
                      boxShadow: 'none'
                    }}>
                    Velty Dashboard
                  </Link>
                </Box>
                <Box ms='auto' w={{ sm: '100%', md: 'unset' }}>
                  <Flex w={{ sm: '100%', md: 'auto' }}
                    alignItems='center'
                    flexDirection='row'
                    bg="white"
                    p='10px'
                    borderRadius='30px'
                  >
                    <SearchBar
                      me='10px'
                      borderRadius='30px'
                    />
                    <Flex gap="15px" alignItems="center">
                      <Icon as={MdNotificationsNone} color="#A3AED0" w='20px' h='20px' fontWeight={700}/>
                      <Icon as={FaMoon} color="#A3AED0"  />
                      <Icon as={MdInfoOutline} color="#A3AED0" w='20px' h='20px' />
                      <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                    </Flex>
                    
                  </Flex>
				        </Box>
              </Flex> 
		        </Box>
            <Box mt="20px">
            <Flex w={{ sm: '100%', md: 'auto' }}
                    alignItems='center'
                    flexDirection='row'
                    bg="white"
                    p='10px'
                    borderRadius='30px'
                  >

                    <Input
                      placeholder="Data inicial"
                      _placeholder={{ color: 'gray.400', fontSize: '14px', alignItems: 'center' }}
                      bg="#F4F7FE"
                      color="#8F9BBA"
                      fontWeight='500'
                      borderRadius="30px"
                      size="md"
                    />

                    <Input
                      placeholder="Data final"
                      _placeholder={{ color: 'gray.400', fontSize: '14px', alignItems: 'center' }}
                      bg="#F4F7FE"
                      color="#8F9BBA"
                      fontWeight='500'
                      borderRadius="30px"
                      size="md"
                    />
                  </Flex>
            </Box>
            <Box pt={{ base: '150px', md: '80px', xl: '100px' }} w="75%">
              <Grid gridTemplateColumns="repeat(auto-fit, minmax(350px, 1fr))" gap={5}>
                <Card backgroundColor="#EC7A7A" borderRadius="20px">
                  <CardBody>
                    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} backgroundColor="white" w='56px' h='56px'>
                      <Icon w='32px' h='32px' as={MdAttachMoney} color="#EC7A7A" />
                    </Flex>
                    <Text fontSize={48}>R$312.321,00</Text>
                    <Text fontSize={24}>Receita total</Text>
                  </CardBody>
                  <Divider />
                  <CardFooter display="flex" flexDirection="column">
                    <Text fontSize={24}>R$67,20</Text>
                    <Text fontSize={14}>Média por cliente</Text>
                  </CardFooter>
                </Card>
                <Card backgroundColor="#7A85EC" borderRadius="20px">
                  <CardBody>
                    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} backgroundColor="white" w='56px' h='56px'>
                      <Icon w='32px' h='32px' as={MdAttachMoney} color="#7A85EC" />
                    </Flex>
                    <Text fontSize={48}>R$74.421,00</Text>
                    <Text fontSize={24}>Lucro total</Text>
                  </CardBody>
                  <Divider />
                  <CardFooter display="flex" flexDirection="column">
                    <Text fontSize={24}>R$42,30</Text>
                    <Text fontSize={14}>Média por cliente</Text>
                  </CardFooter>
                </Card>
                <Card backgroundColor="#65D4AC" borderRadius="20px">
                  <CardBody>
                    <Flex alignItems={'center'} justifyContent={'center'} borderRadius={'50%'} backgroundColor="white" w='56px' h='56px'>
                      <Icon w='32px' h='32px' as={MdAttachMoney} color="#65D4AC" />
                    </Flex>
                    <Text fontSize={48}>R$3,12</Text>
                    <Text fontSize={24}>Lucro por venda</Text>
                  </CardBody>
                  <Divider />
                  <CardFooter display="flex" flexDirection="column">
                    <Text fontSize={24}>R$12,40</Text>
                    <Text fontSize={14}>Média por cliente</Text>
                  </CardFooter>
                </Card>
              </Grid>
            </Box>
            
            <Box marginTop="20px">
              <SimpleGrid minChildWidth='120px' spacing='40px'>
                <Stat backgroundColor="white" paddingLeft={23} paddingRight={23} paddingTop={17} borderRadius={20}>
                  <StatLabel color="#A3AED0">Clientes ativos</StatLabel>
                  <StatNumber color="#2B3674">3.312</StatNumber>
                  <StatHelpText color="#05CD99">
                    +2,6%
                  </StatHelpText>
                </Stat>
                <Stat backgroundColor="white" paddingLeft={23} paddingRight={23} paddingTop={17} borderRadius={20}>
                  <StatLabel color="#A3AED0">Novos clientes</StatLabel>
                  <StatNumber color="#2B3674">12</StatNumber>
                  <StatHelpText color="#05CD99">
                    +15,3%
                  </StatHelpText>
                </Stat>
                <Stat backgroundColor="white" paddingLeft={23} paddingRight={23} paddingTop={17} borderRadius={20}>
                  <StatLabel color="#A3AED0">Clientes adicionados</StatLabel>
                  <StatNumber color="#2B3674">42</StatNumber>
                  <StatHelpText color="#05CD99">
                      +42,6%
                  </StatHelpText>
                </Stat>
                <Stat backgroundColor="white" paddingLeft={23} paddingRight={23} paddingTop={17} borderRadius={20}>
                  <StatLabel color="#A3AED0">LTV</StatLabel>
                  <StatNumber color="#2B3674">R$142,32</StatNumber>
                  <StatHelpText color="#05CD99">
                    -22,6%
                  </StatHelpText>
                </Stat>
                <Stat backgroundColor="white" paddingLeft={23} paddingRight={23} paddingTop={17} borderRadius={20}>
                  <StatLabel color="#A3AED0">Turnover</StatLabel>
                  <StatNumber color="#2B3674">24,3%</StatNumber>
                  <StatHelpText color="#05CD99">
                    +42,6%
                  </StatHelpText>
                </Stat>
                <Stat backgroundColor="white" paddingLeft={23} paddingRight={23} paddingTop={17} borderRadius={20}>
                  <StatLabel color="#A3AED0">Turnover recuperado</StatLabel>
                  <StatNumber color="#2B3674">54,42%</StatNumber>
                  <StatHelpText color="#05CD99">
                    +32,6%
                  </StatHelpText>
                </Stat>
              </SimpleGrid>
            </Box>

            <Box marginTop="20px">
              <SimpleGrid columns={{sm: 1, md: 2, lg: 4}} spacingX="20px" spacingY="20px">
                {line3.map((data) => 
                  <Stat backgroundColor="white" borderRadius={20} key={data.id} p="16px">
                    <StatNumber color="#2B3674">{data.valor}</StatNumber>
                    <StatLabel color="#A3AED0">{data.legenda}</StatLabel>
                    <StatHelpText color="#05CD99">
                      {data.porcentagem}
                    </StatHelpText>
                  </Stat>
                )}
              </SimpleGrid>
            </Box>

            <Box marginTop="20px">
              <SimpleGrid columns={{sm: 1, md: 2, lg: 3}} spacingX="20px" spacingY="20px">
                <Card flexDirection='column' w='100%' borderRadius="20px" overflowX={{ sm: 'scroll', lg: 'hidden' }} backgroundColor="white">
                  <Flex px='25px' mb="8px" mt="20px" flexDirection="column">
                    <Text color="#2B3674" fontSize='24px' mb="10px" fontWeight='700' lineHeight='100%'>
                      Planos
                    </Text>
                    <Text color="#A3AED0" fontSize='14px' mb="4px" lineHeight='100%'>
                      123 planos ativos
                    </Text>
                  </Flex>
                  <Box>
                    <Table variant='simple' color='gray.500' mb='24px' mt="12px">
                      <Thead>
                        <Tr>
                          <Th borderColor="#E9EDF7">Plano</Th>
                          <Th borderColor="#E9EDF7">Clientes</Th>
                          <Th borderColor="#E9EDF7">Preço</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Estagiários</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Diretoria</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Geral</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Almoxarifado</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                </Card>
                <Card flexDirection='column' w='100%' borderRadius="20px" overflowX={{ sm: 'scroll', lg: 'hidden' }} backgroundColor="white">
                  <Flex px='25px' mb="8px" mt="20px" flexDirection="column">
                    <Text color="#2B3674" fontSize='24px' mb="10px" fontWeight='700' lineHeight='100%'>
                      Categorias
                    </Text>
                    <Text color="#A3AED0" fontSize='14px' mb="4px" lineHeight='100%'>
                      4 categorias em uso
                    </Text>
                  </Flex>
                  <Box>
                    <Table variant='simple' color='gray.500' mb='24px' mt="12px">
                      <Thead>
                        <Tr>
                          <Th borderColor="#E9EDF7">Plano</Th>
                          <Th borderColor="#E9EDF7">Clientes</Th>
                          <Th borderColor="#E9EDF7">Preço</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">6 vendas</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">12 vendas</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">24 vendas</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Personalizado</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                </Card>
                <Card flexDirection='column' w='100%' borderRadius="20px" overflowX={{ sm: 'scroll', lg: 'hidden' }} backgroundColor="white">
                  <Flex px='25px' mb="8px" mt="20px" flexDirection="column">
                    <Text color="#2B3674" fontSize='24px' mb="10px" fontWeight='700' lineHeight='100%'>
                      Tipos de planos
                    </Text>
                    <Text color="#A3AED0" fontSize='14px' mb="4px" lineHeight='100%'>
                      2 tipos em uso
                    </Text>
                  </Flex>
                  <Box>
                    <Table variant='simple' color='gray.500' mb='24px' mt="12px">
                      <Thead>
                        <Tr>
                          <Th borderColor="#E9EDF7">Plano</Th>
                          <Th borderColor="#E9EDF7">Clientes</Th>
                          <Th borderColor="#E9EDF7">Preço</Th>
                        </Tr>
                      </Thead>
                      <Tbody>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Construtoras</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                        <Tr>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">Clientes finais</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">312 clientes</Td>
                          <Td borderColor='transparent' color="#2B3674" fontWeight="700">R$123,90</Td>
                        </Tr>
                      </Tbody>
                    </Table>
                  </Box>
                </Card>
              </SimpleGrid>
            </Box>
          </Box>
        </Box>
    </ChakraProvider>
  )
}

export default App



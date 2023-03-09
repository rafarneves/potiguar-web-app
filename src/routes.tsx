import { Icon } from '@chakra-ui/react';
import { MdPerson, MdHome, MdDashboard, MdShoppingCart } from 'react-icons/md';
import { BsBarChart } from "react-icons/bs";

const routes = [
    {
        name: 'Dashboard',
        icon: <Icon as={MdHome} width='20px' height='20px' color='#4318FF' />
    }, 
    {
        name: 'Vendas',
        icon: <Icon as={MdShoppingCart} width='20px' height='20px' color='#A3AED0' />
    },
    {
        name: 'Relatórios',
        icon: <Icon as={BsBarChart} width='20px' height='20px' color='#A3AED0' />
    },
    {
        name: 'Lojas parceiras',
        icon: <Icon as={MdDashboard} width='20px' height='20px' color='#A3AED0' />
    },
    {
        name: 'Clientes',
        icon: <Icon as={MdPerson} width='20px' height='20px' color='#A3AED0' />,
    }
];

export default routes;
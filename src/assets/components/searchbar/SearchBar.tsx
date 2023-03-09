import { IconButton, Input, InputGroup, InputLeftElement, useColorModeValue } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
export function SearchBar(props: {
	variant?: string;
	background?: string;
	children?: JSX.Element;
	placeholder?: string;
	borderRadius?: string | number;
	[x: string]: any;
}) {
	// Pass the computed styles into the `__css` prop
	const { variant, background, children, placeholder, borderRadius, ...rest } = props;
	return (
		<InputGroup w={{ base: '100%', md: '200px' }} {...rest}>
			<InputLeftElement
				children={
					<IconButton
						aria-label='search'
						bg='inherit'
						borderRadius='inherit'
						_active={{
							bg: 'inherit',
							transform: 'none',
							borderColor: 'transparent'
						}}
						_focus={{
							boxShadow: 'none'
						}}
						icon={<SearchIcon color="#2B3674" w='15px' h='15px' />}
					/>
				}
			/>
			<Input
				variant='search'
				fontSize='sm'
				bg="#F4F7FE"
				color="#8F9BBA"
				fontWeight='500'
				_placeholder={{ color: 'gray.400', fontSize: '14px' }}
				borderRadius={borderRadius ? borderRadius : '30px'}
				placeholder={placeholder ? placeholder : 'Busca'}
			/>
		</InputGroup>
	);
}
import React from 'react'
import {
    Flex,
    Text,
    Icon,
		Link
} from '@chakra-ui/react'

export default function LayoutItem({ icon, title, to, clickLink }) {
    return (
			<Flex
				mt={1}
				flexDir="column"
				w="100%"
				alignItems="center"
			>
					<Link
						shadow="md"
						//reseting hover effects
						_hover={{
							bg: 'blue.500',
							textColor: 'white'
						}}
						p={3}
						borderRadius={8}
						w="100%"
						onClick={() => clickLink(to)}
					>
							<Flex>
								<Icon
									as={icon}
									fontSize="xl"
									/>

								<Text
									ml={5}
								>
									{title}
								</Text>

							</Flex>
					</Link>
			</Flex>
    )
}
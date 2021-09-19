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
						className={`hover:bg-blue-500 hover:text-white`}
						//reseting hover effects
						_hover={{}}
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
									display="flex"
									>
									{title}
								</Text>

							</Flex>
					</Link>
			</Flex>
    )
}
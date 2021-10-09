import React from "react";
import {
  useColorMode,
  ChakraProvider,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import {
  Paginator,
  Container,
  Previous,
  usePaginator,
  Next,
  PageGroup
} from "chakra-paginator";
import { IoArrowForward, IoArrowBack, IoArrowDown } from "react-icons/io5";

const TablePagination = ({
  data = [],
  setDisplayData = () => {},
}) => {

  //dark theme
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  // constants
  const outerLimit = 2;
  const innerLimit = 2;
  const {

    isDisabled,
    pagesQuantity,
    currentPage,
    pageSize,
    setIsDisabled,
    setCurrentPage,
    setPageSize,
    offset// you may not need this most of the times, but it's returned for you anyway
  } = usePaginator({
    total: data.length,
    initialState: {
      pageSize: 5,
      currentPage: 1,
      isDisabled: false
    }
  });

  React.useEffect(()=>{
    let skip = offset;
    let limit = pageSize;
    setDisplayData([...data].splice(skip, limit))
  },[offset, currentPage, pageSize])


  // styles
  const baseStyles= {
    shadow: 'base',
    w: 7,
    fontSize: 'sm'
  };

  const normalStyles= {
    _hover: {
      bg: 'blue.200'
    },
    bg: isDark ? 'blue.50' : 'blue.400',
    color: isDark ? 'black' : 'white',
    ...baseStyles,
  };

  const activeStyles = {
    ...baseStyles,
    _hover: {
      bg: 'white'
    },
    bg: 'white',
    color: isDark ? 'black' : 'white',
  };

  const separatorStyles = {
    w: 7,
    bg: "green.200"
  };

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
  };

  const handlePageSizeChange = (event) => {
    const pageSize = Number(event.target.value);
    setCurrentPage(1)
    setPageSize(pageSize);
  };

  return (
    <ChakraProvider>
      <Paginator
        isDisabled={isDisabled}
        activeStyles={activeStyles}
        innerLimit={innerLimit}
        currentPage={currentPage}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        onPageChange={handlePageChange}
      >
        <Container w="fit-content" align="center"  justify="space-between" p={4}>
          <Previous shadow="base" mr={4}>
            <IoArrowBack/>
          </Previous>

          <Menu>
            <MenuButton shadow="base" as={Button} rightIcon={<IoArrowDown />}>
              {pageSize}
            </MenuButton>
              <MenuList onClick={handlePageSizeChange}>
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={25}>25</MenuItem>
                <MenuItem value={50}>50</MenuItem>
              </MenuList>
          </Menu>

          <PageGroup isInline align="center" ml={4} />

          <Next shadow="base" ml={4}>
            <IoArrowForward/>
          </Next>
        </Container>
      </Paginator>
    </ChakraProvider>
  );
};

export default TablePagination;

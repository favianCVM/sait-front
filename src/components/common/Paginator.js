import React, { useState } from "react";
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
  PageGroup,
} from "chakra-paginator";
import { IoArrowForward, IoArrowBack, IoArrowDown } from "react-icons/io5";

const initialState = {
  pageSize: 6,
  currentPage: 1,
  isDisabled: false,
}

const CustomPaginator = ({ data = [], setDisplayData = () => {} }) => {
  //dark theme
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [total, setTotal] = useState(0)

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
    offset, // you may not need this most of the times, but it's returned for you anyway
  } = usePaginator({
    total,
    initialState,
  });

  React.useEffect(() => {
    setTotal([...data].length)
    setDisplayData([...data].splice(offset, pageSize));
  }, [data]);

  React.useEffect(() => {
    let skip = offset;
    let limit = pageSize;
    setDisplayData([...data].splice(skip, limit));
  }, [offset, currentPage, pageSize]);

  // styles
  const baseStyles = {
    shadow: "base",
    w: 7,
    fontSize: "sm",
    bg: isDark ? "white" : "gray.700",
    color: isDark ? "gray.700" : "white",
    _hover: {
      bg: isDark ? "gray.700" : "white",
      color: isDark ? "white" : "gray.700",
    },
  };

  const normalStyles = {
    ...baseStyles,
  };

  const activeStyles = {
    ...baseStyles,
    bg: isDark ? "gray.700" : "gray.200",
    color: isDark ? "white" : "gray.700",
  };

  const separatorStyles = {};

  // handlers
  const handlePageChange = (nextPage) => {
    // -> request new data using the page number
    setCurrentPage(nextPage);
  };

  const handlePageSizeChange = (event) => {
    const pageSize = Number(event.target.value);
    setCurrentPage(1);
    setPageSize(pageSize);
  };

  return (
    <>
      <Paginator
        isDisabled={isDisabled}
        innerLimit={innerLimit}
        outerLimit={outerLimit}
        normalStyles={normalStyles}
        activeStyles={activeStyles}
        separatorStyles={separatorStyles}
        pagesQuantity={pagesQuantity}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      >
        <Container w="fit-content" align="center" justify="space-between" p={4}>
          <Previous
            shadow="base"
            size="sm"
            p={{
              base: "",
              sm: "",
            }}
            mr={{
              base: 2
            }}
          >
            <IoArrowBack />
          </Previous>

          <Menu>
            <MenuButton shadow="base" as={Button} rightIcon={<IoArrowDown />}>
              {pageSize}
            </MenuButton>
            <MenuList onClick={handlePageSizeChange}>
              <MenuItem value={6}>6</MenuItem>
              <MenuItem value={12}>12</MenuItem>
              <MenuItem value={18}>18</MenuItem>
              <MenuItem value={24}>24</MenuItem>
            </MenuList>
          </Menu>

          <PageGroup
            isInline
            align="center"
            mx={{
              base: 2
            }}
          />

          <Next
            shadow="base"
            size="sm"
            p={{
              base: "",
              sm: "",
            }}
          >
            <IoArrowForward />
          </Next>
        </Container>
      </Paginator>
    </>
  );
};

export default CustomPaginator;

import React from "react";
import { Grid, Flex, Box, useDisclosure } from "@chakra-ui/react";
import ComponentCard from "@components/items/ComponentCard";
import { Paginator } from "@components/common";
import ManageItems from "@components/items/ManageItems";

const ItemCardDisplayer = ({
  data = [],
  handleDisable = () => {},
  handleRegister = () => {},
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [displayData, setDisplayData] = React.useState(data);
  const [items, setItems] = React.useState({});

  const handleManageItemCategory = (item) => {
  }

  return (
    <Box px={{
      base: "8",
      sm: "none"
    }}>
      <Flex justify="end">
        <Paginator data={data} setDisplayData={setDisplayData} />
      </Flex>
      <Grid
        templateColumns={{
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        rowGap="6"
        columnGap="6"
      >
        {displayData.map((el) => (
          <ComponentCard
            key={`${el.id}-${el.name}`}
            {...el}
            handleManage={handleManageItemCategory}
          />
        ))}
      </Grid>

      <ManageItems  />
    </Box>
  );
};

export default ItemCardDisplayer;

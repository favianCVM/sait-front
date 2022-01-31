import React from "react";
import { Grid, Flex, Box, useDisclosure } from "@chakra-ui/react";
import ItemCard from "@components/items/ItemCard";
import { Paginator } from "@components/common";
import ManageItems from "@components/items/ManageItems";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const ItemCardDisplayer = ({
  isAdmin,
  data = [],
  handleDisableItemCategory = () => {},
  getAllItems = () => {},
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [displayData, setDisplayData] = React.useState(data);
  const [category, setCategory] = React.useState({});

  const handleManageItemCategory = (item) => {
    setCategory(item);
    onOpen();
  };

  return (
    <Box
      px={{
        base: "8",
        sm: "none",
      }}
    >
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
          <ItemCard
            key={`${el.id}-${el.name}`}
            {...el}
            handleManage={handleManageItemCategory}
            handleDisable={handleDisableItemCategory}
            isAdmin={isAdmin}
          />
        ))}
      </Grid>

      <ManageItems
        isOpen={isOpen}
        onClose={() => {
          setCategory({});
          onClose();
        }}
        getAllItems={getAllItems}
        name={category.name}
        items={category.items}
        categoryId={category.id}
      />
    </Box>
  );
};

const mapStateToProps =(state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemCardDisplayer);

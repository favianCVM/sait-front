import React from "react";
import { Grid, Flex, Box } from "@chakra-ui/react";
import ComponentCard from "@components/components/ComponentCard";
import { Paginator } from "@components/common";

const ComponentCardDisplayer = ({
  data = [],
  handleDelete = () => {},
  handleEdit = () => {},
}) => {
  const [displayData, setDisplayData] = React.useState(data);

  return (
    <Box>
      <Flex justify="end">
        <Paginator data={data} setDisplayData={setDisplayData} />
      </Flex>
      <Grid
        templateColumns={{
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        rowGap="6"
        columnGap="6"
      >
        {displayData.map((el) => (
          <ComponentCard
            key={`${el.id}-${el.name}`}
            {...el}
            handleDelete={handleDelete}
            handleEdit={() => handleEdit(el)}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default ComponentCardDisplayer;
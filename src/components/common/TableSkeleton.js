import React from "react";
import { Tr, Td, Skeleton } from "@chakra-ui/react";

const TableSkeleton = ({ rows = 5, cols = 1, height = "18px" }) => {

  const rowsArray = [...Array(rows).keys()].map(x => x++)
  const colsArray = [...Array(cols).keys()].map(x => x++)

  return (
    <>
      {rowsArray.map((rowIndex) => (
        <Tr key={`row-skeleton-${rowIndex}`}>
          {colsArray.map((colIndex) => (
            <Td key={`col-skeleton-${rowIndex}-${colIndex}`}>
              <Skeleton height={height} />
            </Td>
          ))}
        </Tr>
      ))}
    </>
  );
};

export default TableSkeleton;

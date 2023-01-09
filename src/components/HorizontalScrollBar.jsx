import React from "react";
import { Box } from "@mui/material";

const HorizontalScrollBar = ({ data }) => {
  console.log({ data });
  return (
    <div>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemID={item.id || item}
          title={item.id || item}
        >
          {item.id || item}
        </Box>
      ))}
    </div>
  );
};

export default HorizontalScrollBar;

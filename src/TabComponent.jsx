import React, { useState } from "react";
import { Container, Tabs, Tab, Box } from "@mui/material";
import RichGridDeclarativeExample from "./richGridDeclarativeExample/RichGridDeclarativeExample";
import HandsOnTableComparison from "./handsonTable/htComponent";

const TabComponent = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Container>
      <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
        <Tab label="Modelo 1" />
        <Tab label="Modelo 2" />
      </Tabs>

      <Box sx={{ mt: 2 }}>
        {tabIndex === 0 && <RichGridDeclarativeExample />}
        {tabIndex === 1 && <HandsOnTableComparison />}
      </Box>
    </Container>
  );
};

export default TabComponent;

import { useColorMode } from "@gluestack-style/react";
import { Box } from "@gluestack-ui/themed";

const RootDisplay = ({ children }) => {
  const colorMode = useColorMode();

  return (
    <Box flex={1} bg={colorMode === "dark" ? "#242526" : "#fff"}>
      {children}
    </Box>
  );
};

export default RootDisplay;

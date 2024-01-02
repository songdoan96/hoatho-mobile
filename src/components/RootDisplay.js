import { useColorMode } from "@gluestack-style/react";
import { Box } from "@gluestack-ui/themed";

const RootDisplay = (props) => {
  const colorMode = useColorMode();

  return (
    <Box flex={1} bg={colorMode === "dark" ? "#242526" : "#fff"}>
      {props.children}
    </Box>
  );
};

export default RootDisplay;

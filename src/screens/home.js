import { Box, Button, ButtonText, Text } from "@gluestack-ui/themed";
import React from "react";
import RootDisplay from "../components/RootDisplay";
import toastStore from "../store/toastStore";
const HomeScreen = () => {
  const { setShowToast } = toastStore();

  return (
    <RootDisplay>
      <Box bottom={"$0"} position="absolute">
        <Button onPress={() => setShowToast({ a: "success", d: "Hello ae" })}>
          <ButtonText>Press Me</ButtonText>
        </Button>
        <Text>HomeScreen</Text>
      </Box>
    </RootDisplay>
  );
};

export default HomeScreen;

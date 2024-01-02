import React from "react";
import RootDisplay from "../components/RootDisplay";
import { Text, Button } from "@gluestack-ui/themed";

const NotificationScreen = ({ navigation }) => {
  return (
    <RootDisplay>
      <Text>NotificationScreen</Text>
      <Button onPress={() => navigation.navigate("Home")}>
        <Text>HomeScreen</Text>
      </Button>
    </RootDisplay>
  );
};

export default NotificationScreen;

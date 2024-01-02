import { Button, Text } from "@gluestack-ui/themed";
import React from "react";
import RootDisplay from "../components/RootDisplay";
import authStore from "../store/authStore";
import themeStore from "../store/themeStore";

const ProfileScreen = () => {
  const { authLogout } = authStore();
  const { toggleTheme } = themeStore();
  return (
    <RootDisplay>
      <Text>ProfileScreen</Text>
      <Button onPress={toggleTheme}>
        <Text>Dark mode</Text>
      </Button>
      <Button $dark-bg="$red900" $light-bg="$green900" onPress={authLogout}>
        <Text>Logout</Text>
      </Button>
    </RootDisplay>
  );
};

export default ProfileScreen;

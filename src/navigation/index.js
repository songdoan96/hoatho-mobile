import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import * as SplashScreen from "expo-splash-screen";
import { config } from "@gluestack-ui/config";
import { GluestackUIProvider, useColorMode } from "@gluestack-ui/themed";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import ToastComponent from "../components/ToastComponent";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import authStore from "../store/authStore";
import themeStore from "../store/themeStore";
import toastStore from "../store/toastStore";
import TabLayout from "./tab-navigation";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();

const Navigator = () => {
  const { user } = authStore();
  const { dark } = themeStore();
  const { show } = toastStore();
  const colorMode = useColorMode();
  // const user = true;

  return (
    <GluestackUIProvider config={config} colorMode={dark ? "dark" : "light"}>
      <SafeAreaProvider>
        <SafeAreaView
          style={{ flex: 1, backgroundColor: colorMode === "dark" ? "#242526" : "#fff" }}
        >
          <StatusBar style={dark ? "light" : "dark"} />
          <ToastComponent show={show} />
          <NavigationContainer>
            <Stack.Navigator initialRouteName="TabLayout">
              {user ? (
                <Stack.Screen
                  name="TabLayout"
                  component={TabLayout}
                  options={{ headerShown: false }}
                />
              ) : (
                <>
                  <Stack.Screen
                    name="Login"
                    component={LoginScreen}
                    options={{ headerShown: false }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{ headerShown: false }}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaView>
      </SafeAreaProvider>
    </GluestackUIProvider>
  );
};

export default Navigator;

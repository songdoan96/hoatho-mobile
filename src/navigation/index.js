import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
// import * as SplashScreen from "expo-splash-screen";
import { config } from "@gluestack-ui/config";
import { OverlayProvider } from "@gluestack-ui/overlay";
import { GluestackUIProvider, StyledProvider, useColorMode } from "@gluestack-ui/themed";
import { ToastProvider } from "@gluestack-ui/toast";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import authStore from "../store/authStore";
import themeStore from "../store/themeStore";
import TabLayout from "./tab-navigation";
import { createProvider } from "@gluestack-ui/provider";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();
// SplashScreen.preventAutoHideAsync();

const Navigator = () => {
  const { user } = authStore();
  const { dark } = themeStore();
  const colorMode = useColorMode();

  // const user = true;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1, backgroundColor: colorMode === "dark" ? "#242526" : "#fff" }}>
        <GluestackUIProvider config={config} colorMode={dark ? "dark" : "light"}>
          <StatusBar style={dark ? "light" : "dark"} />
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
        </GluestackUIProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Navigator;

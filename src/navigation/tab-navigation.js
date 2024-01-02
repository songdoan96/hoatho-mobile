import IonIcon from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import { useColorMode } from "@gluestack-style/react";
import HomeScreen from "../screens/home";
import NotificationScreen from "../screens/notification";
import ProfileScreen from "../screens/profile";

const Tab = createBottomTabNavigator();
export const TabBarIcon = ({ focused, name, size, color }) => (
  <IonIcon name={focused ? name : `${name}-outline`} color={color} size={size} />
);

const TabLayout = () => {
  const colorMode = useColorMode();

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: "#fff" }}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: colorMode === "dark" ? "white" : "#242526",
        tabBarStyle: {
          backgroundColor: colorMode === "dark" ? "#242526" : "white",
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon name="home" focused={focused} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Thông báo",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon name="notifications" focused={focused} color={color} size={size} />
          ),
        }}
        name="Notification"
        component={NotificationScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ focused, color, size }) => (
            <TabBarIcon name="person" focused={focused} color={color} size={size} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabLayout;

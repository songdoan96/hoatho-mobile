import NetInfo from "@react-native-community/netinfo";
import React, { useEffect } from "react";
import { Alert, SafeAreaView } from "react-native";
import Navigator from "./src/navigation";
import storage from "./src/storage";
import authStore from "./src/store/authStore";
import themeStore from "./src/store/themeStore";

export default function App() {
  const { themeRestore } = themeStore();
  const { authRestore } = authStore();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      if (!state.isConnected || state.type !== "wifi") {
        Alert.alert("Không có kết nối wifi", "Vui lòng mở cài đặt và kết nối với WIFI công ty.", [
          {
            text: "Đóng",
          },
        ]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    let themeData = storage.getBoolean("@ht:theme");
    let userData = storage.getString("@ht:user");
    if (typeof themeData !== "undefined") {
      themeRestore(themeData);
    }
    if (userData) {
      authRestore(userData);
    }
  }, []);

  return <Navigator />;
}

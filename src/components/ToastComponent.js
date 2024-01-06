import React, { useEffect } from "react";

import {
  CloseIcon,
  Pressable,
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
  useToast,
} from "@gluestack-ui/themed";
import toastStore from "../store/toastStore";
import IonIcon from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";
const ToastComponent = ({ show }) => {
  const { p, setHideToast, a, d, t } = toastStore();
  const toast = useToast();
  useEffect(() => {
    if (show) {
      toast.show({
        placement: p,
        render: ({ id }) => {
          const toastId = "toast-" + id;
          return (
            <SafeAreaView>
              <Toast
                mt="$0"
                pr="$8"
                nativeID={toastId}
                action={a}
                variant="accent"
                alignItems="center"
              >
                <VStack width="$full" space="sm">
                  <ToastTitle>{t}</ToastTitle>
                  <ToastDescription>{d}</ToastDescription>
                </VStack>
                <Pressable onPress={() => toast.close(id)}>
                  <IonIcon size={20} name="close" />
                </Pressable>
              </Toast>
            </SafeAreaView>
          );
        },
      });
    }
    return () => {
      setHideToast();
    };
  }, [show]);
  return null;
};

export default ToastComponent;

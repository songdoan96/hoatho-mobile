import Icon from "@expo/vector-icons/Ionicons";
import {
  Alert,
  AlertIcon,
  AlertText,
  Box,
  Button,
  ButtonIcon,
  ButtonSpinner,
  ButtonText,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  HStack,
  Image,
  InfoIcon,
  Input,
  InputField,
  KeyboardAvoidingView,
  Text,
  VStack,
  useColorMode,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import authStore from "../store/authStore";
import RootDisplay from "../components/RootDisplay";
import toastStore from "../store/toastStore";

const LoginScreen = ({ navigation }) => {
  const colorMode = useColorMode();
  const { setShowToast } = toastStore();

  const { authLogin, loginLoading, loginError } = authStore();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const handleLogin = () => {
    authLogin(formData);
  };
  return (
    <RootDisplay>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} flex={1}>
        <VStack>
          <Box h="20%" justifyContent="flex-end" alignItems="center">
            <Image source={require("../../assets/logo.png")} alt="Logo" />
          </Box>
          <VStack h="80%" px="$4">
            <Text
              pt="$10"
              pb="$5"
              size="3xl"
              textAlign="center"
              textTransform="uppercase"
              fontWeight="900"
            >
              Đăng nhập
            </Text>

            <HStack alignItems="flex-end" flex={1} pb="$4">
              <KeyboardAwareScrollView>
                {loginError && (
                  <Alert my="$4" action="error" variant="accent">
                    <AlertIcon as={InfoIcon} mr="$3" />
                    <AlertText>{loginError}</AlertText>
                  </Alert>
                )}
                <FormControl mb="$4" size="lg" isDisabled={false} isRequired={true}>
                  <FormControlLabel mb="$1">
                    <FormControlLabelText>Mã số nhân viên</FormControlLabelText>
                  </FormControlLabel>
                  <Input isDisabled={loginLoading} alignItems="center" p="$1">
                    <Icon
                      style={{ marginLeft: 5 }}
                      name="person-outline"
                      size={20}
                      color={colorMode === "dark" ? "#fff" : "#242526"}
                    />
                    <InputField
                      onChangeText={(text) =>
                        setFormData((state) => ({ ...state, username: text }))
                      }
                      type="text"
                      value={formData.username}
                    />
                  </Input>
                </FormControl>
                <FormControl mb="$4" size="lg" isDisabled={false} isRequired={true}>
                  <FormControlLabel mb="$1">
                    <FormControlLabelText>Mật khẩu</FormControlLabelText>
                  </FormControlLabel>
                  <Input isDisabled={loginLoading} alignItems="center" p="$1">
                    <Icon
                      style={{ marginLeft: 5 }}
                      name="key-outline"
                      size={20}
                      color={colorMode === "dark" ? "#fff" : "#242526"}
                    />
                    <InputField
                      onChangeText={(text) =>
                        setFormData((state) => ({ ...state, password: text }))
                      }
                      type="password"
                      value={formData.password}
                    />
                  </Input>
                </FormControl>

                <Button
                  isDisabled={loginLoading ?? false}
                  onPress={handleLogin}
                  size="lg"
                  variant="solid"
                  isFocusVisible={false}
                >
                  <ButtonText>Đăng nhập </ButtonText>
                  <ButtonIcon alignContent="center">
                    {loginLoading ? (
                      <ButtonSpinner ml="$2" />
                    ) : (
                      <Icon name="log-in-outline" size={20} color="white" />
                    )}
                  </ButtonIcon>
                </Button>
                <HStack mb="$4" mt="$10" justifyContent="center" alignItems="center">
                  <Text>Chưa có tài khoản?</Text>
                  <Text
                    disabled={loginLoading}
                    ml="$1"
                    bold
                    underline
                    color="$primary600"
                    onPress={() => navigation.navigate("Register")}
                  >
                    Đăng ký
                  </Text>
                </HStack>
              </KeyboardAwareScrollView>
            </HStack>
          </VStack>
        </VStack>
      </KeyboardAvoidingView>
    </RootDisplay>
  );
};

export default LoginScreen;

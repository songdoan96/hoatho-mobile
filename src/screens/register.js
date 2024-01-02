import Icon from "@expo/vector-icons/Ionicons";
import {
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
  Input,
  InputField,
  KeyboardAvoidingView,
  Text,
  useColorMode,
  VStack,
  Alert,
  AlertIcon,
  AlertText,
  Heading,
} from "@gluestack-ui/themed";
import React, { useState } from "react";
import { Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import authStore from "../store/authStore";
import { InfoIcon } from "@gluestack-ui/themed";
import RootDisplay from "../components/RootDisplay";

const RegisterScreen = ({ navigation }) => {
  const colorMode = useColorMode();

  const { authLogin, registerLoading, registerError } = authStore();
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
            <Text py="$10" size="3xl" textAlign="center" textTransform="uppercase" fontWeight="900">
              Đăng ký
            </Text>
            {registerError && (
              <Alert py="$4" action="error" variant="accent">
                <AlertIcon as={InfoIcon} mr="$3" />
                <AlertText>{registerError}</AlertText>
              </Alert>
            )}
            <HStack alignItems="flex-end" flex={1} pb="$4">
              <KeyboardAwareScrollView enableResetScrollToCoords={true}>
                <FormControl mb="$4" size="lg" isDisabled={false} isRequired={true}>
                  <FormControlLabel mb="$1">
                    <FormControlLabelText>Mã số nhân viên</FormControlLabelText>
                  </FormControlLabel>
                  <Input isDisabled={registerLoading} alignItems="center" p="$1">
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
                  <Input isDisabled={registerLoading} alignItems="center" p="$1">
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
                <FormControl mb="$4" size="lg" isDisabled={false} isRequired={true}>
                  <FormControlLabel mb="$1">
                    <FormControlLabelText>Nhập lại mật khẩu</FormControlLabelText>
                  </FormControlLabel>
                  <Input isDisabled={registerLoading} alignItems="center" p="$1">
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
                  isDisabled={registerLoading ?? false}
                  onPress={handleLogin}
                  size="lg"
                  variant="solid"
                  isFocusVisible={false}
                >
                  <ButtonText>Đăng ký </ButtonText>
                  <ButtonIcon alignContent="center">
                    {registerLoading ? (
                      <ButtonSpinner ml="$2" />
                    ) : (
                      <Icon name="person-add-outline" size={20} color="white" />
                    )}
                  </ButtonIcon>
                </Button>
                <HStack mb="$4" mt="$10" justifyContent="center" alignItems="center">
                  <Text>Đã có tài khoản.</Text>
                  <Text
                    disabled={registerLoading}
                    ml="$1"
                    bold
                    underline
                    color="$primary600"
                    onPress={() => navigation.goBack()}
                  >
                    Đăng nhập
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

export default RegisterScreen;

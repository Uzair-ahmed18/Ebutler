import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


// formik
import { Formik } from 'formik';

import {
  StyledContainer,
  PageLogo,
  PageTitle,
  StyledInputLabel,
  StyledFormArea,
  StyledButton,
  StyledTextInput,
  LeftIcon,
  RightIcon,
  InnerContainer,
  ButtonText,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
  Colors,
} from '../components/styles';
import { TextInput, View, Text } from 'react-native';

//colors
const { darkLight, brand, primary, tertiary } = Colors;

// icon
import { Octicons, Fontisto } from '@expo/vector-icons';

// keyboard avoiding view
import KeyboardAvoidingWrapper from './../components/KeyboardAvoidingWrapper';

// api client
import axios from 'axios';

const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true);
  return (
    <KeyboardAvoidingWrapper>
    <StyledContainer>
    <StatusBar style="dark" />
    <InnerContainer>
      <PageLogo resizeMode="contain" source={require('./../assets/E1.png')}/>

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
          navigation.navigate('Dashboard');
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <StyledFormArea>
            <MyTextInput
              label="Email Address"
              placeholder="uzairahmed@gmail.com"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              keyboardType="email-address"
              icon="mail"
            />
            <MyTextInput
              label="Password"
              placeholder="* * * * * * * *"
              placeholderTextColor={darkLight}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              secureTextEntry={hidePassword}
              icon="lock"
              isPassword={true}
              hidePassword={hidePassword}
              setHidePassword={setHidePassword}
            />
            <ExtraView> 
            </ExtraView>
            <StyledButton onPress={handleSubmit}>
              <ButtonText>Login</ButtonText>
            </StyledButton>
            <Line />
          </StyledFormArea>
        )}
      </Formik>
    </InnerContainer>
    </StyledContainer>
    </KeyboardAvoidingWrapper>
  );
};

const MyTextInput = ({ label, icon, isPassword, hidePassword, setHidePassword, ...props }) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon
          onPress={() => {
            setHidePassword(!hidePassword);
          }}
        >
          <Octicons name={hidePassword ? 'eye-closed' : 'eye'} size={30} color={darkLight} />
        </RightIcon>
      )}

    </View>
  );
};

export default Login;
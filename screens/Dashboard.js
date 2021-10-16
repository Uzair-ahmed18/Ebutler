import React from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  PageTitle,
  StyledFormArea,
  StyledButton,
  InnerContainer,
  DashboardContainer,
  ButtonText,
  Line,
  Colors,
} from './../components/styles';

const Welcome = ({ navigation }) =>{
  return (
    <>
      <StatusBar style="light" />
      <InnerContainer>

        <DashboardContainer>
          <PageTitle welcome={true}> Dashboard </PageTitle>

          <StyledFormArea>

            <Line />
            <StyledButton onPress={() => navigation.navigate("Login")}>
              <ButtonText>Logout</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </DashboardContainer>
      </InnerContainer>
    </>
  );
};

export default Welcome;
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import appFonts from '../../utils/appFonts';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
`;

export const Title = styled.Text`
  font-family: ${appFonts.medium};
  font-size: 32px;
  color: #f4ede8;
  margin-top: 48px;
  text-align: center;
`;

export const Description = styled.Text`
  font-family: ${appFonts.regular};
  font-size: 18px;
  color: #999591;
  margin-top: 16px;
  text-align: center;
  font-style: italic;
`;

export const OkButton = styled(RectButton)`
  padding: 12px 24px;
  background: #ff9000;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 24px;
`;

export const OkButtonText = styled.Text`
  color: #312e38;
  font-family: ${appFonts.medium};
  font-size: 18px;
`;

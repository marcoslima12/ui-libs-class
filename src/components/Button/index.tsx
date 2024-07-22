import Button from '@mui/material/Button';
import styled from 'styled-components';

interface ButtonProps {
  height?: string;
  width?: string;
  letterSpacing?: string;
  textTransfrom?: string;
  borderRadius?: string;
  padding?: string;
  font?: string;
  fontWeight?: string;
  margin?: string;
  textColor?: string;
  alignSelf?: string;
}

const ButtonCustom = styled(Button)<ButtonProps>`
  &.MuiButton-root {
    height: ${(props) => props.height || '45px'};
    width: ${(props) => props.width || '220px'};
    letter-spacing: ${(props) => props.letterSpacing || '1.25px'};
    text-transform: ${(props) => props.textTransfrom || 'none'};
    border-radius: ${(props) => props.borderRadius || '51px'};
    font-size: ${(props) => props.font || '12px'};
    font-weight: ${(props) => props.fontWeight || '500'};
    margin: ${(props) => props.margin || '0'};
    color: ${(props) => props.textColor || (({ theme }) => theme.colors.black)};
    align-self: ${(props) => props.alignSelf || 'auto'};
    font: ${({ theme }) => theme.fonts.primary.regular};
  }
`;

export const BlueButton = styled(ButtonCustom)`
  &.MuiButton-root {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: ${({ theme }) => `2px solid ${theme.colors.blue}`};
    &:hover {
      background-color: ${({ theme }) => theme.colors.blue};
    }
  }
`;

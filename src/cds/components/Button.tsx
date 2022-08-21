/** @jsxImportSource @emotion/react */
import { ButtonHTMLAttributes } from 'react';
import colorTokens from '../tokens/colorTokens';
import { css } from '@emotion/react';

interface ButtonOptions {
  scale: ButtonScale;
  color: ButtonColor;
  isFilled: boolean;
  isRounded: boolean;
}

type ButtonProps = Partial<ButtonOptions> & ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  scale = 'h46',
  color = 'navy',
  isFilled = true,
  isRounded = false,
  children,
  ...props
}: ButtonProps) {
  return (
    <button css={() => buttonCss({ scale, color, isFilled, isRounded })} {...props}>
      {children}
    </button>
  );
}

const buttonCss = ({ scale, color, isFilled, isRounded }: ButtonOptions) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  ${{
    ...buttonScale[scale],
    ...getButtonColorCss(color, isFilled),
    borderRadius: isRounded ? '17px' : '4px',
  }};

  &:hover {
    ${{ ...getButtonColorCss(color, isFilled, 'hover') }}
  }
  &:disabled {
    ${{ ...getButtonColorCss(color, isFilled, 'disabled') }}
  }
`;

const buttonScale = {
  h46: { width: '86px', height: '46px', fontSize: '16px' },
  h34: { width: '63px', height: '34px', fontSize: '12px' },
  h30: { width: '53px', height: '30px', fontSize: '12px' },
} as const;

const getButtonColorCss = (color: ButtonColor, isFilled: boolean, modifier?: 'hover' | 'disabled') => {
  let scaleValue: '100' | '200' | '300';
  switch (modifier) {
    case 'hover':
      scaleValue = '300';
      break;
    case 'disabled':
      scaleValue = '100';
      break;
    default:
      scaleValue = '200';
      break;
  }

  return {
    backgroundColor: isFilled ? colorTokens[`${color}${scaleValue}`] : 'rgba(0, 0, 0, 0)',
    border: isFilled ? 'none' : `1px solid ${colorTokens[`${color}${scaleValue}`]}`,
    color: isFilled ? colorTokens['white'] : colorTokens[`${color}${scaleValue}`],
  };
};

type ButtonScale = keyof typeof buttonScale;
type ButtonColor = 'navy' | 'blue';

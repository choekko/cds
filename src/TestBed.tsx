/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from '@/cds/components/Button';
import GlobalStyle from '@/cds/global/GlobalStyle';

function TestBed() {
  return (
    <>
      <GlobalStyle />
      <div css={TestBedStyle}>
        <Button scale={'h34'} isFilled={false} color={'blue'}>
          버튼
        </Button>
      </div>
    </>
  );
}

const TestBedStyle = css`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export default TestBed;

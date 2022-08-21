/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

function TestBed() {
  return (
    <>
      <div css={TestBedStyle}></div>
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

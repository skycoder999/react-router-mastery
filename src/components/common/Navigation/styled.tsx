import styled from 'styled-components';

export const Navigation = styled.div`
    background: #6806a5;
    flex: 3;
    font-size: 16px;
    line-height: 4em;
    text-align: end;
    padding-right: 40px;

  ul{
      display: inline-block;
  }

  ul > li{
      padding: 4px;
      color: #fff;
      list-style: none;
      display: inline-block;
  }

  ul > li > a {
    padding: 4px;
    color: #fff;
    text-decoration: none;
    align-content: right
  }
`;
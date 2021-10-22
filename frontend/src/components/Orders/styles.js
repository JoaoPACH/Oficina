import styled, { css } from 'styled-components';

export const Container = styled.div`
  margin-top: 42px;
  display: grid;
  grid-gap: 1.6rem;
  grid-template-columns: 1fr;

  @media (min-width: 658px){
    grid-template-columns: repeat(2, 1fr);
  }
`;

const cardStatusVariants = {
  PREPARANDO: css`
    background: #F6A609;
    color: #FFFFFF;

    header small{
      background: #FFFFFF;
      color: #0A100D;
    }

    select{
      border-color: #FFFFFF;
    }
  `,
  FINALIZADO: css`
    background: #2AC769;
    color: #FFFFFF;

    header small{
      background: #FFFFFF;
      color: #0A100D;
    }

    select{
      border-color: #FFFFFF;
    }
  `
}

export const Card = styled.div`
  background: #FFFFFF;
  padding: 16px;
  border-radius: 5px;
  box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.1);

  header{
    display: flex;
    justify-content: space-between;

    h3{
      font-size: 18px;
      font-weight: 500;
    }

    small{
      padding: 4px 8px;
      background: #CCCCCC;
      border-radius: 5px;
      color: #FFFFFF;
      font-weight: bold;
      font-size: 12px;
    }
  }

  p{
    font-size: 14px;
    margin-top: 16px;
    font-weight: normal;
  }

  select{
    margin-top: 8px;
    width: 100%;
    height: 45px;
    border-radius: 5px;
    border: 1px solid #CCCCCC;
    background: #FFFFFF;
    font-size: 14px;
    padding: 0 8px;
  }

  ${({ status }) => cardStatusVariants[status] || null}
`;

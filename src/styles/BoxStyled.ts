import styled from "@emotion/styled";
export const BoxCenterStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &.clear-data {
        text-align: end;
    }
`;

export const BoxStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    
    span {
        padding-left: 10px;
    }
`;

export const BoxEndStyled = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;

    .clear-data {
        cursor: pointer;
    }
`;

export const WrapperFooter = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: white !important;
    div {
        background: transparent !important;
    }
`;

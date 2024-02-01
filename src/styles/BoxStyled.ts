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

    &:before {
        content: ' ';
        bottom: 0;
        box-shadow: 0 1px 1px rgba(0, 0, 0, .2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, .2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, .2);
        height: 20px;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
    }
`;

import styled from "@emotion/styled";

export const H1Styled = styled.h1`
    color: #007bff;
    text-align: center;
`;

export const InputStyled = styled.div`
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)!important;
    
    svg {
        display: flex;
        position: absolute;
        left: 30px;
    }
    input {
        font-size: 25px;
        box-shadow: inset 0 -3px 2px #00000007;
        padding: 10px;
        width: 100%; 
        border: none;
        text-indent: 50px;

        &:focus {
            //outline: 1px solid #ffc107;
            outline: 1px solid #17a2b8;
        }
        ::placeholder {
            font-style: italic;
        }
    }
`;

import styled from "@emotion/styled";

export const TaskWrapperStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    flex-direction: column;
    background: #f8f9fa;
    position: relative;
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;

    div:nth-child(even) {
        background: rgba(157, 219, 231, 0.25);
    }
`;

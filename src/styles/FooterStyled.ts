import styled from "@emotion/styled";

export const FooterStyled = styled.div`
    display: flex;
    width: 100%;

    ul {
        display: flex;
        list-style: none;
        padding: 0px;

        li {
            padding: 0px;
            cursor: pointer;
            color: #000;

            a {
                text-decoration: none;
                color: #000;
                padding: 10px;
            }

            &.active {
                border: 1px solid red;
                border-radius: 5px;
            }
        }
    }
`;

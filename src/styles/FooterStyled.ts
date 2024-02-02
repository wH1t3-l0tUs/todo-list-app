import styled from "@emotion/styled";

export const FooterStyled = styled.div`
    display: flex;
    width: 100%;

    ul {
        display: flex;
        list-style: none;
        padding: 0px;

        li {
            padding: 0;
            cursor: pointer;
            color: #000;

            a {
                text-decoration: none;
                color: #000;
                padding: 10px;
            }

            &.active {
                border: 1px solid transparent;
            }

            &.btn_all {
                border-color: #17a2b8 !important;
            }
            &.btn_active {
                border-color: #20c997 !important;
            }
            &.btn_complete {
                border-color: #007bff !important;
            }
        }
    }
`;

import styled from '@emotion/styled';

export const TaskItemStyled = styled.div<{ status: boolean, isEdit: boolean }>`
    position: relative;
    text-decoration: ${(props) => (props.status ? 'none' : 'line-through')};
    color: ${(props) => (props.status ? '#000' : 'gray')};
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    padding: 5px 0 5px 0;
    cursor: pointer;

    p {
        margin: 0;
        padding: 5px;
    }

    &:hover {
        background-color: ${(props) => (props.isEdit ? 'none' : '#f2f2f2')};

        svg.close {
            opacity: 1;
        }
    }

    svg.close {
        position: absolute;
        right: 5px;
        opacity: 0;
    }

    .preview {
        display: ${(props) => (props.isEdit ? 'none' : 'flex')};
        padding-left: 30px;
    }

    .edit {
        display: ${(props) => (props.isEdit ? 'flex' : 'none')};
        width: 100%;
        position: relative;

        input {
            padding: 5px 5px 5px 0;
            text-indent: 50px;
            border: none;
            width: 100%;
            background: none;
            box-shadow: 1px 1px 5px 1px #ffc107;
            -webkit-box-shadow: 1px 1px 5px 1px #ffc107;
            -moz-box-shadow: 1px 1px 5px 1px #ffc107;

            &:focus {
                outline: none;
            }
        }
    }
`;

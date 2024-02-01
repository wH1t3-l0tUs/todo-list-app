import {BoxEndStyled, BoxStyled, WrapperFooter} from "@/styles/BoxStyled.ts";
import {FooterStyled} from "@/styles/FooterStyled.ts";
import {Link, useLocation} from "react-router-dom";
import {Todo} from "@/types";


interface FooterTaskProps {
    handelClearTaskComplete: () => void;
    dataTask: Todo[];
}

export const FooterTask = (props: FooterTaskProps) => {
    const {handelClearTaskComplete, dataTask} = props;
    const location = useLocation();
    const countComplete = dataTask.filter(task => !task.status).length;
    return (
        <WrapperFooter>
            <BoxStyled>
                <span>{countComplete} items left!</span>
            </BoxStyled>
            <FooterStyled>
                <ul>
                    <li className={location.pathname === '/' ? 'active' : ''}>
                        <Link to="/">All</Link>
                    </li>
                    <li className={location.pathname == '/active' ? 'active' : ''}>
                        <Link to="/active">Active</Link>
                    </li>
                    <li className={location.pathname === '/complete' ? 'active' : ''}>
                        <Link to="/complete">Completed</Link>
                    </li>
                </ul>
            </FooterStyled>
            <BoxEndStyled>
                <span onClick={handelClearTaskComplete} className='clear-data'>Clear completed</span>
            </BoxEndStyled>
        </WrapperFooter>
    );
}

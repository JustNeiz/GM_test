import css from './NavMenu.module.css'
import {Flex, NavLink} from "@mantine/core";
import RequestQuoteButton from "../../atoms/RequestQuoteButton/RequestQuoteButton.tsx";

const NavMenu = () => {
    return (
        <Flex className={css.NavMenu}>
            <NavLink className={css.NavMenu__link} c={'black.1'} label={'About Us'} fw={'300'}/>
            <NavLink className={css.NavMenu__link} c={'black.1'} label={'Services'} fw={'300'}/>
            <NavLink className={css.NavMenu__link} c={'black.1'} label={'Use Cases'} fw={'300'}/>
            <NavLink className={css.NavMenu__link} c={'black.1'} label={'Pricing'} fw={'300'}/>
            <NavLink className={css.NavMenu__link} c={'black.1'} label={'Blog'}  fw={'300'}/>
            <RequestQuoteButton/>
        </Flex>
    );
};

export default NavMenu;
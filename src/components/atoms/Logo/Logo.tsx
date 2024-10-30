import css from './Logo.module.css'
import {Flex, Text} from "@mantine/core";

const Logo = () => {
    return (
        <Flex className={css.Logo}>
            <img src={'/assets/logo_black.png'} alt="logo" />
            <Text c={'black.1'} fz={40} fw={700}>Positivus</Text>
        </Flex>
    );
};

export default Logo;
import css from './Header.module.css'
import Logo from "../../atoms/Logo/Logo.tsx";
import {Flex} from "@mantine/core";
import NavMenu from "../../molecules/NavMenu/NavMenu.tsx";
import {motion} from "framer-motion";

const Header = () => {
    return (
        <motion.div className={css.Header} animate={{opacity: 1}} initial={{opacity: 0}} transition={{duration: 1.2}}>
            <Flex className={css.Header} >
                <Logo/>
                <NavMenu/>
            </Flex>
        </motion.div>
    );
};

export default Header;
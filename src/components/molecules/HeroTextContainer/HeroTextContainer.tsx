import css from './HeroTextContainer.module.css'
import {Flex, Text} from "@mantine/core";
import BlackButton from "../../atoms/BlackButton/BlackButton.tsx";
import {motion} from "framer-motion";
const HeroTextContainer = () => {
    return (
        <motion.div className={css.HeroTextContainer}
                    animate={{x: ['-100%', 0], opacity: 1}}
                    transition={{duration: 1.2, ease: "easeOut"}} initial={{opacity: 0}}>
            <Flex direction={'column'} justify={'space-between'} className={css.HeroTextContainer}>
                <Text fz={60} fw={500}>
                    Navigating the digital landscape for success
                </Text>
                <Text fz={20} fw={200}>
                    Our digital marketing agency helps businesses grow
                    and succeed online through a range of services including SEO,
                    PPC, social media marketing, and content creation.
                </Text>
                <BlackButton label={'Book a consultation'}/>
            </Flex>
        </motion.div>
    );
};

export default HeroTextContainer;
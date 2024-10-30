import {Flex} from "@mantine/core";
import css from './SupportedCompanies.module.css'
import {motion} from "framer-motion";

const SupportedCompanies = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 }
    };
    return (
        <motion.div variants={containerVariants} initial="hidden" animate='visible'>
            <Flex className={css.SupportedCompanies} mt={32}>
                <motion.div variants={itemVariants} >
                    <img src={'/assets/amazon.svg'} alt={'amazon'}/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <img src={'/assets/dribble.svg'} alt={'dribble'}/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <img src={'/assets/hubspot.svg'} alt={'hubspot'}/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <img src={'/assets/notion.svg'} alt={'notion'}/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <img src={'/assets/netflix.svg'} alt={'netflix'}/>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <img src={'/assets/zoom.svg'} alt={'zoom'}/>
                </motion.div>
            </Flex>
        </motion.div>
    );
};

export default SupportedCompanies;
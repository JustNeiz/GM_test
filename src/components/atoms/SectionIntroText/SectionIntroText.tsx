import {Grid, Text} from "@mantine/core";
import css from './SectionIntroText.module.css'
import {SectionIntroTextProps} from "../../../interfaces/props/SectionIntroTextProps.ts";
import {motion} from "framer-motion";

const SectionIntroText: React.FC<SectionIntroTextProps> = ({title, description}) => {


    return (
            <Grid className={css.SectionIntroText} w={'100%'} pb={48}>
                <Grid.Col span={'content'}>
                    <motion.div initial={{opacity: 0, x: -100}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1, ease: 'easeIn'}} viewport={{once: true}}>
                        <Text fw={500} bg={'green.1'} fz={40} className={css.SectionIntroText__main } px={5}>
                            {title}
                        </Text>
                    </motion.div>
                </Grid.Col>

                <Grid.Col span={6} >
                    <Text fz={18} fw={200}>
                        {description}
                    </Text>
                </Grid.Col>
                <Grid.Col span={'auto'}></Grid.Col>

            </Grid>
    );
};

export default SectionIntroText;
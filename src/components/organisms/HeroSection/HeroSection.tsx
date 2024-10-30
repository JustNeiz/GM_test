import css from './HeroSection.module.css'
import {Flex, Grid} from "@mantine/core";
import HeroTextContainer from "../../molecules/HeroTextContainer/HeroTextContainer.tsx";
import SupportedCompanies from "../../molecules/SupportedCompanies/SupportedCompanies.tsx";
const HeroSection = () => {
    return (
       <Grid className={css.HeroSection} py={48}>
           <Grid.Col span={6}><HeroTextContainer/></Grid.Col>
           <Grid.Col span={6}>
               <Flex justify={"flex-end"}>
                   <img src={'/assets/hero_image.svg'} alt={'boom'}/>
               </Flex>
           </Grid.Col>
           <Grid.Col span={12}><SupportedCompanies/></Grid.Col>
       </Grid>
    );
};

export default HeroSection;
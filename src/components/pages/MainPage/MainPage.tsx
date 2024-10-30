import {Flex} from "@mantine/core";
import Header from "../../organisms/Header/Header.tsx";
import css from "./MainPage.module.css";
import HeroSection from "../../organisms/HeroSection/HeroSection.tsx";
import ServicesSection from "../../organisms/ServicesSection/ServicesSection.tsx";
import CaseStudiesSection from "../../organisms/CaseStudiesSection/CaseStudiesSection.tsx";

const MainPage = () => {
    return (
        <Flex direction={'column'} align={'center'} className={css.MainPage} px={32}>
            <Header/>
            <HeroSection/>
            <ServicesSection/>
            <CaseStudiesSection/>
        </Flex>
    );
};

export default MainPage;
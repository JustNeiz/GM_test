import {Flex} from "@mantine/core";
import SectionIntroText from "../../atoms/SectionIntroText/SectionIntroText.tsx";
import ServicesContainer from "../../molecules/ServicesContainer/ServicesContainer.tsx";
import ContactUsSection from "../../molecules/ContactUsSection/ContactUsSection.tsx";

const ServicesSection = () => {
    return (
        <Flex w={'100%'} direction={'column'} py={48}>
            <SectionIntroText title={'Services'} description={'At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:'}/>
            <ServicesContainer/>
            <ContactUsSection/>

        </Flex>
    );
};

export default ServicesSection;
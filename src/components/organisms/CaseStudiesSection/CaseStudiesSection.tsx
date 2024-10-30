import {Flex} from "@mantine/core";
import SectionIntroText from "../../atoms/SectionIntroText/SectionIntroText.tsx";
import CaseStudiesContainer from "../../molecules/CaseStudiesContainer/CaseStudiesContainer.tsx";

const CaseStudiesSection = () => {
    return (
        <Flex w={'100%'} direction={'column'} py={48}>
            <SectionIntroText title={'Case Studies'} description={'Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies'}/>
            <CaseStudiesContainer/>
        </Flex>
    );
};

export default CaseStudiesSection;
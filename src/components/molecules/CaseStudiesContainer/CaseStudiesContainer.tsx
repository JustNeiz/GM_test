import {Flex} from "@mantine/core";
import css from './CaseStudiesContainer.module.css';
import StudiesCard from "../StudiesCard/StudiesCard.tsx";

const CaseStudiesContainer = () => {
    return (
        <Flex className={css.CaseStudiesContainer} px={48} py={64} bg={'dark.1'} justify={'space-between'}>
            <StudiesCard text={'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.'}/>
            <Flex w={1} h={'100%'} bd={'1px white solid'}></Flex>
            <StudiesCard text={'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.'}/>
            <Flex w={1} h={'100%'} bd={'1px white solid'}></Flex>
            <StudiesCard text={'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'}/>

        </Flex>
    );
};

export default CaseStudiesContainer;
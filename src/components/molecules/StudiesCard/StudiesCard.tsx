import {Flex, Text} from "@mantine/core";
import {StudiesCardProps} from "../../../interfaces/props/StudiesCardProps.ts";
import React from "react";
import css from './StudiesCard.module.css'

const StudiesCard: React.FC<StudiesCardProps> = ({text}) => {
    return (
        <Flex direction={"column"} w={'30%'} className={css.StudiesCard} justify={'space-around'} px={12}>
            <Text fz={18}>
                {text}
            </Text>
            <Flex align={'center'}>
                <Text c={'green.1'} fz={28}>Learn more</Text>
                <img src={'/assets/learnMoreButtons/learnGreen.svg'} alt={'Learn more'}/>
            </Flex>
        </Flex>
    );
};

export default StudiesCard;
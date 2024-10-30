import {Flex, Text} from "@mantine/core";
import {ServiceCardProps} from "../../../interfaces/props/ServiceCardProps.ts";
import React from "react";
import css from "./ServiceCard.module.css";
import {motion} from "framer-motion";

const ServiceCard:React.FC<ServiceCardProps> = ({bg, title, titleBg, descColor, buttonPath, imgPath}) => {
    return (
        <motion.div initial={{opacity: 0, scale: 0.8}} whileInView={{opacity: 1, scale: 1}} transition={{ duration: 0.5}} viewport={{once: true}}>
           <Flex className={css.ServiceCard} bg={bg}>
               <Flex className={css.ServiceCard__textContainer} >
                   <Text fw={500} fz={30}>
                       <p className={css.ServiceCard__title} style={{backgroundColor: titleBg}}>
                       {title}
                       </p>
                   </Text>
                   <Flex align={'center'}>
                       <img src={buttonPath} alt={'Learn more'}/>
                       <Text c={descColor} fz={20}>Learn more</Text>
                   </Flex>
               </Flex>
               <Flex className={css.ServiceCard__mainImage}>
                   <img src={imgPath}  alt={'service image'}/>
               </Flex>
           </Flex>
        </motion.div>
    );
};

export default ServiceCard;
import {Flex} from "@mantine/core";
import ContactUsTextContainer from "../ContactUsTextContainer/ContactUsTextContainer.tsx";
import css from './ContactUsSection.module.css'

const ContactUsSection = () => {
    return (
        <Flex className={css.ContactUsSection} bg={'gray.1'} justify={'space-between'}>
            <ContactUsTextContainer/>
            <Flex h={'100%'} w={'40%'} justify={'center'} align={'center'}>
                <img src={'src/assets/contact_abstraction.svg'} alt={'abstraction'}/>
            </Flex>
        </Flex>
    );
};

export default ContactUsSection;
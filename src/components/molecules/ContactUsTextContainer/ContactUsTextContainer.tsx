import {Flex, Text} from "@mantine/core";
import BlackButton from "../../atoms/BlackButton/BlackButton.tsx";

const ContactUsTextContainer = () => {
    return (
        <Flex direction={'column'} justify={'space-between'} h={'100%'} w={'40%'}>
            <Text fz={30} fw={500}>
                Let’s make things happen
            </Text>
            <Text fz={18} fw={200}>
                Contact us today to learn more about how our
                digital marketing services can help your business
                grow and succeed online.
            </Text>
            <BlackButton label={'Get your free proposal'}/>
        </Flex>
    );
};

export default ContactUsTextContainer;
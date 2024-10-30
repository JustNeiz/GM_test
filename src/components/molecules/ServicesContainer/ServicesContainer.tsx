import {Grid, useMantineTheme} from "@mantine/core";
import ServiceCard from "../ServiceCard/ServiceCard.tsx";

const ServicesContainer = () => {
    const theme = useMantineTheme();
    return (
        <Grid gutter={'xl'} pb={48}>
            <Grid.Col span={6}>
                <ServiceCard title={'Search engine optimization'} bg={theme.colors.grey[0]} imgPath={'public/assets/servicesImages/engine_service.svg'} titleBg={theme.colors.green[0]} descColor={theme.colors.black[0]} buttonPath={'public/assets/learnMoreButtons/learnGreen.svg'}/>
            </Grid.Col>

            <Grid.Col span={6}>
                <ServiceCard title={'Pay-per-click advertising'} bg={theme.colors.green[0]} imgPath={'public/assets/servicesImages/advertising_service.svg'} titleBg={theme.colors.gray[0]} descColor={theme.colors.black[0]} buttonPath={'public/assets/learnMoreButtons/learnGreen.svg'}/>
            </Grid.Col>

            <Grid.Col span={6}>
                <ServiceCard title={'Social Media Marketing'} bg={theme.colors.dark[0]} imgPath={'public/assets/servicesImages/social_service.svg'} titleBg={'white'} descColor={'white'} buttonPath={'public/assets/learnMoreButtons/learnBlack.svg'}/>

            </Grid.Col >

            <Grid.Col span={6}>
                <ServiceCard title={'Email Marketing'} bg={theme.colors.grey[0]} imgPath={'public/assets/servicesImages/email_service.svg'} titleBg={theme.colors.green[0]} descColor={theme.colors.black[0]} buttonPath={'public/assets/learnMoreButtons/learnGreen.svg'}/>
            </Grid.Col >

            <Grid.Col span={6}>
                <ServiceCard title={'Content Creation'} bg={theme.colors.green[0]} imgPath={'public/assets/servicesImages/content_service.svg'} titleBg={theme.colors.gray[0]} descColor={theme.colors.black[0]} buttonPath={'public/assets/learnMoreButtons/learnGreen.svg'}/>
            </Grid.Col>

            <Grid.Col span={6}>
                <ServiceCard title={'Analytics and Tracking'} bg={theme.colors.dark[0]} imgPath={'public/assets/servicesImages/analytic_service.svg'} titleBg={theme.colors.green[0]} descColor={'white'} buttonPath={'public/assets/learnMoreButtons/learnBlack.svg'}/>
            </Grid.Col>

        </Grid>
    );
};

export default ServicesContainer;
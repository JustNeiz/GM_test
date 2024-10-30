import css from './RequestQuoteButton.module.css';
import {Button} from "@mantine/core";
const RequestQuoteButton = () => {
    return (
        <Button radius={'lg'} className={css.RequestQuoteButton} c={'black.1'} fw={300} >
            Request a quote
        </Button>
    );
};

export default RequestQuoteButton;
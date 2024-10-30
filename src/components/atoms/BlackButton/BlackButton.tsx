import css from './BlackButton.module.css'
import {Button} from "@mantine/core";
import {BlackButtonProps} from "../../../interfaces/props/BlackButtonProps.ts";
import React from "react";

const BlackButton: React.FC<BlackButtonProps> = ({label}) => {
    return (
        <Button bg={'black.1'} radius={'lg'} className={css.BlackButton} fw={400} fz={20}>
            {label}
        </Button>
    );
};

export default BlackButton;
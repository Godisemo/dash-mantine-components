import React from "react";
import { DashComponentProps } from "../../../props";
import { Accordion } from "@mantine/core";

type Props = {
    /** Disables control button */
    disabled?: boolean;
    /** Custom chevron icon */
    chevron?: React.ReactNode;
    /** Control label */
    children?: React.ReactNode;
    /** Icon rendered next to label */
    icon?: React.ReactNode;
} & DashComponentProps;

/**
 * Divide content into collapsible sections. For more information, see: https://mantine.dev/core/accordion/
 */
const AccprdionControl = (props: Props) => {
    const { children, setProps, ...other } = props;

    return <Accordion.Control {...other}>{children}</Accordion.Control>;
};

AccprdionControl.defaultProps = {};

export default AccprdionControl;
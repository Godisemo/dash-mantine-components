import React from "react";
import { DashComponentProps, SelectSharedProps } from "../../props";
import { Select as MantineSelect } from "@mantine/core";

type Props = {
    /** Maximum dropdown height in px */
    maxDropdownHeight?: number;
    /** Set to true to enable search */
    searchable?: boolean;
    /** Allow to clear item */
    clearable?: boolean;
    /** aria-label for clear button */
    clearButtonLabel?: string;
    /** Controlled search input value */
    searchValue?: string;
    /** Allow creatable option  */
    creatable?: boolean;
    /** Change dropdown component, can be used to add native scrollbars */
    dropdownComponent?: any;
    /** Select highlighted item on blur */
    selectOnBlur?: boolean;
    /** Allow deselecting items on click */
    allowDeselect?: boolean;
    /** Should data be filtered when search value exactly matches selected item */
    filterDataOnExactSearchMatch?: boolean;
    /** Set the clear button tab index to disabled or default after input field */
    clearButtonTabIndex?: -1 | 0;
    /** Controlled input value */
    value?: string;
} & SelectSharedProps &
    DashComponentProps;

/**
 * Custom searchable select. For more information, see: https://mantine.dev/core/select/
 */
const Select = (props: Props) => {
    const { setProps, ...other } = props;

    const onChange = (value: string) => {
        setProps({ value });
    };

    return <MantineSelect onChange={onChange} {...other} />;
};

Select.defaultProps = {
    data: [],
};

export default Select;
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import Icon from '../Icon';

import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <SelectElem value={value} onChange={onChange}>
                {children}
            </SelectElem>
            <SelectIcon id='chevron-down' />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: fit-content;
`;

const SelectElem = styled.select`
    -webkit-appearance: none;
    padding: 12px 40px 12px 16px;
    background-color: ${COLORS.transparentGray15};
    border: none;
    border-radius: 8px;
    color: ${COLORS.gray700};

    &:hover {
        color: ${COLORS.black};
    }
`;

const SelectIcon = styled(Icon)`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    height: 24px;
    margin-block: auto;
`;

export default Select;

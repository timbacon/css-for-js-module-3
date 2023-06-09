import React from 'react';
import styled from 'styled-components';
import Icon from '../Icon';

import { COLORS } from '../../constants';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
    const displayedValue = getDisplayedValue(value, children);

    return (
        <Wrapper>
            <NativeSelect value={value} onChange={onChange}>
                {children}
            </NativeSelect>
            <PresentationalSelect>
                {displayedValue}
                <IconWrapper style={{ '--size': '24px' }}>
                    <Icon id='chevron-down' strokeWidth={1} size={24} />
                </IconWrapper>
            </PresentationalSelect>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    width: max-content;
`;

const PresentationalSelect = styled.div`
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-size: 1rem;
    padding: 12px 16px;
    padding-right: 52px;
    border-radius: 4px;
    border: none;
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    height: var(--size);
    width: var(--size);
`;

const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    appearance: none;
`;

export default Select;

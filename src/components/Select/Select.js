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
    isolation: isolate;
`;

const NativeSelect = styled.select`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    appearance: none;
    z-index: 2;
`;

const PresentationalSelect = styled.div`
    background-color: ${COLORS.transparentGray15};
    color: ${COLORS.gray700};
    font-size: 1rem;
    padding: 12px 16px;
    padding-right: 52px;
    border-radius: 8px;
    border: none;

    ${NativeSelect}:focus + & {
        outline: 1px dotted #121212;
        outline: 5px auto -webkit-focus-ring-color;
    }

    ${NativeSelect}:hover + & {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 10px;
    margin: auto;
    height: var(--size);
    width: var(--size);
    z-index: 1;
`;

export default Select;

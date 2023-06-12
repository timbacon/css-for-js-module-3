import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
    const id = crypto.randomUUID();
    const iconSize = size === 'small' ? 16 : 24;
    const iconStrokeWidth = size === 'small' ? 1 : 2;

    const InputComponent = Inputs[size];
    return (
        <Wrapper>
            <VisuallyHidden>
                <label htmlFor={id}>{label}</label>
            </VisuallyHidden>
            <InputComponent
                type='text'
                id={id}
                placeholder={placeholder}
                style={{ '--width': width + 'px' }}
            />
            <IconWrapper style={{ '--size': iconSize + 'px' }}>
                <Icon id={icon} size={iconSize} strokeWidth={iconStrokeWidth} />
            </IconWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
`;

const StyledInput = styled.input`
    border: 0;
    border-style: solid;
    border-color: ${COLORS.black};
    font-weight: 700;
    color: ${COLORS.gray700};
    width: var(--width);

    &::placeholder {
        color: ${COLORS.gray500};
        font-weight: 400;
    }

    &:focus {
        outline-offset: 2px;
    }

    &:hover {
        color: ${COLORS.black};
    }
`;

const IconWrapper = styled.div`
    color: ${COLORS.gray700};
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    height: var(--size);
    width: var(--size);
    margin: auto;
    pointer-events: none;

    ${StyledInput}:hover + & {
        color: ${COLORS.black};
    }
`;

const LargeInput = styled(StyledInput)`
    font-size: ${18 / 16}rem;
    padding: 8px 8px 8px 36px;
    border-bottom-width: 2px;
`;

const SmallInput = styled(StyledInput)`
    font-size: ${14 / 16}rem;
    padding: 4px 4px 4px 24px;
    border-bottom-width: 1px;
`;

const Inputs = {
    small: SmallInput,
    large: LargeInput,
};

export default IconInput;

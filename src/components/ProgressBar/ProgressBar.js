/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../constants';
import clamp from '../../utils/clamp';

const SIZESTYLES = {
    small: {
        '--height': '8px',
        '--border-radius': '4px',
    },
    medium: {
        '--height': '12px',
        '--border-radius': '4px',
    },
    large: {
        '--height': '24px',
        '--border-radius': '8px',
        '--padding': '4px',
    },
};

const ProgressBar = ({ value, size }) => {
    const styles = SIZESTYLES[size];
    const clampedValue = clamp(value, 0, 100);
    return (
        <Wrapper
            style={styles}
            role='progressbar'
            aria-valuenow={clampedValue}
            aria-label='progress'
        >
            <BarWrapper>
                <Bar width={clampedValue} />
            </BarWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--border-radius);
    background-color: ${COLORS.transparentGray15};
    padding: var(--padding);
    height: var(--height);
`;

const BarWrapper = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 4px;
    overflow: clip;
`;

const Bar = styled.div`
    height: 100%;
    width: ${props => props.width + '%'};
    background-color: ${COLORS.primary};
`;

export default ProgressBar;

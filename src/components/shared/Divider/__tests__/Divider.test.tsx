import React from 'react';
import {render} from '@testing-library/react-native';
import {Divider} from '../Divider';
import {addTestId} from '../../../../utils';

describe('Divider Component', () => {
  it('should render with default color', () => {
    const {getByTestId} = render(<Divider {...addTestId('test-divider')} />);

    const divider = getByTestId('test-divider');

    expect(divider).toBeTruthy();
    expect(divider.props.style[0].borderBottomColor).toBe('gray');
  });

  it('should render with custom color', () => {
    const {getByTestId} = render(
      <Divider {...addTestId('test-divider')} color="blue" />,
    );

    const divider = getByTestId('test-divider');

    expect(divider).toBeTruthy();
    expect(divider.props.style[2].borderBottomColor).toBe('blue');
  });

  it('should render with custom style', () => {
    const customStyle = {borderBottomWidth: 2, marginVertical: 8};
    const {getByTestId} = render(
      <Divider testID="test-divider" style={customStyle} />,
    );

    const divider = getByTestId('test-divider');

    expect(divider).toBeTruthy();
    expect(divider.props.style[1]).toEqual(customStyle);
  });
});

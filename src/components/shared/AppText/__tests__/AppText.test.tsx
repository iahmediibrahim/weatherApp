import React from 'react';
import {render} from '@testing-library/react-native';
import {AppText} from '../AppText';

describe('AppText Component', () => {
  const props = {
    children: 'this is a children',
  };
  it('should render with default props', () => {
    const {getByText} = render(<AppText>{props.children}</AppText>);

    const textElement = getByText(props.children);
    expect(textElement).toBeTruthy();
    expect(textElement.props.style[2].fontSize).toBe(16);
    expect(textElement.props.style[2].color).toBe('white');
    expect(textElement.props.style[2].fontWeight).toBe('normal');
    expect(textElement.props.style[0].marginBottom).toBe(8);
    expect(textElement.props.style[1]).toBeUndefined();
  });

  it('should render with custom props', () => {
    const {getByText} = render(
      <AppText fontSize={20} color="blue" fontWeight="bold">
        {props.children}
      </AppText>,
    );

    const textElement = getByText(props.children);

    expect(textElement).toBeTruthy();
    expect(textElement.props.style[2].fontSize).toBe(20);
    expect(textElement.props.style[2].color).toBe('blue');
    expect(textElement.props.style[2].fontWeight).toBe('bold');
  });

  it('should render with custom props and style', () => {
    const {getByText} = render(
      <AppText
        style={{
          marginBottom: 0,
        }}
        fontSize={20}
        color="blue"
        fontWeight="bold">
        {props.children}
      </AppText>,
    );

    const textElement = getByText(props.children);

    expect(textElement).toBeTruthy();
    expect(textElement.props.style[2].fontSize).toBe(20);
    expect(textElement.props.style[2].color).toBe('blue');
    expect(textElement.props.style[2].fontWeight).toBe('bold');
    expect(textElement.props.style[1].marginBottom).toBe(0);
  });
});

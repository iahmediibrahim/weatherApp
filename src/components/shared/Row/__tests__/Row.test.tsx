import React from 'react';
import {render} from '@testing-library/react-native';
import {Row} from '../Row';
import {addTestId} from '../../../../utils';

describe('Row Component', () => {
  it('should render with default styles', () => {
    const {getByTestId} = render(
      <Row {...addTestId('test-row')}>Test Content</Row>,
    );

    const row = getByTestId('test-row');

    expect(row).toBeTruthy();
    expect(row.props.style[1].flexDirection).toBe('row');
    expect(row.props.style[0]).toMatchObject({
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    });
  });

  it('should render with custom styles', () => {
    const customStyles = {
      gap: 10,
      justifyContent: 'center',
      alignItems: 'flex-end',
    };

    const {getByTestId} = render(
      <Row {...customStyles} {...addTestId('test-row')}>
        Test Content
      </Row>,
    );

    const row = getByTestId('test-row');

    expect(row).toBeTruthy();

    expect(row.props.style[2]).toMatchObject({marginHorizontal: 10});
    expect(row.props.style[3]).toMatchObject({
      justifyContent: 'center',
    });
    expect(row.props.style[4]).toMatchObject({
      alignItems: 'flex-end',
    });
  });

  it('should render with a custom testID', () => {
    const {getByTestId} = render(
      <Row {...addTestId('custom-test-id')}>Test Content</Row>,
    );

    const row = getByTestId('custom-test-id');

    expect(row).toBeTruthy();
  });
});

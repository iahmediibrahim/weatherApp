import {Text} from 'react-native';

import {render, screen} from '@testing-library/react-native';

import {AppTemplate} from '../AppTemplate';
describe('Apptemlate test', () => {
  const props = {
    title: 'this is a title',
    children: 'this is a children',
    subTitle: 'this is a subTitle',
  };
  it('should render with title and optional subtitle and children', () => {
    const {getByTestId} = render(
      <AppTemplate title={props.title} subTitle={props.subTitle}>
        <Text>{props.children}</Text>
      </AppTemplate>,
    );

    const title = getByTestId('screen-title');
    const subTitle = getByTestId('screen-subtitle');

    expect(title).toBeTruthy();
    expect(subTitle).toBeTruthy();
    expect(title.props.children).toBe(props.title);
    expect(subTitle.props.children).toBe(props.subTitle);
    expect(screen.getByText(props.children)).toBeDefined();
  });
  it('should render only with title and children', () => {
    const {getByTestId} = render(
      <AppTemplate title={props.title}>
        <Text>{props.children}</Text>
      </AppTemplate>,
    );
    const title = getByTestId('screen-title');

    expect(title).toBeTruthy();
    expect(title.props.children).toBe(props.title);
    expect(screen.getByText(props.children)).toBeDefined();
  });
  it('should render with default styles if not provided as props', () => {
    const {getByTestId} = render(
      <AppTemplate title={props.title}>
        <Text>{props.children}</Text>
      </AppTemplate>,
    );

    const backgroundStyle = getByTestId('app-template').props.style;

    expect(backgroundStyle).toEqual([{flex: 1}, undefined]);
  });
});

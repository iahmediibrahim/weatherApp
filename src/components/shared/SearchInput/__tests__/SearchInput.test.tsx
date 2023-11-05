import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SearchInput} from '../SearchInput';

test('SearchInput component renders correctly', () => {
  const handleTextDebounce = jest.fn();
  const {getByTestId} = render(
    <SearchInput handleTextDebounce={handleTextDebounce} />,
  );

  // Check if the input element is rendered
  const inputElement = getByTestId('search-input');
  expect(inputElement).toBeTruthy();

  // Check if the placeholder text is correct
  expect(inputElement.props.placeholder).toBe('Search by city name');

  // Check if the placeholder text color is lightgray
  expect(inputElement.props.placeholderTextColor).toBe('lightgray');

  // Simulate user input in the input element
  fireEvent.changeText(inputElement, 'New York');

  // Verify that the handleTextDebounce function is called with the input text
  expect(handleTextDebounce).toHaveBeenCalledWith('New York');
});

import {StyleSheet, TextInput, View} from 'react-native';
import {addTestId} from '../../utils';
interface SearchInputProps {
  handleTextDebounce: (text: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({handleTextDebounce}) => {
  return (
    <TextInput
      {...addTestId('search-input')}
      onChangeText={handleTextDebounce}
      placeholder="Search by city name"
      placeholderTextColor={'lightgray'}
      style={styles.textInput}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    color: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: '100%',
  },
});
export {SearchInput};

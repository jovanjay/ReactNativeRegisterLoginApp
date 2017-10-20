/**
 * Global styles
 */

 import {
   StyleSheet,
 } from 'react-native';

const buttonPrimary = '#5DADE2';
const styles = StyleSheet.create({
  _container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  },
  _textInput : {
      marginTop: 20,
      marginRight: 20,
      marginLeft: 20,
      height: 40,
      borderColor: '#cccccc',
      borderWidth: 1,
      alignSelf: 'stretch',
      borderRadius: 2,
      padding: 5,
    },
  _buttonTs : {
      borderColor: '#5DADE2',
      backgroundColor: '#5DADE2',
      marginTop: 20,
      paddingTop:10,
      paddingBottom:10,
      height: 70, 
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 2,
      alignSelf: 'stretch',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  _buttonContainer : {
    backgroundColor: buttonPrimary,
    borderRadius: 3,
    marginRight: 20,
    marginLeft: 20,
    marginTop: 20,
    padding: 1,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: buttonPrimary,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 0.25
  }  
});

export default styles;

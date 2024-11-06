import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';

const {width} = Dimensions.get('window');

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const scrollViewRef = useRef();

  // Scroll to the end of the input display when input changes
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  }, [input]);

  // Function to handle button press
  const handlePress = value => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Calculate result
      } catch (error) {
        setResult('Error'); // Handle calculation errors
      }
    } else if (value === 'C') {
      setInput(''); // Clear input
      setResult(''); // Clear result
    } else if (value === '⌫') {
      setInput(input.slice(0, -1)); // Delete last character
    } else {
      setInput(input + value); // Append input value
    }
  };

  return (
    <View style={styles.container}>
      {/* Display input and result */}
      <View style={styles.display}>
        <ScrollView
          ref={scrollViewRef}
          style={styles.inputContainer}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          inverted // Ensures that content appears from the bottom
        >
          <Text style={styles.inputText}>{input || '0'}</Text>
        </ScrollView>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Calculator buttons */}
      <View style={styles.buttons}>
        {[
          ['C', '/', '*', '⌫'],
          ['7', '8', '9', '-'],
          ['4', '5', '6', '+'],
          ['1', '2', '3', '='],
          ['0', '.', '(', ')'],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map(button => (
              <TouchableOpacity
                key={button}
                style={styles.button}
                onPress={() => handlePress(button)}>
                <Text style={styles.buttonText}>{button}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    backgroundColor: '#f2f2f2',
  },
  display: {
    height: '40%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#1e1e1e',
    padding: 10,
    marginBottom: 2,
  },
  inputContainer: {
    width: '100%',
  },
  scrollContent: {
    flexDirection: 'column-reverse', // Aligns items from bottom to top
    alignItems: 'flex-end',
  },
  inputText: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'right',
    alignSelf: 'flex-end', // Align text to the right
  },
  resultText: {
    fontSize: 28,
    color: '#777',
    marginTop: 10,
    marginBottom: 18,
  },
  buttons: {
    display: 'flex',
    height: '60%',
    paddingBottom: 3,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    height: '19.8%',
  },
  button: {
    width: '24.5%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333',
  },
  buttonText: {
    fontSize: 30,
    color: '#fff',
  },
});

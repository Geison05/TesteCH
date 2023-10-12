import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TelaPosLogin = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vindo à Tela Pós-Login!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Voltar para a Tela Inicial</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#410404',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 221,
    height: 156.96,
    marginBottom: 16,
    marginTop: 140,
  },
  text: {
    color: 'white',
    fontFamily: 'Risque',
    fontSize: 34.41,
    marginBottom: 40,
  },
  inputContainer: {
    width: 300,
  },
  inputLabel: {
    color: 'white',
    marginBottom: 5,
    textAlign: 'left',
  },
  input: {
    backgroundColor: 'white',
    width: '100%',
    height: 40,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#F2A60C',
    width: 200,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#410404',
  },
});

export default TelaPosLogin;

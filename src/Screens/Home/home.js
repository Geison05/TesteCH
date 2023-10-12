import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

const Home = ({ navigation }) => {
  // Função para navegar para a tela de criação de conta
  const criarConta = () => {
    navigation.navigate('CadastroUsuarios'); // Use o nome correto da tela
  };

  const login = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Choppanheiros</Text>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { marginTop: 20 }]} onPress={criarConta}>
        <Text style={styles.buttonText}>CRIAR CONTA</Text>
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
  text: {
    color: '#FFF',
    fontFamily: 'Risque',
    fontSize: 34.41,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 29.11,
    marginBottom: 40,
  },
  button: {
    elevation: 2,
    backgroundColor: '#F2A60C',
    width: 229,
    height: 56,
    paddingStart: 32,
    paddingTop: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 24,
    lineHeight: 24,
    fontFamily: 'Poppins',
    fontWeight: '600',
    color: '#410404',
    textAlign: 'center',
  },
});

export default Home;

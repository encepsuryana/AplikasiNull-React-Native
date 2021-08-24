/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import cart from './src/images/cart.png';

const PositonReactNative = () => {
  console.log('Hello');
  return (
    <View style={styles.Wreaper}>
      <View style={styles.cartWreaper}>
        <Image source={cart} style={styles.iconCart} />
        <Text style={styles.notifWreaper}>99</Text>
      </View>
      <Text style={styles.Text}>Keranjang Belanja</Text>
    </View>
  );
};

export default PositonReactNative;

const styles = StyleSheet.create({
  Wreaper: {
    padding: 20,
    alignItems: 'center',
  },
  cartWreaper: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  iconCart: {
    width: 50,
    height: 50,
  },
  Text: {
    fontSize: 12,
    color: '#777',
    fontWeight: '700',
    marginTop: 8,
  },
  notifWreaper: {
    fontSize: 12,
    color: 'white',
    backgroundColor: 'red',
    padding: 5,
    borderRadius: 25,
    width: 24,
    height: 24,
    position: 'absolute',
    top: 0,
    right: 0,
    borderColor: '#fff',
    borderWidth: 3,
  },
});

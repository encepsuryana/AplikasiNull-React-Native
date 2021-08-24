import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';

class MateriFlexBox extends Component {
  render() {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', height: 50, width: 50}} />
          <View style={{backgroundColor: '#feca57', height: 50, width: 50}} />
          <View style={{backgroundColor: '#1dd1a1', height: 50, width: 50}} />
          <View style={{backgroundColor: '#5f27cd', height: 50, width: 50}} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        <View
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
          <Image
            source={{uri: 'https://placeimg.com/100/100/people'}}
            style={{width: 100, height: 100, borderRadius: 50, marginRight: 15}}
          />
          <View>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Encep Suryana
            </Text>
            <Text>1,5jt Subscriber</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default MateriFlexBox;

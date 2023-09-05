// src/components/VideoList.tsx
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Card, Image, Text } from 'react-native-elements';
import { moderateScale } from '../../helpers/Responsive';
import Colors from '../../constants/Colors';
import Images from '../../constants/Images';

const VideoList: React.FC = () => {


const videoData = [
    {
    uri: "https://images.unsplash.com/photo-1614160859544-177611d11f6b?ixlib=",
    title: "Red Car Photos",
    id: 1,
   },
   {
    uri: "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=2000",
    title: "Red Car Photos",
    id: 2,
   },
   {
    uri: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Red Car Photos",
    id: 13,
   },
    {
    uri: "https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    title: "Red Car Photos",
    id: 4,
   },
    {
    uri: "https://imageio.forbes.com/specials-images/imageserve/5d35eacaf1176b0008974b54/0x0.jpg?format=jpg&crop=4560,2565,x790,y784,safe&width=1200",
    title: "Red Car Photos",
    id: 5,
   },
    {
    uri: "https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?cs=srgb&dl=pexels-mike-bird-3729464.jpg&fm=jpg",
    title: "Red Car Photos",
    id: 1,
   },
    {
    uri: "https://hips.hearstapps.com/hmg-prod/images/2023-chevrolet-corvette-z06-002-6459269952a63.jpg",
    title: "Red Car Photos",
    id: 6,
   },
];

  return (
    <FlatList
      data={videoData}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.container}>
          <Image resizeMode='cover' source={{ uri: item.uri}}style={styles.imageStyle} />
          <Image resizeMode='cover' source={Images.dashboard.thumbnail}style={styles.iconStyle} />
          <Text style={styles.titleStyle}>{item.title}</Text>
        </View>
      )}
    />
  );
};

export default VideoList;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: moderateScale(10),
      alignItems:"center",
      justifyContent:"center",
    },
    cardContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: moderateScale(225),
      height: moderateScale(200),
      marginTop: moderateScale(40),
    },
  imageStyle: {
    alignSelf: 'center',
    width: moderateScale(230),
    height: moderateScale(300),
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(30),
  },
  iconStyle: {
    alignSelf: 'center',
    width: moderateScale(50),
    height: moderateScale(50),
    bottom: moderateScale(50),
    position: "absolute",
  },
  titleStyle: {
    marginHorizontal: moderateScale(15),
    fontWeight: '600',
    fontSize: moderateScale(16),
    color: Colors.black,
    text: 'center',
  },
  });
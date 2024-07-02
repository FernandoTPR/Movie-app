import { View, Text, TouchableWithoutFeedback, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel'

var {width,height} = Dimensions.get('window')

export default function TrendingMoivies({data}) {
  return (
    <View className="mb-8 mt-5">
      <Text className="text-red-100 text-xl mx-4 mb-5 ">Trending Movies</Text>
          <Carousel
              data={data}
              renderItem={({ item }) => <MovieCard item={item} handleClick={handleClick}/>}
              firstItem={1}
              inactiveSlideOpacity={0.60}
              sliderWidth={600}
              sliderHeight={400}
              slideStyle={{ display: 'flex', alignItems: 'center' }}
          />
    </View>
  )
}


const MovieCard = ({item, handleClick})=>{
    return (
        <TouchableWithoutFeedback onPress={handleClick}>
            <Image
                source={require('../assets/icon.png')}
                style={{
                    width:width*0.6,
                    height:height*0.4
                }}
                className="rounded-3xl"
                />
        </TouchableWithoutFeedback>
    )
}
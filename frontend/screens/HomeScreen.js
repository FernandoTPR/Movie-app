import { View, Text, StatusBar, Platform, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Bars3BottomLeftIcon, MagnifyingGlassCircleIcon } from 'react-native-heroicons/outline'
import TrendingMoivies from '../components/TrendingMoivies'

const ios = Platform.OS =='ios'
export default function HomeScreen() {
    const [trending,setTrending] = useState([1,2,3,4,5])
  return (
    <View className="flex-1 bg-neutral-800">
        {/* search and logo */}
      <SafeAreaView className={ios? '-mb-2 pt-2':'-mb-3 pt-3'}>
        <StatusBar style="light"/>
        <View className="flex-row justify-between items-center mx-4">
            <Bars3BottomLeftIcon size={30} strokeWidth={3} color="white"/>
            <Text className="text-white text-3xl font-extrabold">Movies</Text>
            <TouchableOpacity>
                <MagnifyingGlassCircleIcon size="30" strokeWidth={2} color="white"/>
            </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:10}}
        >
            {/* trending moviews */}
            <TrendingMoivies data={trending}/>
        </ScrollView>

    </View>
  )
}
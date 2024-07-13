import { View, Text, SafeAreaView, Image,TextInput, TouchableOpacity } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import {MagnifyingGlassIcon, MapPinIcon} from 'react-native-heroicons/outline'
import { useState } from 'react'
import {theme} from '../theme/index'


const HomeScreen = () => {

    const  [showSearch, toggleSearch] = useState(false);
    const  [locations, setLocations] = useState([1,2,3]);

   return (
    <View className="flex-1 relative" >
    <StatusBar style="light"/>
        <Image blurRadius={70} source={require('../assets/images/bg.png')} className="h-full w-full  absolute"/>

      <SafeAreaView className= "flex flex-1">
        <View style={{height:'9%'}} className="mx-4  my-8 relative z-50">
          <View className="flex-row justify-end items-center rounded-full"
          style={{backgroundColor: showSearch? theme.bgWhite(0.2): 'transparent'}}>
              {
                showSearch? (
                      <TextInput  
                           placeholder='Ciudad....' 
                           placeholderTextColor={'lightgray'}
                           className="pl-6 h-10 flex-1 text-base text-white"

                      />
                                 
                ):null
              }

            <TouchableOpacity
                  onPress={()=> toggleSearch(!showSearch)}
                  style={{backgroundColor: theme.bgWhite(0.3)}}
                  className="rounded-full p-3 m-1">
               <MagnifyingGlassIcon size="25" color="white"/>
            </TouchableOpacity>

          </View>
                {
                  locations.length>0 && showSearch?
                  (
                    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
                    
                    {
                      locations.map((loc, index)=>{
                        let showBorder
                        return(
                          <TouchableOpacity
                        
                          key={index}
                          className="flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400"
                          >
                              <MapPinIcon size={20} color="red"/>
                             <Text className="text-black text-lg ml-2">Buenos Aires, Argentina</Text>
                          </TouchableOpacity>
                        )
                      })
                       
                      
                    }

                  </View>
                  ):null
                }
        </View>
        {/*otro componente */}
        <View className="mx-4 flex justify-around flex-1 mb-2">
          {/*locacion */}
          <Text className="tex-2xl  text-center font-bold text-white">
           Buenos Aires,
           <Text className="tex-lg font-semibold text-gray-300">
            Argentina
          </Text>
          </Text>
         {/*clima */}
         <View className="flex-row justify-center">
          <Image source={require('../assets/images/parcialmente.png')} className="w-52 h-52"/>
         </View>
         {/*grados */}
         <View className="space-y-2">
          <Text className="text-center font-bold text-white text-6xl ml-5">
            23&#176;
          </Text>
          <Text className="text-center text-white text-xl tracking-widest">
            Parcialmente Nublado
          </Text>
         </View>
         {/*otros */}
         <View className="flex-row justify-between mx-4">
                <View className="flex-row space-x-2 items-center">
                  <Image source={require('../assets/icons/viento.png')} className="h-6 w-6"/>
                  <Text className="text-white font-semibold text-base">
                    22km
                  </Text>

                </View>
                <View className="flex-row space-x-2 items-center">
                  <Image source={require('../assets/icons/humedad.png')} className="h-6 w-6"/>
                  <Text className="text-white font-semibold text-base">
                    23%
                  </Text>

                </View>
                <View className="flex-row space-x-2 items-center">
                  <Image source={require('../assets/icons/amanecer.png')} className="h-6 w-6"/>
                  <Text className="text-white font-semibold text-base">
                    06:05 AM
                  </Text>

                </View>
         </View>
        </View>
      </SafeAreaView>  
    </View>
  
  )
}

export default HomeScreen
className=" flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400" >
<Text>Buenos Aires, Argentina</Text>
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
      </SafeAreaView>  
    </View>
  
  )
}

export default HomeScreen
className=" flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400" >
<Text>Buenos Aires, Argentina</Text>
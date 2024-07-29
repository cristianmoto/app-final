import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import {
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/outline";
import { useState, useCallback } from "react";
import { theme } from "../theme/index";
import { debounce } from "lodash";
import { fetchLocations, fetchWeatherForecast } from "../api/clima";
import {
  CalendarDaysIcon,
  ArrowRightStartOnRectangleIcon,
} from "react-native-heroicons/solid";

import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = () => {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [weather, setWeather] = useState({});

  const handleLocation = (loc) => {
    console.log("location:", loc);
    setLocations([]);
    toggleSearch(false);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setWeather(data);
      console.log("ciudad", data);
    });
  };

  const handleSearch = (value) => {
    if (value.length > 2) {
      fetchLocations({ cityName: value }).then((data) => {
        console.log(data);
        setLocations(data);
      });
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  const { current, location, forecast } = weather;

  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <Image
        blurRadius={70}
        source={require("../assets/images/fondo.png")}
        className="h-full w-full  absolute"
      />

      <SafeAreaView className="flex flex-1 mb-10 border-b-white">
        <View style={{ height: "9%" }} className="mx-4  my-8 relative z-50">
          <View
            className="flex-row justify-end items-center rounded-full"
            style={{
              backgroundColor: showSearch ? theme.bgWhite(0.2) : "transparent",
            }}
          >
            {showSearch ? (
              <TextInput
                onChangeText={handleTextDebounce}
                placeholder="Ciudad...."
                placeholderTextColor={"lightgray"}
                className="pl-6 h-10 flex-1 text-base text-white"
              />
            ) : null}

            <TouchableOpacity
              onPress={() => toggleSearch(!showSearch)}
              style={{ backgroundColor: theme.bgWhite(0.3) }}
              className="rounded-full p-3 m-1"
            >
              <MagnifyingGlassIcon size="25" color="white" />
            </TouchableOpacity>
          </View>
          {locations.length > 0 && showSearch ? (
            <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
              {locations.map((loc, index) => {
                let showBorder;
                return (
                  <TouchableOpacity
                    key={index}
                    onPress={() => handleLocation(loc)}
                    className="flex-row items-center border-0 p-3 px-4 mb-1 border-b-2 border-b-gray-400"
                  >
                    <MapPinIcon size={20} color="red" />
                    <Text className="text-black text-lg ml-2">
                      {loc?.name},{loc?.country}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          ) : null}
        </View>
        {/*otro componente */}
        <View className="mb-2 space-y-3  ">
          <View className="flex-row items-center mx-5 space-x-2 ">
            <CalendarDaysIcon size="45" color="white" />
            <Text className=" text-white  text-3xl">Clima Semanal</Text>
          </View>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 25 }}
            showsHorizontalScrollIndicator={false}
          >
            <View
              className="flex justify-center items-center w-[250px] h-[400px] rounded-3xl  mx-12 my-10"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/lluvia.png")}
                className="h-[100px] w-[100px]"
              />
              <Text className="text-white  text-3xl">Monday</Text>
              <Text className="text-white text-3xl font-semibold">
                23&#176;
              </Text>
            </View>
{/* ----------*/}
<View
              className="flex justify-center items-center w-[250px] h-[400px] rounded-3xl  mx-12 my-10"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/lluvia.png")}
                className="h-[100px] w-[100px]"
              />
              <Text className="text-white  text-3xl">Monday</Text>
              <Text className="text-white text-3xl font-semibold">
                23&#176;
              </Text>
            </View>
{/* ----------*/}
<View
              className="flex justify-center items-center w-[250px] h-[400px] rounded-3xl  mx-12 my-10"
              style={{ backgroundColor: theme.bgWhite(0.15) }}
            >
              <Image
                source={require("../assets/images/lluvia.png")}
                className="h-[100px] w-[100px]"
              />
              <Text className="text-white  text-3xl">Monday</Text>
              <Text className="text-white text-3xl font-semibold">
                23&#176;
              </Text>
            </View>
{/* ----------*/}


          </ScrollView>
          <View className="flex-1 items-center">
            <ArrowRightStartOnRectangleIcon size="45" color="white" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

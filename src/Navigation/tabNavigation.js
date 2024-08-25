import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Navigation from "./navigation";
import { faIdBadge, faS } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <NavigationContainer independent={true} s>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            
          },
         
      
        }}
      >
        <Tab.Screen
          name="Home" 
          component={Navigation}
          options={{
            tabBarIcon: () => (
              <View style={style.iconContainer}>
                <Ionicons name="home" size={24} color="white" />
              </View>
            ),
         
            tabBarLabelStyle: { color: "white",fontSize:15 },
          }}
        />

   
        <Tab.Screen 
          name="Portfolio"  component={''}
          options={{
            tabBarIcon: () => (
              <View style={style.iconContainer}>
                <Ionicons name="bag-handle-sharp" size={24} color="white" />
              </View>
            ),
            tabBarLabelStyle: { color: "white",fontSize:15 },
          }}
        />

        <Tab.Screen
          name="Wallet"  component={''}
          options={{
            tabBarIcon: () => (
              <View style={style.iconContainer}>
               <Ionicons name="wallet-outline" size={24} color="white" />
              </View>
            ),
            tabBarLabelStyle: { color: "white",fontSize:15},
          }}
        />


<Tab.Screen
          name="Profile" component={''}
          options={{
            tabBarIcon: () => (
              <View style={style.iconContainer}>
               <FontAwesomeIcon icon={faIdBadge}color="white" size={24} />
              </View>
            ),
            tabBarLabelStyle: { color: "white",fontSize:15 },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  iconContainer: {
    height: 60,
    width: 60,
    borderRadius: 100,
    borderWidth: 0.5,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

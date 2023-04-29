/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { Node, useEffect, useState } from 'react';

import React from 'react';
import tw from 'twrnc';

import { Text, View, Button, Image, Pressable } from 'react-native';
import { StarIcon, HomeIcon} from 'react-native-heroicons/outline';
import { StarIcon as StarIconSolid, HomeIcon as HomeIconSolid} from 'react-native-heroicons/solid';

import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 

import Home from './screens/Home';
import Saved from './screens/Saved';

// const Logo = () => {
//   return (
//     <Image source={require('./static/images/netflix-logo.png')} style={tw`w-[72px] h-[20px]`} />
//   )
// }

// function DetailsScreen({ navigation, route }) {
//   console.log(route.params)
//   return (
//     <View style={tw`flex flex-1 items-center justify-center`}>
//       <Text>Details Screen</Text>
//       <Text>{route.params?.description}</Text>
//       <Button title='Profile' onPress={() => navigation.navigate('Profile', {id: 67, info: 'Otra info'})}/>
//       <Button title='Volver' onPress={() => navigation.goBack()}/>
//     </View>
//   );
// }

// function ProfileScreen({ navigation, route }) {
//   const {id, info} = route.params
//   const [description, setDescription] = useState()
//   
//   useEffect(() => {
//     setDescription('otra descripción')
//   }, [])

//   return (
//     <View style={tw`flex flex-1 items-center justify-center`}>
//       <Text>Profile Screen</Text>
//       <Text>{JSON.stringify(id)}</Text>
//       <Text>{JSON.stringify(info)}</Text>
//       <Button title='Go Home' onPress={() => navigation.popToTop()}/>
//       <Button title='Go to details' onPress={() => navigation.navigate('Details', {description: description})}/>
//       <Button title='Volver' onPress={() => navigation.goBack()}/>
//     </View>
//   );
// }

// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App: () => Node = () => {

  return(
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            if (route.name === 'Home') {
              return focused ? (
                <HomeIconSolid color={tw.color('blue-600')} size={20} /> 
              ) : (
                <HomeIcon color={tw.color('gray-400')} size={20} />
              );
            } else if (route.name === 'Saved') {
              return focused ? (
                <StarIconSolid color={tw.color('blue-600')} size={20} /> 
               ) : (
                <StarIcon color={tw.color('gray-400')} size={20} />
              );
            }
          },
          tabBarStyle: {
            marginTop: -10,
            marginBottom: 7,
          },
          unmountOnBlur: true,
        })}
      >
        <Tab.Screen  name='Home' component={Home} options={{headerShown: false}} />
        <Tab.Screen name='Saved' component={Saved} options={{title: 'My translations'}} />
      </Tab.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false}} /> */}
        {/* <Stack.Screen name='Profile' component={ProfileScreen} initialParams={{id: 93}} /> */}
        {/* <Stack.Screen name='Details' component={DetailsScreen} options={{title: 'Mis detalles', headerStyle: {backgroundColor: tw.color('green-500')}, headerTintColor: tw.color('white'), headerTitleStyle: {fontWeight: 'bold'}}} /> */}
        {/* <Stack.Screen name='Details' component={DetailsScreen} options={{headerTintColor: tw.color('white'), headerStyle: {paddingRight: 0}, headerTitle: (props) => <Logo {...props} />, headerLeft: () => (<Pressable style={tw`android:-ml-14 mr-6`} onPress={() => Alert('Toast!')}><Text>Back</Text></Pressable>) }}/> */}
      {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}

export default App;

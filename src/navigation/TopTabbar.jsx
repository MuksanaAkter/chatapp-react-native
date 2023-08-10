import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommunityScreen from '../screens/CommunityScreen';
import {Colors} from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
// import HomeScreen from '../screens/HomeScreen';
// import ChatListScreen from '../screens/ChatListScreen';
// import StatusListScreen from '../screens/StatusListScreen';
// import CallListSreen from '../screens/CallListSreen';
import {TabBarData} from '../data/TabbarData';

const Tab = createMaterialTopTabNavigator();

const TopTabbar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Chats"
      screenOptions={() => ({
        tabBarActiveTintColor: Colors.tertiary,
        tabBarInactiveTintColor: Colors.secondaryColor,
        tabBarIndicatorStyle: {
          backgroundColor: Colors.tertiary,
        },
        tabBarStyle: {
          backgroundColor: Colors.primaryColor,
        },
      })}>
        {/* <Tab.Screen name='Comm' component={CommunityScreen}></Tab.Screen>
        <Tab.Screen name='Chats' component={ChatListScreen}></Tab.Screen>
        <Tab.Screen name='Status' component={StatusListScreen}></Tab.Screen>
        <Tab.Screen name='Calls' component={CallListSreen}></Tab.Screen> */}
      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({color}) => (
            <VectorIcon
              type="FontAwesome"
              name="users"
              color={color}
              size={20}
            />
          ),
        }}
      /> 
       {TabBarData.map(tab => (
        <Tab.Screen key={tab.id} name={tab.name} component={tab.route} />
      ))}
    </Tab.Navigator>
  );
};

export default TopTabbar;

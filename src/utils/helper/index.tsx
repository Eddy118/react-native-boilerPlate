
import {widthPercentageToDP , heightPercentageToDP } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Responsive Screen
const wp = (val: number) => widthPercentageToDP(val);
const hp = (val: number) => heightPercentageToDP(val);

// Responsive Fonts
const RFVal = (val : number) => RFValue(val)
const RFPer = (val : number) => RFPercentage(val)

// Local Storage
const storeVal = async (key: string , val : string) => {
   try {
     return await AsyncStorage.setItem(key, val);
   } catch (e) {}
};
const retreiveVal = async (key: string) => {
    try {
       return await AsyncStorage.getItem(key)
    } catch (e){}
};
const removeVal = async (key: string) => {
    try {
        return await AsyncStorage.removeItem(key)
    }
    catch (e) {}
};

export  {wp , hp , storeVal ,RFVal , RFPer, retreiveVal, removeVal}


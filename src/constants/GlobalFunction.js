// import Toast from "react-native-simple-toast";
// import AsyncStorage from "@react-native-community/async-storage";
// import instance from "../redux/config/apiConfig";
// import Variables from "./Variables";
// import NavigationService from "../navigation/NavigationService";
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// const regMobileNumber = /^[0-9]{10}$/;
// const regAlphabetSpace = /^[A-Za-z ]+$/;
// const regNumber = /^[0-9]+$/;
// const regAlphabet = /^[A-Za-z]+$/;
// const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


// export const isEmpty = (text) => {
//     if (text === "" || (text?.trim() === "")) {
//         return false;
//     } else {
//         return true;
//     }
// }

// export const ToastAlert = (data) => {
//     return Toast.showWithGravity(data, Toast.SHORT, Toast.BOTTOM);
// };

// export const isNumber = (text) => {
//     if (text === "" || text.trim() === "") {
//         return false;
//     } else if (!regMobileNumber.test(text.trim())) {
//         return false;
//     } else if (text.trim() == "0000000000") {
//         return false;
//     } else {
//         return true;
//     }
// };

// export const isEmail = (text) => {
//     if (text === "") {
//         return false;
//     } else if (reg.test(text)) {
//         return true;
//     } else {
//         return false;
//     }
// };

// export const isAlphabetSpace = (text) => {
//     if (text === "" || text.trim() === "") {
//         return false;
//     } else if (!regAlphabetSpace.test(text.trim())) {
//         return false;
//     } else {
//         return true;
//     }
// };

// export const isAlphabet = (text) => {
//     if (text === "" || text.trim() === "") {
//         return false;
//     } else if (!regAlphabet.test(text.trim())) {
//         return false;
//     } else {
//         return true;
//     }
// };

// export const isOnlyNumber = (text) => {
//     if (text === "" || text.trim() === "") {
//         return false;
//     } else if (!regNumber.test(text.trim())) {
//         return false;
//     } else {
//         return true;
//     }
// };

// export const setAccessToken = async (payload) => {
//     instance.defaults.headers.common["Authorization"] = "Bearer " + payload;
//     await saveData(Variables.accessToken, JSON.stringify(payload));
// };

// export const saveData = async (key, data) => {
//     await AsyncStorage.setItem(key, data);
// };

// export const removeData = async (key) => {
//     await AsyncStorage.removeItem(key);
// };

// export const getData = async (key) => {
//     return new Promise((resolve, reject) => {
//         AsyncStorage.getItem(key)
//             .then((res) => {
//                 if (res) {
//                     resolve(res);
//                 } else {
//                     reject(res);
//                 }
//             })
//             .catch((err) => {
//                 reject(err);
//             });
//     });
// };

// export const logOut = async () => {
//     delete instance.defaults.headers.common["Authorization"]
//     await removeData(Variables.accessToken)
//     AsyncStorage.clear()
//     NavigationService.reset("AuthNavigator");
// };
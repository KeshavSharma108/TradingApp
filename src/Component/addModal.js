import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  Pressable,
} from "react-native";
import { IPLLogo } from "../assest/Images";
import config from "../Config";
import Slider from "@react-native-community/slider";
import AntDesign from "@expo/vector-icons/AntDesign";




const CustomSwitch = ({ isOn, onToggle, onColor, offColor }) => {
  const [translateX] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(translateX, {
      toValue: isOn ? 167 : -1, // Adjust the value based on switch width
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [isOn]);

  return (
    <View>
      <Pressable style={[style.switch]} onPress={onToggle} activeOpacity={0.8}>
        <Animated.View
          style={[
            style.thumb,
            { backgroundColor: isOn ? onColor : offColor },
            { transform: [{ translateX }] },
          ]}
        >
          <Text style={{ color: "white", fontSize: 18 }}>
            ₹ {isOn ? `No 4.7` : "Yes 5.3"}
          </Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};

const Addmodal = ({
  PriceRate,
  visible,
  onRequestClose,
  onPressClose,
  question,
  isSwitch
}) => {
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [value, setValue] = useState(50); // Initial value of the slider
console.log(isSwitch)
  const toggleSwitch = () => {
    setIsSwitchOn((previousState) => !previousState);
  };

useEffect(()=>{
  setIsSwitchOn(isSwitch)
},[isSwitch])



  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={onRequestClose}
      >
        
        <View  style={style.mainContainer}>
          
    
        <TouchableOpacity style={style.closeButton} onPress={onPressClose} />
        {(isSwitchOn  === false ) ? (
          <View style={style.container}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginTop: 25, fontSize: 17, color: "white" }}>
                {question}
              </Text>
              <View style={style.imageLogo}>
                <Image source={IPLLogo} style={{ height: 60, width: 60 }} />
              </View>
            </View>

            <View>
              <CustomSwitch
                isOn={isSwitchOn}
                onToggle={toggleSwitch}
                onColor="green"
                offColor={"blue"}
              />
            </View>

            <View style={style.priceContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "400", color: "white" }}
                >
                  Price
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "400",
                      color: "white",
                      textAlign: "right",
                    }}
                  >
                    ₹ {PriceRate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "200",
                      color: config.colors.darkWhite,
                    }}
                  >
                    132045 qty available
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Pressable style={style.plusMinus}>
                  <Text>-</Text>
                </Pressable>
                <Slider
                  style={{ width: 270, height: 40 }}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={value}
                  onValueChange={setValue}
                  minimumTrackTintColor="blue"
                  maximumTrackTintColor="#d3d3d3"
                  thumbTintColor="blue"
                />
                <Pressable style={style.plusMinus}>
                  <Text>+</Text>
                </Pressable>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "400",
                    color: config.colors.darkWhite,
                    marginVertical: 20,
                  }}
                >
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - -{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 20, fontWeight: "400", color: "white" }}
                  >
                    ₹ {PriceRate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "200",
                      color: config.colors.darkWhite,
                    }}
                  >
                    You Put
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "400",
                      color: "green",
                      textAlign: "right",
                    }}
                  >
                    ₹ 10
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "200",
                      color: config.colors.darkWhite,
                    }}
                  >
                    You get
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                width: 365,
                borderRadius: 50,
                height: 80,
                backgroundColor: "blue",
                marginTop: 50,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="doubleright" size={24} color="blue" />
              </View>
              <Text style={{ left: 50, color: "white", fontSize: 20 }}>
                Swipe for Yes
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "200",
                color: config.colors.darkWhite,
                textAlign: "center",
                top: 120,
              }}
            >
              Available Balance : 400.00
            </Text>
          </View>
        ) : (
          <View style={style.container}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Text style={{ marginTop: 25, fontSize: 17, color: "white" }}>
                {question}
              </Text>
              <View style={style.imageLogo}>
                <Image source={IPLLogo} style={{ height: 60, width: 60 }} />
              </View>
            </View>

            <View>
              <CustomSwitch
                isOn={isSwitchOn}
                onToggle={toggleSwitch}
                onColor="green"
                offColor={"blue"}
              />
            </View>

            <View style={style.priceContainer}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "400", color: "white" }}
                >
                  Price
                </Text>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "400",
                      color: "white",
                      textAlign: "right",
                    }}
                  >
                    ₹ {PriceRate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "200",
                      color: config.colors.darkWhite,
                    }}
                  >
                    132045 qty available
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginTop: 20 }}>
                <Pressable style={style.plusMinus}>
                  <Text>-</Text>
                </Pressable>
                <Slider
                  style={{ width: 270, height: 40 }}
                  minimumValue={0}
                  maximumValue={100}
                  step={1}
                  value={value}
                  onValueChange={setValue}
                  minimumTrackTintColor="green"
                  maximumTrackTintColor="white"
                  thumbTintColor="green"
                />
                <Pressable style={style.plusMinus}>
                  <Text>+</Text>
                </Pressable>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "400",
                    color: config.colors.darkWhite,
                    marginVertical: 20,
                  }}
                >
                  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                  - -{" "}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View>
                  <Text
                    style={{ fontSize: 20, fontWeight: "400", color: "white" }}
                  >
                    ₹ {PriceRate}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "200",
                      color: config.colors.darkWhite,
                    }}
                  >
                    You Put
                  </Text>
                </View>

                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "400",
                      color: "green",
                      textAlign: "right",
                    }}
                  >
                    ₹ 10
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "200",
                      color: config.colors.darkWhite,
                    }}
                  >
                    You get
                  </Text>
                </View>
              </View>
            </View>

            <View
              style={{
                width: 365,
                borderRadius: 50,
                height: 80,
                backgroundColor: "green",
                marginTop: 50,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <AntDesign name="doubleright" size={24} color="green" />
              </View>
              <Text style={{ left: 50, color: "white", fontSize: 20 }}>
                Swipe for No
              </Text>
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: "200",
                color: config.colors.darkWhite,
                textAlign: "center",
                top: 120,
              }}
            >
              Available Balance : 400.00
            </Text>
          </View>
        )}
            </View>
      </Modal>

  );
};

export default Addmodal;

const style = StyleSheet.create({
  mainContainer:{
flex:1,
backgroundColor: 'rgba(89, 86, 105, 0.5)',
  },
  closeButton: {
    height: 20,
    width: 60,
    backgroundColor: "white",
    marginHorizontal: 180,
    top: 40,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    marginTop: 50,
    backgroundColor: config.colors.lightBlack,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  imageLogo: {
    height: 80,
    width: 70,
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  switchText: {
    fontSize: 20,
    marginBottom: 20,
  },
  switch: {
    width: 370, // Adjust width based on your design
    height: 70, // Adjust height based on your design
    borderRadius: 40,
    padding: 2,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: config.colors.lightGrey,
  },
  thumb: {
    width: 200, // Adjust thumb size based on your design
    height: 70,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  priceContainer: {
    minHeight: 150,
    width: 370,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 15,
    borderColor: config.colors.darkWhite,
    padding: 10,
  },
  plusMinus: {
    height: 40,
    width: 40,
    borderRadius: 10,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import ToggleSwitch from "toggle-switch-react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import config from "../Config";
import Addmodal from "../Component/addModal";

const Home = ({navigation}) => {
  const [headerList] = useState(config.headerItems);
  const [newsItem] = useState(config.newsItems);
  const [dataList] = useState(config.DataList);
  const [modalVisible, setModalVisible] = useState(false);
  const [YesorNo, setYesorNo] = useState()


const pressYes =()=>{
setModalVisible(true) 
setYesorNo(false)

}
const pressNo =()=>{
  setModalVisible(true) 
  setYesorNo(true)
 
  }


  const renderItem = ({ item }) => {
    //Addupdates
    return (
      <View style={style.headerListContainer}>
        {item.type === "sports" && (
          <View
            style={{
              flexDirection: "row",
              gap: 20,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
                {item.name}
              </Text>

              <Text style={{ color: config.colors.darkWhite }}>
                {" "}
                <Text style={{ color: "white" }}>{item.subName}</Text>
                {item.year}
              </Text>
            </View>
            <View>
              <Image source={item.image} style={style.imageStyle} />
            </View>
          </View>
        )}

        {item.type === "trading" && (
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ color: "white", fontSize: 20, fontWeight: "500" }}>
                {item.name}
              </Text>
              <Text style={{ color: config.colors.darkWhite }}>
                {item.price}
              </Text>
            </View>
            <View>
              <Image source={item.image} style={style.imageStyle} />
            </View>
          </View>
        )}
      </View>
    );
  };

  //AddNews
  const renderNewsItem = ({ item }) => {
    return (
      <View style={style.newsItemscontainer}>
        <Image source={item.image} style={style.imageStyle2} />
      </View>
    );
  };

  //AddDatalist
  const renderDataItem = ({ item }) => {
    return (
      <TouchableOpacity style={style.ListContainer}  onPress={()=>navigation.navigate('Question',{
        name:item.name,
        subName:item.subName,
        image:item.image,
        Yes:item.Yes,
        No:item.no
      })}>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <View style={{ width: 250 }}>
            <Text style={style.nameList}>{item.name}</Text>
            <Text style={style.subNameList}>{item.subName}</Text>
          </View>
          <View style={style.imageContainer}>
            <Image source={item.image} style={{ height: 50, width: 50 }} />
          </View>
        </View>
        <View style={style.buttonContainer}>
          <View>
            <TouchableOpacity
              style={style.yesButton}
              onPress={pressYes}
            >
              <Text style={style.nameList}>Yes ₹{item.Yes}</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={style.noButton} onPress={pressNo}>
            <Text style={style.nameList}>No ₹{item.no}</Text>
          </TouchableOpacity>
        </View>
        <Addmodal
          visible={modalVisible}
          minimumValue={item.Yes}
          onPressClose={() => setModalVisible(false)}
          PriceRate={item.Yes}
          onRequestClose={() => setModalVisible(false)}
          question={item.name}
          isSwitch={YesorNo}
     
        />
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.firstContainer}>
        <View style={style.categoryContainer}>
          <Text style={style.category}>Category</Text>
          <Entypo name="chevron-down" size={24} color="#fff" />
        </View>
        <View style={style.switchContainer}>
          <ToggleSwitch
            offColor={config.colors.lightGrey}
            circleColor={config.colors.lightBlack}
            size="medium"
            label="Live"
            labelStyle={style.lablestyled}
          />
          <View style={style.notificationContainer}>
            <Ionicons name="notifications-outline" size={38} color="white" />
          </View>
        </View>
      </View>
      <View>
        <FlatList
          data={headerList}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={style.container2}>
        <FlatList
          data={newsItem}
          renderItem={renderNewsItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <FlatList
          data={dataList}
          showsHorizontalScrollIndicator={false}
          renderItem={renderDataItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: config.colors.lightBlack,
  },
  firstContainer: {
    height: 120,
    width: "100%",
    backgroundColor: "black",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  category: {
    color: "#fff",
    fontSize: 18,
  },
  categoryContainer: {
    flexDirection: "row",
    gap: 10,
  },
  lablestyled: {
    color: "white",
    fontSize: 18,
  },
  notificationContainer: {
    width: 60,
    height: 60,
    borderRadius: 90,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  switchContainer: {
    flexDirection: "row",
    gap: 20,
  },
  headerListContainer: {
    height: 80,
    minWidth: 250,
    backgroundColor: config.colors.lightGrey,
    marginTop: 20,
    borderRadius: 10,
    marginHorizontal: 10,
    padding: 20,
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  container2: {
    marginTop: 20,
    marginHorizontal: 10,
    flex: 1,
  },
  newsItemscontainer: {
    height: 120,
    width: 392,
  },
  imageStyle2: { height: "100%", width: "100%" },
  ListContainer: {
    height: 200,
    backgroundColor: config.colors.lightGrey,
    width: "100%",
    marginTop: 20,
    paddingTop: 30,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  nameList: { color: "white", fontSize: 20, color: config.colors.darkWhite },
  subNameList: { color: "white", color: config.colors.darkWhite },
  imageContainer: {
    height: 80,
    width: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  yesButton: {
    height: 50,
    width: 170,
    backgroundColor: config.colors.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowOpacity: 0.5,
    borderWidth: 3,
    borderColor: config.colors.lightblue,
  },
  noButton: {
    height: 50,
    width: 170,
    backgroundColor: config.colors.darkgren,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    shadowOpacity: 0.5,
    borderWidth: 3,
    borderColor: config.colors.green,
  },
});

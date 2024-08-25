import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Pressable,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { cricket } from "../assest/Images";
import config from "../Config";
import * as Progress from "react-native-progress";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { LineChart } from "react-native-chart-kit";
const Question = ({ navigation, route }) => {
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",

    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  };

  const data = {
    labels: ["01:30 AM", "01:30 AM", "01:30 AM", "01:30 AM"],
    datasets: [
      {
        data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      },
    ],
  };
  return (
    <SafeAreaView style={style.mainContainer}>
      <View style={style.Firstcontainer}>
        <View style={style.container}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: "row",
              width: 120,
              justifyContent: "space-between",
            }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
            <Text style={{ fontSize: 18, color: "white" }}>Event 8625</Text>
          </Pressable>
          <AntDesign name="sharealt" size={24} color="white" />
        </View>

        <Image source={cricket} style={{ width: 80, height: 80 }} />
        <Text style={{ color: "white", fontSize: 20 }}>
          {route.params.name}
        </Text>
        <Text
          style={{
            color: "lightgreen",
            fontSize: 13,
            marginTop: 30,
            marginBottom: 20,
          }}
        >
          {route.params.subName}
        </Text>
      </View>
      <ScrollView>
        <View style={style.secondContainer}>
          <Text
            style={{
              color: config.colors.darkWhite,
              fontSize: 18,
              marginTop: 20,
              marginHorizontal: 20,
            }}
          >
            THE MARKET PREDICT
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
            }}
          >
            <Progress.Circle
              thickness={5}
              size={100}
              color={"blue"}
              progress={0.456}
              direction="counter-clockwise"
            />

            <View>
              <View></View>
              <View
                style={{
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "blue",
                    borderRadius: 10,
                  }}
                />
                <Text style={{ color: "white" }}>Yes 64%</Text>
              </View>
              <View
                style={{
                  width: 150,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                  marginBottom: 15,
                }}
              >
                <View
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "lightgreen",
                    borderRadius: 10,
                  }}
                />
                <Text style={{ color: "white" }}>No 36%</Text>
              </View>
            </View>
          </View>
          <Text style={{ color: config.colors.darkWhite, textAlign: "center" }}>
            THE MARKET TREND / CHART
          </Text>
          <LineChart
            style={{ padding: 10, width: 350 }}
            withDots={false}
            width={375}
            height={300}
            chartConfig={chartConfig}
            data={data}
          />
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <View style={style.hrsstyle}>
              <Text style={{ color: "white", fontSize: 15 }}>1 h</Text>
            </View>
            <View style={style.hrsstyle}>
              <Text style={{ color: "white", fontSize: 15 }}>3 h</Text>
            </View>
            <View style={style.hrsstyle}>
              <Text style={{ color: "white", fontSize: 15 }}>12 h</Text>
            </View>
            <View style={style.allTime}>
              <Text>All time</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              gap: 20,
              marginTop: 50,
              marginBottom: 40,
              paddingHorizontal: 20,
            }}
          >
            <View
              style={{
                width: 100,
                height: 50,
                borderRadius: 10,
                borderLeftColor: "white",
                borderBottomLeftRadius: 2,
                borderBottomWidth: 0.3,
                borderColor: "white",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>ACTIVITY</Text>
            </View>
            <View
              style={{
                width: 100,
                height: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "400", color: "white" }}>
                ORDER BOOK
              </Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 30,
              marginBottom: 30,
            }}
          >
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Hella</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 120,
                    height: 20,
                    backgroundColor: "blue",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>₹9</Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: config.colors.green,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingRight: 10,
                  }}
                >
                  <Text style={{ color: "white", textAlign: "right" }}>₹1</Text>
                </View>
                <View />
              </View>
              <Text
                style={{ color: "white", textAlign: "center", marginTop: 20 }}
              >
                a few second ago
              </Text>
            </View>
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Robin</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 30,
              marginBottom: 30,
            }}
          >
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Hella</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 120,
                    height: 20,
                    backgroundColor: "blue",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>₹9</Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: config.colors.green,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingRight: 10,
                  }}
                >
                  <Text style={{ color: "white", textAlign: "right" }}>₹1</Text>
                </View>
                <View />
              </View>
              <Text
                style={{ color: "white", textAlign: "center", marginTop: 20 }}
              >
                a few second ago
              </Text>
            </View>
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Robin</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 30,
              marginBottom: 30,
            }}
          >
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Hella</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 120,
                    height: 20,
                    backgroundColor: "blue",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>₹9</Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: config.colors.green,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingRight: 10,
                  }}
                >
                  <Text style={{ color: "white", textAlign: "right" }}>₹1</Text>
                </View>
                <View />
              </View>
              <Text
                style={{ color: "white", textAlign: "center", marginTop: 20 }}
              >
                a few second ago
              </Text>
            </View>
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Robin</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 30,
              marginBottom: 30,
            }}
          >
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Hella</Text>
            </View>
            <View style={{ justifyContent: "center" }}>
              <View style={{ flexDirection: "row" }}>
                <View
                  style={{
                    width: 120,
                    height: 20,
                    backgroundColor: "blue",
                    borderTopLeftRadius: 10,
                    borderBottomLeftRadius: 10,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={{ color: "white" }}>₹9</Text>
                </View>
                <View
                  style={{
                    width: 50,
                    height: 20,
                    backgroundColor: config.colors.green,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 10,
                    paddingRight: 10,
                  }}
                >
                  <Text style={{ color: "white", textAlign: "right" }}>₹1</Text>
                </View>
                <View />
              </View>
              <Text
                style={{ color: "white", textAlign: "center", marginTop: 20 }}
              >
                a few second ago
              </Text>
            </View>
            <View>
              <View
                style={{
                  height: 50,
                  width: 50,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderRadius: 50,
                  marginHorizontal: 20,
                  marginBottom: 10,
                }}
              >
                <FontAwesome5 name="user-alt" size={24} color="black" />
              </View>
              <Text style={{ color: "white", paddingLeft: 30 }}>Robin</Text>
            </View>
          </View>
          <View style={{ alignItems: "center", marginHorizontal: 20 }}>
            <Pressable
              style={{
                borderRadius: 10,
                width: "100%",
                height: 50,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 0.3,
                borderColor: "white",
                marginBottom: 20,
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Show All →</Text>
            </Pressable>
          </View>
        </View>

        <View style={style.Thirdcontainer}>
          <Text
            style={{
              fontSize: 30,
              color: config.colors.darkWhite,
              marginBottom: 20,
            }}
          >
            About the event
          </Text>

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 20, color: "grey", marginBottom: 20 }}>
                Traders
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: config.colors.darkWhite,
                  marginBottom: 20,
                }}
              >
                ₹ 47.12K
              </Text>
            </View>
            <View>
              <Text style={{ fontSize: 20, color: "grey", marginBottom: 20 }}>
                Volume
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: config.colors.darkWhite,
                  marginBottom: 20,
                }}
              >
                ₹ 9.9L
              </Text>
            </View>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text style={{ fontSize: 18, color: "grey", marginBottom: 20 }}>
                Started at
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: config.colors.darkWhite,
                  marginBottom: 20,
                }}
              >
                Jun 19,2024 3:40 PM
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  color: "grey",
                  marginBottom: 20,
                  textAlign: "right",
                }}
              >
                Ending
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: config.colors.darkWhite,
                  marginBottom: 20,
                }}
              >
                Jun 19,2024 9:00 PM
              </Text>
            </View>
          </View>
          <Text style={{ fontSize: 20, color: "white", marginVertical: 20 }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            -
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: config.colors.darkWhite, fontSize: 20 }}>
                Overview
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                Information about event
              </Text>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={24}
                color={config.colors.darkWhite}
              />
            </View>
          </View>
          <Text style={{ fontSize: 20, color: "white", marginVertical: 20 }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            -
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: config.colors.darkWhite, fontSize: 20 }}>
                Source of Truth
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                Information about source of truth
              </Text>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={24}
                color={config.colors.darkWhite}
              />
            </View>
          </View>
          <Text style={{ fontSize: 20, color: "white", marginVertical: 20 }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            -
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingHorizontal: 20,
              alignItems: "center",
            }}
          >
            <View>
              <Text style={{ color: config.colors.darkWhite, fontSize: 20 }}>
                Rules
              </Text>
              <Text style={{ color: "grey", fontSize: 18 }}>
                Terms and conditions
              </Text>
            </View>
            <View>
              <FontAwesome5
                name="chevron-right"
                size={24}
                color={config.colors.darkWhite}
              />
            </View>
          </View>
          <Text style={{ fontSize: 20, color: "white", marginVertical: 20 }}>
            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
            -
          </Text>
          <View
            style={{
              borderBottomWidth: 0.3,
              borderBottomColor: config.colors.darkWhite,
              marginBottom: 20,
            }}
          >
            <Text style={{ fontSize: 40, color: "grey", fontStyle: "italic" }}>
              Keep{" "}
            </Text>
            <Text
              style={{
                fontSize: 40,
                color: "grey",
                fontStyle: "italic",
                marginVertical: 10,
              }}
            >
              Trading !{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginVertical: 20,
            }}
          >
            <Pressable style={style.pressableYes}>
              <Text style={{ color: "white", fontSize: 20 }}>
                Yes ₹ {route.params.Yes}
              </Text>
            </Pressable>
            <Pressable style={style.pressableNo}>
              <Text style={{ color: "white", fontSize: 20 }}>
                No ₹ {route.params.No}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Question;

const style = StyleSheet.create({
  mainContainer: {
    flex: 1,

    backgroundColor: "black",
  },
  container: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    marginTop: 40,
    paddingHorizontal: 30,
    justifyContent: "space-between",
  },
  Firstcontainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 0.4,
    borderBottomColor: config.colors.darkWhite,
  },
  secondContainer: {
    flex: 1,
  },
  hrsstyle: {
    width: 60,
    height: 50,
    borderRadius: 10,
    borderWidth: 0.3,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  allTime: {
    width: 80,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  Thirdcontainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 20,
  },
  pressableYes: {
    height: 50,
    width: 180,
    backgroundColor: config.colors.blue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  pressableNo: {
    height: 50,
    width: 180,
    backgroundColor: config.colors.green,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});

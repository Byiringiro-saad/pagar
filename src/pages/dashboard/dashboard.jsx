import React, { useState } from "react";
import { Modal, Portal, Provider } from "react-native-paper";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

//features
import colors from "../../features/colors";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };

  return (
    <Provider>
      <Portal>
        <Modal
          visible={visible}
          onDismiss={hideModal}
          contentContainerStyle={containerStyle}
        >
          <Text style={styles.nav_link}>Profile</Text>
          <Text style={styles.nav_link}>Receive a loan</Text>
          <Text style={styles.nav_link}>Send a loan</Text>
        </Modal>
      </Portal>
      <View style={styles.container}>
        <View style={styles.top}>
          <Pressable onPress={showModal} style={styles.profile}>
            <Image source={require("../../../assets/images/user.jpg")} />
          </Pressable>
          <Text style={styles.title}>Dashboard</Text>
          <View style={styles.notifications}>
            <Image source={require("../../../assets/icons/notification.png")} />
          </View>
        </View>
        <View style={styles.progress}>
          <Text>Hi Belyse, almost there!</Text>
          <Image
            style={styles.progressImage}
            source={require("../../../assets/images/progress.png")}
          />
        </View>
        <View style={styles.payments}>
          <Text style={styles.title}>Payment status</Text>
          <View style={styles.row}>
            <View style={styles.about}>
              <View style={styles.image_container}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/images/user.jpg")}
                />
              </View>
              <View style={styles.para}>
                <Text style={styles.mini_title}>Kalisa Belyse</Text>
                <Text style={styles.email}>kalisabelyse@gmail.com</Text>
              </View>
            </View>
            <View style={styles.money}>
              <Text style={styles.mini_title}>-20,000 RWF</Text>
              <Text style={styles.blue_percentage}>70%</Text>
            </View>
            <Pressable style={styles.bars}>
              <Image source={require("../../../assets/icons/dots.png")} />
            </Pressable>
          </View>
          <View style={styles.row}>
            <View style={styles.about}>
              <View style={styles.image_container}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/images/user.jpg")}
                />
              </View>
              <View style={styles.para}>
                <Text style={styles.mini_title}>Kalisa Belyse</Text>
                <Text style={styles.email}>kalisabelyse@gmail.com</Text>
              </View>
            </View>
            <View style={styles.money}>
              <Text style={styles.mini_title}>-20,000 RWF</Text>
              <Text style={styles.blue_percentage}>72%</Text>
            </View>
            <Pressable style={styles.bars}>
              <Image source={require("../../../assets/icons/dots.png")} />
            </Pressable>
          </View>
          <View style={styles.row}>
            <View style={styles.about}>
              <View style={styles.image_container}>
                <Image
                  style={styles.image}
                  source={require("../../../assets/images/user.jpg")}
                />
              </View>
              <View style={styles.para}>
                <Text style={styles.mini_title}>Kalisa Belyse</Text>
                <Text style={styles.email}>kalisabelyse@gmail.com</Text>
              </View>
            </View>
            <View style={styles.money}>
              <Text style={styles.mini_title}>-20,000 RWF</Text>
              <Text style={styles.blue_percentage}>71%</Text>
            </View>
            <Pressable style={styles.bars}>
              <Image source={require("../../../assets/icons/dots.png")} />
            </Pressable>
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  nav_link: {
    margin: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "700",
  },
  mini_title: {
    fontSize: 13,
    fontWeight: "700",
  },
  top: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notifications: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 50,
    borderStyle: "dashed",
    borderColor: colors.grayish,
  },
  progress: {
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  progressImage: {
    width: "100%",
    marginTop: -30,
  },
  payments: {
    width: "100%",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  row: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  about: {
    flexDirection: "row",
    alignItems: "center",
  },
  image_container: {
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bluish,
  },
  image: {
    width: 40,
    borderRadius: 50,
  },
  email: {
    fontSize: 12,
  },
  blue_percentage: {
    fontSize: 13,
    fontWeight: "700",
    color: colors.green,
  },
});

export default Dashboard;

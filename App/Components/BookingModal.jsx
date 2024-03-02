import {
  FlatList,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import CalendarPicker from "react-native-calendar-picker";
import Colors from "../Utils/Colors";
import Heading from "./Heading";
import { useEffect, useState } from "react";
import GlobalApi from "../hooks/GlobalApi";
import { useUser } from "@clerk/clerk-expo";

export default function BookingModal({ businessId, closeModal }) {
  const [timeList, setTimeList] = useState();
  const [selectedTime, setSelectedTime] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [note, setNote] = useState();
  const { user } = useUser();
  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    const timeList = [];
    for (let i = 8; i <= 12; i++) {
      timeList.push({
        time: i + " : 00 AM",
      });
      timeList.push({
        time: i + " : 30 AM",
      });
    }
    for (let i = 1; i <= 7; i++) {
      timeList.push({
        time: i + " : 00 PM",
      });
      timeList.push({
        time: i + " : 30 PM",
      });
    }
    setTimeList(timeList);
  };

  // create booking method

  const createNewBooking = () => {
    // if (!selectedDate || selectedTime) {
    //   ToastAndroid.show("Please select Date and Time", ToastAndroid.LONG);
    //   return;
    // }
    const data = {
      userName: user?.fullName,
      userEmail: user?.primaryEmailAddress.emailAddress,
      time: selectedTime,
      date: selectedDate,
      note: note,
      businessId: businessId,
    };
    GlobalApi.createBooking(data).then((resp) => {
      // console.log("Resp", resp);
      ToastAndroid.show("Booking Created Successfully", ToastAndroid.LONG);
      closeModal();
    });
  };

  return (
    <View>
      <ScrollView>
        <KeyboardAvoidingView style={{ padding: 20 }}>
          <TouchableOpacity
            onPress={() => closeModal()}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Ionicons name="arrow-back-outline" size={30} color="black" />
            <Text style={{ fontSize: 25, fontFamily: "outfit-medium" }}>
              Booking
            </Text>
          </TouchableOpacity>

          {/* calender section */}
          <Heading text={"Select date"} />
          <View style={styles.calenderContainer}>
            <CalendarPicker
              width={320}
              // height={300}
              onDateChange={setSelectedDate}
              minDate={Date.now()}
              todayBackgroundColor={Colors.BLACK}
              todayTextStyle={{ color: Colors.WHITE }}
              selectedDayColor={Colors.PRIMARY}
              selectedDayTextColor={Colors.WHITE}
            />
          </View>

          {/* time select section */}
          <View style={{ marginTop: 10 }}>
            <Heading text={"Select Time Slot"} />
            <FlatList
              data={timeList}
              horizontal={true}
              showHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity onPress={() => setSelectedTime(item.time)}>
                  <Text
                    style={[
                      selectedTime == item.time
                        ? styles.selectedTime
                        : styles.unSelectedTime,
                    ]}
                  >
                    {item.time}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>

          <View style={{ paddingVertical: 10 }}>
            <Heading text={"Any Suggestion Note"} />
            <TextInput
              placeholder="Note"
              style={styles.noteInputArea}
              numberOfLines={4}
              multiline={true}
              onChange={(e) => setNote(e)}
            />
          </View>

          {/* conformation button */}
          <View style={{ paddingVertical: 20 }}>
            <TouchableOpacity onPress={() => createNewBooking()}>
              <Text style={styles.confirmBtn}>Confirm & Book</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        {/* note section */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  calenderContainer: {
    backgroundColor: Colors.PRIMARY_LIGHT,
    padding: 15,
    borderRadius: 12,
  },
  selectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 15,
    marginTop: 8,
    color: Colors.WHITE,
    backgroundColor: Colors.PRIMARY,
  },
  unSelectedTime: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    paddingHorizontal: 15,
    marginTop: 8,
    color: Colors.PRIMARY,
    marginRight: 3,
  },
  noteInputArea: {
    borderWidth: 1,
    borderRadius: 15,
    // textAlign:'left'
    textAlignVertical: "top",
    padding: 15,
    fontSize: 15,
    fontFamily: "outfit",
    borderColor: Colors.PRIMARY_LIGHT,
  },
  confirmBtn: {
    textAlign: "center",
    fontFamily: "outfit-medium",
    fontSize: 17,
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 12,
    borderRadius: 99,
    elevation: 2,
  },
});

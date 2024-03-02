import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import GlobalApi from "../../hooks/GlobalApi";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import BusinessListItemSmall from "../BusinessList/BusinessListItemSmall";
import BusinessListCategoryItem from "../../Components/BusinessListCategoryItem";
import BookingList from "../../Components/BookingList";

export default function BookingScreen() {
  const { user } = useUser();
  const [booking, setBooking] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    user && getUserBooking();
  }, [user]);

  const getUserBooking = () => {
    setLoading(true);
    GlobalApi.getUserBookingList(user.primaryEmailAddress.emailAddress).then(
      (res) => {
        setBooking(res?.bookings);
        console.log(res.bookings);
        setLoading(false);
      }
    );
  };

  return (
    <View>
      <ScrollView>
        <View style={{ padding: 15 }}>
          <Text style={styles.pageHeading}>BookingScreen</Text>
          <View>
            <FlatList
              data={booking}
              onRefresh={() => getUserBooking()}
              refreshing={loading}
              renderItem={({ item, index }) => (
                <BookingList
                  key={index}
                  business={item?.businessList}
                  booking={item}
                />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pageHeading: {
    fontFamily: "outfit-medium",
    fontSize: 26,
  },
});

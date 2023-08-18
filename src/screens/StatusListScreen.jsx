// import { StyleSheet, ScrollView, Text} from 'react-native';
// import React from 'react';
// import MyStatus from '../components/MyStatus';
// import RecentStatus from '../components/RecentStatus';
// // import ViewedStatus from '../components/ViewedStatus';
// import {Colors} from '../theme/Colors';

// const StatusListScreen = () => {
//   return (
//     <ScrollView
//       contentContainerStyle={styles.container}
//       showsVerticalScrollIndicator={false}>
//         <Text>status</Text>
//       <MyStatus />
//       <RecentStatus />
//       {/* <ViewedStatus /> */}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: Colors.background,
//     padding: 16,
//   },
// });

import { StyleSheet, ScrollView, Text} from 'react-native';
import React from 'react'
import MyStatus from '../components/MyStatus';
import {Colors} from '../theme/Colors';
import RecentStatus from '../components/RecentStatus';
import ViewedStatus from '../components/ViewedStatus';
const StatusListScreen = () => {
  return (
    <ScrollView    contentContainerStyle={styles.container}
    showsVerticalScrollIndicator={false}>
      
      <MyStatus></MyStatus>
      <RecentStatus></RecentStatus>
      <ViewedStatus></ViewedStatus>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    padding: 16,
  },
});

export default StatusListScreen;

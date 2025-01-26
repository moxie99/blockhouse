import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { logout, RootState } from '../store' // Import RootState type for accessing Redux state

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch()
  const userEmail = useSelector((state: RootState) => state.auth.userEmail)

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome, {userEmail}!</Text>
      <Button title='Log Out' onPress={() => dispatch(logout())} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcome: { fontSize: 20, marginBottom: 20 },
})

export default HomeScreen

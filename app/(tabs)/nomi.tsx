import React from "react"
import { StyleSheet, Text, View } from "react-native"

export default function nomi() {
  return (
    <View>
      <Text style={styles.title}>Nomi</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
  },
})

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
     <View style={styles.header}>
     
     <Text style={styles.h1}>Hello World!</Text>
    
     <Text style={styles.h2}>First React Native App</Text>
     
     <Text style={styles.h3}>This is a paragraph explaining what this app is all about. As you can see there are al
       ready many components including text, images and buttons.</Text></View>


     <View style={styles.body}> 
     
     <Text style={styles.boldtext}>What would you like to get out of this course?</Text>
    
    <View style={styles.input}>
     <TextInput placeholder="Initial Text" onChangeText={console.log("Heej!")}/>
     </View>
     
     <Text style={styles.boldtext}>An emoji describing how you are feeling about this course</Text>
     
     <Image style={styles.image} source={require("./assets/icon.png")}/> 

    
     <Button title="Submit" onPress={console.log("Godmornin!")}/>
     </View>





      <StatusBar style="auto" />
      </View>
      

     
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    
  },
  h1: {
    fontWeight: 900,
    fontSize: "40px",
  },
  h2: {
    fontWeight: 600,
    fontSize: "19px",
  },
  h3: {
    fontWeight: 300,
    fontSize: "16px",
    marginTop: 10,
    marginBottom: 10,
  },
  boldtext: {
    fontWeight: 900,
    fontSize: "20px",
  },
  header: {
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 20,
    width: "100%",
    height: "30%",
    backgroundColor: "#a0c4ff",
  },
  body: {
    fontSize: "10px",
    fontWeight: "bold",

  },
  input: {
    height: 100,
    width: 200,
    backgroundColor: "#eee",
    maginBottom: 20,
    marginTop: 20,
    

    
  },
  image: {
    width: 100, 
    height: 100,
    marginBottom: 20,
    marginTop: 20,

  }


});

import React, { useState } from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {WebView} from 'react-native-webview';

const App = () => {
  const [datos, setDatos] = useState("");
  // const datos = "";
  function onMessage(data) {
    // alert(data.nativeEvent.data);
    console.log(data.nativeEvent.data);
    setDatos(data.nativeEvent.data);
  }

  const webview =(
    <View style={{height:'100%', width:'100%'}}>
      <WebView
        scalesPageToFit={true}
        mixedContentMode="compatibility"
        onMessage={onMessage}
        source={{
          uri:'https://guileless-partition.000webhostapp.com/',
        }}
      />
    </View>
  );

  const view = (
    <>
      <View>
        <Text>datos = {
          datos
          }</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
        <View>
          {(datos === "")? webview : view}
          {/* <Text>Los datos son : {datos}</Text> */}
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
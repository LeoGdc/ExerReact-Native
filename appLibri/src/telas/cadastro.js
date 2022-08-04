import React from "react";
import{ Text, View, StyleSheet, SafeAreaView, ScrollView }from "react-native";
import COLORS from "../const/colors";
import Input from "../componentes/input";
import Button from "../componentes/button";

const cadastro = () =>{

  const nome = 'TELA DE CADASTRO';
    
    return(

      <SafeAreaView style={estilos.safe}>
        <ScrollView style={estilos.scroll}>

          <Text style={estilos.textTitle}>
            Cadastro de Livro
          </Text>

          <View style={estilos.ViewForm}>
   
            <Input label="'TITULO"/>
            <Input label="'DESCRICAO"/>
            <Input label="'CAPA"/>
            <Button title="CADASTRAR"/>

          </View>
        </ScrollView>
      </SafeAreaView>
    );
    
}

const estilos =StyleSheet.create({
  safe:{
    flex:1,
    backgroundColor:COLORS.white,

  },
  scroll:{
    paddingTop:50,
    paddingHorizontal:20,

  },
  textTitle:{
    color:COLORS.black,
    fontSize:25,
    fontWeight:"bold",
  },
  ViewForm:{
    marginVertical:20,

  },
});

export default cadastro;
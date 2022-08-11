import React from "react";
import{ Text, View, StyleSheet, SafeAreaView, ScrollView }from "react-native";
import COLORS from "../const/colors";
import Input from "../componentes/input";
import Button from "../componentes/button";
import { useState } from "react";

const cadastro = () =>{

  // recebe a captura de dados com uso de state
  // criação da estrutura de state que armazena os dados

  const [inputs, setInputs] = React.useState({
    titulo: '',
    descricao: '',
    capa : ''
  });
  
  // função que manipula a entrada de dados na state no metodo onChangeText

  const handlerOnChange = (text, input) =>{
    setInputs((prevState)=>(
      console.log(prevState),
      //console.log(input + ' ' + text)

      //injeção de dados na state

      {...prevState, [input]:text}
    ));
  }

  //validação dos dados de cadastro
  //função de validação 

  const validate = ()=>{

    let validate = true;

    if(!inputs.titulo){
      validade = false;
      console.log('TITULO EM BRANCO.');
    }

    if(!inputs.descricao){
      validade = false;
      console.log('DESCRIÇÃO EM BRANCO.');
    }

    if(!inputs.capa){
      validade = false;
      console.log('CAPA EM BRANCO.');
    }
  }

  //const nome = 'TELA DE CADASTRO';
    
  return(

    <SafeAreaView style={estilos.safe}>
      <ScrollView style={estilos.scroll}>

        <Text style={estilos.textTitle}>
              cadastro de Livro
        </Text>

        <View style={estilos.ViewForm}>
   
          <Input label="TITULO"
          onChangeText = {(text)=>handlerOnChange(text, 'titulo')}/>
          <Input label="DESCRICAO"
          onChangeText = {(text)=>handlerOnChange(text, 'descricao')}/>
          <Input label="CAPA"
          onChangeText = {(text)=>handlerOnChange(text, 'capa')}/>
          <Button 
          title="CADASTRAR"
          onPress={validate}/>

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
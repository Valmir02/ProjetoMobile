
import React, { useState } from "react"
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';


export default function App() {

  const [pessoas, setPessoas] = useState([
    { nome :'One', key: 1},
    { nome :'Two', key: 2},
    { nome :'Three', key: 3},
    { nome :'Four', key: 4},
    { nome :'Five', key: 5},
    { nome :'Six', key: 6},
    { nome :'Seven', key: 7},
    { nome :'Eight', key: 8},
    { nome :'Nine', key: 9},
    { nome :'Ten', key: 10},
    { nome :'Eleven', key: 11},
    { nome :'Twelve', key: 12},
    
   
  ])

  const apertarBotao = (key) => {
    setPessoas(
      (pessoasAntigas) => {
        return pessoasAntigas.filter(pessoas => pessoas.key!= key);
      }
    );

  }
  const getPessoas = ()=>{

   const newPessoas = pessoas.slice(0,10);

   return newPessoas;

  
  }
  const fimPessoas = ()=>{

    const endPessoas = pessoas.slice(11,12);
 
    return endPessoas;
 
   
   }
 

  

  return (
    <ScrollView>
      <View>
      <FlatList        
        numColumns={2}
        keyExtractor={(item) => item.nome}
        data={getPessoas()}
        renderItem={({ item}) => (
          <TouchableOpacity
          onPress={() => apertarBotao(item.key)}
          >
          <Text style={styles.item}>{item.nome}</Text>
          
          </TouchableOpacity>          
        )      
    }  
      />

      <View>
          <FlatList            
            numColumns={1}
            keyExtractor={(item) => item.nome}
            data={fimPessoas()}
            renderItem={({ item}) => (
              <TouchableOpacity
              onPress={() => apertarBotao(item.key)}
              >
              <Text style={styles.item2}>{item.nome}</Text>
              </TouchableOpacity>        
            )      
        }  
          />
      

    

      </View>
      

    

      </View>
    
    </ScrollView>
  )
}

const styles = StyleSheet.create({
   
  item : {
    
    fontSize:15,
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:'#A9A9A9',
    border:10,
    marginTop:49,
    marginLeft:10,
    margin:2,
    alignContent:'center',
    width: 180,
    height: 120,
    textAlign:'center',
    padding:50, 
    
       
    
  },
  item2 : {
    fontSize:15,
    alignItems:'flex-start',
    justifyContent:'center',
    backgroundColor:'#A9A9A9',
    border:10,
    marginTop:49,
    margin:2,
    alignContent:'center',
    width: 375,
    height: 120,
    textAlign:'center',
    padding:40, 


  }
  
  
})
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';



export default function App() {

  const [PRIMEIROPEDIDO, setPRIMEIROPEDIDO] = useState('');
  const [texto, setTexto] = useState('Quero fazer o cadastro!');


  const clicarBotao = () => {
    setPRIMEIROPEDIDO(!PRIMEIROPEDIDO);

    if (PRIMEIROPEDIDO == false) {
      setTexto('Quero fazer o cadastro!')
    } else if (PRIMEIROPEDIDO == true) {
      setTexto('Receba as novidades a partir de agora!')
    }
  }

  const [nome, setNome] = useState('');

  const dados = [
    { key: 'Caderno Inteligente  R$79,90' },
    { key: 'Caneta CIS  R$3,99' },
    { key: 'Canecas  R$49,90' },
    { key: 'Lápis Stabilo  R$4,50' },
    { key: 'Marca Texto Tilibra  R$8,90' },
    { key: 'Caderno Tilibra  R$38,90' },
    { key: 'Caderno 10 Matérias  R$59,90' },
    { key: 'Agenda Escolar  R$18,90' },
    { key: 'Planner Capricho  R$47,90' },

  ]

  return (

    <ScrollView style={StyleSheet.container}>


      <View style={styles.fonts}>
        <MaterialCommunityIcons name="notebook-edit" size={30} color="black" />
        <View style={styles.container1}>
          <Text style={styles.cabecalho}> PAPELARIA GIFTZ</Text>
          <Text>Papelaria e presentes criativos</Text>
          <Text></Text>
          <Feather name="gift" size={30} color="black" />
        </View>
      </View>

      <View style={styles.containerr}>
        <View style={styles.text}>
          <Text>Somos uma lojinha de papelaria online</Text>
          <Text></Text>
          <Text>Enviamos para todo o Brasil!</Text>
          <Text></Text>
          <Text>Faça seu pedido pelo nosso app ou site! </Text>
          <Text></Text>

        </View>

        <View style={styles.containerr}>
          <View style={styles.text}>
            <Text>CADASTRE-SE e fique por dentro de todas as nossas promoções e novidades: </Text>
            <Text></Text>
            <Text>Responda o questionário abaixo:  </Text>
            <Text></Text>
          </View>

          <View style={styles.icons}>
            <MaterialCommunityIcons name="cube-send" size={40} color="black" />
          </View>

          <View style={styles.icons}>
            <MaterialCommunityIcons name="email-lock" size={25} color="black" />
          </View>
        </View>


      </View>
      <View style={styles.container4}>
        <TextInput
          placeholder='Digite seu email: '
          onChangeText={setNome}
          style={styles.input}
          underlineColorAndroid='transparent' />
      </View>

      {

        PRIMEIROPEDIDO ?
          <Text>
            {nome}
          </Text>
          :
          <Text>

          </Text>
      }
      <View style={styles.buttoncontainer}>

        <Button
          title={texto}
          onPress={clicarBotao}

        />

      </View>



      <View style={styles.containerr}>
        <View style={styles.text}>
          <Text>Toque no item e adicione ao carrinho:  </Text>
          <Text></Text>

          <View style={styles.icons}>
            <FontAwesome5 name="shopping-cart" size={24} color="black" />
          </View>



        </View>
      </View>



      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <Text style={styles.textoItem}>{item.key}</Text>
          </TouchableOpacity>
        )}
      />


    </ScrollView>
  );

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    flexDirection: 'row',



  },

  container2: {
    flex: 1,
    backgroundColor: '#FF69B4',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -10,
    flexDirection: 'row',



  },

  container1: {
    fontSize: 12,
    margin: 0,
    flexDirection: 'colunm',
    padding: 0,

  },

  containerr: {
    backgroundColor: '#F0E68C',
    padding: -1,
    margin: 15,
    marginTop: 20,
    flexDirection: 'row',
    borderRadius: 0,
  },

  cabecalho: {
    fontWeight: 'bold',
    fontSize: 20,
    backgroundColor: '#9ACD32',
    flexDirection: 'row',
    textAlign: 'center',
    flex: 1,
    padding: 2,
    margin: 2,
  },

  container4: {
    flexDirection: 'row',
  },


  text: {
    flex: 1,
    borderRadius: 0,
    padding: 10,
    margin: 5,
    fontWeight: 'bold',
    flexDirection: 'colunm',

  },

  icons: {
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    marginRight: 20,
  },


  fonts: {
    backgroundColor: '#9ACD32',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 50,
    padding: 30,
    borderRadius: 0,
    marginRight: 10,
    marginLeft: 10,
  },

  buttoncontainer: {
    marginTop: -20,
  },

  input: {
    height: 50,
    flex: 1,
    backgroundColor: '#DCDCDC',
    paddingLeft: 40,
    marginHorizontal: 20,
    borderRadius: 0,
    fontSize: 18,
    borderColor: 'blue',
    borderWidth: 2,
  },

  textoItem: {
    fontSize: 20,
    color: 'blue',
    padding: 25,
    borderWidth: 2,
    borderColor: 'blue',
    alignItems: 'center',

  },

});
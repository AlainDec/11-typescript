import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import TitleText from './component/TitleText';
import React from 'react';

export default function App() {

  // exercice 1
  let name:string = 'Alain';
  let age:number = 50;

  // exercice 2
  const Name:string = 'Alain';
  const Age:number = 50;

  // exercice3 : voir component/TitleText.tsx

  // exercice 4
  // voir interface dans ./interfaces/IUser.tsx
  let myArray:Array<IUser> = [
    {
      Username: 'Alain',
      Phone: '0102030405',
      Mail: 'Alain@gmail.com',
      Age: 20,
      isLogged: true,
      isAdmin: true,
    },
    {
      Username: 'Jacques',
      Phone: '0607080900',
      Mail: 'Jacques@gmail.com',
      Age: 30,
      isLogged: false,
      isAdmin: true,
    },
    {
      Username: 'Michel',
      Phone: '0201040305',
      Mail: 'Michel@gmail.com',
      Age: 40,
      isLogged: true,
      isAdmin: false,
    }
  ];

  
  return (
    <View style={styles.container}>
      <ScrollView>

      <Text>{"\n\n"}Exercice 1</Text>
      <Text>Je m'appelle {name} et j'ai {age} ans (let)</Text>

      <Text>{"\n\n"}Exercice 2</Text>
      <Text>Je m'appelle {Name} et j'ai {Age} ans (const)</Text>

      <Text>{"\n\n"}Exercice 3</Text>
      <TitleText title='Le titre de mon article' text='Le texte de mon article' />

      <Text>{"\n\n"}Exercice 4</Text>
      <TitleText title='Le titre de mon article' text='Le texte de mon article' />

      <Text>{"\n\n"}Exercice 5 (DataTable avec React Native Paper</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Name</DataTable.Title>
          <DataTable.Title>Tél</DataTable.Title>
          <DataTable.Title>Mail</DataTable.Title>
          <DataTable.Title>Age</DataTable.Title>
          <DataTable.Title>Log</DataTable.Title>
          <DataTable.Title>Adm</DataTable.Title>
        </DataTable.Header>
        {
          myArray.map( (item, i) => (
            <DataTable.Row key={i}>
              <DataTable.Cell>{item.Username}</DataTable.Cell>
              <DataTable.Cell>{item.Phone}</DataTable.Cell>
              <DataTable.Cell>{item.Mail}</DataTable.Cell>
              <DataTable.Cell >{item.Age}</DataTable.Cell>
              <DataTable.Cell>{item.isLogged === true ? 'Y' : '-'}</DataTable.Cell>
              <DataTable.Cell>{item.isAdmin === true ? 'Y' : '-'}</DataTable.Cell>
            </DataTable.Row>
          ))
        }
     </DataTable>

     <Text>{"\n\n"}Exercice 5</Text>
     {
          myArray.map( (item, i) => (
            <>
              <Text key={i}>Nom : {item.Username}</Text>
              <Text>Téléphone : {item.Phone}</Text>
              <Text>Mail : {item.Mail}</Text>
              <Text>Age : {item.Age}</Text>
              <Text>isLogged : {item.isLogged === true ? 'oui' : 'non'}</Text>
              <Text>isAdmin : {item.isAdmin === true ? 'oui' : 'non'}{"\n\n"}</Text>
            </>
          ))
      }

      <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*

*/
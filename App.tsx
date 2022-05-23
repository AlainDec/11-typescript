import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import TitleText from './component/TitleText';

export default function App() {

  // exercice 1
  let name:string = 'Alain';
  let age:number = 50;

  // exercice 2
  const Name:string = 'Alain';
  const Age:number = 50;

  // exercice3 : voir component/TitleText.tsx

  // exercice 4
  interface user {
    Username: string;
    Phone: string;
    Mail: string;
    Age: number;
    isLogged: boolean;
    isAdmin: boolean | unknown;
  }
  let myArray:Array<user> = [
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

      <Text>{"\n\n"}Exercice 5</Text>
      <Text>
        {
          myArray.map( (item, i) => (
            <>
              <Text>Nom : {item.Username}{"\n\n"}</Text>
              <Text>Téléphone : {item.Phone}{"\n\n"}</Text>
              <Text>Mail : {item.Mail}{"\n\n"}</Text>
              <Text>Age : {item.Age}{"\n\n"}</Text>
              <Text>Téléphone : {item.Phone}{"\n\n"}</Text>
              <Text>isLogged : {item.isLogged === true ? 'oui' : 'non'}{"\n\n"}</Text>
              <Text>isAdmin : {item.isAdmin === true ? 'oui' : 'non'}{"\n\n"}</Text>
              <Text>{"\n\n"}</Text>
            </>
          ))
        }
      </Text>
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

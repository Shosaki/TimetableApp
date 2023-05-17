const defaultItems = [
 { id: 1, title: "foo", description: "the first item" },
 { id: 2, title: "bar", description: "the second item" },
 { id: 3, title: "baz", description: "the third item" },  
 { id: 4, title: "foobar", description: "the fourth item" },  
 { id: 5, title: "foobaz", description: "the fifth item" },  
]


import { useState } from 'react';
/*
Given a list of items above, please create a simple React Native component 
called ItemList that displays the list of items and their properties, 
and allows the user to filter the list by typing in a search query. 
The component should be reusable and should accept a list of items as 
a prop, but if a list is not supplied the above should be used by default.

Requirements:

* The list of items should be displayed as a series of cards, each containing a title and a description.
* The user should be able to filter the list by typing in a search query. The search should be case-insensitive and should match any part of the item's title or description.
* The filtered list should be displayed immediately as the user types in the search query.
* If the search query is empty, the full list should be displayed.
* The component should have a clean and readable code structure.
* “Deploy” your app on https://snack.expo.dev/ and provide us with a URL to review
*/


import {useState} from 'react';
import {FlatList, SafeAreaView, TextInput} from 'react-native';

const ItemList = (propData) => {

 const Item = ({title, description}) => (
  <View style={styles.item}>
    <Text >{title}</Text>
    <Text >{description}</Text>
  </View>
 );

return(
 <SafeAreaView> 
   <FlatList
       data={propData === undefined ? defaultItems : propData}
       renderItem={({item}) => <Item title={item.title}  description={description}/>}
       keyExtractor={item => item.id}
     />
 </SafeAreaView>
)
}

const App = () => {
 const [searchQury, setSearchQury] = useState('');

 const onChangeNumber = (val) => {
  setSearchQury(val);
 }

 return (
   <SafeAreaView style={styles.container}>
    <TextInput
        // style={styles.input}
        onChangeText={(val) => onChangeNumber(val)}
        value={searchQury}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
     <ItemList />
   </SafeAreaView>
 );
};
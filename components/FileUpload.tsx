import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React,{useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import { uploadToFirebase } from './FirebaseMediaStorage';
type Props = {}
/*
   
    const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result:any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View>
      <Text>FileUpload</Text>
      
    </View>
  )
}*/

//export default FileUpload


const FileUpload = (props: Props) => {
    const [image, setImage] = useState(null);
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result:any = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.canceled) {
          setImage(result.assets[0].uri);
          
        }
      };
  return (
    <View>
      <Text>Filepicker</Text>
    
      { image? <></>: <Button  title="Pick an image from camera roll" onPress={pickImage} /> }
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
      <View className='flex flex-row'>
        {image && <Button title='reset' onPress={()=>setImage(null)}/>}
      </View>
      {image? <Button title="Update propic" onPress={()=>uploadToFirebase(image,'images','random.png',1)} />
      :<></>
      }
    </View>

  )
}

export default FileUpload


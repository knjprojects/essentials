import { StyleSheet, Text, View,Button,Image } from 'react-native'
import React,{useState} from 'react'


type Props = {}
import { app } from '@/src/utils/firebase';
import { getStorage,ref,listAll,getDownloadURL,uploadBytesResumable } from 'firebase/storage';

const storage = getStorage(app);
const listFiles = async (folder:string) => {

  // Create a reference under which you want to list
  const listRef = ref(storage, `${folder}`);

  // Find all the prefixes and items.
  const listResp = await listAll(listRef);
  return listResp.items;
};
const uploadToFirebase = async (uri:any,folder:string, name:any, onProgress:any) => {
  const fetchResponse = await fetch(uri);
  const theBlob = await fetchResponse.blob();

  const imageRef = ref(storage, `${folder}/${name}`);
  //const name=imageRef.name
  const path=imageRef.fullPath;
  
  const metadata = {
    contentType: 'image/png',
  };
  const uploadTask = uploadBytesResumable(imageRef, theBlob,metadata);

  return new Promise((resolve, reject) => {
    /*
    // Upload the file and metadata
const uploadTask = uploadBytesResumable(storageRef, file);

  // Pause the upload
uploadTask.pause();

  // Resume the upload
uploadTask.resume();

  // Cancel the upload
uploadTask.cancel(); */

    uploadTask.on(
      "state_changed",
      (snapshot:any) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        onProgress && onProgress(progress);
      },
      (error:any) => {
        // Handle unsuccessful uploads
        console.log(error);
        reject(error);
      },
      async () => {
        const downloadUrl = await getDownloadURL(uploadTask.snapshot.ref);
        resolve({
          downloadUrl,
          metadata: uploadTask.snapshot.metadata,
        });
      }
    );
  });
};

export {uploadToFirebase, listFiles ,storage};


    /*
    import * as ImagePicker from 'expo-image-picker';
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
    </View>
  )
}*/

//export default FileUpload


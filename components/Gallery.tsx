import { StyleSheet, Text, View ,Image} from 'react-native'
import React ,{useState,useEffect}from 'react'
import { listFiles } from './FirebaseMediaStorage'
type Props = {}
import { FirebaseStorageImage } from '@/typings'
import { getDownloadURL, getMetadata } from 'firebase/storage'
const Gallery = (props: Props) => {
    const [gallery,setImages]:any=useState(null)
    const [myImage,setImage]:any=useState();

    const getFiles=async()=>{
        const files= listFiles('images').then((data:any[])=>{
            const images:any=[];
            data.forEach((element:any)=>{
            const url= getDownloadURL(element);
            const metadata=getMetadata(element);
            images.push({getDownloadURL:url,metadata:metadata})
            })
        setImages(images)
        });
    }
    useEffect(()=>{
        
    },[])
return (
    <View>
        <Text>Gallery</Text>
        <View>
        {
        gallery? gallery?.map((image:FirebaseStorageImage)=>{
            return(
                <View key={image.metadata}>
                    <Image source={{uri:image.downloadUrl}} height={140} width={140} />
                </View>
            )
            ;
        }) :<Text>Loading without firebase-hooks...</Text>
        }
        </View>

        


    </View>
)
}

export default Gallery


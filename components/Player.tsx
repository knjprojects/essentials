import React ,{useState} from 'react';
import ReactPlayer from 'react-player';
import { View,Text } from 'react-native';
const Player = () => {
   
    const [isPlaying,setPlaying]=useState(false)
    const doSumn=()=>{
    
    }
  return (
    <View className='bg-red-400'>
       {/* <Text className='text-black font-bold' onPress={()=>{
            if(ReactPlayer.canPlay('https://www.youtube.com/watch?v=ldrd2YOQsJI'))
            {setPlaying(!isPlaying)}
        }
            }>{isPlaying?'Pause':'Play React player video'}</Text>
      <ReactPlayer
        url='https://www.youtube.com/watch?v=ldrd2YOQsJI'
        controls={true}//Set to true or false to display native player controls.
        //For Vimeo videos, hiding controls must be enabled by the video owner.
        playing={isPlaying} //set whether the music is playing or not 
        light={true}//true or false thumbnail, but can be url string for preview image
        volume={0.5} //sets volume of the player, between 0 and 1.
        muted={false} //only use this in conjunction with volume
        pip={true}//enanble picture in picture for certain files in certain browsers
        onPlay={doSumn}//do something when music buffers or resumes
        height={200}//height 
        width={300}//width
    />
          */}
          <Text>Now lets plat our cloud storage tracks</Text>
          
    </View>
 );
};

export default Player;

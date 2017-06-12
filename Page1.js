import React from 'react';
import {Image, View} from 'react-native';

const Page1 = () =>{
    const {background} = styles;
    return(
        <View style={background}>
            <Image
                style= {{width:210, height: 100}}
                source= {require('./src/Asset/logo_twitch.png')}
            />
        </View>
    );
};

const styles = {
    background:{
        backgroundColor: '#6441A5',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
};

export default Page1;
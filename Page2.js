import React from 'react';
import {Image, View, Text} from 'react-native';

const Page2 = () =>{
    const {Header, textStyle, barStyle, liveText, recentText, box, pic} = styles;
    return(
        <View>
            <View style={Header}>
                <Image
                    source={require('./src/Asset/btn_back.png')}
                    style={{width:33, height:33}}
                />
                <Text style={textStyle}>Hearthstone</Text>
                <Image
                    source={require('./src/Asset/btn_like.png')}
                    style={{width:33, height:33}}
                />
            </View>
            <View style={barStyle}>
                <View style={box}>
                    <Text style={liveText}>LIVE</Text>
                </View>
                <View style={box}>
                    <Text style={recentText}>RECENT</Text>
                </View>
            </View>
            <View style={pic}>
                <Image
                    source={require('./src/Asset/img_firebat.png')}
                    style={{width:365, height:200, marginTop:5}}
                />
                <Image
                    source={require('./src/Asset/img_forsen.png')}
                    style={{width:365, height:200, marginTop:5}}
                />
                <Image
                    source={require('./src/Asset/img_kolento.png')}
                    style={{width:365, height:200, marginTop:5}}
                />
            </View>
        </View>
    );
};

const styles = {
    Header:{
        backgroundColor: '#6441A5',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 64,
        width: 375,
        paddingLeft: 8.5,
        paddingRight: 8.5,
        paddingTop: 25,
    },
    textStyle:{
        fontSize: 18,
        color: '#FFFFFF'
    },
    barStyle:{
        height: 44,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    liveText:{
        fontSize: 13,
        color: '#6441A5',
        textAlign: 'center',
        marginTop: 15
    },
    recentText:{
        fontSize: 13,
        color: '#bbbbbb',
        paddingTop: 15
    },
    box:{
        alignItems: 'center',
        flex: 1
    },
    pic:{
        paddingLeft: 5,
        paddingRight: 5
    },
};

export default Page2;
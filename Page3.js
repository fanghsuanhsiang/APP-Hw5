import React from 'react';
import { View, Image, Text } from 'react-native';

const Page3 = () =>{
    const {Header, search, text, main, footer, btn, footerText, footerText1} = styles;
    return(
        <View>
            <View style={Header}>
                <View style={search}>
                    <Image
                        source={require('./src/Asset/icon_search.png')}
                        style={{width:18, height:18}}
                    />
                    <Text style={text}>Search</Text>
                </View>
                <Image
                    source={require('./src/Asset/btn_cast.png')}
                    style={{width:33, height:33}}
                />
            </View>
            <View style={main}>
                <Image
                    source={require('./src/Asset/img_leagueoflegends.png')}
                    style={{width:180, height:180, marginLeft:5, marginTop:5}}
                />
                <Image
                    source={require('./src/Asset/img_counterstrike.png')}
                    style={{width:180, height:180, marginLeft:5, marginTop:5, marginRight:5}}
                />
            </View>
            <View style={main}>
                <Image
                    source={require('./src/Asset/img_hearthstone.png')}
                    style={{width:180, height:180, marginLeft:5, marginTop:5}}
                />
                <Image
                    source={require('./src/Asset/img_dota2.png')}
                    style={{width:180, height:180, marginLeft:5, marginTop:5, marginRight:5}}
                />
            </View>
            <View style={main}>
                <Image
                    source={require('./src/Asset/img_h1z1.png')}
                    style={{width:180, height:180, marginLeft:5, marginTop:5}}
                />
                <Image
                    source={require('./src/Asset/img_destiny.png')}
                    style={{width:180, height:180, marginLeft:5, marginTop:5, marginRight:5}}
                />
            </View>
            <View style={footer}>
                <View style={btn}>
                    <Image
                        source={require('./src/Asset/btn_games_selected.png')}
                        style={{width:94, height:49}}
                    />
                    <Text style={footerText}>Games</Text>
                </View>
                <View style={btn}>
                    <Image
                        source={require('./src/Asset/btn_channels.png')}
                        style={{width:94, height:49}}
                    />
                    <Text style={footerText1}>Channels</Text>
                </View>
                <View style={btn}>
                    <Image
                        source={require('./src/Asset/btn_following.png')}
                        style={{width:94, height:49}}
                    />
                    <Text style={footerText1}>Following</Text>
                </View>
                <View style={btn}>
                    <Image
                        source={require('./src/Asset/btn_me.png')}
                        style={{width:94, height:49}}
                    />
                    <Text style={footerText1}>Me</Text>
                </View>
            </View>
        </View>
    );
};

const styles ={
    Header:{
        backgroundColor: '#6441A5',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingLeft: 8.5,
        paddingRight: 8.5,
        height: 64,
        paddingTop: 25
    },
    search:{
        height: 30,
        borderRadius: 5,
        width: 320,
        backgroundColor: '#311F53',
        paddingTop: 6,
        paddingLeft: 8.5,
        flexDirection: 'row'
    },
    text:{
        fontSize: 15,
        color: '#B9A3E3',
        paddingLeft: 6
    },
    main:{
        flexDirection: 'row'
    },
    footer:{
        flexDirection: 'row'
    },
    btn:{
        height: 49,
        alignItems: 'center'
    },
    footerText:{
        fontSize: 10,
        alignItems: 'center',
        color: '#6441A5',
        marginTop: -15
    },
    footerText1:{
        fontSize: 10,
        alignItems: 'center',
        marginTop: -15,
        color: '#BBBBBB'
    }
};

export default Page3;
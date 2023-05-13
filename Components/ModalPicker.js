import React from 'react'
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, ScrollView
} from 'react-native'
import { borderBottomColor, borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const LOCATIONS = ['United Kingdom', 'Australia', 'China', 'Germany', 'Hong Kong', 'Poland', 'Singapore', 'South Africa', 'United States'];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const ModalPicker = (props) => {
     
    const onPressItem = (location) => {
        props.changeModalVisibility(false);
        props.setData(location);
    }
    
    const location = LOCATIONS.map((item, index) => {
            return (
                <TouchableOpacity
                style={styles.location}
                key={index}
                onPress={() => onPressItem(item)}
                >
                    <Text style={styles.text}>
                        {item}
                    </Text>
                </TouchableOpacity>
            )
        })

    return(
        <TouchableOpacity
            onPress={() => props.changeModalVisibility(false)}
            style={styles.container}
        >
            <View style={[styles.modal, {width: WIDTH - 20, height: HEIGHT/2}]}>
                <ScrollView>
                    {location}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center'
    },
    modal:{
        backgroundColor:'white',
        borderRadius: 5,
        borderColor: '#1DADED',
        borderWidth: 1,
    },
    location: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        opacity: 0.8,
    },
    text: {
        margin: 20,
        fontSize: 18,
        opacity: 1,
    }
})

export {ModalPicker}
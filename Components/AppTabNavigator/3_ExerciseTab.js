import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
 
export default class ExerciseTab extends Component {
    render() {
        return (
            <View style={style.container}>
                <Text>ExerciseTab</Text>
            </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
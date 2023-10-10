import React from 'react'
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native'

export const Loading = () => {
    return (
        <View style={localStyles.activityContainer}>
            <ActivityIndicator
                size={44}
                color={'gray'}
            />
            <Text>Cargando...</Text>
        </View >
    )
}

const localStyles = StyleSheet.create({
    activityContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
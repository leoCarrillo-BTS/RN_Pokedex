import React, { useEffect, useState } from 'react'
import { Platform, StyleProp, StyleSheet, Text, TextInput, View, ViewStyle } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDebounceValue } from '../hooks/useDebounceValue'

interface Props {
    onDebounce: (value: string) => void
    style?: StyleProp<ViewStyle>
}

export const SearchInput = ({ style, onDebounce }: Props) => {

    const [textValue, setTextValue] = useState('')

    const debouncedValue = useDebounceValue(textValue, 1000)

    useEffect(() => {
        onDebounce(debouncedValue)
    }, [debouncedValue])

    return (
        <View
            style={{
                ...localStyles.container,
                ...style as any,
            }}
        >
            <View style={localStyles.textBg}>

                <TextInput
                    placeholder='Buscar Pokemon'
                    style={{
                        ...localStyles.textInput,
                        top: (Platform.OS === 'ios' ? 0 : 2)
                    }}
                    autoCapitalize='none'
                    autoCorrect={false}
                    value={textValue}
                    onChangeText={setTextValue}
                />

                <Icon
                    name='search-outline'
                    color={'grey'}
                    size={16}
                />
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container: {

    },
    textBg: {
        backgroundColor: '#F3F1F3',
        borderRadius: 8,
        height: 36,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
    }
});
import { Text, TextInput, View } from 'react-native';
import { useState } from 'react';

import tw from 'twrnc';

// multiline o number of lines

const Field = ({ onValueChange }) => {
    const [text, setText] = useState('')
    // const handleText = (t) => {
    //     setText(t)
    // }
    return (
        <View style={tw`px-8`}>
            <Text style={tw`mb-2`}>Your text here</Text>
            <TextInput
                style={tw`bg-slate-100 border border-slate-200 rounded-md h-auto max-h-30 p-3`}
                autoCorrect={false}
                multiline={true}
                numberOfLines={2}
                textAlignVertical='top'
                value={text}
                onChangeText={(textInput) => {
                    // handleText(textInput)
                    setText(textInput)
                    onValueChange(textInput)
                    console.log('TEXT 1', textInput, 'TEXT 2', text)
                }}
                // value={text}
            />
        </View>
    )
} 

export default Field
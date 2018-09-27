import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#ddd',
        shadowOpacity: 0.33,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        backgroundColor: '#fff',
        elevation: 1,
        marginRight: 5,
        marginLeft: 5,
        marginTop: 10,
    },
};

export { Card };

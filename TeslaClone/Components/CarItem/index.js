import React from "react";
import { View, Text, ImageBackground } from 'react-native';
import StyleButton from "../StyledButton";
import styles from './styles'

const CarItem = (props) => {

    const { name, tagLine, image, tagLineCTA } = props.car;

    return (
        <View style={styles.cardContainer} >
            <ImageBackground
                source={image}
                style={styles.image} />

            <View style={styles.titles} >
                <Text style={styles.title} >{name}</Text>
                <Text style={styles.subtitle} >
                    {tagLine}&nbsp;
                    <Text style={styles.subtitleCTA} >
                        {tagLineCTA}
                    </Text  >
                </Text>
            </View>

            <View style={styles.buttonsContainer} >
                <StyleButton
                    type='primary'
                    content={"Custom Order"}
                    onPress={() => {
                        console.warn("Custom Order  was Presed")
                    }} />

                <StyleButton
                    type='secondary'
                    content={"Existing Invertory"}
                    onPress={() => {
                        console.warn("Existing Invertory was Presed")
                    }} />

            </View>




        </View>
    )
}


export default CarItem;
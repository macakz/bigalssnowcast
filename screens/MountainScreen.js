import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, SafeAreaView, ScrollView, StyleSheet, Text, } from 'react-native';
import skifields from '../data/skifields.json'
import { app_id, app_key } from '../config/weatherKeys'
import axios from 'axios'
import { useFocusEffect } from '@react-navigation/native';
import DropDownPicker from 'react-native-dropdown-picker';
import { baseProps } from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlers';

const MountainScreen = ({ route, navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
    })

    const mountain = route.params.value
    const [mountainId, setMountainId] = useState()
    const matchMountainId = () => {
        let match = skifields.find(field => field.name === mountain);
        setMountainId(match.weatherId);
    }
    const [mountainForecastData, setMountainForecastData] = useState([])
    const [mountainIsReady, setMountainIsReady] = useState(false)

    const [open, setOpen] = useState(false);
    const [heightValue, setHeightValue] = useState("mid");
    const items = [{ label: "base", value: "base" },
    { label: "mid", value: "mid" },
    { label: "upper", value: "upper" }]


    useEffect(() => {
        mountainForecast()
    }, [mountainId]);

    const mountainForecast = () => {
        matchMountainId()
        axios.get(`https://api.weatherunlocked.com/api/resortforecast/${mountainId}?app_id=${app_id}&app_key=${app_key}`)
            .then((response) => setMountainForecastData(response.data.forecast))
            .then(
                console.log("confirmed data")
            )
            .finally(() => setMountainIsReady(true))
            .catch((error) => {
                console.log("Error:", error);
            })
    }
    if (!mountainIsReady) {
        return (
            <>
                <Text>waiting on data</Text>
            </>
        )
    }
    return (
        <>
            <SafeAreaView>
                <ScrollView>
                    <DropDownPicker
                        listMode="MODAL"
                        modalContentContainerStyle={styles.modalContentContainerStyle}
                        style={styles.dropDownPicker}
                        placeholder="Choose your mountain"
                        open={open}
                        value={heightValue}
                        items={items}
                        setOpen={setOpen}
                        setValue={setHeightValue}
                    />
                    {mountainForecastData.map((info) => {
                        return (
                            <>
                                <Text>{info.date}</Text>
                                <Text>{info.time}</Text>
                                <Text>{info.mid.freshsnow_cm}cm</Text>
                                <Text>{info.rain_mm}</Text>

                            </>
                        )
                    })
                    }
                </ScrollView>
            </SafeAreaView>
        </>
    )
}


export default MountainScreen
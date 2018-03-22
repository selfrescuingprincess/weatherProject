import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import Forecast from "./Forecast";
import OpenWeatherMap from "./open_weather_map";

export default class WeatherProject extends Component {
    constructor(props) {
        super(props);
        this.state = { zip: "", forecast: null };
    }

    render() {
        let content = null;
        if (this.state.forecast !== null) {
            content = (
                <Forecast
                    main={this.state.forecast.main}
                    description={this.state.forecast.description}
                    temp={this.state.forecast.temp}
                    />
            );
        }

        return (
            <View>
                <Text style={styles.welcome}>
                    You input {this.state.zip}.
                </Text>
                {content}
                <TextInput style={styles.input}
                    onSubmitEditing={this._handleTextChange}/>

            </View>
        );
    }

    _handleTextChange = event => {
        let zip = event.nativeEvent.text;
        OpenWeatherMap.fetchForecast(zip).then(forecast => {
            console.log(forecast);
            this.setState({forecast: forecast });
        });
        this.setState({zip: event.nativeEvent.text});
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    input: {
        fontSize: 20,
        borderWidth: 2,
        height: 40,
        width: 100,
        textAlign: "center"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#666666"
    }
});
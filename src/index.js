import { useState } from "react";
import reactDom from "react-dom";
import TeamperatureInput from "./TeamperatureInput";
import BoilingVerdict from "./BoilingVerdict";
import { toCelsius, toFahrenheit, tryConvert } from "./utils";
import "./style.css";

function Calculator() {
	const [temprature, setTemprature] = useState("");

	const handleCelsiusChange = (temprature) => {
		setTemprature({ scale: "c", temprature });
	};

	const handleFahrenheitChange = (temprature) => {
		setTemprature({ scale: "f", temprature });
	};

	const scale = temprature.scale;
	const temperaturee = temprature.temprature;
	const celsius =
		scale === "f" ? tryConvert(temperaturee, toCelsius) : temperaturee;
	const fahrenheit =
		scale === "c" ? tryConvert(temperaturee, toFahrenheit) : temperaturee;
	return (
		<div className='div-border'>
			<TeamperatureInput
				scale='c'
				onTemperatureChange={handleCelsiusChange}
				temperature={celsius}
			/>
			<TeamperatureInput
				scale='f'
				onTemperatureChange={handleFahrenheitChange}
				temperature={fahrenheit}
			/>
			<BoilingVerdict celsius={parseFloat(celsius)} />
		</div>
	);
}

reactDom.render(<Calculator />, document.getElementById("root"));

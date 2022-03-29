const scaleName = { c: "Celcius", f: "Fahrenheit" };

function TeamperatureInput({ scale, onTemperatureChange, temperature }) {
	const handleChange = (e) => {
		onTemperatureChange(e.target.value);
	};
	return (
		<div>
			<h3>Enter temperature in {scaleName[scale]}:</h3>
			<input type='text' value={temperature} onChange={handleChange}></input>
		</div>
	);
}

export default TeamperatureInput;

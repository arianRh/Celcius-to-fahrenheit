function BoilingVerdict({ celsius }) {
	if (celsius >= 100) {
		return <p>The water would boild.</p>;
	} else {
		return <p>The water would not boild.</p>;
	}
}

export default BoilingVerdict;

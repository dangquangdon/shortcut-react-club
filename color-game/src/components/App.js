import React from "react";
import Header from "./Header";
import Controls from "./Controls";
import Squares from "./Squares";

const makeSquare = (r, g, b) => ({
	color: `rgb(${r}, ${g}, ${b})`,
	hidden: false
})

export class App extends React.Component {

	state = {
		squares: [
			makeSquare(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),
			makeSquare(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),
			makeSquare(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),
			makeSquare(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),
			makeSquare(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),
			makeSquare(Math.floor(Math.random() * 256),Math.floor(Math.random() * 256),Math.floor(Math.random() * 256)),
		]
	}

	render() {
		const { squares } = this.state;
		const box = this.state.squares[Math.floor(Math.random() * 6)].color;
		return (
			<div>

				<Header rbg={box} />

				<Controls />

				<Squares squares={squares} />

	
			</div>
		)
	}
}

export default App;

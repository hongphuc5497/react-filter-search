import React, { Component } from "react";
import "./App.css";
import { Information } from "./data";
class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null
    }
  }
  
	render() {
		const elementStyle = {
			border: "solid",
			borderRadius: "10px",
			position: "relative",
			left: "10vh",
			height: "3vh",
			width: "20vh",
			marginTop: "5vh",
			marginBottom: "10vh",
		};

		return (
			<div>
				<input
					type="text"
					style={elementStyle}
					placeholder="Enter item to be searched"
				/>
				{items}
			</div>
		);
	}
}

export default App;

const styleInfo = {
	paddingRight: "10px",
};

const items = Information.map((data) => (
	<div>
		<ul>
			<li style={{ position: "relative", left: "10vh" }}>
				<span style={styleInfo}>{data.name}</span>
				<span style={styleInfo}>{data.age}</span>
				<span style={styleInfo}>{data.country}</span>
			</li>
		</ul>
	</div>
));

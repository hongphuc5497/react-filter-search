import React, { Component } from "react";
import "./App.css";
import { Information } from "./data";
class App extends Component {
	render() {
		const styleInfo = {
			paddingRight: "10px",
    };
    
		const items = Information.map((data) => {
			return (
				<div>
					<ul>
						<li style={{ position: "relative", left: "10vh" }}>
							<span style={styleInfo}>{data.name}</span>
							<span style={styleInfo}>{data.age}</span>
							<span style={styleInfo}>{data.country}</span>
						</li>
					</ul>
				</div>
			);
		});
		return items;
	}
}

export default App;

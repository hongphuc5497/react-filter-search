import React, { Component } from "react";
import "./App.css";
import { Information } from "./data";
class App extends Component {
	constructor() {
		super();

		this.state = {
			search: null,
		};
	}

	handleSearch = (e) => {
		this.setState({
			search: e.target.value,
		});
	};

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

		const styleInfo = {
			paddingRight: "10px",
		};

		const items = Information.filter((data) => {
			if (this.state.search == null) {
				return data;
			} else if (
				data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
				data.country.toLowerCase().includes(this.state.search.toLowerCase())
			) {
				return data;
			}
		}).map((data) => (
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

		return (
			<div>
				<input
					type="text"
					style={elementStyle}
					value={this.state.search}
					onChange={(e) => this.handleSearch(e)}
					placeholder="Enter item to be searched"
				/>
				{items}
			</div>
		);
	}
}

export default App;

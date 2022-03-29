import React from "react";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;
const Div = styled.div`
	display: flex;
`;
const App = () => {
	console.log(List);
	return (
		<React.Fragment>
			<Header />
			<Div>
				<List />
				<Map />
			</Div>

			<GlobalStyle />
		</React.Fragment>
	);
};

export default App;

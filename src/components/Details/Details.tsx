import React from "react";
import styled from "styled-components";

const Div = styled.div`
	border-bottom: 2px solid black;
`;
type placeProps = {
	place: {
		name: string;
	};
};
const Details = (props: placeProps) => {
	console.log(props);
	return (
		<Div>
			<h2>{props.place.name}</h2>
		</Div>
	);
};

export default Details;

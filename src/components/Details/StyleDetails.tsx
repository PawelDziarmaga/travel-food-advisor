import styled from "styled-components";

export const Div = styled.div`
	margin: 10px;
	padding-bottom: 5px;
	box-shadow: -2px 2px 5px grey;
	border-radius: 5px;
`;
export const H2 = styled.h2`
	margin: 10px 10%;
	display: flex;
	justify-content: space-between;
	align-items: end;
	span {
		right: 0;
		font-size: 12px;
	}
`;
export const H4 = styled.h4`
	margin: 5px 10%;

	font-size: 12px;
	span {
		margin-left: 10%;
	}
	a {
		color: black;
		text-decoration: none;
		cursor: pointer;
	}
`;
export const Img = styled.img`
	width: 100%;
	height: 200px;
	object-fit: cover;
	border-radius: 5px 5px 0 0;
`;

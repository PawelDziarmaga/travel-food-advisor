import styled from "styled-components";

export const Div = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 50px;
	background-color: #1572a1;
`;
export const H1 = styled.h1`
	margin-left: 10px;
	color: #f3f3ef;
`;
export const Form = styled.form`
	color: #f3f3ef;
	label {
		input {
		}
	}
`;
export const Input = styled.input`
	margin: 0 10px;
	padding-left: 10px;

	height: 30px;
	color: #ffffff;
	background-color: #ffffff55;
	border: 0 solid black;
	border-radius: 3px;
	transition: 0.2s ease-in-out;
	::placeholder {
		color: #f3f3ef;
	}
	:focus {
		border: 0 solid black;
		background-color: #ffffff66;
	}
`;

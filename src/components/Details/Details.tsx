import React from "react";
import styled from "styled-components";

const Div = styled.div`
	margin: 10px;
	padding-bottom: 5px;
	box-shadow: -2px 2px 5px grey;
	border-radius: 5px;
	h2 {
		margin: 10px 10%;
		display: flex;
		justify-content: space-between;
		align-items: end;
		span {
			right: 0;
			font-size: 12px;
		}
	}
	h4 {
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
	}
	img {
		width: 100%;
		height: 200px;
		object-fit: cover;
		border-radius: 5px 5px 0 0;
	}
`;
type placeProps = {
	place: {
		name: string;
		photo: { images: { original: { url: string } } };
		phone: string;
		open_now_text: string;
		rating: string;
		website: string;
	};
};
const Details = (props: placeProps) => {
	return (
		<Div>
			{props.place.photo ? (
				<img src={props.place.photo.images.original.url} alt='' />
			) : null}
			<h2>
				{props.place.name} <span>{props.place.open_now_text}</span>
			</h2>

			<h4>
				Phone <span>{props.place.phone}</span>
			</h4>

			<h4>
				Rating <span>{props.place.rating}</span>
			</h4>
			<h4>
				<a href={props.place.website}>{props.place.website}</a>
			</h4>
		</Div>
	);
};

export default Details;

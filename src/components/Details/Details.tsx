//Import style
import { Div, H2, H4, Img } from "./StyleDetails";
//Import types
import { placeProps } from "./TypeDetails";

const Details = (props: placeProps) => {
	return (
		<Div>
			{props.place.photo ? (
				<Img src={props.place.photo.images.original.url} alt='' />
			) : null}
			<H2>
				{props.place.name} <span>{props.place.open_now_text}</span>
			</H2>

			<H4>
				Phone <span>{props.place.phone}</span>
			</H4>

			<H4>
				Rating <span>{props.place.rating}</span>
			</H4>
			<H4>
				<a href={props.place.website}>{props.place.website}</a>
			</H4>
		</Div>
	);
};

export default Details;

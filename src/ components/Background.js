import staticBg from "./img/Background.jpg"
import "./Background.css"

const Background = () => {
	return(
			<div>
					<img className='Background' alt="background" src={staticBg} />
			</div>
			
	)
}

export default Background
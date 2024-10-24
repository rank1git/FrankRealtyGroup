const Question = ({ title, children, isActive, onShow }) => {
	return (
		<section className="question">
			<h3>{title}</h3>
			{isActive ? <p>{children}</p> : <button onClick={onShow}>Show</button>}
		</section>
	);
};

export default Question;

const withData = (WrappedComponent, selectData) => {
	return (props) => {
		const data = selectData(DataSource, props);
		return <WrappedComponent data={data} {...props} />;
	};
};

const selectData = (DataSource, props) => {
	return DataSource.getComments();
};

const CommentList = ({ data }) => {
	return (
		<div>
			{data.map((comment) => (
				<div key={comment.id}>
					<p>{comment.content}</p>
				</div>
			))}
		</div>
	);
}

const CommentListWithData = withData(CommentList, selectData);

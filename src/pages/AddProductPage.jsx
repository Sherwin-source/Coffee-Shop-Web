import AddProductForm from '../components/AddProductForm.jsx';

function AddProductPage({ addProduct }) {
	return (
		<div className="py-8 px-4">
			<AddProductForm addProduct={addProduct} />
		</div>
	);
}

export default AddProductPage;

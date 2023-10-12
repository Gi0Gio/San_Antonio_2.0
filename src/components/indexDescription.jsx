import '../style/indexDescriptionStyle.css'

export default IndexDescription

function IndexDescription(){
    return(
        <div className='indexDescriptionContent d-flex justify-content-center'>
            <div className='content w-75'>
                <p className='sub-title'><b>Todo lo que Necesitas!</b></p>
                <h1 className='text-title'>Servicios & Productos</h1>
                <p className='text w-50'>Ganadería San Antonio ofrece una amplia gama de servicios y productos centrados en el ganado. Disponemos de toros y vacas de alta calidad para la cría, garantizando tanto la salud de los animales como la calidad de la carne.</p>
                <button type='button' className='button text-white'>Mas Informacion +</button>
            </div>
        </div>
    );
}
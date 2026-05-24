import { MdPrecisionManufacturing } from 'react-icons/md';
import './MenuDestacado.css';

function MenuDestacado() { 

    const especialidades = [
        {
            id: 1,
            nombre: "Burguer Glotona",
            descripcion: "Base mayo, lechuga, tomate, 'BURGUER CASERA', queso gauda, queso cheddar, aros de cebolla morada, pepinillo y tocino.",
            precio: "$5.500",
            imagen: "",
        },
        {
            id: 2,
            nombre: "Burguer A lo Pobre",
            descripcion: "Base mayo, lechuga, tomate, 'BURGUER CASERA', papas fritas, cebolla cocida y huevo.",
            precio: "$5.500",
            imagen: "",
        },
        {
            id: 3,
            nombre: "Burguer Italiana",
            descripcion: "Base mayo, lechuga, tomate, 'BURGUER CASERA' y palta.",
            precio: "$5.500",
            imagen: "",
        },
        {
            id: 4,
            nombre: "Burguer Jarpa",
            descripcion: "Base mayo, lechuga, tomate, 'BURGUER CASERA', queso gauda y queso cheddar.",
            precio: "$5.500",
            imagen: "",
        },
        {
            id: 5,
            nombre: "Burguer Chilena",
            descripcion: "Base mayo, lechuga, tomate, 'BURGUER CASERA', DOBLE queso gauda, aros de cebolla morada y pepinillo.",
            precio: "$5.500",
            imagen: "",
        },
        {
            id: 6,
            nombre: "Burguer Tradicional",
            descripcion: "Base mayo, lechuga, tomate, 'BURGUER CASERA', queso gauda,queso cheddar, aros de cebolla morada y pepinillo.",
            precio: "$5.500",
            imagen: "",
        },
        {
            id: 7,
            nombre: "Entrañas",
            descripcion: "Tira de entraña mas papas fritas.",
            precio: "$18.000",
            imagen: "",
        },
        {
            id: 8,
            nombre: "Tomahawk",
            descripcion: "Tomahawk mas papas fritas.",
            precio: "$23.000",
            imagen: "",
        },
        {
            id: 9,
            nombre: "Filete",
            descripcion: "Filete mas papas fritas.",
            precio: "$13.000",
            imagen: "",
        },
        {
            id: 10,
            nombre: "Entrecot",
            descripcion: "Entrecot mas papas fritas.",
            precio: "$15.000",
            imagen: "",
        },
        {
            id: 11,
            nombre: "Lomo a lo Pobre",
            descripcion: "Lomo a lo Pobre.",
            precio: "$12.000",
            imagen: "",
        },
    ];
    return(
        <section id='especialidades'className='menu-destacado'>
            <h2>Nuestros Favoritos</h2>

            <div className='contenedor-tarjetas'>
            {especialidades.map((especialidad)=> (
                <div key={especialidad.id} className='tarjeta-especialidad'>
                    <img src={especialidad.imagen} alt={especialidad.nombre} />
                    <div className='info-especialidad'>
                        <h3>{especialidad.nombre}</h3>
                        <p>{especialidad.description}</p>
                        <span className='precio'>{especialidad.precio}</span>
                    </div>
                </div>
            ))}
            </div>
        </section>
    );
}

export default MenuDestacado;
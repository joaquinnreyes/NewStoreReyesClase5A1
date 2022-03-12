import ItemDetail from "../components/ItemDetail"
import {useState,useEffect} from 'react'
import { useParams } from "react-router-dom"


const item=[{ id: '0', title: 'Nike air force one', price: 70000,'category':'Hombre', img: 'https://nikeclprod.vteximg.com.br/arquivos/ids/158944-1000-1000/CT2302_100_A_PREM.jpg?v=637654374150800000', description:'Relájate con comodidad con el Nike Air Force 1. El cuero clásico y los detalles que hicieron de este calzado un ícono hacen destacar tu estilo en la calle.',stock:5 },{ id: '1', title: 'Zapatilla nike air max', price: 85000,'categoria':'Hombre', img: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/w2ldynwtyuspv6r5rffj/air-max-90-zapatillas-dlXJdc.png',description:'El Nike Air Max se mantiene fiel a sus raíces con la icónica suela tipo wafle, los revestimientos cosidos y los detalles clásicos de TPU.',stock:5  },
    { id: '2', title: 'Zapatilla nike huarache', price: 78000,'category':'Hombre', img: 'https://storage.googleapis.com/sportshowroom.cl/products/26db3f71802e11b2a5f1f79502fd6416.jpg',description:'Creado para adaptarse al pie y diseñado para brindar comodidad, el Nike Air Huarache trae de regreso un modelo urbano popular. La parte superior combina suaves detalles en cuero con una tela estilo neopreno.',stock:5 },
    { id: '3', title: 'Nike air max dia', price: 50000,'category':'Mujer', img: 'https://www.lapolar.cl/dw/image/v2/BCPP_PRD/on/demandware.static/-/Sites-master-catalog/default/dw33cd740a/images/large/533781-beige.jpg?sw=400&sh=400&sm=fit','description':'La Nike Air Max 270 está inspirada en dos iconos legendarios Air Max 180 y Air Max 93. Cuenta con la unidad Air más grande en el talón de la gama Nike para una altura súper suave.',stock:5  },
    {id: '4', title: 'Nike downshifter', price: 40000,'category':'Mujer', img: 'https://home.ripley.cl/store/Attachment/WOP/D317/2000387606824/2000387606824_2.jpg',description:'El Nike Downshifter 11 te brinda un soporte ligero y flexible para que te mantengas en movimiento. Continúa con la misma amortiguación suave de la última versión y agrega más soporte alrededor del mediopié para que sea cómodo usarlo mucho después del entrenamiento',stock:5 }]

function ItemDetailContainer() {

    
    const [itemState, setItemState] = useState([])

    useEffect(() => {
        getItems()
        console.log('Efecto realizado con éxito')
    },[item])
    const {itemId}=useParams()
    const getItems = () => {
        const getItemsPromesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(setItemState(item[itemId]))
            }, 0);
        })
        getItemsPromesa.then(response => {
            console.log(response)
        })
    }


    return (
        <div>
            <ItemDetail item={itemState}></ItemDetail>
        </div>
    )
  }
  
  export default ItemDetailContainer;
  
  
import logo from '../images/tienda-online.png'

function CartWidget() {
    const estilos={
        height:'45px'
    }

    return (
        <div>
           <img style={estilos} src={logo}></img>
        </div>
    )
}
export default CartWidget
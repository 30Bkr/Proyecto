import { Card, Metric, Text } from "@tremor/react";



const CartasDeProductos = (props) => (
  <Card className="max-w-xs mx-auto m-4" decoration="top" decorationColor="indigo">
    <Text>{props.id}</Text>
    <img src="" alt="" />
    <Metric>{props.precio}</Metric>
    <Text>{props.cantidad}</Text>

  </Card>
);

export default CartasDeProductos;
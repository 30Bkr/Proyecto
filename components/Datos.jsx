import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";

const data = [
  {
    name: "Casco de Polietileno",
    codigo: "B793H1LU",
    descripcion: "Protector de craneo para trabajos de riesgo de alto impacto",
    cantidad: "1360",
  },
  {
    name: "Chalecos",
    codigo: "OUI2H1LV",
    descripcion:
      "Elemento de seguridad que señala posición y evita un posible atropello",
    cantidad: "1220",
  },
  {
    name: "Lentes de Seguridad",
    codigo: "A7B309JD",
    descripcion: "Protector visual para trabajos de riesgo de alto impacto",
    cantidad: "750",
  },
  {
    name: "Guantes de Cuero",
    codigo: "9KW35F8V",
    descripcion: "Protector de mano para trabajos de riesgo de alto impacto",
    cantidad: "230",
  },
  {
    name: "Mascara Panoramica",
    codigo: "A1B3H1LV",
    descripcion: "Protector de vías respiratorios, protección ocular y facial simultanea",
    cantidad: "117",
  },
  {
    name: "Protectores Auditivos",
    codigo: "BBB3H1LV",
    descripcion: "Protector de audicion para evitar la exposición a sonidos fuertes",
    cantidad: "75",
  },
  
];

const DatosT = () => (
  <Card>
    <Title>Inventario</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Código</TableHeaderCell>
          <TableHeaderCell>Nombre</TableHeaderCell>
          <TableHeaderCell>Descripcion</TableHeaderCell>
          <TableHeaderCell>Cantidad(unidad)</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item) => (
          <TableRow key={item.name}>
            <TableCell>{item.codigo}</TableCell>
            <TableCell>
              <Text>{item.name}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.descripcion}</Text>
            </TableCell>
            <TableCell>
              <Badge color="emerald" >
                {item.cantidad}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card>
);

export default DatosT;

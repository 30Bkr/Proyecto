"use client";
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
import { useTasks } from "@/context/TasksContext";

// const data = [
//   {
//     id: "Casco de Polietileno",
//     codigo: "B793H1LU",
//     descripcion: "Protector de craneo para trabajos de riesgo de alto impacto",
//     cantidadI: "1360",
//   },
//   {
//     id: "Chalecos",
//     codigo: "OUI2H1LV",
//     descripcion:
//       "Elemento de seguridad que señala posición y evita un posible atropello",
//     cantidadI: "1220",
//   },
//   {
//     id: "Lentes de Seguridad",
//     codigo: "A7B309JD",
//     descripcion: "Protector visual para trabajos de riesgo de alto impacto",
//     cantidadI: "750",
//   },
//   {
//     id: "Guantes de Cuero",
//     codigo: "9KW35F8V",
//     descripcion: "Protector de mano para trabajos de riesgo de alto impacto",
//     cantidadI: "230",
//   },
//   {
//     id: "Mascara Panoramica",
//     codigo: "A1B3H1LV",
//     descripcion: "Protector de vías respiratorios, protección ocular y facial simultanea",
//     cantidadI: "117",
//   },
//   {
//     id: "Protectores Auditivos",
//     codigo: "BBB3H1LV",
//     descripcion: "Protector de audicion para evitar la exposición a sonidos fuertes",
//     cantidadI: "75",
//   },

// ];

const DatosT = () => {
  const { inve } = useTasks();

  return (
    <>
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
            {inve.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.codigo}</TableCell>
                <TableCell>
                  <Text>{item.id}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.descripcion}</Text>
                </TableCell>
                <TableCell>
                  <Badge color="emerald">{item.cantidadI}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </>
  );
};

export default DatosT;

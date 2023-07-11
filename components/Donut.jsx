import { Card, Title, DonutChart } from "@tremor/react";

const cities = [
  {
    name: "Casco de Polietileno",
    sales: 423,
  },
  {
    name: "Chalecos",
    sales: 389,
  },
  {
    name: "Lentes de Seguridad",
    sales: 400 ,
  },
  {
    name: "Guantes de Cuero",
    sales: 200,
  },
  {
    name: "Mascara Panorámica",
    sales: 60,
  },
  {
    name: "Protectores Auditivos",
    sales: 50,
  },
];

const ChartDonut = () => (
  <Card className="w-full md:col-span-2 relative lg:h-[70vh] h-[50vh] m-auto p-4 rounded-lg bg-white">
    <Title>Productos Vendidos</Title>
    <DonutChart
      className="mt-6"
      data={cities}
      category="sales"
      index="name"

      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
  </Card>
);

export default ChartDonut;
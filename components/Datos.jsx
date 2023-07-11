import { Card, Metric, Text, CategoryBar, Legend } from "@tremor/react";
import '../src/app/globals.css'

const DatosT = () => (
  <>
    <div className="max-w-3xl flex items-center justify-center my-16">
        <h1 className="inventario">Inventario</h1>
    </div>
    <div className="my-4">
      <Card className="max-w-3xl mx-16 p-8">
      <Text>Cascos de Polietireno</Text>
      <Metric>1523</Metric>
      <CategoryBar
        className="mt-4"
        values={[423, 677]}
        colors={["red", "emerald"]}
      />
      <Legend
        className="mt-3"
        categories={["Vendidos", "Disponibles"]}
        colors={["red", "emerald"]}
      />
        </Card>  
    </div>
    
    <div className="my-4">
      <Card className="max-w-3xl mx-16 p-8">
      <Text>Chalecos</Text>
      <Metric>1523</Metric>
      <CategoryBar
        className="mt-4"
        values={[389, 677]}
        colors={["red", "emerald"]}
      />
      <Legend
        className="mt-3"
        categories={["Vendidos", "Disponibles"]}
        colors={["red", "emerald"]}
      />
        </Card>  
    </div>

    <div className="my-4">
      <Card className="max-w-3xl mx-16 p-8">
      <Text>Cascos de Polietireno</Text>
      <Metric>1523</Metric>
      <CategoryBar
        className="mt-4"
        values={[423, 677]}
        colors={["red", "emerald"]}
      />
      <Legend
        className="mt-3"
        categories={["Vendidos", "Disponibles"]}
        colors={["red", "emerald"]}
      />
        </Card>  
    </div>

    <div className="my-4">
      <Card className="max-w-3xl mx-16 p-8">
      <Text>Cascos de Polietireno</Text>
      <Metric>1523</Metric>
      <CategoryBar
        className="mt-4"
        values={[423, 677]}
        colors={["red", "emerald"]}
      />
      <Legend
        className="mt-3"
        categories={["Vendidos", "Disponibles"]}
        colors={["red", "emerald"]}
      />
        </Card>  
    </div>

    <div className="my-4">
      <Card className="max-w-3xl mx-16 p-8">
      <Text>Cascos de Polietireno</Text>
      <Metric>1523</Metric>
      <CategoryBar
        className="mt-4"
        values={[423, 677]}
        colors={["red", "emerald"]}
      />
      <Legend
        className="mt-3"
        categories={["Vendidos", "Disponibles"]}
        colors={["red", "emerald"]}
      />
        </Card>  
    </div>

    <div className="my-4">
      <Card className="max-w-3xl mx-16 p-8">
      <Text>Cascos de Polietireno</Text>
      <Metric>1523</Metric>
      <CategoryBar
        className="mt-4"
        values={[423, 677]}
        colors={["red", "emerald"]}
      />
      <Legend
        className="mt-3"
        categories={["Vendidos", "Disponibles"]}
        colors={["red", "emerald"]}
      />
        </Card>  
    </div>
  </>
);

export default DatosT;

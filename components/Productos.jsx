import { Card, Metric, Text, Button, Flex } from "@tremor/react";
import Image from 'next/image'
import { useTasks } from "@/context/TasksContext";




const CartasDeProductos = (props) => { 
  const {deleteTask} = useTasks()
  return(
  <Card className="max-w-xs mx-auto m-4 flex hover:ease-in duration-300 " decoration="top" decorationColor="indigo">
    <div>
        <Text>{props.id}</Text>
        <Metric>{props.precio}</Metric>
        <Text>{props.cantidad}</Text>
        <Flex justifyContent="end" className="space-x-2 border-t pt-4 mt-8">
        <Button size="xs" variant="secondary">
          Informacion
        </Button>

        <Button size="xs" variant="primary">
          Comprar
        </Button>
        </Flex>
    </div>
    
    <div className="flex items-center justify-center">
        <Image 
            src={(props.img == "" ? '/casco.jpg' : props.img)}
            alt='imagen'
            className="bg-white-200"
            width={140}
            height={140}
        />
    </div>
    <button onClick={() => {
      const accept = window.confirm('Estas seguro que desea eliminar?');
      if(accept) deleteTask(props.id);
      }}>X</button>
  </Card>
)
  };

export default CartasDeProductos;
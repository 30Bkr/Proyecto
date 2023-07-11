import { Select, SelectItem } from "@tremor/react";


 function Seleccionar() {
  return (
    <div className="max-w-sm mx-auto space-y-6">
      <Select>
        <SelectItem value="1">
          Casco de Polietileno
        </SelectItem>
        <SelectItem value="2">
          Chalecos
        </SelectItem>
        <SelectItem value="3">
          Lentes de Seguridad
        </SelectItem>
        <SelectItem value="4">
          Guantes de Cuero
        </SelectItem>
        <SelectItem value="5">
          Mascara Panoramica
        </SelectItem>
        <SelectItem value="6">
          Protectores Auditivos
        </SelectItem>
      </Select>
    </div>
  );
}

export default Seleccionar;
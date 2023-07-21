import { ListGroup } from "react-bootstrap";
import { BiSolidSquareRounded, BiSquareRounded } from "react-icons/bi";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const PieChartComponent = ({ data }) => {
  return (
    <div className=" flex-column  d-flex justify-content-center ">
      <PieChart width={360} height={360}>
        <Pie
          data={data}
          dataKey="value" // Proprietà che indica il valore dei dati
          nameKey="name" // Proprietà che indica l'etichetta delle fette
          cx="50%" // Coordinata x del centro del diagramma
          cy="50%" // Coordinata y del centro del diagramma
          outerRadius={120} // Raggio esterno delle fette
          innerRadius={60} // Raggio interno delle fette
          // fill="#8884d8" // Colore di riempimento di default delle fette
          label={{ fill: "black", fontSize: 20 }} // Mostra le etichette delle fette
        >
          {data.map((index) => (
            <Cell key={`cell-${index}`} fill={index.color} />
          ))}
        </Pie>
        {/* Tooltip per visualizzare informazioni aggiuntive */}
        <Tooltip labelStyle={{ color: "black", fontSize: 10 }} />
      </PieChart>
      <div className="d-flex justify-content-center shadow-effect mb-2">
        <ListGroup horizontal className="mb-2 mx-2 border border-dark">
          {data.map((index) => (
            <ListGroup.Item
              key={index}
              className="fs-5 d-flex align-items-center"
            >
              <BiSolidSquareRounded fill={index.color} />
              {index.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
    </div>
  );
};

export default PieChartComponent;

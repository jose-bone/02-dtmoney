import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get("transactions").then((response) => console.log(response.data));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Website</td>
            <td className="deposit">$12.000</td>
            <td>Desenvolvimento</td>
            <td>02/12/2021</td>
          </tr>
          <tr>
            <td>Aluguer</td>
            <td className="withdraw">- $2.000</td>
            <td>Casa</td>
            <td>25/11/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
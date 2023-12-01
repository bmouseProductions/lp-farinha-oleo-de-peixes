import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
  name: string,
  tangua: string,
  patos: string,
  biguacu: string,
  itajai: string,
  parana: string
) {
  return { name, tangua, patos, biguacu, itajai, parana };
}

const rows = [
  createData(
    "Acidez livre em ácido oleico (máx.)",
    "6,0%",
    "6,0%",
    "6,0%",
    "6,0%",
    "6,0%"
  ),
  createData(
    "Umidade e substâncias voláteis (máx.)",
    "1,0%",
    "1,0%",
    "2,0%",
    "1,0%",
    "1,0%"
  ),
  createData(
    "Impurezas sedimentáveis (máx.)",
    "1,0%",
    "1,0%",
    "1,0%",
    "1,0%",
    "1,0%"
  ),
  createData(
    "EPA + DHA (mín – máx.)",
    "15,0 - 20,0%",
    "15,0 - 20,0%",
    "15,0 - 20,0%",
    "15,0 - 20,0%",
    "15,0 - 20,0%"
  ),
  createData(
    "Extrato etéreo (mín)",
    "98,0%",
    "98,0%",
    "98,0%",
    "98,0%",
    "98,0%"
  ),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              {" "}
              <strong>Parâmetros</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong>Tanguá</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong> Patos de Minas</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong> Biguaçu</strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong>Itajaí </strong>{" "}
            </TableCell>
            <TableCell align="right">
              {" "}
              <strong> Paranacity</strong>{" "}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.tangua}</TableCell>
              <TableCell align="right">{row.patos}</TableCell>
              <TableCell align="right">{row.biguacu}</TableCell>
              <TableCell align="right">{row.itajai}</TableCell>
              <TableCell align="right">{row.parana}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

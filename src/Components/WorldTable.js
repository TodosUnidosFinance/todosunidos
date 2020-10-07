import React from "react";
import MUIDataTable from "mui-datatables";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";

class WorldTable extends React.Component {
  constructor(props) {
    super(props);
    this.tableRef = React.createRef();
  }
  state = {
    stats: [],
    loading: false,
  };

  getMuiTheme = () =>
    createMuiTheme({
      overrides: {
        MUIDataTable: {
          root: {
            backgroundColor: "inherit",
          },
          paper: {
            boxShadow: "none",
          },
        },
        MUIDataTableBodyCell: {
          root: {
            backgroundColor: "none",
          },
        },
      },
    });

  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://corona.lmao.ninja/v2/countries") //data source
      .then((response) => response.json())
      .then((res) => {
        this.setState({ stats: res, loading: false }, () => console.log(res));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <div
          className="mb-5"
          style={{ marginLeft: "10px", marginRight: "10px" }}
        >
          <br />

          <MuiThemeProvider theme={this.getMuiTheme()}>
            <MUIDataTable
              title={
                <h1 style={{ float: "left", color: "#3f51b5" }}>
                  Casos / Países
                </h1>
              }
              isLoading={this.state.loading}
              columns={[
                {
                  name: "country",
                  label: "País",
                  options: {
                    filter: true,
                    sort: true,
                  },
                },
                {
                  name: "cases",
                  label: "Total Casos",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "todayCases",
                  label: "Casos Actuales",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "deaths",
                  label: "Total Muertes",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "todayDeaths",
                  label: "Muertes Actuales",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "recovered",
                  label: "Pacientes Recuperados",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "active",
                  label: "Casos Activos",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
                {
                  name: "critical",
                  label: "Pacientes Críticos",
                  options: {
                    filter: true,
                    sort: false,
                  },
                },
              ]}
              data={this.state.stats}
              options={{
                filter: true,

                rowHover: true,
                downloadOptions: { filename: "CovidData.csv", separator: "," },
                filterType: "dropdown",
                selectableRows: false,
                responsive: "stacked",
                textLabels: {
                  pagination: {
                    next: "Siguiente",
                    previous: "Anterior",
                    rowsPerPage: "Filas por Página:",
                    displayRows: "de",
                  },
                  toolbar: {
                    search: "Buscar",
                    downloadCsv: "Descarga CSV",
                    print: "Imprimir",
                    viewColumns: "Columnas",
                    filterTable: "Filtrar",
                  },
                  filter: {
                    all: "Todos",
                    title: "Filtros",
                    reset: "Reiniciar",
                  },
                  viewColumns: {
                    title: "Mostrar Columnas",
                    titleAria: "Mostrar/Ocultar Columnas",
                  },
                },
              }}
            />
          </MuiThemeProvider>
          <div style={{ color: "#3f51b5", float: "left", fontSize: "10px" }}>
            Created By: Zude Mwango And Associates
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default WorldTable;

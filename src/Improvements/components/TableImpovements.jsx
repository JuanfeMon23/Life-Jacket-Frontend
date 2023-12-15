import React  from 'react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  Pagination,
} from "@nextui-org/react";
import {FaSearch} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
import { useImprovements } from '../context/improvementsContext';
import {ImprovementRegister} from './ImprovementRegister';
import { EditImprovements } from './EditImprovements';
import { DeleteImprovement } from './DeleteImprovement';

const statusOptions = [
  {name: "Activo" , uid: "true"},
  {name: "Inactivo", uid: "false"}
];  

const columns = [
  {name: "Placa del vehículo", uid: "improvementPlate", sortable: true},
  {name: "Descripcion", uid: "improvementDescription", sortable: true},
  {name: "Fecha", uid: "improvementDate", sortable: true},
  {name: "Valor de la mejora", uid: "improvementPrice"},
  {name: "Estado", uid: "improvementStatus", sortable: true},
  {name: "Acciones", uid: "improvementActions"},
];

export  function TableImpovements() {
    const {improvements} = useImprovements();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);
  
    const filteredItems = React.useMemo(() => {
      let filteredImprovements = [...improvements];
  
      if (hasSearchFilter) {
        filteredImprovements = filteredImprovements.filter((improvement) =>
          improvement.vehicle.licensePlate.toLowerCase().includes(filterValue.toLowerCase()) ||
          improvement.improvementDate.toLowerCase().includes(filterValue.toLowerCase())  ||
          (typeof improvement.improvementPrice === "number" && improvement.improvementPrice.toString().toLowerCase().includes(filterValue.toLowerCase())) ||
          improvement.vehicle.brand.toLowerCase().includes(filterValue.toLowerCase())  ||
          improvement.vehicle.type.toLowerCase().includes(filterValue.toLowerCase())  ||
          improvement.vehicle.line.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
  
      if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
        filteredImprovements = filteredImprovements.filter((improvement) => 
          Array.from(statusFilter).includes(improvement.improvementStatus) 
        );
      }
  
      return filteredImprovements;
    }, [improvements, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);
  
  
  
    const onNextPage = React.useCallback(() => {
      if (page < pages) {
        setPage(page + 1);
      }
    }, [page, pages]);
  
    const onPreviousPage = React.useCallback(() => {
      if (page > 1) {
        setPage(page - 1);
      }
    }, [page]);
  
    const onRowsPerPageChange = React.useCallback((e) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    }, []);
  
    const onSearchChange = React.useCallback((value) => {
      if (value) {
        setFilterValue(value);
        setPage(1);
      } else {
        setFilterValue("");
      }
    }, []);
  
    const onClear = React.useCallback(()=>{
      setFilterValue("")
      setPage(1)
    },[])

    const topContent = React.useMemo(() => {
      return (
        <div className="flex flex-col gap-4 mt-5">
          <div className="flex justify-between gap-3 items-end">
            <Input
              title='Buscar mejora'
              isClearable
              className=" max-w-[50%] "
              placeholder="Buscar..."
              startContent={<FaSearch />}
              value={filterValue}
              onClear={() => onClear()}
              onValueChange={onSearchChange}
            />
            <div className="flex gap-3">
              <Dropdown>
                <DropdownTrigger className=" sm:flex">
                  <Button startContent={<IoIosArrowDown/>} title='Filtrar las mejoras por su estado' color="primary" variant="flat" >
                    Estado
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Table Columns"
                  closeOnSelect={false}
                  selectedKeys={statusFilter}
                  selectionMode="multiple"
                  onSelectionChange={setStatusFilter}
                >
                  {statusOptions.map((status) => (
                    <DropdownItem key={status.uid} className="capitalize">
                      {status.name}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
              <ImprovementRegister/>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-default-400 text-small">Total de mejoras: {improvements.length} </span>
            <label className="flex items-center text-default-400 text-small">
              Filas por página
              <select
                className="bg-transparent outline-none text-default-400 text-small"
                onChange={onRowsPerPageChange}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
              </select>
            </label>
          </div>
        </div>
      );
    }, [
      filterValue,
      statusFilter,
      onRowsPerPageChange,
      improvements.length,
      onSearchChange,
      hasSearchFilter,
    ]);

    const bottomContent = React.useMemo(() => {
      return (
        <div className="py-2 px-2 flex justify-between items-center">
          <span className="w-[30%] text-small text-default-400">
          </span>
          <Pagination
            isCompact
            showControls
            showShadow
            color="primary"
            page={page}
            total={pages}
            onChange={setPage}
          />
          <div className="hidden sm:flex w-[30%] justify-end gap-2">
            <Button isDisabled={pages === 1} size="sm" title='Página anterior' color="primary" onPress={onPreviousPage}>
              Anterior
            </Button>
            <Button isDisabled={pages === 1} size="sm" title='Página siguiente' color="primary" onPress={onNextPage}>
              Siguiente
            </Button>
          </div>
        </div>
      );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  
  return (
    <div className=" ml-3 w-[23rem] sm:ml-5 sm:w-full md:w-full lg:w-[83rem] xl:w-[117rem] mx-auto ">
    <Table
        aria-label="User Table"
        isCompact
        color='primary'
        bottomContentPlacement="outside"
        bottomContent={bottomContent}
        selectedKeys={selectedKeys}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
    >
  <TableHeader>
        {columns.map((item) => (
            <TableColumn 
            key={item.uid}
            align={item.uid === "actions" ? "center" : "start"}
            >
                {item.name}
            </TableColumn>
        ))}
  </TableHeader>
  <TableBody emptyContent={"No hay mejoras registradas"}>
        {items.map((item) => (
            <TableRow key={item.idImprovements}>
                <TableCell>{item.vehicle.licensePlate}</TableCell>
                <TableCell>{item.improvementDescription}</TableCell> 
                <TableCell>{item.improvementDate} </TableCell> 
                <TableCell>
                {typeof item.improvementPrice === "number" ?
                  item.improvementPrice.toLocaleString("es-ES", { style: "currency", currency: "COP", minimumFractionDigits: 0 }) :
                  "No válido"
                }
                </TableCell>
                <TableCell>{item.improvementStatus === "true" ?  <Chip color="success">Activa</Chip> : <Chip color="default">Inactiva</Chip>}</TableCell>
                <TableCell className=" flex">
                    <EditImprovements  improvement={item}/>
                    <DeleteImprovement improvement={item}/>
                </TableCell>
            </TableRow>
        ))}
  </TableBody>
</Table>
</div>
  )
}

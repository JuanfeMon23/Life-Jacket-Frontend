import React from "react";
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
import { useClients } from "../context/clientsContext";
import {ClientRegister} from "./ClientRegister";
import { WatchClient } from './WatchClient';
import { ClientEdit } from './ClientEdit';
import { StatusClient } from './StatusClient';
import { DeleteClient } from './DeleteClient';

const statusOptions = [
    {name: "Activo" , uid: "true"},
    {name: "Inactivo", uid: "false"}
  ];  

  const columns = [
    {name: "Cédula", uid: "clientNumber", sortable: true},
    {name: "Nombres", uid: "clientName", sortable: true},
    {name: "Apellidos", uid: "clientSortname", sortable: true},
    {name: "Teléfono", uid: "clientCelphone"},
    {name: "Estado", uid: "clientStatus", sortable: true},
    {name: "Acciones", uid: "clientActions"},
  ];

export  function TableClients() {
    const {clients} = useClients();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);
  
    const filteredItems = React.useMemo(() => {
      let filteredClients = [...clients];
  
      if (hasSearchFilter) {
        filteredClients = filteredClients.filter((client) =>
          client.clientName.toLowerCase().includes(filterValue.toLowerCase()) ||
          client.clientLastName.toLowerCase().includes(filterValue.toLowerCase()) ||
          client.clientDocument.toLowerCase().includes(filterValue.toLowerCase())
        );
      }
  
      if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
        filteredClients = filteredClients.filter((client) => 
          Array.from(statusFilter).includes(client.clientStatus) 
        );
      }
  
      return filteredClients;
    }, [clients, filterValue, statusFilter]);

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
                title='Buscar cliente'
                isClearable
                className=" sm:max-w-[30%] shadow-xl"
                placeholder="Buscar..."
                startContent={<FaSearch />}
                value={filterValue}
                onClear={() => onClear()}
                onValueChange={onSearchChange}
              />
              <div className="flex gap-3">
                <Dropdown>
                  <DropdownTrigger className="hidden sm:flex">
                    <Button startContent={<IoIosArrowDown/>} title='Filtrar los clientes por su estado' color="primary" variant="flat" >
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
                <ClientRegister/>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-default-400 text-small">Total de clientes: {clients.length} </span>
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
        clients.length,
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
              <Button isDisabled={pages === 1} size="sm"  title='Página anterior' color="primary" onPress={onPreviousPage}>
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
    <div className=" ml-3 w-[23rem] sm:ml-5 sm:w-full md:w-full lg:w-[80rem] xl:w-[117rem] mx-auto ">
    <Table
        aria-label="clients Table"
        isCompact
        color='primary'
        bottomContentPlacement="outside"
        bottomContent={bottomContent}
        classNames={{
            wrapper: "max-h-[582px]"
        }}
        selectedKeys={selectedKeys}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={setSelectedKeys}
    >
  <TableHeader>
        {columns.map((item) => (
            <TableColumn key={item.uid}>
                {item.name}
            </TableColumn>
        ))}
  </TableHeader>
  <TableBody emptyContent={"No hay clientes registrados"}>
        {items.map((item) => (
            <TableRow key={item.idClient}>
                <TableCell>{item.clientDocument}</TableCell>
                <TableCell>{item.clientName}</TableCell>
                <TableCell>{item.clientLastName}</TableCell> 
                <TableCell>{item.clientPhoneNumber}</TableCell>
                <TableCell>{item.clientStatus === "true" ?  <Chip color="success">Activo</Chip> : <Chip color="default">Inactivo</Chip>}</TableCell>
                <TableCell className=" flex justify-normal">
                    <WatchClient client={item} id={clients.id}/>
                    <ClientEdit client={item}/>
                    <StatusClient client={item}/>
                    <DeleteClient client={item}/>
                </TableCell>
            </TableRow>
        ))}
  </TableBody>
</Table>
</div>
  )
}

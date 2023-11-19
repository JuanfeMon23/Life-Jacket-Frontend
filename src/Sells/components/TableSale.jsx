import React from 'react';
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
import { FaSearch } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import { useSells } from '../context/sellsContext';
import { SaleRegister } from './SaleRegister';
import { WatchSale } from './WatchSale';
import { StatusSale } from './StatusSale';
import { ContractSale } from './ContractSale';
import { ReportSale } from './ReportSale';

const statusOptions = [
  { name: "Activo", uid: "true" },
  { name: "Inactivo", uid: "false" }
];

const columns = [
  { name: "Fecha de venta", uid: "name", sortable: true },
  { name: "Precio", uid: "sortname", sortable: true },
  { name: "Placa del vehículo", uid: "sortname", sortable: true },
  { name: "Nombre del cliente", uid: "status", sortable: true },
  { name: "Estado", uid: "status", sortable: true },
  { name: "Acciones", uid: "role", sortable: true }
];

export function TableSale() {
  const { sells } = useSells();
  const [filterValue, setFilterValue] = React.useState("");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
  const [statusFilter, setStatusFilter] = React.useState("all");
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(1);

  const hasSearchFilter = Boolean(filterValue);

  const filteredItems = React.useMemo(() => {
    let filteredSales = [...sells];

    if (hasSearchFilter) {
      filteredSales = filteredSales.filter((sales) =>
        sales.saleDate.toLowerCase().includes(filterValue.toLowerCase()) ||
        (typeof sales.saleFinalPrice === "number" && sales.saleFinalPrice.toString().toLowerCase().includes(filterValue.toLowerCase())) ||
        sales.vehicle.licensePlate.toLowerCase().includes(filterValue.toLowerCase()) ||
        sales.client.clientName.toLowerCase().includes(filterValue.toLowerCase())
      );
    }

    if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
      filteredSales = filteredSales.filter((sales) =>
        Array.from(statusFilter).includes(sales.saleStatus)
      );
    }

    return filteredSales;
  }, [sells, filterValue, statusFilter]);

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

  const onClear = React.useCallback(() => {
    setFilterValue("");
    setPage(1);
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4 mt-5">
        <div className="flex justify-between gap-3 items-end">
          <Input
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
                <Button startContent={<IoIosArrowDown />} color="primary" variant="flat">
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
            <ReportSale />
            <SaleRegister />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total de ventas: {sells.length} </span>
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
    sells.length,
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
          <Button isDisabled={pages === 1} size="sm" color="primary" onPress={onPreviousPage}>
            Anterior
          </Button>
          <Button isDisabled={pages === 1} size="sm" color="primary" onPress={onNextPage}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div className="ml-3 w-[23rem] sm:ml-5 sm:w-full md:w-full lg:w-[83rem] xl:w-[117rem] mx-auto ">
      <Table
        aria-label="roles Table"
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
        <TableBody emptyContent={"No hay ventas registradas"}>
          {items.map((item) => (
            <TableRow key={item.idSale}>
              <TableCell>
                {new Date(item.saleDate).toLocaleString("es-ES", {
                  year: "numeric",
                  month: "2-digit",
                  day: "2-digit",
                  hour: "2-digit",
                  minute: "2-digit"
                })}
              </TableCell>
              <TableCell>
                {typeof item.saleFinalPrice === "number" ? item.saleFinalPrice.toLocaleString("es-ES", { style: "currency", currency: "COP" }) : "No válido"}
              </TableCell>
              <TableCell>{item.vehicle.licensePlate}</TableCell>
              <TableCell>{item.client.clientName}</TableCell>
              <TableCell>{item.saleStatus === "true" ? <Chip color="success">Activo</Chip> : <Chip color="default">Inactivo</Chip>}</TableCell>
              <TableCell className="flex justify-normal">
                <WatchSale sale={item} />
                <StatusSale sale={item} />
                <ContractSale sale={item} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

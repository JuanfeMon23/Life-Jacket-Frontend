import React from 'react'
import { useVehicles } from '../../context/vehiclesContext';
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
import { LinesRegister } from './LinesRegister';
import { BrandsRegister } from './BrandsRegister';
import { DeleteBrands } from './DeleteBrands';

const columns = [
    {name: "Tipo", uid: "type", sortable: true},
    {name: "Marca", uid: "brand", sortable: true},
    {name: "Línea", uid: "line", sortable: true},
    {name: "Acciones", uid: "actionsBrands", sortable: true}
  ];  


export  function TableBrands() {
    const {brands} = useVehicles();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const filteredItems = React.useMemo(() => {
        let filteredBrands = [...brands];
    
        if (hasSearchFilter) {
          filteredBrands = filteredBrands.filter((brands) =>
          brands.VehicleType.toLowerCase().includes(filterValue.toLowerCase()) ||
          brands.NameBrand.toLowerCase().includes(filterValue.toLowerCase())  ||
          brands.BrandLine.toLowerCase().includes(filterValue.toLowerCase()) 
          );
        }
    
    
        return filteredBrands;
      }, [brands, filterValue]);

      
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
                title="Buscar información"
                isClearable
                className=" sm:max-w-[30%] shadow-xl"
                placeholder="Buscar..."
                startContent={<FaSearch />}
                value={filterValue}
                onClear={() => onClear()}
                onValueChange={onSearchChange}
              />
            <div className="flex gap-3">
                <div>
{/*                   <BrandsRegister/> */}
                </div>
                <div>
                  <LinesRegister />
                </div>
            </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-default-400 text-small">Total de datos: {brands.length} </span>
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
        onRowsPerPageChange,
        brands.length,
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
              <Button isDisabled={pages === 1} size="sm" title="Página anterior" color="primary" onPress={onPreviousPage}>
                Anterior
              </Button>
              <Button isDisabled={pages === 1} size="sm" title="Página siguiente" color="primary" onPress={onNextPage}>
                Siguiente
              </Button>
            </div>
          </div>
        );
      }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  return (
    <div className="ml-3 w-[23rem] sm:ml-5 sm:w-full md:w-full lg:w-[83rem] xl:w-[117rem] mx-auto ">
        <Table
            aria-label="brands Table"
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
      <TableBody emptyContent={"No hay marcas registradas"}>
            {items.map((item) => (
                <TableRow key={item.idBrand}>
                    <TableCell>{item.VehicleType}</TableCell>
                    <TableCell>{item.NameBrand}</TableCell> 
                    <TableCell>{item.BrandLine}</TableCell> 
                    <TableCell className=" flex justify-normal">
                        <DeleteBrands brand={item} />
                    </TableCell>
                </TableRow>
            ))}
      </TableBody>
    </Table>
    </div>
  )
}

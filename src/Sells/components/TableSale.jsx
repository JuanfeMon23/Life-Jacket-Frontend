import React,{useState, useEffect}  from 'react'
import {FaSearch} from 'react-icons/fa';
import {Input} from "@nextui-org/react";
import { useSells } from '../context/sellsContext';
import { WatchSale } from './WatchSale';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
import { StatusSale } from './StatusSale';

export  function TableSale() {
    const {sells} = useSells();
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
  
    const pages = Math.ceil(sells.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return sells.slice(start, end);
    }, [page, sells]);


    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const keys = [ 'saleDepartment', 'saleFinalPrice'];

    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    useEffect(() => {
      const search = sells.filter((purchase) => 
        keys.some((key) => purchase[key].toLowerCase().includes(query))
      );
      setSearchResults(search);
    },[query, sells]);
  return (
        <>
      <div className="w-[340px] h-[100px] px-5 m-5 rounded-2xl  justify-center items-centertext-white relative ">
        <Input
          onChange={handleChange}
          value={query}
          label={'Buscar compra'}
          isClearable
          radius="lg"
          classNames={{
            label: "text-black/50 dark:text-white/90",
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "shadow-xl",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focused=true]:bg-default-200/50",
              "dark:group-data-[focused=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder={''}
          startContent={
            <FaSearch className="text-black/50 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" /> 
          }
  />

    </div>
    <div className=' flex flex-wrap'>
        <Table color='primary' selectionMode="single"
                  bottomContent={
                    <div className="flex w-full justify-center">
                      <Pagination
                        isCompact
                        showControls
                        showShadow
                        color="primary"
                        page={page}
                        total={pages}
                        onChange={(page) => setPage(page)}
                      />
                    </div>
                  }
                  classNames={{
                    wrapper: "min-h-[222px]",
                  }}
        >
            <TableHeader>
                <TableColumn>Fecha de venta</TableColumn>
                <TableColumn>Precio de venta</TableColumn>
                <TableColumn>Placa del vehículo</TableColumn>
                <TableColumn>Nombre del cliente</TableColumn>
                <TableColumn>Detalle</TableColumn>
                <TableColumn>Estado</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Aun no hay registros."}>
                {searchResults.map((sale) => (
                    <TableRow key={sale.idSale}>
                        <TableCell>{sale.saleDate}</TableCell>
                        <TableCell>{sale.saleFinalPrice}</TableCell>
                        <TableCell>{sale.vehicle.licensePlate}</TableCell>
                        <TableCell>{sale.client.clientName}</TableCell>
                        <TableCell><WatchSale sale={sale}/></TableCell>
                        <TableCell><StatusSale sale={sale}/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
       </div>

       </>
  )
}

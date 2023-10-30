import React,{useState, useEffect} from 'react'
import {FaSearch} from 'react-icons/fa';
import {Input} from "@nextui-org/react";
import { WatchPurchase } from './WatchPurchase';
import { usePurchases } from '../context/purchaseContext';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
import { StatusPurchase } from './StatusPurchase';
import { DeletePurchase } from './DeletePurchase';



export  function TablePurchase() {
    const {purchases} = usePurchases();
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
  
    const pages = Math.ceil(purchases.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return purchases.slice(start, end);
    }, [page, purchases]);


    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const keys = [ 'purchaseDepartment', 'purchaseFinalPrice'];

    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    useEffect(() => {
      const search = purchases.filter((purchase) => 
        keys.some((key) => purchase[key].toLowerCase().includes(query))
      );
      setSearchResults(search);
    },[query, purchases]);

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
        <Table color='primary' selectionMode="single" isCompact
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
                <TableColumn>Fecha de compra</TableColumn>
                <TableColumn>Precio de compra</TableColumn>
                <TableColumn>Placa del vehículo</TableColumn>
                <TableColumn>Nombre del cliente</TableColumn>
                <TableColumn>Detalle</TableColumn>
                <TableColumn>Estado</TableColumn>
                <TableColumn>Eliminar</TableColumn>
            </TableHeader>
            <TableBody emptyContent={"Aun no hay registros."}>
                {searchResults.map((purchase) => (
                    <TableRow key={purchase.idPurchase}>
                        <TableCell>
                        {new Date(purchase.purchaseDate).toLocaleString("es-ES", {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                            hour: "2-digit",
                            minute: "2-digit"
                          })}
                          </TableCell>
                        <TableCell>
                          {typeof purchase.purchaseFinalPrice === "number" ? purchase.purchaseFinalPrice.toLocaleString("es-ES", { style: "currency", currency: "COP" }) : "No válido"}
                        </TableCell>
                        <TableCell>{purchase.vehicle.licensePlate}</TableCell>
                        <TableCell>{purchase.client.clientName}</TableCell>
                        <TableCell><WatchPurchase purchase={purchase}/></TableCell>
                        <TableCell><StatusPurchase purchase={purchase}/></TableCell>
                        <TableCell><DeletePurchase purchase={purchase}/></TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
       </div>

       </>
  )
}

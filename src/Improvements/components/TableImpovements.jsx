import React,{useState, useEffect}  from 'react'
import {FaSearch} from 'react-icons/fa';
import {Input} from "@nextui-org/react";
import {useImprovements} from '../context/improvementsContext';
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Pagination} from "@nextui-org/react";
import { StatusImprovement } from './StatusImprovement';

export  function TableImpovements() {
    const {improvements} = useImprovements();
    const [page, setPage] = React.useState(1);
    const rowsPerPage = 10;
  
    const pages = Math.ceil(improvements.length / rowsPerPage);
  
    const items = React.useMemo(() => {
      const start = (page - 1) * rowsPerPage;
      const end = start + rowsPerPage;
  
      return improvements.slice(start, end);
    }, [page, improvements]);


    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const keys = ['improvementDescription'];

    const handleChange = (e) => {
      setQuery(e.target.value);
    };

    useEffect(() => {
      const search = improvements.filter((purchase) => 
        keys.some((key) => purchase[key].toLowerCase().includes(query))
      );
      setSearchResults(search);
    },[query, improvements]);
  return (
    <>
    <div className="w-[340px] h-[100px] px-5 m-5 rounded-2xl  justify-center items-centertext-white relative ">
      <Input
        onChange={handleChange}
        value={query}
        label={'Buscar mejora'}
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
              <TableColumn>Placa del vehículo</TableColumn>
              <TableColumn>Descripción </TableColumn>
              <TableColumn>Fecha</TableColumn>
              <TableColumn>Precio</TableColumn>
              <TableColumn>Estado</TableColumn>
          </TableHeader>
          <TableBody emptyContent={"Aun no hay registros."}>
              {searchResults.map((improvement) => (
                  <TableRow key={improvement.idImprovements}>
                      <TableCell>{improvement.vehicle.licensePlate}</TableCell>
                      <TableCell>{improvement.improvementDescription}</TableCell>
                      <TableCell>{improvement.improvementDate}</TableCell>
                      <TableCell>{improvement.improvementPrice}</TableCell>
                      <TableCell><StatusImprovement improvement={improvement}/></TableCell>
                  </TableRow>
              ))}
          </TableBody>
      </Table>
     </div>

     </>
  )
}

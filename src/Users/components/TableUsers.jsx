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
import { UserRegister } from "../../Users/components/userRegister";
import {FaSearch} from 'react-icons/fa';
import {IoIosArrowDown} from 'react-icons/io';
import { useUsers } from "../Context/userContext";
import { WatchUser} from "./WatchUser";
import {EditUser} from "./EditUser";
import {StatusUser} from "./StatusUser";
import {DeleteUsers} from "./DeleteUsers";


  const statusOptions = [
    {name: "Activo" , uid: "true"},
    {name: "Inactivo", uid: "false"}
  ];    

  const columns = [
    {name: "Nombres", uid: "name", sortable: true},
    {name: "Apellidos", uid: "sortname", sortable: true},
    {name: "Rol", uid: "role", sortable: true},
    {name: "Email", uid: "email"},
    {name: "Estado", uid: "status", sortable: true},
    {name: "Acciones", uid: "actions"},
  ];


export  function TableUsers() {
    const {users} = useUsers();
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState(new Set([]));
    const [statusFilter, setStatusFilter] = React.useState("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);
  
    const filteredItems = React.useMemo(() => {
      let filteredUsers = [...users];
  
      if (hasSearchFilter) {
        filteredUsers = filteredUsers.filter((user) =>
          user.userName.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.userLastName.toLowerCase().includes(filterValue.toLowerCase()) ||
          user.Role.rolName.toLowerCase().includes(filterValue.toLowerCase()) 
        );
      }
  
      if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
        filteredUsers = filteredUsers.filter((user) => 
          Array.from(statusFilter).includes(user.userStatus) 
        );
      }
  
      return filteredUsers;
    }, [users, filterValue, statusFilter]);

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
                <Button startContent={<IoIosArrowDown/>} color="primary" variant="flat" >
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
            <UserRegister/>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">Total de usuarios: {users.length} </span>
          <label className="flex items-center text-default-400 text-small">
            Filas por pagina
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
    users.length,
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
          <Button isDisabled={pages === 1} size="sm"  color="primary" onPress={onPreviousPage}>
            Anterior
          </Button>
          <Button isDisabled={pages === 1} size="sm"  color="primary" onPress={onNextPage}>
            Siguiente
          </Button>
        </div>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);


  return (
    <div className=" w-[17rem] md:m-3 sm:w-[15rem] md:w-[55rem] lg:h-[40rem] lg:w-[100rem]">
        <Table
            aria-label="User Table"
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
      <TableBody emptyContent={"No hay usuarios"}>
            {filteredItems.map((item) => (
                <TableRow key={item.idUser}>
                    <TableCell>{item.userName}</TableCell>
                    <TableCell>{item.userLastName}</TableCell> 
                    <TableCell>{item.userLastName}</TableCell>
                    <TableCell>{item.Role.rolName}</TableCell>
                    <TableCell>{item.userStatus === "true" ?  <Chip color="success">Activo</Chip> : <Chip color="default">Inactivo</Chip>}</TableCell>
                    <TableCell className=" flex justify-normal">
                        <WatchUser user={item}/>
                        <EditUser user={item}/> 
                        <StatusUser  user={item} />
                        <DeleteUsers user={item} />
                    </TableCell>
                </TableRow>
            ))}
      </TableBody>
    </Table>
    </div>
  )
}

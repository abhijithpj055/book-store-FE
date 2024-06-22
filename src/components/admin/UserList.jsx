import axios from "axios";
import { useEffect, useState } from "react";
import { Table, Thead, Tbody, Tr, Th, TableContainer } from "@chakra-ui/react";

const UserList = () => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get(
        "https://book-store-be-71pw.onrender.com/api/v1/admin/get-users",
      );
      const insData = await res.data;
      setUsers(insData);
    };
    getUsers();
  }, []);

  return (
    <div className="m-3 border ">
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Email</Th>
              <Th>Remove</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((user, index) => (
                <>
                  <Tr key={index}>
                    <Th>{user.firstName}</Th>
                    <Th>{user.lastName}</Th>
                    <Th>{user.email}</Th>
                    <Th>
                      <button
                        onClick={async () => {
                          const res = await axios.delete(
                            `https://book-store-be-71pw.onrender.com/api/v1/instructor/delete-user/${user._id}`,
                          );
                          const data = await res.data;
                          console.log(data);
                          if (data === "removed sucessfully") {
                            window.location.reload();
                          }
                        }}
                        className="rounded-md bg-red-500 px-2 py-1 text-white"
                      >
                        Remove
                      </button>
                    </Th>
                  </Tr>
                </>
              ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
import React, { useMemo } from "react";
import { columns } from "../../data/dummy";
import "./Table.css";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
} from "@mui/material";
import { FiEdit, FiTrash } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllSolicitacoes,
  getSolicitacoes,
} from "../../slices/solicitacaoSlice";
import { useEffect } from "react";
import usePagination from "../../hooks/usePagination";
import useDeleteModal from "../../hooks/useDeleteModal";
import useEditModal from "../../hooks/useEditModal";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";

function TableComponent({ search, historic, filterOption }) {
  const dispatch = useDispatch();
  const { solicitacoes, loading } = useSelector((state) => state.solicitacao);
  const navigate = useNavigate();
  const userLocal = JSON.parse(localStorage.getItem("user"));
  //dynamic search
  const solicitacoesFiltered = useMemo(() => {
    if (search || filterOption) {
      const lowerSearch = search.toLowerCase();
      return Array.isArray(solicitacoes)
        ? solicitacoes.filter(
            (solicitacao) =>
              solicitacao.especificacao.toLowerCase().includes(lowerSearch) &&
              (filterOption === "All" || solicitacao.Status === filterOption)
          )
        : [];
    }
    return solicitacoes;
  }, [search, solicitacoes, filterOption]);

  useEffect(() => {
    if (historic) {
      dispatch(getAllSolicitacoes());
    } else {
      dispatch(getSolicitacoes());
    }
  }, [dispatch, historic]);
  //hook for pagination
  const {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginatedData,
  } = usePagination(solicitacoesFiltered && solicitacoesFiltered);
  //hook for modal delete
  const { openDeleteModal, DeleteModal } = useDeleteModal();
  const { openEditModal, EditModal } = useEditModal();

  return (
    <div className="shadow-2xl rounded-lg overflow-auto">
      {loading && solicitacoes ? (
        <div className="flex justify-center p-5">
          <CircularProgress />
        </div>
      ) : (
        <div>
          <div className="tabela">
            <TableContainer>
              <Table className="w-full">
                <TableHead>
                  <TableRow>
                    {columns.map((element, index) => (
                      <TableCell
                        key={index}
                        className="p-3 text-sm font-semibold tracking-wide text-left"
                      >
                        {element.headerName}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {((rowsPerPage > 0) & Array.isArray(solicitacoes)
                    ? paginatedData
                    : solicitacoesFiltered
                  ).map((solicitacao, index) => (
                    <TableRow
                      key={index}
                      className="bg-white"
                      onClick={() => navigate(`/solicitacao/${solicitacao.id}`)}
                    >
                      <TableCell className="p-3 text-sm  font-bold whitespace-nowrap">
                        {solicitacao.especificacao}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {solicitacao.componente}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {solicitacao.dn_01}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {solicitacao.dn_02}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {solicitacao.dn_03}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        {solicitacao.criadoEm}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700 whitespace-nowrap">
                        <span
                          className={`p-1.5 font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${solicitacao.Status} bg-blue-500 text-blue-600`}
                        >
                          {solicitacao.Status}
                        </span>
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700">
                        {solicitacao.pj}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700">
                        {solicitacao.Software}
                      </TableCell>
                      <TableCell className="p-3 text-sm text-gray-700">
                        {solicitacao.Solicitante}
                      </TableCell>
                      {userLocal && userLocal.type === "Admin" ? (
                        <>
                          <TableCell
                            className="px-3 py-4 text-right"
                            onClick={(e) => {
                              e.stopPropagation();
                              openEditModal(solicitacao);
                            }}
                          >
                            <a className="font-medium text-orange-600 dark:text-orange-500 hover:underline">
                              <FiEdit />
                            </a>
                          </TableCell>
                          <TableCell
                            className="px-3 py-4 text-right"
                            onClick={(e) => {
                              e.stopPropagation();
                              openDeleteModal(solicitacao);
                            }}
                          >
                            <a className="font-medium text-orange-600 dark:text-orange-500 hover:underline">
                              <FiTrash />
                            </a>
                          </TableCell>
                        </>
                      ) : (
                        <></>
                      )}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, { label: "All", value: -1 }]}
              colSpan={3}
              rowsPerPage={rowsPerPage}
              page={page}
              count={solicitacoes.length}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>

          <DeleteModal />
          <EditModal />
        </div>
      )}
    </div>
  );
}

export default TableComponent;

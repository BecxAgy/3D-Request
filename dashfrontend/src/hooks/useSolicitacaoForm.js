import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postSolicitacao } from '../slices/solicitacaoSlice';

const useSolicitacaoForm = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    solicitanteId: '',
    executorId: '',
    projetoId: '',
    softwareId:'',
    statusId: '',
    componente: '',
    especificacao: '',
    dn_01: '',
    dn_02: '',
    dn_03: '',
    observacao: '',
    pendencia: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitSolicitacao = () => {
    dispatch(postSolicitacao(formData));
    setFormData({
        solicitanteId: '',
        executorId: '',
        projetoId: '',
        softwareId:'',
        statusId: '',
        componente: '',
        especificacao: '',
        dn_01: '',
        dn_02: '',
        dn_03: '',
        observacao: '',
        pendencia: '',
    });
  };

  return {
    formData,
    handleInputChange,
    submitSolicitacao,
  };
};

export default useSolicitacaoForm;

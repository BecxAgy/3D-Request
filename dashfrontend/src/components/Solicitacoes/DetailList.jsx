
import { FiCheck, FiClipboard, FiEdit } from 'react-icons/fi'


export default function DetailList({solicitacao}) {
  return (
    <div>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Detalhes da Solicitação</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">...</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">SPEC</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{solicitacao.especificacao && solicitacao.especificacao}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Componente</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{solicitacao.componente && solicitacao.componente}</dd>
          </div>
          <div className="grid grid-cols-3 px-1 justify-items-stretch">
            <div className="px-4 py-6 sm:grid sm:grid-rows-2 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Status</dt>
                <span className="bg-orange-100 w-1/2 p-2 text-orange-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-orange-900 dark:text-orange-300">{solicitacao.statusSolicitacao && solicitacao.statusSolicitacao.descricao}</span>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-rows-2 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">Software</dt>
                <dd className="mt-1 text-sm leading-6 font-bold text-orange-700 sm:col-span-2 sm:mt-0">{solicitacao.softwareSolicitacao && solicitacao.softwareSolicitacao.nome}</dd>
            </div>

            
            
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Criado em</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{solicitacao.createdAt && solicitacao.createdAt}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Pendência</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{solicitacao.pendencia && solicitacao.pendencia}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Observação</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {solicitacao.observacao && solicitacao.observacao}</dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Edições e Aprovações</dt>
            <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <FiEdit className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Editado por:</span>
                      <span className="flex-shrink-0 text-gray-400">{solicitacao.executor && solicitacao.executor.name}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {solicitacao.updatedAt && solicitacao.updatedAt}
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <FiCheck className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">Aprovado por:</span>
                      <span className="flex-shrink-0 text-gray-400">{solicitacao.executor && solicitacao.executor.name}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    {solicitacao.updatedAt && solicitacao.updatedAt}

                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  )
}

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useFilterStore } from "../stores/filterStore";

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const Search = ({ isOpen, setIsOpen }: Props) => {
  const cancelButtonRef = useRef(null);
  const { setProductName, productName } = useFilterStore();

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-30 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              onClick={() => {
                setIsOpen(false);
              }}
              className="fixed inset-0 transition-opacity"
            ></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-black lg:max-w-5xl sm:my-8 sm:align-middle sm:max-w-2xl sm:w-full"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="flex flex-col gap-10 px-4 pt-5 pb-4 bg-header sm:p-6 sm:pb-4 dark:bg-black dark:text-white">
                {/* Filtro de nome do produto */}
                <div className="flex flex-col">
                  <label htmlFor="productName" className="">
                    Nome do Produto:
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={productName}
                    placeholder="Digite o nome do produto"
                    onChange={(e) => setProductName(e.target.value)}
                    className="p-2 border-2 rounded-md dark:bg-headerDark dark:text-white"
                  />
                </div>
                {/* Slider de preço */}
                {/* Botão de aplicar filtro */}
                <div className="space-y-4 lg:grid justify-items-end">
                  <div className="grid grid-cols-1 lg:w-36 content-evenly">
                    <button
                      className="p-2 px-4 py-2 transition-all delay-75 border rounded-md App-link"
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      Aplicar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

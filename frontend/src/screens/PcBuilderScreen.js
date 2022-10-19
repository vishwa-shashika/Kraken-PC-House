import React, { useEffect, useState } from "react";
import Modal from "react-modal";
//import ItemList from "../components/ItemList";
import itemData from "../data/item_data/itemData";
import gameData from "../data/item_data/gameData";

// import { GiComputerFan } from "react-icons/ai";

import "../index.css";

Modal.setAppElement("#root");

const PcBuilderScreen = () => {
  const [cpu, setCPU] = useState({});
  const [mb, setMB] = useState({});
  const [gpu, setGPU] = useState({});
  const [ram, setRAM] = useState({});
  const [hdd, setHDD] = useState({});
  const [ssd, setSSD] = useState({});
  const [psu, setPSU] = useState({});
  const [pcCase, setPcCASE] = useState({});
  const [cooler, setCooler] = useState({});

  const [filteredCategoryItems, setFilteredCategoryItems] = useState([]);
  const [modalIsOpen, setModalOpen] = useState(false);

  const [filteredGames, setFilteredGames] = useState([]);

  //UNCOMMENT THIS BEFOR PIBLISHING

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  //   //console.log(itemData.products);
  // }, []);

  // This useEffect is Only to check if the states got updated
  useEffect(() => {
    // console.log(psu);
    // console.log(cpu);
    console.log(gpu);
    //console.log(filteredCategoryItems);
  }, [filteredCategoryItems, gpu]);

  const modalTrigger = (modalState, category) => {
    setModalOpen(modalState);

    if (category === "processors") {
      const flt = itemData.products.filter(
        (itm) => itm.category === "processors"
      );

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "motherboards") {
      const flt = itemData.products
        .filter((itm) => itm.category === "motherboards")
        .filter((itm) => itm.supportedBrand === cpu.cpuBrand)
        .filter((itm) => itm.compatibleCPUGens.includes(cpu.cpuGen))
        .filter((itm) => itm.socketType === cpu.cpuSocket);

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "graphic_cards") {
      const flt = itemData.products
        .filter((itm) => itm.category === "graphic_cards")
        .filter((itm) => itm.compatiblePCIEGens.includes(mb.pcieVersion));

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "rams") {
      const flt = itemData.products
        .filter((itm) => itm.category === "rams")
        .filter((itm) => mb.compatibleDDRVersions.includes(itm.ddrVersion))
        .filter((itm) => mb.memorySlots >= itm.memSticks)
        .filter((itm) => mb.maxMemory >= itm.memCapacity);

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "hdd") {
      const flt = itemData.products
        .filter((itm) => itm.category === "hdd")
        .filter((itm) =>
          mb.compatibleStorageInterfaces.includes(itm.hddInterface)
        );

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "ssd") {
      const flt = itemData.products
        .filter((itm) => itm.category === "ssd")
        .filter((itm) =>
          mb.compatibleStorageInterfaces.includes(itm.ssdInterface)
        );

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "casing") {
      const flt = itemData.products
        .filter((itm) => itm.category === "casing")
        .filter((itm) => itm.compatibleMBSizes.includes(mb.mbSize));

      if (!gpu.isIGPU) {
        const fltNew = flt.filter((itm) =>
          gpu.compatibleCaseSizes.includes(itm.caseSize)
        );
        setFilteredCategoryItems(fltNew);
        return;
      }

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "coolers") {
      const flt = itemData.products
        .filter((itm) => itm.category === "coolers")
        .filter((itm) => itm.compatibleCaseSizes.includes(pcCase.caseSize))
        .filter((itm) => itm.compatibleSockets.includes(mb.socketType));

      setFilteredCategoryItems(flt);
      return;
    } else if (category === "psu") {
      const flt = itemData.products
        .filter((itm) => itm.category === "psu")
        .filter(
          (itm) =>
            itm.tdp >=
            cpu.cpuTDP +
              mb.mbTDP +
              gpu.gpuTDP +
              ram.ramTDP +
              (hdd.hddTDP ? hdd.hddTDP : 0) +
              (ssd.ssdTDP ? ssd.ssdTDP : 0) +
              pcCase.caseTDP +
              (cooler.coolerTDP ? cooler.coolerTDP : 0)
        );
      setFilteredCategoryItems(flt);
      console.log(
        cpu.cpuTDP +
          mb.mbTDP +
          gpu.gpuTDP +
          ram.ramTDP +
          (hdd.hddTDP ? hdd.hddTDP : 0) +
          (ssd.ssdTDP ? ssd.ssdTDP : 0) +
          pcCase.caseTDP +
          (cooler.coolerTDP ? cooler.coolerTDP : 0)
      );
      return;
    }

    return "";
  };

  const setItemState = (itm) => {
    if (itm.category === "processors") {
      console.log("CPU State Update function Ran");
      setCPU(itm);
      if (itm.hasIGPU) {
        setGPU(itm.iGPU);
        console.log("Setting iGPU");
      } else {
        setGPU({});
      }
      setMB({});
      setRAM({});
      setHDD({});
      setSSD({});
      setPcCASE({});
      setCooler({});
      setPSU({});
    } else if (itm.category === "motherboards") {
      console.log("Motherboard State Update function Ran");
      setMB(itm);
      if (!cpu.hasIGPU) {
        setGPU({});
      }
      setRAM({});
      setHDD({});
      setSSD({});
      setPcCASE({});
      setCooler({});
      setPSU({});
    } else if (itm.category === "graphic_cards") {
      console.log("GPU State Update function Ran");
      setGPU(itm);
      setPcCASE({});
      setCooler({});
      setPSU({});
    } else if (itm.category === "rams") {
      console.log("RAM State Update function Ran");
      setRAM(itm);
      setPSU({});
    } else if (itm.category === "hdd") {
      console.log("HDD State Update function Ran");
      setHDD(itm);
      setPSU({});
    } else if (itm.category === "ssd") {
      console.log("SSD State Update function Ran");
      setSSD(itm);
      setPSU({});
    } else if (itm.category === "casing") {
      console.log("Case State Update function Ran");
      setPcCASE(itm);
      setCooler({});
      setPSU({});
    } else if (itm.category === "coolers") {
      console.log("Case State Update function Ran");
      setCooler(itm);
      setPSU({});
    } else if (itm.category === "psu") {
      console.log("PSU State Update function Ran");
      setPSU(itm);
    }
  };

  const clearAll = () => {
    setCPU({});
    setMB({});
    setGPU({});
    setRAM({});
    setHDD({});
    setSSD({});
    setPSU({});
    setPcCASE({});
  };

  //Game Filter=========================================================================================================

  const allItemsCheck = () => {
    if (
      Object.keys(cpu).length &&
      Object.keys(gpu).length &&
      Object.keys(mb).length &&
      Object.keys(ram).length &&
      (Object.keys(hdd).length || Object.keys(ssd).length) &&
      Object.keys(pcCase).length &&
      Object.keys(psu).length
    ) {
      return true;
    }
  };

  const playableCheck = (game) => {
    return (
      cpu.passmarkScore >= game.minCPUScore &&
      (gpu.passmarkScore ? gpu.passmarkScore : cpu.iGPU.passmarkScore) >=
        game.minGPUScore &&
      gpu.gpuMemory >= game.minGPUMem &&
      ram.memCapacity >= game.minRAM &&
      ((hdd.hddCapacity ? hdd.hddCapacity : 0) >= game.minHDD ||
        (ssd.ssdCapacity ? ssd.ssdCapacity : 0) >= game.minHDD)
    );
  };

  // Game Performnace Bars Percentage Calculating Function=================================================================

  const calcPercentage = (currentScore, minScore, recScore) => {
    if (currentScore >= minScore && currentScore < recScore) {
      const pcst = Math.ceil(
        (((currentScore - minScore) / (recScore - minScore)) * 100) / 4 + 50
      );
      console.log(pcst);
      return `${pcst}%`;
    } else if (currentScore < minScore) {
      const pcst = Math.ceil(((currentScore / minScore) * 100) / 2);
      console.log(pcst);
      return `${pcst}%`;
    } else if (currentScore >= recScore) {
      console.log(80);
      return "85%";
    }
  };

  return (
    <div className="px-8 py-12 bg-zinc-800 text-zinc-200 custom-home-bg w-full">
      <div className="text-center text-4xl font-medium mb-12">
        KRAKEN PC BUILDER V 1.0 BETA
      </div>

      <div className="grid grid-cols-4 grid-rows-3 justify-items-center gap-8 bg-zinc-900/[.9] p-8 ">
        {/*=============================================CPU CARD (Not Need to Check)=================================*/}

        {Object.keys(cpu).length ? (
          <div
            onClick={() => modalTrigger(true, "processors")}
            className="bg-slate-300  h-64 w-full py-2 px-2 rounded border border-emerald-700 text-zinc-800 flex flex-col items-center justify-center text-2xl text-center font-medium hover:scale-105 hover:bg-slate-200 ease-in-out duration-200 cursor-pointer"
          >
            <div className="flex justify-center items-center h-2/3 w-1/2">
              <img
                className="w-full h-full object-contain"
                src={cpu.image}
                alt=""
              ></img>
            </div>
            <div className="flex flex-col justify-center items-center h-1/3 w-full">
              <div className="w-full mb-3  border-b border-zinc-400"></div>
              {cpu.name || "CPU"}
            </div>
          </div>
        ) : (
          <div
            onClick={() => modalTrigger(true, "processors")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            + <br />
            CPU
          </div>
        )}

        {/*=============================================MOTHERBOARD CARD==============================================*/}

        {Object.keys(cpu).length ? (
          <div
            onClick={() => modalTrigger(true, "motherboards")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105  ease-in-out duration-200 cursor-pointer"
          >
            {mb.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={mb.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {mb.name || "CPU"}
                </div>{" "}
              </div>
            ) : (
              "MOTHERBOARD"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            MOTHERBOARD
          </div>
        )}

        {/*=============================================GPU CARD==============================================*/}

        {Object.keys(cpu).length && Object.keys(mb).length ? (
          <div
            onClick={() => modalTrigger(true, "graphic_cards")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105  ease-in-out duration-200 cursor-pointer"
          >
            {gpu.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={gpu.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {gpu.name || "GPU"}
                </div>{" "}
              </div>
            ) : (
              "GPU"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            {gpu.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={gpu.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {gpu.name || "GPU"}
                </div>{" "}
              </div>
            ) : (
              "GPU"
            )}
          </div>
        )}

        {/*============================================RAM CARD==============================================*/}

        {Object.keys(cpu).length &&
        Object.keys(mb).length &&
        Object.keys(gpu).length ? (
          <div
            onClick={() => modalTrigger(true, "rams")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            {ram.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={ram.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {ram.name || "RAM"}
                </div>{" "}
              </div>
            ) : (
              "RAM"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            RAM
          </div>
        )}

        {/*=============================================HDD CARD==============================================*/}

        {Object.keys(cpu).length &&
        Object.keys(mb).length &&
        Object.keys(gpu).length &&
        Object.keys(ram).length ? (
          <div
            onClick={() => modalTrigger(true, "hdd")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            {hdd.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={hdd.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {hdd.name || "HDD"}
                </div>{" "}
              </div>
            ) : (
              "HDD"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            HDD(Optional)
          </div>
        )}

        {/*=============================================SSD CARD==============================================*/}

        {Object.keys(cpu).length &&
        Object.keys(mb).length &&
        Object.keys(gpu).length &&
        Object.keys(ram).length ? (
          <div
            onClick={() => modalTrigger(true, "ssd")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            {ssd.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={ssd.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {ssd.name || "SSD"}
                </div>{" "}
              </div>
            ) : (
              "SSD"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            SSD(Optional)
          </div>
        )}

        {/*=============================================CASE CARD==============================================*/}

        {Object.keys(cpu).length &&
        Object.keys(mb).length &&
        Object.keys(gpu).length &&
        Object.keys(ram).length &&
        (Object.keys(hdd).length || Object.keys(ssd).length) ? (
          <div
            onClick={() => modalTrigger(true, "casing")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            {pcCase.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={pcCase.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {pcCase.name || "CASE"}
                </div>{" "}
              </div>
            ) : (
              "CASE"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            CASE
          </div>
        )}

        {/*=============================================COOLER CARD==============================================*/}

        {Object.keys(cpu).length && Object.keys(pcCase).length ? (
          <div
            onClick={() => modalTrigger(true, "coolers")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            {cooler.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={cooler.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {cooler.name || "COOLER"}
                </div>{" "}
              </div>
            ) : (
              "COOLER"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            COOLER(Optional)
          </div>
        )}

        {/*=============================================PSU CARD==============================================*/}

        {Object.keys(cpu).length &&
        Object.keys(mb).length &&
        Object.keys(gpu).length &&
        Object.keys(ram).length &&
        Object.keys(pcCase).length &&
        (Object.keys(hdd).length || Object.keys(ssd).length) ? (
          <div
            onClick={() => modalTrigger(true, "psu")}
            className="bg-zinc-800  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium hover:scale-105 ease-in-out duration-200 cursor-pointer"
          >
            {psu.name ? (
              <div className="bg-slate-300  flex flex-col items-center justify-center w-full h-full px-2 py-2 text-zinc-800 transition ease-in-out duration-200 hover:bg-slate-200">
                <div className="flex justify-center items-center h-2/3 w-1/2">
                  <img
                    className="w-full h-full object-contain"
                    src={psu.image}
                    alt=""
                  ></img>
                </div>
                <div className="flex flex-col justify-center items-center h-1/3 w-full">
                  <div className="w-full mb-3  border-b border-zinc-400"></div>
                  {psu.name || "PSU"}
                </div>{" "}
              </div>
            ) : (
              "PSU"
            )}
          </div>
        ) : (
          <div className="bg-zinc-600  h-64 w-full rounded border border-emerald-700 text-zinc-200 flex items-center justify-center text-2xl text-center font-medium">
            + <br />
            PSU
          </div>
        )}

        <div></div>
        <div></div>
        <div></div>

        {/*========================================CLEAR ALL BUTTON========================================*/}

        <div
          onClick={() => clearAll()}
          className="py-4 w-full bg-gradient-to-r from-gray-400 to-slate-400 text-zinc-200 text-xl flex items-center justify-center hover:bg-gradient-to-r hover:cursor-pointer hover:from-slate-400 hover:to-gray-400 transition hover:scale-[104%] ease-in-out duration-200"
        >
          Clear ALL
        </div>

        <div className="py-4 w-full bg-gradient-to-r from-green-600 to-emerald-600 text-zinc-200 text-xl flex items-center justify-center hover:bg-gradient-to-r hover:cursor-pointer hover:from-emerald-600 hover:to-green-600 transition hover:scale-[104%] ease-in-out duration-200">
          Build This PC
        </div>
        <div className="py-4 w-full  text-zinc-200 text-2xl font-medium flex items-center justify-end rounded cursor-pointer">
          Total (LKR) :
        </div>

        <div className="py-4 w-full bg-zinc-800  text-zinc-200 text-2xl font-medium flex items-center justify-center rounded cursor-pointer">
          {(cpu.price ? cpu.price : 0) +
            (mb.price ? mb.price : 0) +
            (gpu.price ? gpu.price : 0) +
            (ram.price ? ram.price : 0) +
            (hdd.price ? hdd.price : 0) +
            (ssd.price ? ssd.price : 0) +
            (pcCase.price ? pcCase.price : 0) +
            (psu.price ? psu.price : 0)}
          .00
        </div>
      </div>

      {/*==========================================================================================================================================================*/}
      {/*===================================================================PC BUILDER CARDS END===================================================================*/}
      {/*==========================================================================================================================================================*/}

      {/*=============================================MODAL==============================================*/}
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {},
          content: {
            padding: 0,
            background: "rgb(38 38 38)",
            scrollbarWidth: "none",
          },
        }}
      >
        <button
          className="absolute right-0 top-0 text-zinc-200 bg-rose-700 rounded-bl-sm py-1 px-6 hover:scale-105 hover:bg-rose-600 ease-in-out duration-100 cursor-pointer"
          onClick={() => setModalOpen(false)}
        >
          X
        </button>

        <div className="flex justify-center text-zinc-100 text-2xl pt-4 font-semibold">
          SELECT COMPONNETS
        </div>
        <div className="border-b border-zinc-700 mt-3 mx-4"></div>

        <div className="flex flex-wrap justify-start items-start gap-x-[2%] gap-y-[1.5vw] py-6 px-6  w-full">
          {filteredCategoryItems.map((itm) => {
            return (
              <div
                key={itm.slug}
                onClick={() => {
                  setItemState(itm);
                  setModalOpen(false);
                }}
                className="flex h-fit w-[32%] bg-slate-300 cursor-pointer rounded p-2 hover:scale-[1.02] hover:bg-slate-200 ease-in-out duration-200"
              >
                <div className="flex justify-center items-center w-1/3">
                  <img
                    className="w-full h-full object-contain"
                    src={itm.image}
                    alt=""
                  ></img>
                </div>
                <div className="w-2/3 pl-4 flex flex-col gap-0.5">
                  <div className="text-xl font-bold mb-0.5">{itm.name}</div>
                  <div className="border-b border-zinc-400 mb-1"></div>
                  <div className="text-sm flex">
                    <div className="w-1/2">{itm.feature1[0]}</div>
                    <div className="w-1/2">: {itm.feature1[1]}</div>
                  </div>
                  <div className="text-sm flex">
                    <div className="w-1/2">{itm.feature2[0]}</div>
                    <div>: {itm.feature2[1]}</div>
                  </div>
                  <div className="text-sm flex">
                    <div className="w-1/2">{itm.feature3[0]}</div>
                    <div>: {itm.feature3[1]}</div>
                  </div>
                  <div className="text-sm flex">
                    <div className="w-1/2">{itm.feature4[0]}</div>
                    <div>: {itm.feature4[1]}</div>
                  </div>

                  <div className="text-lg font-medium mt-1">
                    Rs. {itm.price}.00
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
      {/*=============================================MODAL END==============================================*/}
      <div className="flex mt-16 text-4xl font-medium justify-center items-center">
        PERFORMANCE ANALYZER
      </div>
      <div className="border-b border-zinc-600 mt-8 mb-8"></div>

      {/*=============================================PC Game Performancce Card 1=============================================*/}

      <div className="flex mt-2 flex-wrap gap-[2%] w-full justify-start text-slate-800">
        {allItemsCheck() &&
          gameData.games.map((game) => {
            return (
              <div className={`w-[49%] h-72 flex rounded mt-[2%] bg-slate-300`}>
                <div className="w-1/3">
                  <img
                    className="w-full h-full object-cover rounded-l"
                    src={game.image}
                    alt=""
                  ></img>
                </div>
                <div className="py-2 px-2 w-2/3 h-full flex flex-col">
                  <div className="text-xl font-medium text-center">
                    {`${game.name} ${game.year}`}
                  </div>
                  <div className="border-b mt-2 border-slate-400"></div>
                  <div className="w-full h-full mt-2 relative">
                    <div className="absolute top-[10%] left-[50%] border-l h-[90%] border-slate-500/25">
                      <div className="pl-1">Min</div>
                    </div>
                    <div className="absolute top-[10%] left-[75%] h-[90%] border-l border-slate-500/25">
                      <div className="pl-1">Rec</div>
                    </div>

                    <div className="flex flex-col h-full justify-between">
                      <div className="font-medium">PC Performance</div>
                      <div>
                        <div className="text-sm">Processor</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 ">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                              width: calcPercentage(
                                cpu.passmarkScore,
                                game.minCPUScore,
                                game.recCPUScore
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm">Graphic Card</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                              width: calcPercentage(
                                gpu.passmarkScore,
                                game.minGPUScore,
                                game.recGPUScore
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm">Ram</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                              width: calcPercentage(
                                ram.memCapacity,
                                game.minRAM,
                                game.recRAM
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="text-sm">Disk Space</div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                          <div
                            className="bg-blue-600 h-2.5 rounded-full"
                            style={{
                              width: calcPercentage(
                                (hdd.hddCapacity ? hdd.hddCapacity : 0) >=
                                  (ssd.ssdCapacity ? ssd.ssdCapacity : 0)
                                  ? hdd.hddCapacity
                                  : ssd.ssdCapacity,
                                game.minHDD,
                                game.recHDD
                              ),
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`py-2 text-lg font-semibold text-center mt-4 mb-1 rounded bg-slate-400`}
                  >
                    {playableCheck(game)
                      ? "Met Requiremnt ✔"
                      : "Not Met Requiremnt ❌"}
                  </div>
                </div>
              </div>
            );
          })}

        {/*=============================================PC Game Performancce Card 2=============================================*/}

        {/* <div className="w-[49%] h-72 flex bg-slate-300 rounded">
          <div className="w-1/3">
            <img
              className="w-full h-full object-cover rounded-l"
              src="https://i.ibb.co/Xj0vnFD/ce190b88698867-5dde36d987d00.jpg"
              alt=""
            ></img>
          </div>
          <div className="py-2 px-2 w-2/3 h-full flex flex-col">
            <div className="text-xl font-medium text-center">
              Nightmares II 2021
            </div>
            <div className="border-b mt-2 border-slate-400"></div>
            <div className="w-full h-full mt-2 relative">
              <div className="absolute top-[10%] left-[50%] border-l h-[90%] border-slate-500/25">
                <div className="pl-1">Min</div>
              </div>
              <div className="absolute top-[10%] left-[75%] h-[90%] border-l border-slate-500/25">
                <div className="pl-1">Rec</div>
              </div>

              <div className="flex flex-col h-full justify-between">
                <div className="font-medium">PC Performance</div>
                <div>
                  <div className="text-sm">Processor</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm">Graphic Card</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "61%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm">Ram</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "41%" }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm">Disk Space</div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 h-2.5 rounded-full"
                      style={{ width: "71%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-2 text-lg font-semibold text-center bg-slate-400 mt-4 mb-1 rounded">
              Playable ✔
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default PcBuilderScreen;

// Orginal Code for the UI =====================================================================

// import React, { useEffect } from "react";

// const PcBuilderScreen = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="px-8 py-12 bg-zinc-800 text-zinc-200">
//       <div className="text-center text-4xl font-medium mb-12">
//         PC BUILDER V 0.1
//       </div>
//       <div className="grid grid-cols-4 grid-rows-2 justify-items-center gap-8 bg-zinc-700 shadow shadow-emerald-400/50 p-8 rounded">
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           CPU
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           GPU
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           MOTHERBOARD
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           RAM
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           HDD(Optional)
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           SSD(Optional)
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           PSU
//         </div>
//         <div className="h-64 w-full bg-zinc-800 rounded border border-emerald-700 text-zinc-200 hover:scale-105 ease-in-out duration-200 flex items-center justify-center text-2xl text-center font-medium">
//           + <br />
//           CASE
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PcBuilderScreen;

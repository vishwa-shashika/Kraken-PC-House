const data = {
  products: [
    //========================================================= Processors ===============================================================================================
    {
      name: "Intel Core I5 9400F",
      price: 36500.0,
      brand: "Intel",
      category: "processors",
      warrenty: "3 Years",
      description: "4 Cores, 8 Threads. 2.4GHz to 4.2Ghz ",
      slug: "intel-core-i5-9400f",
      image: "https://i.ibb.co/z8q5cws/2059-20211119104002-12700.png",

      feature1: ["Cores", "4 Cores"],
      feature2: ["Threads", "8 Threads"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Boost Clock", "4.2GHz"],

      //PC Builder Specific Data
      cpuBrand: "intel",
      cpuTDP: 85,
      cpuGen: 9,
      cpuSocket: "LGA1155",
      passmarkScore: 11956,
      isUnlocked: false,
      hasIGPU: false,
      iGPU: {},
    },

    {
      name: "Intel Core I7 12700",
      price: 56500.0,
      brand: "Intel",
      category: "processors",
      warrenty: "3 Years",
      description: "8 Cores, 8 Threads. 2.8GHz to 4.6Ghz ",
      slug: "intel-core-i7-9700f",
      image: "https://i.ibb.co/z8q5cws/2059-20211119104002-12700.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      cpuBrand: "intel",
      cpuTDP: 120,
      cpuGen: 12,
      cpuSocket: "LGA1200",
      passmarkScore: 11956,
      isUnlocked: false,
      hasIGPU: true,
      iGPU: {
        name: "Intel UHD 750",
        price: 0.0, // Hard Coded
        gpuMemory: 2,
        compatiblePCIEGens: [1, 2, 3, 4], //hard coded
        passmarkScore: 1458,
        gpuTDP: 10,
        isIGPU: true,
        image: "https://i.ibb.co/z62GDR0/image-removebg-preview-27.png",
      },
    },

    //========================================================= Graphic Cards ============================================================================================

    {
      name: "Nvidia GTX 3060Ti",
      price: 156500.0,
      brand: "Nvidia",
      category: "graphic_cards",
      warrenty: "3 Years",
      description: "2684 Cuda Cores. RTX & DLSS Support",
      slug: "nvidia-gtx-3060ti",
      image: "https://i.ibb.co/NK2Kdx3/1368-20211214143005-10.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      isIGPU: false,
      gpuMemory: 12,
      compatiblePCIEGens: [1, 2, 3, 4],
      compatibleCaseSizes: ["atx", "mirco-atx", "mini-atx"],
      passmarkScore: 8658,
      gpuTDP: 175,
    },

    {
      name: "Nvidia GTX 3080Ti",
      price: 456500.0,
      brand: "Nvidia",
      category: "graphic_cards",
      warrenty: "3 Years",
      description: "6684 Cuda Cores. RTX & DLSS Support",
      slug: "nvidia-gtx-3080ti",
      image:
        "https://i.ibb.co/ygxTV10/1692-20220111102315-product-162251863439fae359288e142419893b494a6bbece.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      isIGPU: false,
      gpuMemory: 24,
      compatiblePCIEGens: [1, 2, 3, 4],
      compatibleCaseSizes: ["atx", "mirco-atx", "mini-atx"],
      passmarkScore: 12458,
      gpuTDP: 375,
    },

    //========================================================= Mother Boards ============================================================================================

    {
      name: "Gigabyte HM-610",
      price: 22500.0,
      brand: "Gigabyte",
      category: "motherboards",
      warrenty: "3 Years",
      description: "Dual Channel Memory, NVNME, SATA, 6x USB",
      slug: "gigabyte-hm-610",
      image: "https://i.ibb.co/VNsqJBF/2177-20220217122217-w692-2.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      supportedBrand: "intel",
      mbSize: "mini-atx",
      compatibleCPUGens: [9, 10],
      socketType: "LGA1155",
      pcieVersion: 4,
      compatibleDDRVersions: [4],
      mbTDP: 60,
      memorySlots: 2,
      maxMemory: 64,
      IsOverclockable: false,
      compatibleStorageInterfaces: ["m.2", "sata"],
    },

    {
      name: "MSI Z780 GODLIKE",
      price: 22500.0,
      brand: "MSI",
      category: "motherboards",
      warrenty: "3 Years",
      description: "Quad Channel Memory, NVNME, SATA, 12x USB",
      slug: "msi-z410-godlike",
      image:
        "https://i.ibb.co/5RGymjm/2089-20211228142409-ROG-MAXIMUS-XIII-EXTREME-GLACIAL-with-Box.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      supportedBrand: "intel",
      mbSize: "atx",
      compatibleCPUGens: [11, 12],
      socketType: "LGA1200",
      pcieVersion: 4,
      compatibleDDRVersions: [4, 5],
      mbTDP: 80,
      memorySlots: 4,
      maxMemory: 128,
      IsOverclockable: true,
      compatibleStorageInterfaces: ["m.2", "sata"],
    },
    {
      name: "ASUS ROG MAXIMUS Z690",
      price: 299000.0,
      brand: "ASUS",
      category: "motherboards",
      warrenty: "3 Years",
      description: "Quad Channel Memory, NVNME, SATA, 12x USB",
      slug: "msi-z410-godlike",
      image: "https://i.ibb.co/TbkJt29/2070-20211202161114-max.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      supportedBrand: "intel",
      mbSize: "atx",
      compatibleCPUGens: [11, 12],
      socketType: "LGA1200",
      pcieVersion: 4,
      compatibleDDRVersions: [4, 5],
      mbTDP: 80,
      memorySlots: 4,
      maxMemory: 128,
      IsOverclockable: true,
      compatibleStorageInterfaces: ["m.2", "sata"],
    },

    //========================================================= RAMS =====================================================================================================

    {
      name: "Corsair 16GB 2666MHz (8x2)",
      price: 19500.0,
      brand: "Corsair",
      category: "rams",
      warrenty: "3 Years",
      description: "Dual Channel Memory",
      slug: "corsair-16gb-2x8-2999mhz",
      image:
        "https://i.ibb.co/VxFmjh8/2160-20220211132844-CMT32-GX5-M2-B5200-C38-W-Gallery-DOMINATOR-RGB-PLATINUM-WHT-DDR5-01-png-1200-Wx1.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      ddrVersion: 4,
      memSticks: 2,
      memCapacity: 16,
      memSpeed: 2666,
      ramTDP: 5,
    },

    {
      name: "Transcend 8GB 1600MHz",
      price: 9500.0,
      brand: "Transcend",
      category: "rams",
      warrenty: "3 Years",
      description: "Dual Channel Memory",
      slug: "transcend-8gb-1600mhz",
      image: "https://i.ibb.co/hXv7fSj/1733-20210123083114-Untitled-2-1.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      ddrVersion: 3,
      memSticks: 1,
      memCapacity: 8,
      memSpeed: 1600,
      ramTDP: 5,
    },

    {
      name: "Kingston 64GB 3200MHz (16x4)",
      price: 19500.0,
      brand: "Kingston",
      category: "rams",
      warrenty: "3 Years",
      description: "Dual Channel Memory",
      slug: "kingston-64gb-4x16-3200mhz",
      image: "https://i.ibb.co/vLLJgzg/1630-20220104082737-ddr5.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      ddrVersion: 4,
      memSticks: 4,
      memCapacity: 64,
      memSpeed: 3200,
      ramTDP: 10,
    },

    //========================================================= HDD =======================================================================================================

    {
      name: "WD Green 1TB",
      price: 32500.0,
      brand: "WD",
      category: "hdd",
      warrenty: "2 Years",
      description: "7200RPM SATA3 Hard Drive. 1TB",
      slug: "wd-green-1tb",
      image: "https://i.ibb.co/nz1z2NV/237-20180920141232-sea.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      hddInterface: "sata",
      hddCapacity: 1024,
      hddTDP: 15,
    },
    {
      name: "WESTERN DIGITAL BLUE 4TB",
      price: 12500.0,
      brand: "WD",
      category: "hdd",
      warrenty: "2 Years",
      description: "7200RPM SATA3 Hard Drive. 4TB",
      slug: "wd-green-1tb",
      image: "https://i.ibb.co/nmXz09t/417-20170830122847-4tb.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      hddInterface: "sata",
      hddCapacity: 4096,
      hddTDP: 15,
    },

    //========================================================= SSD =======================================================================================================

    {
      name: "Samsung 512GB",
      price: 22500.0,
      brand: "samsung",
      category: "ssd",
      warrenty: "2 Years",
      description: "NVME SSD. 512GB 6GBP/s",
      slug: "samsung-512-nvme",
      image: "https://i.ibb.co/HYS1rpY/1393-20210201094952-Untitled-1-13.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      ssdInterface: "m.2",
      ssdCapacity: 512,
      ssdTDP: 5,
    },

    //========================================================= PSU ========================================================================================================

    {
      name: "Corsair 600W Paltinum",
      price: 18500.0,
      brand: "Corsair",
      category: "psu",
      warrenty: "10 Years",
      description: "600w Paltinum rated. Semi Modular",
      slug: "corsair-600w-platinum",
      image: "https://i.ibb.co/BChmQmN/1828-20211223171838-cx75.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],
      //PC Builder Specific Data
      tdp: 600,
      //compatibleCaseSizes: ["atx", "mini-atx", "micro-atx"],
    },

    //========================================================= Casing ======================================================================================================

    {
      name: "Fantech G71 Unicorn",
      price: 8500.0,
      brand: "Fantech",
      category: "casing",
      warrenty: "6 Months",
      description: "Fantech G71 Unicorn. 1 Fan Inclided. 3 Other Fan Slots",
      slug: "fantech-g71-unicorn ",
      image: "https://i.ibb.co/TR0qkD6/827-20220429161718-nx290-pdt01.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      caseSize: "atx",
      compatibleMBSizes: ["atx", "mini-atx", "mirco-atx"],
      caseTDP: 25,
    },

    //========================================================= Coolers ======================================================================================================

    {
      name: "Asus ROG Ryujin II 360",
      price: 115500.0,
      brand: "Asus",
      category: "coolers",
      warrenty: "6 Months",
      description:
        "The flagship ROG Ryujin II all-in-one cooler delivers ultimate thermal performance",
      slug: "asus-rog-ryujin-ii-360",
      image: "https://i.ibb.co/DQRb492/1986-20211220072253-h732-5.png",

      feature1: ["Base Clock", "2.4GHz"],
      feature2: ["Boost Clock", "4.2GHz"],
      feature3: ["Base Clock", "2.4GHz"],
      feature4: ["Base Clock", "2.4GHz"],

      //PC Builder Specific Data
      compatibleSockets: ["LGA1155", "LGA1200", "LGA1700", "AM4"],
      compatibleCaseSizes: ["atx", "mini-atx", "mirco-atx"],
      coolerTDP: 25,
    },
  ],
};

export default data;

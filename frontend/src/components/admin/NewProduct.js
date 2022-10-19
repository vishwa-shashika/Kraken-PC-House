import React, { Fragment, useState, useEffect } from "react";

//import MetaData from '../layout/MetaData'
//import Sidebar from './Sidebar'

//import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from "react-redux";
import { newProduct, clearErrors } from "../../actions/productActions";
import { NEW_PRODUCT_RESET } from "../../constants/productConstants";

const NewProduct = ({ history }) => {
  // const [name, setName] = useState('');
  // const [price, setPrice] = useState(0);
  // const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [stock, setStock] = useState(0);
  // const [seller, setSeller] = useState('');
  // const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([])

  const [name, setName] = useState("x");
  const [price, setPrice] = useState(0);
  const [brand, setBrand] = useState("y");
  const [category, setCategory] = useState("z");
  const [warrenty, setWarrenty] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState([]);
  const [feature1, setFeature1] = useState([]);
  const [feature2, setFeature2] = useState([]);
  const [feature3, setFeature3] = useState([]);
  const [feature4, setFeature4] = useState([]);
  const [isOnPcBuilder, setIsOnPcBuilder] = useState(false);
  const [pcBuilderInfo, setPcBuilderInfo] = useState({});

  const categories = [
    "PROCESSORS",
    "GRAPHIC CARDS",
    "MOTHERBOARDS",
    "RAM",
    "HARD DRIVES",
    "SSD",
    "COOLERS",
    "POWER SUPPLIES",
    "OTHERS",
  ];

  //const alert = useAlert();
  const dispatch = useDispatch();

  const { loading, error, success } = useSelector((state) => state.newProduct);

  useEffect(() => {
    if (error) {
      //alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      history.push("/admin/products");
      //alert.success('Product created successfully');
      dispatch({ type: NEW_PRODUCT_RESET });
    }
  }, [dispatch, error, success, history]);

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData();
    // formData.set("name", name);
    // formData.set("price", price);
    // formData.set("brand", brand);
    // formData.set("category", category);
    // formData.set("warrenty", warrenty);
    // formData.set("description", description);
    // formData.set("image", image);
    // formData.set("feature1", feature1);
    // formData.set("feature2", feature2);
    // formData.set("feature3", feature3);
    // formData.set("feature4", feature4);
    // formData.set("isOnPcBuilder", isOnPcBuilder);
    // formData.set("pcBuilderInfo", pcBuilderInfo);

    formData.set("name", "core i9 7700k");
    formData.set("price", 4500);
    formData.set("brand", "brand");
    formData.set("category", "PROCESSORS");
    formData.set("warrenty", "3");
    formData.set("description", "description");
    formData.set("image", "image");
    formData.set("feature1", "feature1");
    formData.set("feature2", "feature2");
    formData.set("feature3", "feature3");
    formData.set("feature4", "feature4");
    formData.set("isOnPcBuilder", "isOnPcBuilder");
    formData.set("pcBuilderInfo", "pcBuilderInfo");

    // formData.set('name', name);
    // formData.set('price', price);
    // formData.set('description', description);
    // formData.set('category', category);
    // formData.set('stock', stock);
    // formData.set('seller', seller);

    // images.forEach(image => {
    //     formData.append('images', image)
    // })

    console.log(formData);
    console.log("Price =", price);

    dispatch(newProduct(formData));
  };

  const onChange = (e) => {
    // const files = Array.from(e.target.files)
    // setImagesPreview([]);
    // setImages([])
    // files.forEach(file => {
    //     const reader = new FileReader();
    //     reader.onload = () => {
    //         if (reader.readyState === 2) {
    //             setImagesPreview(oldArray => [...oldArray, reader.result])
    //             setImages(oldArray => [...oldArray, reader.result])
    //         }
    //     }
    //     reader.readAsDataURL(file)
    // })
  };

  return (
    <Fragment>
      <div className="bg-zinc-800 text-zinc-100 h-[calc(100vh-4rem)] w-[100%] custom-home-bg relative">
        <div className="h-full w-full flex items-center justify-center">
          <div className="z-10 w-[38rem] bg-zinc-900 px-4 py-8 hover:shadow hover:shadow-green-500 hover:w-[42rem] transition-all ease-in-out duration-300">
            <div className="text-2xl font-semibold mb-1">Shipping Info</div>
            <div className="text-zinc-400">
              Enter Your Shipphing Infor Befor Proceed Further
            </div>
            {/*Form Starts Here =======================================================================================*/}
            <form className="mt-4 flex flex-col gap-4" onSubmit={submitHandler}>
              <div>
                <label htmlFor="name_field" className="block mb-1">
                  Name <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="name_field"
                  name="name_field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
                <br />
              </div>
              <div className="flex gap-2">
                <div className="flex-1">
                  <label htmlFor="price_field" className="block mb-1">
                    Price <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="price_field"
                    name="price_field"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="brand_field" className="block mb-1">
                    Brand <span className="text-emerald-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="brand_field"
                    name="brand_field"
                    value={brand}
                    onChange={(e) => setBrand(e.target.value)}
                    className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="category_field" className="block mb-1">
                  category <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="category_field"
                  name="category_field"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="warrenty_field" className="block mb-1">
                  Warrenty <span className="text-emerald-500">*</span>
                </label>
                <input
                  type="text"
                  id="warrenty_field"
                  name="warrenty_field"
                  value={warrenty}
                  onChange={(e) => setWarrenty(e.target.value)}
                  className="w-full py-1 px-2 bg-zinc-600 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="block font-semibold w-full py-2 bg-gradient-to-r from-emerald-500 to-green-500 mt-4"
                //disabled={loading ? true : false}
              >
                Create Item
              </button>
            </form>
            {/*Form ENDs Here =======================================================================================*/}
          </div>
        </div>
        <div class="area">
          <ul class="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default NewProduct;

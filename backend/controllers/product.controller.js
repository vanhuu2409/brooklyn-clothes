import Product from "../models/product.model.js";

// createProduct
export const createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    return res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// getProducts
export const getProducts = async (req, res, next) => {
  try {
    // let products = await Product.find({});
    let {
      search,
      category,
      collections,
      color,
      size,
      sort,
      price,
      available,
      pageNumber,
      pageSize,
    } = req.query;

    pageSize = parseInt(pageSize) || 12;
    pageNumber = parseInt(pageNumber) || 1;
    console.log(pageNumber);

    let query = {};
    console.log(search);
    if (search) {
      query["name"] = { $regex: `${search}`, $options: "i" };
    }

    if (category) {
      const cate = category
        .split(",")
        .map((category) => category.trim().toLowerCase());
      query.category = { $in: cate };
    }

    if (collections) {
      query.collections = collections;
      const collection = collections
        .split(",")
        .map((collection) => collection.trim().toLowerCase());
      query.collections = { $in: collection };
    }

    if (color) {
      const colorArray = color.split(",").map((color) => color.trim());
      // const colorArray = color.split(",").map((color) => ({
      //   name: color.trim(),
      // }));
      query["colors.name"] = { $in: colorArray };
      // query.colors = {
      //   $elemMatch: {
      //     $or: colorArray,
      //   },
      // };
    }

    if (size) {
      const sizeArray = size.split(",").map((size) => size.trim());
      query.sizes = { $in: sizeArray };
    }

    if (price) {
      if (price === "allPrice") {
        query.price = { $gte: 0 };
      }
      if (price === "smallPrice") {
        query.price = { $gte: 0, $lte: 1000000 };
      }
      if (price === "mediumPrice") {
        query.price = { $gte: 1000000, $lte: 2000000 };
      }
      if (price === "largePrice") {
        query.price = { $gte: 2000000 };
      }
    }

    if (available) {
      query.available = available ? true : false;
    }

    let sortQuery = {};
    if (sort) {
      sortQuery.price = sort === "desc" ? -1 : 1;
    }
    // console.log({ sortQuery });

    /**
     * "colors": [
                {
                    "name": "Wine",
                    "colorCode": "#852A2D"
                },
                {
                    "name": "Black-Acid",
                    "colorCode": "#353432"
                },
                {
                    "name": "White",
                    "colorCode": "#FFF"
                },
                {
                    "name": "Brown",
                    "colorCode": "#7E4731"
                }
            ],
     */

    // console.log(111, JSON.stringify(query));
    const totalProducts = await Product.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / pageSize);
    const skip = (pageNumber - 1) * pageSize;

    let products = await Product.find(query)
      .sort(sortQuery)
      .skip(skip)
      .limit(pageSize)
      .exec();

    res.status(200).json({
      products,
      currentPage: pageNumber,
      totalPages,
    });

    // return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// getProduct
export const getProduct = async (req, res, next) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// deleteProduct
export const deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product has been deleted!");
  } catch (error) {
    next(error);
  }
};

// updateProduct
export const updateProduct = async (req, res, next) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          ...req.body,
        },
      },
      { new: true }
    );
    res
      .status(200)
      .json({ message: "Product has been updated!", updatedProduct });
  } catch (error) {
    next(error);
  }
};

class APIFeatures {
  constructor(quary, quaryStr) {
    this.quary = quary;
    this.quaryStr = quaryStr;
  }

  search() {
    const keyword = this.quaryStr.keyword
      ? {
          name: {
            $regex: this.quaryStr.keyword,
            $options: "i",
          },
        }
      : {};

    console.log(keyword);
    this.quary = this.quary.find({ ...keyword });
    return this;
  }
}

module.exports = APIFeatures;

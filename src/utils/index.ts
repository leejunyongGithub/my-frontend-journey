import moment from "moment";

export function filterCategoryList(list: [], key?: string) {
  const filterData =
    list.filter((item: any, i) => {
      return (
        list.findIndex((el: any, j) => {
          return item.frontMatter.category === el.frontMatter.category;
        }) === i
      );
    }) || [];

  return filterData;
}

export function filterPostList(list: []) {
  let filterData: any = {};

  list.forEach((item) => {
    const { frontMatter } = item;
    const { category } = frontMatter;
    if (!filterData?.[category]) {
      filterData = {
        ...filterData,
        [category]: [item],
      };
    } else {
      filterData[category].push(item);
    }
  });

  return filterData;
}

export function getItem(key: string = "") {
  const data = localStorage?.getItem(key) || "";

  if (data) {
    return JSON.parse(data);
  }

  return data;
}

export function setItem(key: string, data: object) {
  const parseData = JSON.stringify(data);
  localStorage?.setItem(key, parseData);
}

export const generateMeta = ({
  title = "공통 Title",
  description = "공통 Description",
  images = ["https://image.com/upload/og.jpg"],
  og = {},
}) => {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images,
      ...og,
    },
  };
};

export function filterDate(data: any) {
  let dataList: any = {};

  data.forEach((item: any) => {
    // item
    const { frontMatter } = item;
    const { date } = frontMatter;
    const parseDate = moment(date).format("YYYY");

    if (dataList?.[parseDate]) {
      dataList[parseDate].push(item);
    } else {
      dataList = {
        ...dataList,
        [parseDate]: [],
      };
      dataList[parseDate].push(item);
    }
  });

  return dataList;
}

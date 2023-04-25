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

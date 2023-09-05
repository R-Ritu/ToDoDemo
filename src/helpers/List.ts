import shortid from "shortid";

export const keyExtractor = (item: { key?: unknown, _id: unknown }, index: number) => {
  return `${item?.key || item._id || shortid.generate()}_${index}`
};
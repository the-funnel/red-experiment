import { Item } from "./types";

export function getItemsInGroup(items: Item[], groupId?: string) {
  return items.filter((item) => item.groupId === groupId);
}

// TODO: implement unit test
export function getDisabledItems(items: Item[]) {
  return items.filter((item) => item.disabled);
}

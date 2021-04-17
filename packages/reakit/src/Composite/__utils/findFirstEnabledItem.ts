import { Item } from "./types";

export function findFirstEnabledItem(items: Item[], excludeId?: string) {
  if (excludeId) {
    return items.find((item) => !item.disabled && item.id !== excludeId);
  }
  return items.find((item) => !item.disabled);
}

// TODO: define function's return type
export function findLastEnabledItem(items: Item[], excludeId?: string) {
  if (excludeId) {
    return items
      .reverse()
      .find((item) => !item.disabled && item.id !== excludeId);
  }
  return items.reverse().find((item) => !item.disabled);
}

export type TestData = Array<{
  productName: string;
  quantity: number;
  color?: "red" | "blue" | "green";
}>;
export let testdata: TestData = [
  { productName: "Voyage Yoga Bag", quantity: 2, color: "red" },
  { productName: "Fusion Backpack", quantity: 1 },
];

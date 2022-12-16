import fs from "fs/promises";
import path from "path";
import { TodoGroupInterface, TodoInterface } from "types/todos";

interface DataInterface {
  todos: TodoInterface[];
  groups: TodoGroupInterface[];
}

type NewObject<Key extends keyof DataInterface> = Omit<
  DataInterface[Key][0],
  "id"
>;

interface Filters<Key extends keyof DataInterface> {
  key: keyof DataInterface[Key][0];
  value: any;
}

const getPath = () => path.join(process.cwd(), "data", "backend.json");

const saveData = (data: DataInterface) => {
  const filePath = getPath();
  fs.writeFile(filePath, JSON.stringify(data, null, 2));
};

const getAll = async (): Promise<DataInterface> => {
  const filePath = getPath();
  const buffer = await fs.readFile(filePath);
  const data: DataInterface = JSON.parse(buffer.toString());
  return data;
};

export const getData = async <Key extends keyof DataInterface>(
  collection: Key
): Promise<DataInterface[Key]> => {
  const data = await getAll();
  return data[collection];
};

export const addData = async <Key extends keyof DataInterface>(
  collection: Key,
  object: NewObject<Key>
) => {
  const allData = await getAll();

  const newObject = {
    ...object,
    id: String(
      Math.max(...allData[collection].map(({ id }) => Number(id))) + 1
    ),
  };

  const fileData = {
    ...allData,
    [collection]: [...allData[collection], newObject],
  };

  saveData(fileData);
  return newObject;
};

export const updateData = async <Key extends keyof DataInterface>(
  collection: Key,
  objectId: string,
  newObject: Partial<NewObject<Key>>
) => {
  const allData = await getAll();

  const objectToUpdate = (
    allData[collection] as Array<DataInterface[Key][0]>
  ).find(({ id }) => id === objectId);

  if (!objectToUpdate) return null;

  const updatedObject = {
    ...objectToUpdate,
    ...newObject,
  };

  const updatedData = allData[collection].map((data) =>
    data.id === objectId ? updatedObject : data
  );

  const fileData = {
    ...allData,
    [collection]: updatedData,
  };

  saveData(fileData);
  return updatedObject;
};

export const deleteData = async <Key extends keyof DataInterface>(
  collection: Key,
  filters: Filters<Key> | Filters<Key>[]
) => {
  const allData = await getAll();
  const updatedData = (
    allData[collection] as Array<DataInterface[Key][0]>
  ).filter((el) => {
    if (Array.isArray(filters)) {
      return !filters.every(({ key, value }) => el[key] === value);
    }
    return el[filters.key] !== filters.value;
  });

  const fileData = {
    ...allData,
    [collection]: updatedData,
  };

  saveData(fileData);
};

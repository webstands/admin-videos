import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface Category {
  id: string;
  name: string;
  deleted_at: string | null;
  is_active: boolean;
  created_at: string;
  updated_at: string | null;
  description: string | null;
}

const category: Category = {
  id: "0e0680dd-4981-4ee2-a23b-a01452b96b81",
  name: "Olive",
  description: "Earun quo at dolor tempore nisi.",
  is_active: true,
  deleted_at: null,
  created_at: "2022-08-15T10:59:09+0000",
  updated_at: "2022-08-15T10:59:09+0000",
};

const initialState: Category[] = [
  category,
  { ...category, id: "0e0680dd-4981-4ee2-a23b-a01452b96b80", name: "Peach" },
  { ...category, id: "0e0680dd-4981-4ee2-a23b-a01452b96b82", name: "Aple" },
  { ...category, id: "0e0680dd-4981-4ee2-a23b-a01452b96b83", name: "Banana" },
];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,  
  reducers: {
    createCategory(state, action: PayloadAction<Category>) {},
    updateCategory(state, action: PayloadAction<Category>) {},
    deleteCategory(state, action: PayloadAction<string>) {},
  },
});

export default categoriesSlice.reducer;

// Selector tipado: retorna Category[]
export const selectCategories = (state: RootState): Category[] =>
  state.categories;

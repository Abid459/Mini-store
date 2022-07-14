import { configureStore } from "@reduxjs/toolkit";
import reducer from './products'

const store = configureStore({reducer})

export default store;
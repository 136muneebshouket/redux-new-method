import {configureStore} from "@reduxjs/toolkit"
import { customreducer } from "./reducers";



const Store = configureStore({
reducer:{
    custom:customreducer,
},


})

export default Store;
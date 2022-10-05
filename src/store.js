import { configureStore, createSlice } from "@reduxjs/toolkit";
import data from './data';

let user = createSlice({
    name: 'user',
    initialState: 'kim'
});

let dataText = createSlice({
    name: 'dataText',
    initialState: data,
    reducers: {
        changeSort(state){
            state.sort(function(a, b){
                
                console.log(a.title.toUpperCase());
                console.log(b.title.toUpperCase());
                
                var title01 = a.title.toUpperCase();
                var title02 = b.title.toUpperCase();

                if(title01 < title02) {
                    return -1;
                }

                if(title01 > title02) {
                    return 1;
                }

                return 0;
            })

        }
    }
})

let test = createSlice({
    name: 'dataText',
    initialState: {name: 'kim'},
    reducers: {
        changeSort(state){
            // let copy = [...data];
            // console.log(state.name)            
            
        }
    }
})


export let { changeSort } = dataText.actions

export default configureStore({
    reducer: {
        user1: user.reducer,
        dataText: dataText.reducer,
        test: test.reducer
    }
})
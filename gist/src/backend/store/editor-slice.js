import { configureStore, createSlice } from "@reduxjs/toolkit";

const flagSlice = createSlice({
  name: "flag",
  initialState: { value: false },
  reducers: {
    switchFlag(state) {
      state.value = !state.value;
      // console.log('editor-slice-->',state.value)
    },
  },
});

const editSlice = createSlice({
  name: "editor",
  initialState: [],
  reducers: {
    addToList(state, action) {
      state.push(action.payload);
      console.log(action.payload);
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    addToUsers(state, action) {
      let name = action.payload.name;
      let data = action.payload.data;
      console.log(name);
    },
    pushToUsers(state, action) {
      let name = action.payload.name;
      let data = action.payload.data;
      console.log(action.payload);
      if (state[name] == null) {
        state[name] = data;
        console.log("somthing new");
      } 
      else {
        let name = action.payload.name;
        let newValue = action.payload.data[0].text;//this is array i think
        let userId = action.payload.data.id;
        let copy=action.payload.oldData
        // Create a copy of the state
        let newState = copy;
      console.log('oldState is',newState)
      let item = newState[name];
    

        // if ( newValue ) {
        //   let item = newState[name];
          console.log('in if',item)
          if (item) {
            for (let idx in item) {
                console.log(item[idx])//{id:,text}
                let obj=item[idx];
                console.log('finaaly obj is',obj.id)
              for (let key in obj) {
                if (obj.key ===userId) {
                  console.log("changing", obj.text);
                  obj.id = '4';
                //   console.log('mohan lal',action.payload.data[0].text)
                  break; // Exit the inner loop after finding the user
                }
              }
            }
          }
        // }
      
        // Update state using setState with the copy
        // state=newState;
      }
      
   

      // state[action.payload.name].push(action.payload.data)
    },
  },
});

const nameSlice = createSlice({
  name: "name",
  initialState: "default",
  reducers: {
    editName(state, action) {
      // state=action.payload  Dont keep like ths cuz String is not mutable
      return action.payload; //directly return
    },
  },
});

let store = configureStore({
  reducer: {
    editor: editSlice.reducer,
    flag: flagSlice.reducer,
    user: userSlice.reducer,
    name: nameSlice.reducer,
  },
});

export default store;

export const { addToList } = editSlice.actions;
export const { switchFlag } = flagSlice.actions;
export const { addToUsers, pushToUsers } = userSlice.actions;
export const { editName } = nameSlice.actions;

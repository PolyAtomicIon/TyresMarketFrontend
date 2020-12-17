// import Vuex from 'vuex'
// import axios from 'axios'

// const mainPageModule = {
//     state: () => ({
//         Sections: [],
//     }),
//     mutations: {
//         setSections(state, data) {
//             console.log("setting sections");

//             for (var i = 0; i < data.length; i++) {
//                 state.Sections.push(data[i]);
//             }

//             console.log(state.Sections);
//         }
//     },
//     actions: {
//         fetchSections({ commit }) {

//             // axios.get("https://run.mocky.io/v3/0bb165f6-e0e6-405f-8509-0a337a196ed6")
//             // axios.get("http://127.0.0.1:8000/api/sections/")  
//             axios.get("https://reader.prosthesis.kz/api/sections/")
//                 .then(
//                     response => {
//                         console.log(response.data);
//                         commit("setSections", response.data["sections"]);
//                     }
//                 );
//         }
//     },
//     getters: {
//         sections(state) {
//             return state.Sections;
//         }
//     },
// }

// export default new Vuex.Store({
//     modules: {
//         main: mainPageModule,
//     }
// });
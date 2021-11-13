    import MainComp from "./components/MainComp.js";
    import DailyComp from "./components/DailyComp.js";
    import WeekComp from "./components/WeekComp.js";
    import DetailComp from "./components/DetailComp.js";
    
    //외부 파일로 뽑았을 경우에는 vue 라우터를 쓴다고 해야한다.
    Vue.use(VueRouter);
    
    export default new VueRouter({
        routes : [
            {
                path : "/",
                component : MainComp, 
                name : "MainComp",
            },
            {
                path : "/daily",
                component : DailyComp, 
                name : "DailyComp",
            },
            {
                path : "/week",
                component : WeekComp, 
                name : "WeekComp",
            },
            {
                path : "/info/:movieCd",
                component : DetailComp,
                name : "DetailComp",

            }
        ]
    })
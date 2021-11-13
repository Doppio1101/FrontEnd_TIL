export default{
    template : `
        <div id="week">

        <b-table :items="weeklyMovie" :fields="fields" select-mode="single" selectable @row-selected="onRowSelected">
        </b-table>
        </div>
    `,
    data(){
        return {
            targetDt : "20211110",//created day
            weeklyMovie : [],
            fields : [
                {key: "rank", label: "랭킹"},
                { key: "movieNm", label: '영화 제목' },
                { key: "openDt", label: '개봉일' },
                { key: "audiAcc", label: '누적관객',
                    formatter: value => {
                        return value+"명";
                    } 
                }
            ],
        }
    },
    created() {
        let date = new Date();
        let year = date.getFullYear();
        let month = ("0" + (1 + date.getMonth())).slice(-2);
        let day = ("0" + date.getDate()).slice(-2);
        let today = year + month + day;
        let Lastweek = (parseInt(today) - 7)+"";
        this.targetDt = Lastweek;

        axios({
            method : "get",
            // url = "/searchDailyBoxOfficeList.json"+this.key+this.targetDt,
            url : "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&weekGb=0&targetDt="+this.targetDt,

        })
        .then(({data}) => {
           
            this.weeklyMovie = data.boxOfficeResult.weeklyBoxOfficeList;
            
        })

    },
    methods: {
        onRowSelected(movie){
            console.log(movie[0].movieNm+"의 영화코드:"+movie[0].movieCd);
            this.$router.push({
                path : "/info",
                query : {
                    movieCd : movie[0].movieCd,

                }
            })
        },
    },
}
export default{

    template :`
        <div>
            <b-container fluid class="p-4 bg-dark">
                <h1 style="color:white; text-align:center">{{movieNm}}</h1>
                <b-row>
                <b-col v-for="actor in actors">
                    
                    <b-card
                        :title="actor.peopleNmEn"
                        :img-src="img"
                        img-alt="Image"
                        img-top
                        tag="article"
                        style="max-width: 20rem;"
                        class="mb-2"
                    >
                        <b-card-text>
                        {{actor.peopleNm}}<br>
                        {{actor.cast}} 역
                        </b-card-text>

                        <b-button :href="search + actor.peopleNm" variant="primary">{{actor.peopleNm}} 검색</b-button>
                    </b-card>
                </b-col>
                
                </b-row>
            </b-container>
        </div>
    
    `,
    name : "DetailComp",
    data() {
        return {
            movieCd : "",
            movieNm: "",
            actors : [],
            watchGradeNm: 0,
            img : "../../img/noImage.png",
            banner : "../../img/no-image.png",
            search : "https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=1&ie=utf8&query=",
        }
    },
     created() {
        this.movieCd = this.$route.query.movieCd;
        
        axios({
            url : "https://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=f5eef3421c602c6cb7ea224104795888&movieCd="+this.movieCd,
            method : "get",

        })
        .then(({data})=>{
            console.log(data);
            let actors = data.movieInfoResult.movieInfo.actors;
            for(let i=0; i<5; i++){
                this.actors.push(actors[i])
            }
            console.log(this.actors);
            this.movieNm = data.movieInfoResult.movieInfo.movieNm
        })
    },


}
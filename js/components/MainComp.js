export default{
    template : `
        <div id="main">    
            <h1>추천 영화</h1>
            <b-img :src="img" fluid-grow alt="Fluid-grow image"></b-img>
        </div>
            `,
        data(){
            return{
                mainProps: {
                    center: true,
                    fluidGrow: true,
                    blank: true,
                    blankColor: '#bbb',
                    width: 600,
                    height: 400,
                    class: 'my-5'
                },
                img : "D:\SSAFY\workspace\vuejs\FrontEnd_TIL_Vue\img\강릉.jpg",
                
                imgary : ["강릉", "귀토", "매트릭스","송해","엔칸토","이터널스","장르만 로맨스","최동원","캅샵"],

            }
        },
        created() {
            this.mainProps = "../../img/" + this.imgary[0] + ".jpg";
        },
    
}
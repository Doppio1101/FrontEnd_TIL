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
                img : "",
                
                imgary : ["Dong_1920774", "Ita_1920774", "Kang_1920774",
                        "Kuck_1920774","Mat_1920774","Nkan_1920774",
                        "Romance_1920774","Shop_1920774","Shop_1920774"],

            }
        },
        created() {
            this.img = "https://github.com/Doppio1101/FrontEnd_TIL/blob/master/img/" + this.imgary[0] + ".jpg?raw=true";
            
            
        },
    
}
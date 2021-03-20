<template>
    <div class="game_container">
        <h2 class="time_container" ref="time_container">
             {{time}}
        </h2>
        <h2 class="score_container">
            Score : {{score}}
        </h2>
        <div class="play-field"  ref="playfield" v-if="continueGame">
            <div 
                class="animal" 
                v-for="n in number" 
                :key="n"
                @click="touched"
                :style="position[n]"
            >
                <img 
                    :src="animal.src" 
                    :alt="animal.name" 
                    class="animal_img" 
                >
            </div>
        </div>
            <div class="result" v-if="!continueGame">
            <img 
                :src="animal.src" 
                :alt="animal.name" 
                class="animal_img" 
            > 
            <span class="result_score">Score : {{score}}</span>
            <button class="back_home" @click="backHome">Home</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                seconds: 0,
                time:'Time: 00:00',
                number:0,
                score:0,
                position:[],
                controlInterval:null,
                continueGame:true
            }
        },
        emits:['backHome'],
        props:{
            animal:{
                type:Object,
                default:function(){
                    return {
                        name:'rabbit',
                        src:'http://pngimg.com/uploads/rabbit/rabbit_PNG96534.png'
                    }
                }
            },
            hasClick:{
                type:Number
            }
        },
        watch:{
            hasClick(last){
                if(last){
                    this.startGame();
                }
            },
            seconds(last){
                if(last == 60){
                    clearInterval(this.controlInterval);
                    this.continueGame=false;
                }
            }
        },
        mounted() {
            for(let i=0; i<1000; i++){
                this.position.push(this.givePos());
            }
        },
        methods: {
            startGame(){
                this.setTime();
                this.number++;
            },
            setTime(){
                this.controlInterval=setInterval(() => {
                    this.seconds++;
                    let min=Math.floor(this.seconds / 60);
                    let second=this.seconds % 60;
                    min = (min<10) ? `0${min}` : min;
                    second = (second<10) ? `0${second}` : second;
                    this.time= `Time: ${min}:${second}`;
                },1000);
            },
            touched(event){
                this.xz=event.x;
                this.yz=event.y;
                if( event.target.classList.value == 'animal' || 
                    event.target.classList.value == 'animal_img'
                ){
                        this.score++;
                        event.target.style.display="none";

                        setTimeout(() => {
                            event.target.style.display=""
                            this.number++;
                        } , 1000 )

                }
            },
            givePos(){
                let x=Math.random()*window.innerWidth*0.9;
                let y=Math.random()*window.innerHeight*0.9;

                return {
                    top:y+'px',
                    left:x+'px'
                }
            },
            backHome(){
                this.seconds = 0 ;
                this.time = 'Time: 00:00' ;
                this.number = 0 ;
                this.score = 0 ;
                this.controlInterval = null ;
                this.continueGame = true;

                window.scrollTo({
                    top:0,
                    left:0,
                    behavior:'smooth'
                });
            }
            
        }    
    }
</script>

<style lang="scss" scoped>
.game_container{
    height:100vh;
    width: 100vw;
    padding:0.5rem;
    background: #C39EA0;
    color:#182978;
    position: relative;

    .time_container{
        position:absolute;
        top:2%;
        left:2%;
    }

    .score_container{
        position: absolute;
        top:2%;
        right: 2%;
    }

    @media screen and (max-width:360px){
        .time_container{
            font-size: 1rem;
        }
        .score_container{
            font-size: 1rem;
        }
    }
} 
.animal{
    position:absolute;
    width:100px;
    height:90px;
    cursor:pointer;

    .animal_img{
        width:100px;
    }
    
    @media screen and (max-width:360px){
        &{
            width:60px;
            height: 50px;

        }
        .animal_img{
            width:60px;
        }
    }
}
.animal_img{
    width:100px;
}
.result{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height:100%;
    transition: all 1s ease;
    background: rgba( #000000, 0.8);
    display:flex;
    justify-content: center;
    align-items: center;

    .result_score{
        color:white;
        margin-left: 2rem;
        font-size: 2rem;
    }
}
.back_home{
    position: absolute;
    right: 10%;
    top:60%;
    border:none;
    outline:none;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background:#26db96 ;
    color:black;
    padding:0.5rem 1.5rem;
    transition: background 0.5s ease,transform 0.1s;
    cursor:pointer;

    &:hover{
        background:#FF6495;
    }
    &:active{
        transform: scale(0.9);
    }
}
</style>
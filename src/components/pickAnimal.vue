<template>
    <div class="pick_animal">
        <h1>What is your <span>favourite</span> animal ?</h1>
        <ul class="animal_container">
            <li v-for="animal in animals" :key="animal.name">
                <button class="choose_btn" @click="startedGame(animal)">
                    <h3>{{animal.name}}</h3>
                    <img :src="animal.src" :alt="animal.name">
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                animals: [
                    {
                        name:'rabbit',
                        src:'http://pngimg.com/uploads/rabbit/rabbit_PNG96534.png'
                    },
                    {
                        name:'squirrel',
                        src:'http://pngimg.com/uploads/squirrel/squirrel_PNG96422.png'
                    },
                    {
                        name:'panda',
                        src:'http://pngimg.com/uploads/panda/panda_PNG25.png'
                    },
                    {
                        name:'kitten',
                        src:'http://pngimg.com/uploads/cat/cat_PNG111.png'
                    }
                ],
            }
        }, 
        emits:['choosedanimal'],
        props:{
             scrollPage:{
                type:Function,
                required:true
             }
        },
        methods: {
            startedGame(animal){
                this.$emit('choosedanimal',animal);
                this.scrollPage();
            }
        },
       
    }
</script>

<style lang="scss" scoped>
.pick_animal{
    background: #F4DB7D;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h1{
        color:#1A2238;

        span{
            color:#FF6A3D;
        }
    }

    @media screen and (max-width:825px){
        h1{
            font-size: 1rem;
        }
    }
}
.animal_container{
    list-style-type: none;
    display: flex;
    margin-top: 2rem;

    li{
        margin:1rem;
    }
}
.choose_btn{
    background:#E5BACE;
    position: relative;
    padding:1rem;
    border:none;
    outline: none;
    transition:transform 0.5s ease;
    cursor:pointer;


    h3{
        font-size: 1.2rem;
        text-align: left;
        text-transform: capitalize;
    }
    img{
        width:130px;
        height:100px;
    }

    &::after{
        content:'';
        position: absolute;
        bottom:0;
        left:0;
        width:100%;
        height:0;
        background: rgba(#161F6D,0.5);
        transition: all 1s ease;
    }

    &:hover{
        &::after{
            height:100%;
        }
    }

    &:active{
        transform:scale(0.9);
    }
}
@media screen and (max-width:825px){
    .choose_btn{
        padding:0.5rem;

        h3{
            font-size: 0.8rem;
        }
        img{
            width: 80px;
            height: 60px;
        }
    }
}
@media screen and (max-width:560px){
    .choose_btn{
        padding:0.3rem;

        h3{
            font-size: 0.8rem;
        }
    }
    .animal_container{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}

@media screen and (max-width:360px){
    .choose_btn{
        padding:0.3rem;

        h3{
            font-size: 0.5rem;
        }
    }
    .animal_container{
        display: grid;
        grid-template-columns: 1fr;

        li{
            margin:0.5rem;
        }
    }
}

</style>
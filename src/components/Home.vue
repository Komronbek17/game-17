<template>
    <div class="home">
            <h1 class="title animate__animated" ref="title">
                <span>Catch</span> the cute animal
            </h1>
        <button class="start_btn" @click="$emit('startBtn')">Play Game</button>
    </div>
</template>

<script>
    export default {
        emits:['startBtn'],
        mounted() {
            setTimeout(() => {
                this.$refs.title.classList.add('animate__backInDown');
                this.$refs.title.style.display='block';
            },1000)
        },
    }
</script>

<style lang="scss" scoped>
.home{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width:100vw;
    position:relative;
    background: #1A2238;
}
.title{
    color:#26db96;
    letter-spacing: 3px;
    display: none;
    span{
        color:#FF6495
    }

    @media screen and (max-width:825px){
        &{
            font-size: 1rem;
        }
    }
}
.start_btn{
    position: absolute;
    right: 10%;
    top:60%;
    border:none;
    outline:none;
    font-size: 1.5rem;
    border-radius: 0.5rem;
    background:#26db96 ;
    color:black;
    padding:0.5rem;
    transition: all 0.5s ease,transform 0.1s;
    cursor:pointer;

    &:hover{
        background:#FF6495;
    }
    &:active{
        transform: scale(0.9);
    }

    @media screen and (max-width:825px){
        &{
            font-size: 1rem;
        }
    }
    @media screen and (max-width:560px){
        &{
            font-size: 0.7rem;
        }
    }
}

</style>
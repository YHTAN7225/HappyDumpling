<template>
    <div>
        <VueperSlides>
            <VueperSlide v-for="(slide, index) in slideArray" :key="index" :title="slide.title" :content="slide.content" />
        </VueperSlides>

    
        <!-- <VueFlashcard  
            front="hello this is a flashcard" 
            back="with animation">
        </VueFlashcard > -->

        <div class="d-flex align-items-center justify-content-around m-3">
            <div class="card col-3" style="width: 18rem;">
                <div class="card-body">
                    <VueFlashcard  
                        front="hello this is a flashcard" 
                        back="with animation">
                    </VueFlashcard >
                </div>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <div class="card-body">
                    <VueFlashcard  
                        front="hello this is a flashcard" 
                        back="with animation">
                    </VueFlashcard >
                </div>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <div class="card-body">
                    <VueFlashcard  
                        front="hello this is a flashcard" 
                        back="with animation">
                    </VueFlashcard >
                </div>
            </div>
            <div class="card col-3" style="width: 18rem;">
                <div class="card-body">
                    <VueFlashcard  
                        front="hello this is a flashcard" 
                        back="with animation">
                    </VueFlashcard >
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name : "Product",
        data(){
            return{
                slideArray : [
                    {
                        title : "Slide 1",
                        content : "Content 1"
                    },
                    {
                        title : "Slide 2",
                        content : "Content 2"
                    },
                    {
                        title : "Slide 3",
                        content : "Content 3"
                    },
                    {
                        title : "Slide 4",
                        content : "Content 4"
                    },
                    {
                        title : "Slide 5",
                        content : "Content 5"
                    }
                ]
            };
        },
        component:{

        },
        methods : {

        },
        mounted(){
            window.scrollTo(0, 0);
        }
    }
    
</script>
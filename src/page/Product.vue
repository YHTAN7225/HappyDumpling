<template>
    <div>
        this is Product

        <!-- <VueFlashcard  
            front="hello this is a flashcard" 
            back="with animation">
        </VueFlashcard > -->

        <VueperSlides>
            <VueperSlide v-for="(slide, index) in slideArray" :key="index" :title="slide.title" :content="slide.content" />
        </VueperSlides>


    </div>
</template>

<script>
    export default {
        name : "Product",
        data(){
            return{
                slideArray: [
                    {
                        title: "Slide 1",
                        content: "Content 1"
                    },
                    {
                        title: "Slide 2",
                        content: "Content 2"
                    },
                    {
                        title: "Slide 3",
                        content: "Content 3"
                    },
                    {
                        title: "Slide 4",
                        content: "Content 4"
                    },
                    {
                        title: "Slide 5",
                        content: "Content 5"
                    }
                ]
            };
        },
        component:{

        },
        methods : {

        },
        mounted(){
            
        }
    }
    
</script>
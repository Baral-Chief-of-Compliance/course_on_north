<template>
    <div class="page-loader" v-if="!isLoaded">

            <div id="wn-semicircle"></div>

            <div id="ne-semicircle"></div>

            <div id="es-semicircle"></div>

            <div id="ws-semicircle"></div>

            

            <div class="RoseofWind">
                <div class="north">
                        <div id="n-light"></div>
                        <div id="n-dark"></div>
                </div>

                <div class="west">
                        <div id="w-light"></div>
                        <div id="w-dark"></div>
                </div>

                <div class="east">
                        <div id="e-light"></div>
                        <div id="e-dark"></div>
                </div>

                <div class="south">
                        <div id="s-light"></div>
                        <div id="s-dark"></div>
                </div>
            </div>



    </div>
</template>


<script>
 export default{
    data: () => {
        return{
            isLoaded: false
        }
    },

    mounted(){
        document.onreadystatechange = () => {
            if(document.readyState == "complete"){
                this.isLoaded = true;
            }
        }

    }
 }
</script>

<style lang="scss" scoped>

    $colors: #2F5DA7, #eb6635, #696969, #2F5DA7, #eb6635;
    .page-loader{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        position: fixed;
        z-index: 1050;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
    }

    #wn-semicircle{
        width: 10em;
        height: 10em;  /* высота в два раза меньше ширины, иначе получится полуовал */
        border-left: 20px solid #66B9E8;
        border-top: 20px solid #66B9E8;
        border-radius: 10em 0 0 0;
        // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
        background: white;

        position: fixed;
        margin-right: 155px;
        margin-bottom: 155px;
        z-index: 10;

        animation: up-wn 2s infinite;

        @keyframes up-wn {
            40%{
                transform: translate3d(-60px, -60px, 0)
            }

            95%{
                transform: translateY(0px);
            }
        }
    }

    #ne-semicircle{
        width: 10em;
        height: 10em;  
        border-right: 20px solid #66B9E8;
        border-top: 20px solid #66B9E8;
        border-radius: 0 10em 0 0;
        // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
        background: white;

        position: fixed;
        margin-left: 155px;
        margin-bottom: 155px;
        z-index: 10;

        animation: up-ne 2s infinite;

        @keyframes up-ne {
            40%{
                transform: translate3d(60px, -60px, 0)
            }

            95%{
                transform: translateY(0px);
            }
        }
    }

    #es-semicircle{
        width: 10em;
        height: 10em;  
        border-right: 20px solid #66B9E8;
        border-bottom: 20px solid #66B9E8;
        border-radius: 0 0 10em 0;
        // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
        background: white;

        position: fixed;
        margin-left: 155px;
        margin-top: 155px;
        z-index: 10;

        animation: up-es 2s infinite;

        @keyframes up-es {
            40%{
                transform: translate3d(60px, 60px, 0)
            }

            95%{
                transform: translateY(0px);
            }
        }
    }


    #ws-semicircle{
        width: 10em;
        height: 10em;  
        border-left: 20px solid #66B9E8;
        border-bottom: 20px solid #66B9E8;
        border-radius: 0 0 0 10em;
        // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
        background: white;  

        position: fixed;
        margin-right: 155px;
        margin-top: 155px;
        z-index: 10;

        animation: up-ws 2s infinite;


        @keyframes up-ws {
            40%{
                transform: translate3d(-60px, 60px, 0)
            }

            95%{
                transform: translateY(0px);
            }
        }


    }

    #n-light{   
        width: 0; 
        height: 0;
        border-top: 120px solid transparent;
        border-right: 50px solid #E9532F;
        border-bottom: 50px solid transparent;
    }

    #n-dark{
        width: 0; 
        height: 0;
        border-top: 120px solid transparent;
        border-left: 50px solid #DB4F2E;
        border-bottom: 50px solid transparent;
    }

    .north{
        display: flex;
        position: fixed;
        margin-bottom: 168px;
        z-index: 11;
    }


    #w-light{
        width: 0; 
        height: 0;
        border-left: 120px solid transparent;
        border-bottom: 50px solid #1B4E9B;
        border-right: 50px solid transparent; 
    }


    #w-dark{
        width: 0; 
        height: 0;
        border-left: 120px solid transparent;
        border-top: 50px solid #1D3B70;
        border-right: 50px solid transparent; 
    }

    .west{
        position: fixed;
        z-index: 11;
        margin-right: 168px;
    }


    #e-dark{
        width: 0; 
        height: 0;
        border-right: 120px solid transparent;
        border-top: 50px solid #1D3B70;
        border-left: 50px solid transparent;  
    }


    #e-light{
        width: 0; 
        height: 0;
        border-right: 120px solid transparent;
        border-bottom: 50px solid #1B4E9B;
        border-left: 50px solid transparent; 
    }

    .east{
        position: fixed;
        z-index: 11;
        margin-left: 168px;
    }


    #s-light{
        width: 0; 
        height: 0;
        border-top: 50px solid transparent;
        border-right: 50px solid #1B4E9B;
        border-bottom: 120px solid transparent;
    }


    #s-dark{
        width: 0; 
        height: 0;
        border-top: 50px solid transparent;
        border-left: 50px solid #1D3B70;
        border-bottom: 120px solid transparent;
    }

    .south{
        display: flex;
        position: fixed;
        z-index: 11;
        margin-top: 168px;
    }

    .RoseofWind{
        background-color: white;
        width: 150px;
        height: 150px;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 11;


        animation: rotation infinite linear;
        animation-duration: 2s;


        @keyframes rotation {

            10%{
                transform: rotate(52deg);
            }

            20%{
                transform: rotate(104deg);
            }

            30%{
                transform: rotate(156deg); 
            }

            40%{
                transform: rotate(208deg); 
            }

            50%{
                transform: rotate(260deg); 
            }

            60%{
                transform: rotate(312deg); 
            }

            70%{
                transform: rotate(360deg); 
            }


            70%, 100% {
                transform: translate3d( 0%, 0px, 0px);
            }

            
        }
    }


    @media (max-width: 600px){
        #n-light{   
            width: 0; 
            height: 0;
            border-top: 60px solid transparent;
            border-right: 25px solid #E9532F;
            border-bottom: 25px solid transparent;
        }

        #n-dark{
            width: 0; 
            height: 0;
            border-top: 60px solid transparent;
            border-left: 25px solid #DB4F2E;
            border-bottom: 25px solid transparent;
        }


        #s-light{
            width: 0; 
            height: 0;
            border-top: 25px solid transparent;
            border-right: 25px solid #1B4E9B;
            border-bottom: 60px solid transparent;
        }


        #s-dark{
            width: 0; 
            height: 0;
            border-top: 25px solid transparent;
            border-left: 25px solid #1D3B70;
            border-bottom: 60px solid transparent;
        }

        #w-light{
            width: 0; 
            height: 0;
            border-left: 60px solid transparent;
            border-bottom: 25px solid #1B4E9B;
            border-right: 25px solid transparent; 
        }


        #w-dark{
            width: 0; 
            height: 0;
            border-left: 60px solid transparent;
            border-top: 25px solid #1D3B70;
            border-right: 25px solid transparent; 
        }

        #e-dark{
            width: 0; 
            height: 0;
            border-right: 60px solid transparent;
            border-top: 25px solid #1D3B70;
            border-left: 25px solid transparent;  
        }


        #e-light{
            width: 0; 
            height: 0;
            border-right: 60px solid transparent;
            border-bottom: 25px solid #1B4E9B;
            border-left: 25px solid transparent; 
        }

        .north{
            display: flex;
            position: fixed;
            margin-bottom: 84px;
            z-index: 11;
        }

        .south{
            display: flex;
            position: fixed;
            z-index: 11;
            margin-top: 84px;
        }

        .east{
            position: fixed;
            z-index: 11;
            margin-left: 84px;
        }

        .west{
            position: fixed;
            z-index: 11;
            margin-right: 84px;
        }

        #wn-semicircle{
            width: 5em;
            height: 5em;  /* высота в два раза меньше ширины, иначе получится полуовал */
            border-left: 10px solid #66B9E8;
            border-top: 10px solid #66B9E8;
            border-radius: 10em 0 0 0;
            // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
            background: white;

            position: fixed;
            margin-right: 78px;
            margin-bottom: 78px;
            z-index: 10;

            animation: up-wn 2s infinite;

            @keyframes up-wn {
                40%{
                    transform: translate3d(-30px, -30px, 0)
                }

                95%{
                    transform: translateY(0px);
                }
            }
        }

        #ne-semicircle{
            width: 5em;
            height: 5em;  
            border-right: 10px solid #66B9E8;
            border-top: 10px solid #66B9E8;
            border-radius: 0 10em 0 0;
            // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
            background: white;

            position: fixed;
            margin-left: 78px;
            margin-bottom: 78px;
            z-index: 10;

            animation: up-ne 2s infinite;

            @keyframes up-ne {
                40%{
                    transform: translate3d(30px, -30px, 0)
                }

                95%{
                    transform: translateY(0px);
                }
            }
        }

        #es-semicircle{
            width: 5em;
            height: 5em;  
            border-right: 10px solid #66B9E8;
            border-bottom: 10px solid #66B9E8;
            border-radius: 0 0 10em 0;
            // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
            background: white;

            position: fixed;
            margin-left: 78px;
            margin-top: 78px;
            z-index: 10;

            animation: up-es 2s infinite;

            @keyframes up-es {
                40%{
                    transform: translate3d(30px, 30px, 0)
                }

                95%{
                    transform: translateY(0px);
                }
            }
        }


        #ws-semicircle{
            width: 5em;
            height: 5em;  
            border-left: 10px solid #66B9E8;
            border-bottom: 10px solid #66B9E8;
            border-radius: 0 0 0 10em;
            // border-radius: 50% 50% 0 0 / 100% 100% 0 0;  /* угол состоит из половины ширины (50% от 10em = 10em : 2 = 5em) и всей высоты (100% от 5em = 5em) */
            background: white;  

            position: fixed;
            margin-right: 78px;
            margin-top: 78px;
            z-index: 10;

            animation: up-ws 2s infinite;


            @keyframes up-ws {
                40%{
                    transform: translate3d(-30px, 30px, 0)
                }

                95%{
                    transform: translateY(0px);
                }
            }


        }

        

        .RoseofWind{
            width: 50px;
            height: 50px;
        }
    }


</style>
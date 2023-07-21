<template>
     <v-container>
        <v-btn @click="go_back"  variant="outlined" class="my-5">
            <v-icon icon="mdi-arrow-collapse-left" color="#2F5DA7" class="mr-2"></v-icon>на главную
        </v-btn>
        <div class="text-h3">Новости</div>
        <v-card class="my-5">
            <v-card-title class="mb-5">
                Параметры поиска
            </v-card-title>

            <v-card-text>
                <v-row>
                    <span class="text-h6 mr-15 ml-5 mt-4">Дата публикации с</span> <v-text-field variant="solo-filled" color="#2F5DA7" type="date"></v-text-field> <span class="text-h6 mx-15 mt-4">по</span> <v-text-field class="mr-3" variant="solo-filled" color="#2F5DA7" type="date"></v-text-field>
                </v-row>
                <v-text-field variant="solo-filled" color="#2F5DA7">Название содержит</v-text-field>
                <v-text-field variant="solo-filled" color="#2F5DA7">Текст содрежит</v-text-field>
                <v-checkbox color="#2F5DA7" label="Сначала важные"></v-checkbox>
            </v-card-text>
            <v-card-actions>
                <v-btn block variant="elevated" color="#2F5DA7"><span id="text-show-button">Показать</span></v-btn>
            </v-card-actions>
        </v-card>

        <template v-for="news in news_list">
            <v-hover>
                <template v-slot:default="{ isHovering, props }">
                    <v-card class="my-5" 
                        v-bind="props"
                        :color="isHovering ? '#2F5DA7' : undefined"

                    >
                        <v-card-text>
                            <v-row>
                                <div class="ml-5 my-5">
                                    <v-img :width="142" :height="142" aspect-ratio="4/3" cover :src="news.url"></v-img>
                                </div>
                                <v-col class="my-1">
                                    <div class="news-date">{{ news.date }}</div>
                                    <div class="news-name">{{ news.name }}</div>
                                    <div class="news-desciption">{{ news.desciption }}</div>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </template>
            </v-hover>
        </template>

     </v-container>
</template>

<script>
export default{

    data(){
        return{
            news_list: [
                {date: "10.07.2023", name: "Профессиональный горизонты", desciption: 'Специалисты Мончегорского кадрового центра провели тренинг "Твой выбор" для подростков, которые уже сейчас пробуют свои силы в труде', url: 'https://murman-zan.ru/image?file=/cms_data/usercontent/regionaleditor/%D0%BA%D0%BE%D0%BD%D0%B4%D1%80%D0%B0%D1%89%D0%B5%D0%BD%D0%BA%D0%BE/%D0%B8%D1%8E%D0%BB%D1%8C/photo_2023-07-11_12-30-58.jpg&theme=default'},
                {date: '07.07.2023', name: 'ОБУЧЕНИЕ – НА РЕЗУЛЬТАТ', desciption: 'Бесплатное обучение, освоение востребованной профессии, помощь в трудоустройстве, Прием заявлений открыт по 143 программам', url: 'https://murman-zan.ru/image?file=%2fcms_data%2fusercontent%2fregionaleditor%2f%d0%b4%d0%bb%d1%8f+%d0%bd%d0%be%d0%b2%d0%be%d1%81%d1%82%d0%b5%d0%b9%2f23%2fpo_news.png&width=140&height=140&crop=True&theme=default'},
                {date: '07.07.2023', name: 'В Никеле состоялось открытие смены трудового отряда школьников Кольской ГМК', desciption: 'При содействии Печенгского кадрового центра трудоустроено 15 учащихся в возрасте от 14 до 18 лет.', url: 'https://murman-zan.ru/image?file=%2fcms_data%2fusercontent%2fregionaleditor%2f%d0%b4%d0%bb%d1%8f+%d0%bd%d0%be%d0%b2%d0%be%d1%81%d1%82%d0%b5%d0%b9%2f23%2f%d0%bf%d0%b5%d1%87.-%d0%b3%d0%bc%d0%ba+%d1%84%d0%be%d1%82%d0%be.jpg&width=140&height=140&crop=True&theme=default'}
            ]
        }
    },
    methods: {
        go_back(){
            this.$router.push({name: 'TestHome_1'})
        },

        get_start(){
            window.scrollTo({ top: 0, behavior: 'smooth'})
        }
    },

    mounted(){
        this.get_start()
    }
}
</script>

<style>
#text-show-button{
    color: white
}

.news-date{
    font-size: 16px;
    margin-bottom: 5px;
}

.news-name{
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 10px;
    color: #194996
}

.news-desciption{
    font-size: 16px;
    color: gray;
    margin-top: 10px;
}
</style>

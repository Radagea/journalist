<template>
    <journal-title :journalData="journalData" ></journal-title>
    <journal-menu></journal-menu>
    <journal-profile-home></journal-profile-home>
</template>

<script>
import JournalTitle from './JournalTitle.vue';
import JournalMenu from './JournalMenu.vue';
import JournalProfileHome from './JournalProfileHome.vue';

export default {
    emits: ["openArticlesPopup"],
    created() {
        fetch(this.$linkToAPI+'journals/read_one.php?id='+this.$route.params.id).then((response) => {
            if(response.ok) {
                return response.json();
            }
        }).then((data) => {
            this.journalData = {
                id: data.id,
                title: data.name,
                language: data.language,
                shortDesc: data.shortDesc,
                lastArticle: data.lastArticle,
                startDate: data.startDate,
                imgURL: data.imgUrl,
                articleNumber: data.articleNumber
            }
        });
    },
    components: {
        JournalTitle,
        JournalMenu,
        JournalProfileHome
    },
    data() {
        return {
            journalData: {}
        };
    }
}
</script>

<style scoped>
    
</style>
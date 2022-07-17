<template>
    <select>
        <option v-for="country in countries" :key="country.code" :value="country.code">{{country.name}}</option>
    </select>
</template>

<script>
export default {
    created() {
        this.fetchCountries();
    },
    data() {
        return {
            countries: [ 
                {
                code: "loading",
                name: "loading"
                }
            ]
        }
    },
    methods: {
        async fetchCountries() {
            const link = "https://restcountries.com/v3.1/all";
            const response = await fetch(link);
            const responseData = await response.json();
            const len = responseData.length;
            const results = [];
            for (let i = 0; i < len; i++) {
                results.push({
                    code: responseData[i].name.common,
                    name: responseData[i].name.common
                });
            }
            results.sort(function(a,b) {
                var nameA = a.name.toUpperCase();
                var nameB = b.name.toUpperCase();

                return (nameA < nameB) ?  -1 : (nameA > nameB) ? 1 : 0;
            });
            this.countries = results;
        }
    }
}
</script>

<style>

</style>
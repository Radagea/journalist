<template>
    <section class="fo">
        <div class="wrapper">
            <p @click="setToBold">Set to bold</p>
            <div class="editor" contentEditable="true" @input="thisText" v-html="thisText">
            </div>
            <div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            thisText: 'asdasd',
        };
    },
    methods: {
        setToBold() {
            const strongElement = document.createElement("strong");
            const userSelection = window.getSelection();
            const selectedTextRange = userSelection.getRangeAt(0);
            selectedTextRange.surroundContents(strongElement);
        },
        // onInput(event) {
            
        // }
    }
}
</script>

<style scoped>
    section.fo {
        width: 100%;
        background-color: white;
        overflow: hidden;
    }
    .wrapper {
        width: 90%;
        max-width: 1400px;
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
        margin-right: auto;
        margin-left: auto;
    }
    .editor {
        width: 800px;
        height: 400px;
        margin: 0 auto;
        border: 1px solid #ccc;
        padding: 10px;
    }
</style>
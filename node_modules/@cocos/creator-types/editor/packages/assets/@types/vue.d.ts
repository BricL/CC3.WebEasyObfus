// 因为外围使用了 'vue/dist/vue.js' 否则不需要此声明文件 

declare module 'vue/dist/vue.js' {
    import Vue from 'vue';
    export * from 'vue';
    export default Vue;
}
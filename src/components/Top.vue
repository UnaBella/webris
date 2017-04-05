<template>
    <div>
        <brand :data="brandData"></brand>
    </div>
</template>

<script>
    import Brand from './Brand.vue';
    export default {
        data(){
            return {
                /*
                 * url:图片路径
                 * title1:中文名
                 * title2:英文名
                 * */
                brandData: {
                    url: '../static/img/logo.png',
                    title1: '岱江Saas影像诊断平台',
                    title2: 'Daijiang Saas image diagnosis platform'
                }
            }
        },
        components: {
            Brand
        }
    };
</script>

<style lang="less" scoped>

</style>

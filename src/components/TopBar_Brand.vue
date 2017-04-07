<template>
    <div class="brand">
        <div class="brand-logo">
            <img src="../assets/images/logo.png"
                 alt="logo">
        </div>
        <div class="brand-name">
            <h2>{{data.name1}}</h2>
            <h2>{{data.name2}}</h2>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['data']
    }
</script>

<style lang="less" scoped>
    @import "../assets/stylesheets/base01.less";

    .brand {
        display: inline-block;
        height: 34px;
        .brand-logo {
            height: 34px;
            margin-right: 10px;
            float: left;
            img {
                height: 100%;
            }
        }
        .brand-name {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            height: 34px;
            h2 {
                &:nth-of-type(1) {
                    font-size: 1.6rem;
                }
                &:nth-of-type(2) {
                    font-family: "Arial";
                    font-size: 1.4rem;
                    color: @fcbase;
                }
            }
        }
    }
</style>

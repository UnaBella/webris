<template>
    <div class="account-container">
        <!--用户名展示-->
        <div class="account-showing">
            <i class="iconfont icon-user"></i>
            <span>{{data.name}}</span>
            <i class="icon-angle-down arrow"></i>
        </div>
        <!--下拉菜单-->
        <div class="account-dropmenu">
            <ul>
                <li v-for="m in data.menus ">
                    <a href="#">{{m.text}}</a>
                </li>
            </ul>
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

    .account-container {
        display: inline-block;
        position: relative;
        cursor: pointer;
        &:hover {
            .account-dropmenu {
                display: block;
            }
            .arrow {
                transform: rotate(180deg);
            }
        }
    }

    .account-showing {
        span {
            color: @basec1;
            margin: 0 6px 0 10px;
        }
        .arrow {
            display: inline-block;
            transition: 0.2s;
        }
    }

    .account-dropmenu {
        position: absolute;
        display: none;
        width: 106px;
        /*left: ~"calc(50% - 53px)";*/
        right: 0;
        padding-top: 10px;
        z-index: 99;
        ul {
            border: 1px solid @basec1;
            border-radius: @borradius1;
            background-color: @bgc-td;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
            li {
                height: 36px;
                line-height: 36px;
                padding: 0 10px;
                text-align: right;
                border-bottom: 1px solid @borc-secsplit;
                &:last-child {
                    border: none;
                }
                &:hover {
                    background-color: @basec1;
                    a {
                        color: @fc6;
                    }
                }
            }
        }
    }

</style>

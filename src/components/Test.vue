<template>
    <div class="container">
        <!--按钮-->
        <button class="btn">default</button>
        <button class="btn"
                disabled>disabled









        </button>
        <br>
        <br>
        <!--提示框-->
        <div class="popup">
            <div>
                <i class="iconfont icon-error"></i>
                <span>删除提示</span>
            </div>
            <div>
                <p>我是提示文本</p>
            </div>
            <div>
                <button class="btn-reverse">取消</button>
                <button class="btn">确定</button>
            </div>
        </div>
        <br>
        <!--提示气泡-->
        <div class="bubble">
            <p>我是提示信息</p>
        </div>
        <br>
        <!--表格-->
        <!--<div class="table">-->
        <!--<table>-->
        <!--<tr>-->
        <!--<th>1</th>-->
        <!--<th>2</th>-->
        <!--<th>3</th>-->
        <!--<th>4</th>-->
        <!--<th>5</th>-->
        <!--<th>6</th>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--<tr>-->
        <!--<td>1</td>-->
        <!--<td>2</td>-->
        <!--<td>3</td>-->
        <!--<td>4</td>-->
        <!--<td>5</td>-->
        <!--<td>6</td>-->
        <!--</tr>-->
        <!--</table>-->
        <!--</div>-->
        <!--label输入框-->
        <div class="input">
            <label>
                <span>常规：</span>
                <div>
                    <input type="text" value="test"/>
                </div>
            </label>
        </div>
        <br>
        <div class="input">
            <label>
                <span>禁用：</span>
                <div>
                    <input disabled type="text" value="test"/>
                </div>
            </label>
        </div>
        <br>
        <div class="input required">
            <label>
                <span>必填：</span>
                <div>
                    <input required type="text" value="test"/>
                </div>
            </label>
        </div>
    </div>
</template>

<script>
    import '../assets/libs/jquery1.91.min.js'

    export default {
        data() {
            return {}
        },
        props: [],
        components: {},
    }
</script>
<style lang="less" scoped>
    @import "../assets/stylesheets/base01.less";
    @import "../assets/stylesheets/element.less";

    .container {
        min-height: 100vh;
        padding: 20px;
        background-color: #fff;
    }
</style>

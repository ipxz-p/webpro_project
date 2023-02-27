<template>
    <div>

        <nav class="bg-mypurple-400">
            <labell for="" class="text-2xl logo">Seravabi</labell>
            <ul>
                <li>icon 10/15</li>
                <li></li>
                <li><a href="#">Exit</a></li>
                
            </ul>
        </nav>
    </div>
</template>



<script>
export default {
    name: 'NavGame',
    data(){
        return {
            score: 0
        }
    }
}
</script>


<style scoped>
*{
    padding: 0;
    margin: 0;
    text-decoration: none;
    list-style: none;
    box-sizing: border-box;
}
nav{
    height: 80px;
    width: 100%;
}
labell.logo{
    line-height: 80px;
    padding: 0 50px;
    color: #fff;
}
nav ul{
    float: right;
    margin-right: 60px;
}
nav ul li{
    display: inline-block;
    line-height: 80px;
    margin: 0 50px;
}
nav ul li a{
    color: white;
}
</style>
## 第一天
#### git命令
1. 拉取远端代码：git pull
2. 查看状态 : git status
3. 添加 git add .
4. 暂存：git commit -m'介绍'
5. 提交： git push 

### 事件代理/事件委托
##### delegate() 方法为指定的元素（属于被选元素的子元素）添加一个或多个事件处理程序，并规定当这些事件发生时运行的函数。使用 delegate() 方法的事件处理程序适用于当前或未来的元素（比如由脚本创建的新元素）。

``` js
//原生的JS写法
 var ul=document.getElementsByClassName('class-list')[0];
    ul.addEventListener('click',function(e){
         if(e.target && e.target.nodeName.toUpperCase=='LI'){
             //target指向事件发生时的元素;nodeName指定节点的节点名称;toUpperCase() 方法用于把字符串转换为大写。
            console.log("li被点击了")
            }
        })

// JQ的写法 
    $(father).delegate('children','event'，function(){
        //event事件
    })

```

#### 本地存储
- 使用localstorage.setItem(name,value)存储JSON对象时会发现浏览器存储的内容为[object,object]
- 则JSON.stringify(object)进行类型转换，转换成JSON字符串后进行存储就会是我们想要的样子了。
- 因为stringify保存的是字符串类型，取出需要用到 ：parse（将字符串转换成数字）



        var stuStr=JSON.stringify(studentArr);
        localStorage.setItem('stuInfo',stuStr);

        JSON.parse(localStorage.getItem('stuInfo')//转换


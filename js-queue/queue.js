//队列类
function Queue (){
    this.dataSource=[];
    this.enqueue=enqueue;
    this.dequeue=dequeue;
    this.front=front;
    this.back=back;
    this.toString=toString;
    this.empty=empty;
}
//向对尾添加元素
function enqueue(element){
    this.dataSource.push(element);
}
//删除队首元素
function dequeue(){
    return this.dataSource.shift();
}
//返回队首元素
function front (){
    return this.dataSource[0];
}
//返回队尾元素
function back (){
    return this.dataSource[this.dataSource.length-1];
}
//将所有元素转化为字符串
function toString(){
    var str='';
    for(var i=0;i<this.dataSource.length;i++){
        str+=this.dataSource+"\n";
    }
    return str;
}
//判断队列是否为空
function empty(){
    if(this.dataSource.length==0){
        return true;
    }else{
        return false;
    }
}

var people=[
    {
        name:'frank',
        sex:'man',
    },{
        name:'rose',
        sex:'woman',
    },{
        name:'even',
        sex:'man',
    },{
        name:'xiaowang',
        sex:'man',
    },{
        name:'xiaoliu',
        sex:'man',
    },{
        name:'xiaohua',
        sex:'woman',
    },{
        name:'xiaoqiang',
        sex:'man',
    },{
        name:'xiaoli',
        sex:'woman',
    },{
        name:'xiaomei',
        sex:'woman',
    }
];
function Dencer(name,sex){
    this.name=name;
    this.sex=sex;
}
function getManDencer(){
    var man=new Queue();
    var woman=new Queue();
    for(var i=0;i<people.length;i++){
        if(people[i].sex=='man'){
            var manDencer=new Dencer(people[i].name,people[i].sex);
            man.enqueue(manDencer);
        }else{
            var womanDencer=new Dencer(people[i].name,people[i].sex);
            woman.enqueue(womanDencer);
        }
    }
    dancer(man,woman);
}
function dancer(man,woman){
    while (!man.empty() && !woman.empty()){
        manPeople=man.dequeue();
        womanPeople=woman.dequeue();
        console.log(manPeople.name+">>>>>>>>>>>>>>"+womanPeople.name);
    };
}
getManDencer()

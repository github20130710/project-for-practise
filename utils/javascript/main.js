/**
 * 队列结构
 * 先进先出
 */


/**
 * 栈结构
 * 先进后出
 */
function Stack(){
  this.data = [];
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.isEmpty = isEmpty;
  this.clear = clear;     //清空栈
  this.size = size;

  function push(ele) {
    this.data.push(ele);
  }  

  //pop() 方法将删除 arrayObject 的最后一个元素，把数组长度减 1，并且返回它删除的元素的值。
  //如果数组已经为空，则 pop() 不改变数组，并返回 undefined 值。
  function pop(){
    return this.data.pop();
  }

  function peek(){
    return this.data[this.data.length - 1];
  }

  function isEmpty(){
    return this.data.length == 0;
  }

  function clear(){
    this.data = [];
  }

  function size(){
    return this.data.length;
  }
}

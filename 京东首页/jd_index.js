/*封装$*/
//window.$=HTMLElement.prototype.$=function(selector){
    //var elems=(this==window?document:this)
        //.querySelectorAll(selector);
    //return elems.length==0?null:elems.length==1?elems[0]:elems;
//}
/*广告图片数组*/
var imgs=[
	{"i":0,"img":"images/index/banner_01.jpg"},
    {"i":1,"img":"images/index/banner_02.jpg"},
    {"i":2,"img":"images/index/banner_03.jpg"},
    {"i":3,"img":"images/index/banner_04.jpg"},
    {"i":4,"img":"images/index/banner_05.jpg"},
];
var adv={
  LIWIDTH:0,//每个li的宽度
  $ulImgs:null,//#imgs的ul
  interval:1000,
  WAIT:3000,
  timer:null,
  init(){
    this.LIWIDTH=parseFloat($("#slider").css("width"));
    this.$ulImgs=$("#imgs");
    this.updateView();
    $("#indexs").on("mouseover","li",(e)=>{
      var target=$("#indexs>li").index(e.target);
      var old=imgs[0].i;
      this.move(target-old);
    });
  },
  autoMove(){
    this.timer=setTimeout(()=>this.move(1),this.WAIT);
  },
  movePrev(n){
      n*=-1;
      imgs=imgs.splice(-n,n).concat(imgs)
      this.updateView();
      this.$ulImgs.css("left",parseFloat(this.$ulImgs.css("left"))-n*this.LIWIDTH);
  },
  move(n){
    if(n<0){
    this.movePrev(n);
    this.$ulImgs.stop(true);
    this.$ulImgs.animate({left:0},this.INTERVAL);}
    else{
      this.$ulImgs.stop(true);
      this.$ulImgs.animate({left:-n*this.LIWIDTH},this.INTERVAL,()=>this.moveLeftCallback(n));
    }
  },
  moveLeftCallback(n){
    imgs=imgs.concat(imgs.splice(0,n));
    this.updateView();
    this.$ulImgs.css("left",0);
  },
  updateView(){
    for (var i=0,lis="",idxs="";i<imgs.length;i++ ){
      lis+=`<li><img src='${imgs[i].img}'></li>`;
      idxs+="<li></li>";
    }
    this.$ulImgs.html(lis)
           .css("width",imgs.length*this.LIWIDTH);
    $("#indexs").html(idxs).children(`li:eq(${imgs[0].i})`).addClass("hover");
  }
}
var elevator(){
  
}
adv.init();

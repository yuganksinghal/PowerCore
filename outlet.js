'use strict'

function Outlet(label){
  this.name = label;
  this.switch = 0;
  this.previousState=null;
}
Outlet.prototype.turnOn=function(){
  this.switch=1;
}

Outlet.prototype.turnOff=function(){
  this.switch=0;
}

Outlet.prototype.autoPilot=function(){
  this.switch=2;
}

module.exports=Outlet;

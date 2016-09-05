function test() {
    var a;
   console.log(a);
   console.log(foo());
   a=4;
   function foo() {
      return 2;
   }
}

test();

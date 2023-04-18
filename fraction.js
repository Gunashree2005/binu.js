function input()
{
  let a=parsenInt(prompt("enter the number"));
  let b=parasenInt("enter the another number));
   return [a,b];
}
function sub(a,b)
{
  return a-b;
}
function output(a,b,c)
{
  console.log("%d - %d is %d",a,b,c);
}
function main()
{
  let a,b;
  [a,b]=input( );
  let c = sub(a,b)
  output(a,b,c);
}
main();

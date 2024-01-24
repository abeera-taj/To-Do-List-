let quoteArray = [
  {
    quote: `"Do not feel lonely, the entire universe is inside you."`,
    writer: `-RUMI`,
  },
  {
    quote: `"Our doubts are traitors, And make us lose the good we oft might win, By fearing to attempt."`,
    writer: `-WILLIAM SHAKESPEARE`,
  },
  {
    quote: `"When you want something, all the universe conspires in helping you to achieve it."`,
    writer: `-PAULO COELHO`,
  },
  {
    quote: `"Love never keeps a man from pursuing his destiny."`,
    writer: `-PAULO COELHO`,
  }, {
    quote: `"The disease of the heart is worse than the disease of the body."`,
    writer: `-HAZRAT ALI(A.S)`,
  }, {
    quote: `"The best portion of a good man's life: his little, nameless unremembered acts of kindness and love."`,
    writer: `-WILLIAM WORDSWORTH`,
  }, {
    quote: `"If you can dream—and not make dreams your master;   
    If you can think—and not make thoughts your aim;"`,
    writer: `-RUDYARD KIPLING`,
  }, {
    quote: `"By believing passionately in something that still does not exist, we create it. The nonexistent is whatever we have not sufficiently desired."`,
    writer: `-FRANZ KAFKA`,
  }
];

let quot=document.querySelector(".quote");
let writ= document.querySelector(".write");
let qButton=document.querySelector(".quotes-button");

qButton.addEventListener("click", function(){
    let q= Math.floor(Math.random()* quoteArray.length);
    quot.innerHTML=quoteArray[q].quote;
    writ.innerHTML=quoteArray[q].writer;

})

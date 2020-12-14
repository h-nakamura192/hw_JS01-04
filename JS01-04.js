let Arrays = [
{ name: '机を片付ける', jenre: '掃除'},
{ name: '牛乳を買う', jenre: '買い物'},
{ name: '散歩をする', jenre: '運動'}
];


const tasks = () =>{
  console.log("========================")
  console.log("現在持っているタスク一覧")
  console.log("========================")

  Arrays.forEach(function (Array, index) {
      console.log(index + " : [内容]" + Array.name + "、[ジャンル]" + Array.jenre);
    });

};
tasks();

for(let count = 0; count <= 5; count++){
  let answer1 = prompt("タスクを入力してください");
  let answer2 = prompt("ジャンルを入力してください");
  Arrays.push({
    name: answer1,
    jenre: answer2
  });
  alert('新しいタスクを追加しました');
  tasks();
}

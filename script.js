//your code here!
const container = document.getElementById('infi-list');
container.addEventListener('scroll',(e)=>{
	const remainingScroll = container.scrollHeight-container.clientHeight;
	const scrolledRemaining = remainingScroll-container.scrollTop;
// console.log(container.scrollHeight-container.clientHeight-container.scrollTop);
	if(scrolledRemaining<=2){
		itemGenerator(2);
	}
});
let itemCount = 1;
function itemGenerator(n){
	for(let i=1;i<=n;i++){
		const newItem = document.createElement('li');
		newItem.innerText = `Item ${itemCount++}`;
		container.append(newItem);
	}
}

itemGenerator(10);
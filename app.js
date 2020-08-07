/** @format */
const key = 'TwQTdVB-eq7Py2ldxR6BDl8OtHnctRSkrMEFb4F1qf8';

const addClassActionClass = (index) => {
	addClassBtn('menu-item', index);
};

const actionClick = () => {
	const item = document.querySelectorAll('li.menu-item');

	for (let i = 0; i < item.length; i++) {
		if (item[i].className.includes('active')) {
			item[i].classList.remove('active');
		} else {
			item[i].className += ' active';
		}
	}
};

const getImage = () => {
	let page = Math.round(Math.random() * (1 - 100) + 100);
	const url = `https://api.unsplash.com/photos?client_id=${key}&page=${page}`;
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((res) => {
			res.map((photo) => {
				let results = `
				<article>
					<img src="${photo.urls.regular}" />
				</article>
				`;
				return (document.getElementById('galery-grid-content').innerHTML += results);
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

const ReLoadImage = (topic, index) => {
	let page = Math.round(Math.random() * (1 - 100) + 100);
	addClassBtn('galery-nav--item', index);
	const url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${topic}&page=${page}`;
	document.getElementById('galery-grid-content').innerHTML = '';
	fetch(url)
		.then((response) => {
			return response.json();
		})
		.then((res) => {
			res.results.map((photo) => {
				let results = `
				<article>
					<img src="${photo.urls.regular}" />
				</article>
				`;
				return (document.getElementById('galery-grid-content').innerHTML += results);
			});
		})
		.catch((error) => {
			console.log(error);
		});
};

const addClassBtn = (where, index) => {
	let item = document.querySelectorAll(`li.${where}`);
	console.log(item);
	for (let i = 0; i < item.length; i++) {
		if (item[i].className.includes('btn-galery')) {
			item[i].classList.remove('btn-galery');
		} else {
			item[index].className += ' btn-galery';
		}
	}
};

getImage();
